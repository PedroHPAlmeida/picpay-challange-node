import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/index.js";

export default class UserController {

	static async save(req: Request, res: Response, next: NextFunction){
		const body = req.body;
		try {
			const commonUser = await UserService.save(body);
			return res.status(201).json(commonUser);
		} catch (error) {
			next(error);
		}
	}

}
