import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import Database from "better-sqlite3";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { db } from "../db/connection.js";
import { users } from "../db/schema.js";
import { signToken } from "../utils/jwt.js";

function isUniqueConstraintError(error: unknown): boolean {
	return (
		error instanceof Database.SqliteError &&
		error.code === "SQLITE_CONSTRAINT_UNIQUE"
	);
}

const registerBody = createInsertSchema(users)
	.omit({ id: true, passwordHash: true, createdAt: true })
	.extend({ password: z.string().min(8) });

export async function register(req: Request, res: Response) {
	const parsed = registerBody.safeParse(req.body);
	if (!parsed.success) {
		return res.status(400).json({ error: "Invalid input" });
	}

	const { username, email, password } = parsed.data;
	const passwordHash = await bcrypt.hash(password, 10);

	try {
		const user = db
			.insert(users)
			.values({ username, email, passwordHash })
			.returning()
			.get();

		res.cookie("token", signToken(user.id), {
			httpOnly: true,
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
			path: "/",
		});

		return res.status(201).json({
			id: user.id,
			username: user.username,
			email: user.email,
		});
	} catch (error) {
		if (isUniqueConstraintError(error)) {
			return res.status(409).json({
				error: "Username or email already taken",
			});
		}
		throw error;
	}
}
