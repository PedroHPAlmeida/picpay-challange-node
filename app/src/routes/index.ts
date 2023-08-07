import express, { Express, Request, Response } from "express";
import commonUserRoutes from "./userRoutes.js";

const routes = (app: Express) => {
	app.route("/").get((req: Request, res: Response): void => {
		res.status(200).json({ status: "UP" });
	});
	app.use(express.json(),
		commonUserRoutes);
};

export default routes;
