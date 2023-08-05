import mongoose, { Connection } from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_STRING as string);
const db: Connection = mongoose.connection;

export default db;
