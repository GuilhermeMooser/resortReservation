import express from "express";
import userRouter from "./userRouter";
import resortRouter from "./resortRouter";
const router = (app: express.Router) => {
  app.use("/users", userRouter);
  app.use("/resorts", resortRouter);
};
export default router;
