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
var RoomEntity = /** @class */ (function () {
    function RoomEntity(roomNumber, isBooked, dtEntry, dtDeparture, isCleared) {
        this.roomNumber = roomNumber;
        this.isBooked = isBooked;
        this.dtEntry = dtEntry;
        this.dtDeparture = dtDeparture;
        this.isCleared = isCleared;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], RoomEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], RoomEntity.prototype, "roomNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], RoomEntity.prototype, "isBooked", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], RoomEntity.prototype, "dtEntry", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], RoomEntity.prototype, "dtDeparture", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], RoomEntity.prototype, "isCleared", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ResortEntity_1.default; }, function (resort) { return resort.rooms; }, { nullable: true }),
        __metadata("design:type", ResortEntity_1.default)
    ], RoomEntity.prototype, "resort", void 0);
    RoomEntity = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, Boolean, Date,
            Date, Boolean])
    ], RoomEntity);
    return RoomEntity;
}());
exports.default = RoomEntity;
