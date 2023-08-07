import { UserModel, IUser } from "../models/index.js";

export default class UserService {

	static async save(user: IUser): Promise<IUser> {
		return await UserModel.create(user);
	}

}
