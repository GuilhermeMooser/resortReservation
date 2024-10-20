"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userRouter_1 = __importDefault(require("./userRouter"));
var resortRouter_1 = __importDefault(require("./resortRouter"));
var router = function (app) {
    app.use("/users", userRouter_1.default);
    app.use("/resorts", resortRouter_1.default);
};
exports.default = router;
