import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import gamesRoutes from "./routes/games.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";
import { errorHandler, notFound } from "./middleware/error.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/games", gamesRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

app.get("/health", (_req, res) => {
	res.status(200).json({ status: "OK" });
});

app.use(notFound); // no route matched
app.use(errorHandler); // something threw

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
