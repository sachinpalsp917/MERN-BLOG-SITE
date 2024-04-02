import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(() => {
  console.log("Database connected!!!!");
});
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.listen(7000, () => {
  console.log("Server started");
});
