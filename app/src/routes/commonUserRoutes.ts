import { Router } from "express";
import { CommonUserController } from "../controllers/index.js";


const router = Router();

router
	.post("/api/common-users", CommonUserController.save);

export default router;
