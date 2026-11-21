import type { NextFunction, Request, Response } from "express";

export function notFound(_req: Request, res: Response) {
	res.status(404).json({ error: "Not found" });
}

export function errorHandler(
	err: unknown,
	_req: Request,
	res: Response,
	_next: NextFunction,
) {
	console.error(err);

	const status =
		typeof err === "object" &&
		err !== null &&
		"status" in err &&
		typeof err.status === "number"
			? err.status
			: 500;

	const message =
		err instanceof Error && err.message
			? err.message
			: "Internal server error";

	// In production, don't leak internal Error messages for 500s
	const safeMessage =
		status >= 500 && process.env.NODE_ENV === "production"
			? "Internal server error"
			: message;

	res.status(status).json({ error: safeMessage });
}