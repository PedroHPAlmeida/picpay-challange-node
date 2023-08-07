import BaseError from "./BaseError.js";

export default class BadRequestError extends BaseError {

	constructor(message = "Bad request error") {
		super(message, 400);
	}

}
