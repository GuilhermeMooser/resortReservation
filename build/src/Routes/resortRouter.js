"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dataSource_1 = require("../Config/dataSource");
var ResortController_1 = __importDefault(require("../Controllers/ResortController"));
var ResortRepository_1 = __importDefault(require("../Repositories/ResortRepository"));
var router = express_1.default.Router();
var resortRepository = new ResortRepository_1.default(dataSource_1.AppDataSource.getRepository("ResortEntity"));
var resortController = new ResortController_1.default(resortRepository);
router.post("/", function (req, res) { return resortController.createResort(req, res); });
exports.default = router;
