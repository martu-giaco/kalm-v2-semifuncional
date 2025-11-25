import express from "express";
import { createRutina, getUserRutinas } from "../controllers/reviewController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/", requireAuth, createRutina);
router.get("/:userId", getUserRutinas);
router.put("/rutinas/:id", updateRutina);

export default router;
