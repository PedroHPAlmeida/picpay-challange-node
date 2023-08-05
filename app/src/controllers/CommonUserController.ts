import { Request, Response } from "express";
import { CommonUserService } from "../services/index.js";

export default class CommonUserController {

	static async save(req: Request, res: Response){
		const body = req.body;
		try {
			const commonUser = await CommonUserService.save(body);
			return res.status(201).json(commonUser);
		} catch (error) {
			console.log(error.message);
		}
	}

}
