import express from "express";
import router from "./Routes";
import "reflect-metadata";
import { AppDataSource } from "./Config/dataSource";
const app = express();
app.use(express.json());
router(app);

AppDataSource.initialize()
  .then(() => {
    console.log("Database running");
  })
  .catch((erro) => {
    console.log(erro);
  });

export default app;
