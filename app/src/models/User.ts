import { Schema, model } from "mongoose";

interface IUser {
    name: string,
    identificatioNumber: string,
    typeUser: string, 
    email: string,
    password: string
}

enum TypeUser {
    common = "commonUser",
    shopkeeper = "shopkeeper"
}

const userSchema = new Schema<IUser>({
	name: { type: String, required: true },
	identificatioNumber: { type: String, required: true, unique: true },
	typeUser: { type: String, required: true, enum: [TypeUser.common, TypeUser.shopkeeper] },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true }
});

const UserModel = model<IUser>("Users", userSchema);

export { UserModel, IUser };
