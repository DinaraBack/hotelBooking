"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const room_model_1 = require("./room.model");
const room_service_1 = require("./room.service");
const room_controller_1 = require("./room.controller");
let RoomsModule = class RoomsModule {
};
RoomsModule = __decorate([
    (0, common_1.Module)({
        controllers: [room_controller_1.RoomController],
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: room_model_1.RoomModel,
                    schemaOptions: {
                        collection: 'Room'
                    }
                }
            ])
        ],
        providers: [room_service_1.RoomService]
    })
], RoomsModule);
exports.RoomsModule = RoomsModule;
//# sourceMappingURL=room.module.js.map