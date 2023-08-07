import { Router } from "express";
import { UserController } from "../controllers/index.js";


const router = Router();

router
	.post("/api/users", UserController.save);

export default router;
