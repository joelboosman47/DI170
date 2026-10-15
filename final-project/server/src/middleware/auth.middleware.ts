import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.js";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
	const token = req.cookies?.token;

	if (typeof token !== "string") {
		return res.status(401).json({ error: "Not logged in" });
	}

	try {
		const payload = verifyToken(token);
		req.user = { id: payload.userId };
		next();
	} catch {
		return res.status(401).json({ error: "Not logged in" });
	}
}

declare global {
	namespace Express {
		interface Request {
			user?: { id: number };
		}
	}
}