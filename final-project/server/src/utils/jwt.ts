import jwt from "jsonwebtoken";
import "dotenv/config";

export type AuthTokenPayload = {
	userId: number;
};

const secretFromEnv = process.env.JWT_SECRET;
if (!secretFromEnv) {
	throw new Error("JWT_SECRET is not set");
}
const secret: string = secretFromEnv;

const expiresIn = process.env.JWT_EXPIRES_IN ?? "7d";

export function signToken(userId: number): string {
	return jwt.sign({ userId }, secret, {
		expiresIn: expiresIn as jwt.SignOptions["expiresIn"],
	});
}
export function verifyToken(token: string): AuthTokenPayload {
	const decoded = jwt.verify(token, secret) as unknown as AuthTokenPayload;
	return decoded;
}
