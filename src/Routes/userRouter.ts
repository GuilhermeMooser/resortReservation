import express from "express";
import { AppDataSource } from "../Config/dataSource";
import UserController from "../Controllers/UserController";
import UserRepository from "../Repositories/UserRepository";
const router = express.Router();

const userRepository = new UserRepository(
  AppDataSource.getRepository("UserEntity")
);
const userController = new UserController(userRepository);

router.post("/", (req, res) => userController.createUser(req, res));
router.get("/", (req, res) => userController.getUsers(req, res));
router.delete("/:id", (req, res) => userController.deleteUser(req, res));
router.put("/:id", (req, res) => userController.updateUser(req, res));

export default router;
