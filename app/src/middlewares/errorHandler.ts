import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { BadRequestError, BaseError } from "../errors/index.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export default function handler(error: any, req: Request, res: Response, next: NextFunction) {
	console.log(error);
	if (error instanceof mongoose.Error.ValidationError) {
		const errorMessage = Object.values(error.errors).map(e => e.message).join("; ");
		new BadRequestError(errorMessage).sendResponse(res);
	} else if (error.code === 11000) { // TODO - tratamento inadequado, porém não encontrei outra maneira
		new BadRequestError(`Duplicate key for path: ${JSON.stringify(error.keyValue)}`).sendResponse(res);
	} else {
		new BaseError().sendResponse(res);
	}
}
