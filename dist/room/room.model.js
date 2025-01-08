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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
class RoomCharacteristic {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], RoomCharacteristic.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], RoomCharacteristic.prototype, "value", void 0);
class RoomModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], RoomModel.prototype, "roomNumber", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], RoomModel.prototype, "roomType", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [RoomCharacteristic], _id: false }),
    __metadata("design:type", Array)
], RoomModel.prototype, "characteristics", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], RoomModel.prototype, "isAvailable", void 0);
exports.RoomModel = RoomModel;
//# sourceMappingURL=room.model.js.map