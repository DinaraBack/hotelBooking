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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const room_model_1 = require("./room.model");
let RoomService = class RoomService {
    constructor(roomModel) {
        this.roomModel = roomModel;
    }
    async create(roomData) {
        return this.roomModel.create(roomData);
    }
    async findById(id) {
        return this.roomModel.findById(id).exec();
    }
    async updateById(id, roomData) {
        return this.roomModel.findByIdAndUpdate(id, roomData, { new: true }).exec();
    }
    async deleteById(id) {
        return this.roomModel.findByIdAndDelete(id).exec();
    }
    async findAll() {
        return this.roomModel.find().exec();
    }
};
RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(room_model_1.RoomModel)),
    __metadata("design:paramtypes", [Object])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map