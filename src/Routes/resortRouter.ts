import express from "express";
import { AppDataSource } from "../Config/dataSource";
import ResortController from "../Controllers/ResortController";
import ResortRepository from "../Repositories/ResortRepository";
const router = express.Router();

const resortRepository = new ResortRepository(
  AppDataSource.getRepository("ResortEntity")
);
const resortController = new ResortController(resortRepository);

router.post("/", (req, res) => resortController.createResort(req, res));

export default router;
