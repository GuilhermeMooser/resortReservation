import express from "express";
import { AppDataSource } from "../Config/dataSource";
import UserController from "../Controllers/UserController";
import UserRepository from "../Repositories/UserRepository";
import ResortController from "../Controllers/ResortController";
import ResortRepository from "../Repositories/ResortRepository";
const router = express.Router();

const userRepository = new UserRepository(
  AppDataSource.getRepository("UserEntity")
);

const resortRepository = new ResortRepository(
  AppDataSource.getRepository("ResortEntity")
);
const userController = new UserController(userRepository, resortRepository);

router.post("/", (req, res) => userController.createUser(req, res));
router.get("/", (req, res) => userController.getUsers(req, res));
router.delete("/:id", (req, res) => userController.deleteUser(req, res));
router.put("/:id", (req, res) => userController.updateUser(req, res));

export default router;
