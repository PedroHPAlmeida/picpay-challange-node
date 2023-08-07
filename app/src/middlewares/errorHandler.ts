import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { BadRequestError, BaseError } from "../errors/index.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function handler(error: Error, req: Request, res: Response, next: NextFunction) {
	console.log(error.message);
	if (error instanceof mongoose.Error.ValidationError) {
		const errorMessage = Object.values(error.errors).map(e => e.message).join("; ");
		new BadRequestError(errorMessage).sendResponse(res);
	} else {
		new BaseError().sendResponse(res);
	}
}
