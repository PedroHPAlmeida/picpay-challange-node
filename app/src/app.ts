import express, { Request, Response } from "express";
import db from "./config/db.js";

const app = express();

app.get("/", (req: Request, res: Response): void => {
	res.send({ status: "UP" });
});

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
	console.log("The connection to the database was successful");
});

export default app;
