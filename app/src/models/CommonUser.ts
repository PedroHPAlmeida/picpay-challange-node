import { Schema, model } from "mongoose";

interface ICommonUser {
    name: string,
    cpf: string,
    email: string,
    password: string
}

const commonUserSchema = new Schema<ICommonUser>({
	name: { type: String, required: true },
	cpf: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true }
});

const CommonUserModel = model<ICommonUser>("CommonUser", commonUserSchema);

export { CommonUserModel, ICommonUser };
