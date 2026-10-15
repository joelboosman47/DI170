import { Router } from "express";
import { me } from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router: Router = Router();

router.get("/me", requireAuth, me);

export default router;