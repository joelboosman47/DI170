import type { Request, Response } from "express";
import { count, desc, eq, sql } from "drizzle-orm";
import { db } from "../db/connection.js";
import { games, users } from "../db/schema.js";

export function getLeaderboard(_req: Request, res: Response) {
	const rows = db
		.select({
			userId: users.id,
			username: users.username,
			wins: sql<number>`sum(case when ${games.result} = 'win' then 1 else 0 end)`,
			losses: sql<number>`sum(case when ${games.result} = 'loss' then 1 else 0 end)`,
			draws: sql<number>`sum(case when ${games.result} = 'draw' then 1 else 0 end)`,
			lastPlayedAt: sql<string>`max(${games.playedAt})`,
			gameCount: count(games.id),
		})
		.from(games)
		.innerJoin(users, eq(games.userId, users.id))
		.groupBy(users.id, users.username)
		.orderBy(
			desc(sql`sum(case when ${games.result} = 'win' then 1 else 0 end)`),
			sql`sum(case when ${games.result} = 'loss' then 1 else 0 end)`, // fewest losses first
			sql`sum(case when ${games.result} = 'draw' then 1 else 0 end)`, // fewest draws first
			sql`max(${games.playedAt})`, // earlier last game first
		)
		.limit(5)
		.all();

	return res.status(200).json(rows);
}
