"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dataSource_1 = require("../Config/dataSource");
var UserController_1 = __importDefault(require("../Controllers/UserController"));
var UserRepository_1 = __importDefault(require("../Repositories/UserRepository"));
var router = express_1.default.Router();
var userRepository = new UserRepository_1.default(dataSource_1.AppDataSource.getRepository("UserEntity"));
var userController = new UserController_1.default(userRepository);
router.post("/", function (req, res) { return userController.createUser(req, res); });
router.get("/", function (req, res) { return userController.getUsers(req, res); });
router.delete("/:id", function (req, res) { return userController.deleteUser(req, res); });
router.put("/:id", function (req, res) { return userController.updateUser(req, res); });
exports.default = router;
