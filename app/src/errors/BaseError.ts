import { Response } from "express";

export default class BaseError extends Error {

	private status: number;

	constructor(message = "Internal server error", status = 500) {
		super(message);
		this.status = status;
	}

	public sendResponse(res: Response) {
		res.status(this.status).json({ message: this.message });
	}

}
