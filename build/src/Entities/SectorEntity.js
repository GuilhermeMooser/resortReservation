"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var ResortEntity_1 = __importDefault(require("./ResortEntity"));
var SectorEntity = /** @class */ (function () {
    function SectorEntity(name, isBooked, dtRent) {
        this.name = name;
        this.isBooked = isBooked;
        this.dtRent = dtRent;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], SectorEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SectorEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], SectorEntity.prototype, "isBooked", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], SectorEntity.prototype, "dtRent", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ResortEntity_1.default; }, function (resort) { return resort.sectors; }, { nullable: true }),
        __metadata("design:type", ResortEntity_1.default)
    ], SectorEntity.prototype, "resort", void 0);
    SectorEntity = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, Boolean, Date])
    ], SectorEntity);
    return SectorEntity;
}());
exports.default = SectorEntity;
