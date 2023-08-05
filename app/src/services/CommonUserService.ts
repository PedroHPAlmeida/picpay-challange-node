import { CommonUserModel, ICommonUser } from "../models/index.js";

export default class CommonUserService {

	static async save(commonUser: ICommonUser): Promise<ICommonUser> {
		return await CommonUserModel.create(commonUser);
	}

}
