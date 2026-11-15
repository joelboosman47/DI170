import { Router } from "express";
import { createGame, listMyGames } from "../controllers/games.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router: Router = Router();

router.post("/", requireAuth, createGame);
router.get("/me", requireAuth, listMyGames);

export default router;