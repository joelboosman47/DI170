# Tic-Tac-Toe Full-Stack Project — Technical Plan

**Stack:** Node.js + Express (backend) · React + TypeScript + MUI (frontend) · SQLite + Drizzle ORM (database)
**Package manager:** pnpm (both `server/` and `client/`)
**Mode:** Single-player only for v1 (vs. a simple client-side AI later)
**Purpose:** Bootcamp learning project — you write the code, Cursor assists/reviews, doesn't generate it wholesale.

---

## 0. How to use this plan with Cursor

Treat this file as your source of truth, not Cursor. Suggested workflow per task:

1. Read the task description below.
2. Try to write the code yourself first, even badly.
3. Ask Cursor to **review**, **explain a concept**, or **debug** — not to "implement X."
4. Use the `.cursorrules` file (provided separately) so Cursor's default behavior nudges toward teaching.

Good prompts to give Cursor:
- "Explain what a JWT is and why we'd store it in an httpOnly cookie vs localStorage."
- "Here's my Express route, can you point out bugs without rewriting it?"
- "I'm stuck on this SQL query, what's wrong with my JOIN?"
- "Quiz me on how bcrypt salting works before I move on."

Bad prompts (avoid these — they skip the learning):
- "Build the auth system for me."
- "Write the React component for the game board."

---

## 1. Architecture Overview

```
┌─────────────────────┐        HTTPS/JSON        ┌──────────────────────┐
│   React + TS + MUI   │ ───────────────────────► │  Express API Server   │
│   (Vite dev server)  │ ◄─────────────────────── │   (Node.js)           │
└─────────────────────┘                           └───────────┬──────────┘
                                                                │
                                                                ▼
                                                       ┌──────────────────┐
                                                       │  SQLite Database  │
                                                       │  (better-sqlite3) │
                                                       └──────────────────┘
```

Two separate apps in one repo (monorepo, no shared build step needed):

```
tic-tac-toe/
├── server/                 # Express API
│   ├── src/
│   │   ├── db/
│   │   │   ├── schema.sql
│   │   │   └── connection.ts
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── scores.routes.ts
│   │   │   └── leaderboard.routes.ts
│   │   ├── middleware/
│   │   │   └── auth.middleware.ts
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   └── scores.controller.ts
│   │   ├── utils/
│   │   │   └── jwt.ts
│   │   └── index.ts
│   ├── package.json
│   └── .env
├── client/                 # React app
│   ├── src/
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   ├── GamePage.tsx
│   │   │   └── LeaderboardPage.tsx
│   │   ├── components/
│   │   │   ├── Board.tsx
│   │   │   ├── Square.tsx
│   │   │   └── NavBar.tsx
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── api/
│   │   │   └── client.ts
│   │   ├── theme.ts         # MUI theme customization
│   │   └── App.tsx
│   └── package.json
└── README.md
```

---

## 2. Database Layer: Drizzle ORM + SQLite

**Decision: use [Drizzle ORM](https://orm.drizzle.team/) over raw SQL or Prisma.** Reasoning, since you asked for "what's actually used in production" rather than the most educational option:

- It's SQL-first — your schema is TypeScript that maps closely to SQL, and queries read like SQL (`db.select().from(users).where(...)`), so you still learn real query semantics, just with type safety and autocomplete instead of hand-written strings.
- It's become the default choice for new TypeScript backend projects as of 2026 (T3 Stack community has largely moved to it, used in production at Figma, Sentry, Replit, and others), while remaining fully supported for traditional Node servers, not just edge/serverless.
- Migrations are generated from your schema (`drizzle-kit generate` + `drizzle-kit migrate`), which is the standard modern workflow — no more manually writing `ALTER TABLE` by hand or letting schema drift between environments.
- It pairs directly with `better-sqlite3` as the underlying driver, so nothing else in the plan changes.

(Prisma is the other legitimate modern choice — more "magic," a faster on-ramp, and arguably better docs for beginners — but Drizzle keeps you closer to real SQL semantics while still being what a lot of production teams reach for today. If you find Drizzle's setup friction annoying in practice, switching to Prisma later is a reasonable pivot and won't be a wrong call either.)

### Schema (Drizzle syntax, SQLite dialect)

Design the shape yourself first — what columns, what relationships — then translate to this:

```ts
// server/src/db/schema.ts
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").unique().notNull(),
  email: text("email").unique().notNull(),
  passwordHash: text("password_hash").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const games = sqliteTable("games", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id),
  result: text("result", { enum: ["win", "loss", "draw"] }).notNull(),
  movesCount: integer("moves_count").notNull(),
  durationSeconds: integer("duration_seconds"),
  playedAt: text("played_at").default(sql`CURRENT_TIMESTAMP`),
});
```

**Decision: store only final game results** (result, move count, duration, timestamp) — not every move. That keeps the schema simple and matches what the leaderboard and history views need. Reconstructing a full replay is out of scope for v1.

**Decision: compute leaderboard stats live** with aggregation queries over `games` (`GROUP BY user_id`, `sum`/`count` via Drizzle's query builder). No denormalized `leaderboard_stats` table. For this project's scale, live aggregation is fine and avoids keeping a second table in sync on every write.

Setup pieces to work through yourself (ask Cursor to explain each, not generate them):
1. `drizzle.config.ts` pointing at your schema file and SQLite file path.
2. A `db/connection.ts` that creates the `better-sqlite3` instance and wraps it with `drizzle()`.
3. Running `drizzle-kit generate` to produce your first migration, then `drizzle-kit migrate` to apply it.

**Learning checkpoint before moving on:** be able to explain why `passwordHash` and never a plain `password` column, why `userId` is a foreign key referencing `users.id`, and how your live leaderboard aggregation query works (what it groups/counts/orders).

---

## 3. API Design

Design REST endpoints yourself first — try writing the list before reading this.

| Method | Route | Auth? | Purpose |
|---|---|---|---|
| POST | `/api/auth/register` | No | Create user, hash password |
| POST | `/api/auth/login` | No | Verify credentials, issue JWT |
| POST | `/api/auth/logout` | Yes | Clear httpOnly auth cookie |
| GET | `/api/users/me` | Yes | Get current user profile |
| POST | `/api/games` | Yes | Record a finished game result |
| GET | `/api/games/me` | Yes | Get current user's game history (final results only) |
| GET | `/api/leaderboard` | No | Global leaderboard (live aggregation over `games`) |

Auth pattern to research and implement yourself:
1. Register: validate input with **drizzle-zod** (schemas derived from your Drizzle tables) → hash password with bcrypt (10-12 salt rounds) → insert user → set JWT in an **httpOnly** cookie.
2. Login: find user by email/username → `bcrypt.compare` → set JWT in an httpOnly cookie.
3. Logout: clear the auth cookie.
4. Protected routes: Express middleware reads the JWT from the httpOnly cookie, verifies with `jsonwebtoken`, attaches `req.user`.

**Decision: JWT in httpOnly cookies** (not localStorage). Safer against XSS because JS can't read the token. You'll need CORS configured with `credentials: true` on the server and `credentials: 'include'` on fetch/axios from the client. Be able to explain why this is preferred over localStorage.

---

## 4. Backend Build Order (suggested milestones)

Work top to bottom. Don't skip ahead — each step should run and be testable (e.g., via `curl` or Postman/Thunder Client) before the next.

1. **Scaffold**: `pnpm init`, Express server that responds to `GET /health`.
2. **DB connection**: wire up `better-sqlite3` + Drizzle, run `drizzle-kit generate`/`migrate`, confirm tables exist (Drizzle Studio — `drizzle-kit studio` — is a handy GUI for checking this visually).
3. **Register endpoint**: drizzle-zod validation → hash → insert → set httpOnly JWT cookie → return user (no password).
4. **Login endpoint**: verify credentials → set httpOnly JWT cookie.
5. **Auth middleware**: protect a test route, confirm 401 without cookie, 200 with valid cookie; logout clears the cookie.
6. **Games endpoint**: POST to record a finished game result tied to `req.user.id` (final result only).
7. **Leaderboard endpoint**: live SQL aggregation over `games` (`GROUP BY user_id`, `ORDER BY wins DESC`).
8. **Error handling**: consistent JSON error shape; keep using drizzle-zod on mutating endpoints.

Ask Cursor to **explain**, not write, when you hit: SQL JOIN syntax, JWT signing options (expiry, algorithm), httpOnly cookie + CORS/`credentials` setup, bcrypt rounds tradeoffs, Express middleware chaining.

---

## 5. Frontend Build Order

1. **Scaffold**: `pnpm create vite@latest client -- --template react-ts`, install MUI with pnpm (`@mui/material @emotion/react @emotion/styled @mui/icons-material`).
2. **Theme setup**: create `theme.ts` using MUI's `createTheme()` — set a custom **primary** and **secondary** palette color (about 5 minutes; enough for a meaningful visual identity) and leave the rest on MUI defaults. Typography/`components` overrides are optional polish if you have time near the end — not core learning time.
3. **Routing**: `react-router-dom` with routes for `/login`, `/register`, `/game`, `/leaderboard`. Wrap protected routes in a route guard that checks auth context.
4. **AuthContext**: React Context + `useReducer` or `useState` to hold current user (JWT lives in the httpOnly cookie, not in JS state), with `login()`, `logout()`, `register()` functions calling your API with `credentials: 'include'`.
5. **Login/Register pages**: MUI `TextField`, `Button`, `Alert` for errors, `Card`/`Paper` for layout. This is where form validation logic is good practice — write it yourself before reaching for a library like `react-hook-form`.
6. **Game board**: `Board` component holding 3x3 state (`Array<'X'|'O'|null>`), `Square` as a controlled child. Implement win-detection logic yourself — classic exercise, don't let Cursor write it.
7. **Post-game**: on win/loss/draw, POST final result to `/api/games`, show result in a MUI `Dialog` or `Snackbar`.
8. **Leaderboard page**: MUI `Table`/`DataGrid` (basic `Table` is fine for v1) fetching `/api/leaderboard` (server computes stats live).
9. **NavBar**: MUI `AppBar` + `Toolbar`, shows login state, links to pages.

**Next-version (not v1):**
- Light/dark mode toggle via MUI's color schemes / `ThemeProvider`.
- **Admin dashboard** — role-gated UI to manage users and inspect global game statistics (see Section 8a).

**Learning checkpoint:** before wiring the board to the API, be able to explain your win-detection algorithm out loud (checking rows/cols/diagonals) without looking at your code.

---

## 6. Auth Flow Diagram (for your own understanding)

```
Register/Login
     │
     ▼
Client sends credentials → Server validates (drizzle-zod) → Server issues JWT
     │
     ▼
Server sets JWT in httpOnly cookie (client JS cannot read it)
     │
     ▼
Browser sends cookie automatically on future requests (credentials: 'include')
     │
     ▼
Server middleware verifies JWT from cookie on protected routes → attaches req.user
```

---

## 7. Stretch Goal: AI Opponent

Once core gameplay + persistence works end-to-end, add a computer player. **Decision: entirely client-side** — no `/api/ai-move` endpoint.

- **Easy**: random valid move.
- **Medium**: minimax algorithm (classic CS exercise — great to implement by hand, don't let Cursor generate it; ask it to explain the recursion instead).
- **Hard/optional**: minimax with alpha-beta pruning, or swap in an actual LLM call (Claude API) for "AI personality" moves — probably overkill for tic-tac-toe but could be a fun extension for bootcamp presentation purposes.

---

## 8. Suggested Order of Attack (end to end)

1. Backend scaffold + DB + health check
2. Auth (register/login/middleware) — test with Postman/Thunder Client, no frontend yet
3. Frontend scaffold + MUI theme + routing shell
4. Login/Register pages wired to real API
5. Game board (pure frontend logic first, no API)
6. Wire game results to backend
7. Leaderboard page
8. Polish: loading states, error handling, responsive layout; optional MUI typography/`components` theme overrides if time allows
9. Stretch: client-side AI opponent
10. Next version (UI): light/dark mode toggle
11. Next version: admin dashboard (users + global stats)

---

## 8a. Next version: Admin dashboard

Out of scope for v1 — plan after auth, games, and leaderboard are solid. Rough shape:

**Auth / roles**
- Add a `role` on `users` (e.g. `"user"` | `"admin"`) — default `"user"`.
- Admin-only Express middleware (checks `req.user.role === "admin"`) on `/api/admin/*` routes.
- Frontend: `/admin` route guarded so only admins see it (NavBar link only when admin).

**Capabilities (suggested)**
- List / search users; view a user’s profile and their game history.
- Soft-delete or deactivate a user (prefer deactivate over hard-delete for learning safety).
- Global game statistics: total games, win/loss/draw rates, games over time, top players (reuse live aggregation patterns from the public leaderboard).
- Optional: edit a user’s role (promote/demote admin) — be careful with locking yourself out.

**UI**
- Dedicated `AdminPage` (or nested admin routes) using MUI `Table` / filters — same stack as the rest of the app; no separate admin framework needed for this project size.

---

## 9. Locked decisions (summary)

| Topic | Decision |
|---|---|
| Package manager | **pnpm** for both apps |
| JWT storage | **httpOnly cookies** (+ CORS `credentials`) |
| Input validation | **drizzle-zod** (schema-derived) |
| Game history | **Final results only** (no per-move storage) |
| Leaderboard | **Live aggregation** over `games` (no denormalized stats table) |
| AI opponent | **Entirely client-side** |
| MUI theme (v1) | Custom **primary + secondary** only; deeper overrides = end polish |
| Light/dark mode | **Next-version UI** — not in v1 scope |
| Admin dashboard | **Next version** — role-gated user management + global game stats |

Things still worth researching yourself (so you can explain them in review):
- Why httpOnly cookies beat localStorage for JWTs (XSS), and what CORS/`credentials` gotchas look like.
- How drizzle-zod derives Zod schemas from your Drizzle tables and where validation runs (route vs controller).
- Why live leaderboard aggregation is fine at this scale, and when you'd reconsider denormalization.
