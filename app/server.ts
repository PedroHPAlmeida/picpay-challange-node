import "dotenv/config";
import app from "./src/app.js";

const port: number = Number(process.env.PORT) || 7000;

app.listen(port, () => {
	console.log("Server running");
});
