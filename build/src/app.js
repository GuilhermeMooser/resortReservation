"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Routes_1 = __importDefault(require("./Routes"));
require("reflect-metadata");
var dataSource_1 = require("./Config/dataSource");
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, Routes_1.default)(app);
dataSource_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database running");
})
    .catch(function (erro) {
    console.log(erro);
});
exports.default = app;
