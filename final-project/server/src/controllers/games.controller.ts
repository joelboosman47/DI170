import type { Request, Response } from "express";
import { createInsertSchema } from "drizzle-zod";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "../db/connection.js";
import { games } from "../db/schema.js";

const createGameBody = createInsertSchema(games)
	.omit({ id: true, userId: true, playedAt: true })
	.extend({
		result: z.enum(["win", "loss", "draw"]),
		movesCount: z.number().int().positive(),
		durationSeconds: z.number().int().positive().optional(),
	});

export function createGame(req: Request, res: Response) {
	const userId = req.user?.id;
	if (userId === undefined) {
		return res.status(401).json({ error: "Not logged in" });
	}

	const parsed = createGameBody.safeParse(req.body);
	if (!parsed.success) {
		return res.status(400).json({ error: "Invalid input" });
	}

	const { result, movesCount, durationSeconds } = parsed.data;

	const game = db
		.insert(games)
		.values({
			userId,
			result,
			movesCount,
			durationSeconds,
		})
		.returning()
		.get();

	return res.status(201).json(game);
}

export function listMyGames(req: Request, res: Response) {
	const userId = req.user?.id;
	if (userId === undefined) {
		return res.status(401).json({ error: "Not logged in" });
	}

	const rows = db
		.select()
		.from(games)
		.where(eq(games.userId, userId))
		.orderBy(desc(games.playedAt))
		.all();

	return res.status(200).json(rows);
}
