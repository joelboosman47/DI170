import { sql } from "drizzle-orm";
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
	userId: integer("user_id")
		.notNull()
		.references(() => users.id),
	result: text("result", { enum: ["win", "loss", "draw"] }).notNull(),
	movesCount: integer("moves_count").notNull(),
	durationSeconds: integer("duration_seconds"),
	playedAt: text("played_at").default(sql`CURRENT_TIMESTAMP`),
});
