import express from "express";
import userRouter from "./route/user.route.js";
const app = express();
// cors & cookie - parser downloaded

app.use("/api/users", userRouter);
export { app };
