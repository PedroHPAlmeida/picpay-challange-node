import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response): void => {
	res.send({ status: "UP" });
});

export default app;
