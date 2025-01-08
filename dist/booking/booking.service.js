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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const booking_model_1 = require("./booking.model");
const constants_1 = require("../constants/constants");
let BookingService = class BookingService {
    constructor(bookingModel) {
        this.bookingModel = bookingModel;
    }
    async create(bookingData) {
        const existingBooking = await this.bookingModel.findOne({
            roomId: bookingData.roomId,
            bookingDate: bookingData.bookingDate,
        });
        if (existingBooking) {
            throw new common_1.NotFoundException(constants_1.ROOM_ALREADY_BOOKED_ERROR);
        }
        return this.bookingModel.create(bookingData);
    }
    async cancel(id) {
        return this.bookingModel.findByIdAndUpdate(id, { status: 'cancelled' }, { new: true }).exec();
    }
    async findById(id) {
        return this.bookingModel.findById(id).exec();
    }
    async findByRoomId(roomId) {
        return this.bookingModel.find({ roomId }).exec();
    }
    async deleteById(id) {
        return this.bookingModel.findByIdAndDelete(id).exec();
    }
};
BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(booking_model_1.BookingModel)),
    __metadata("design:paramtypes", [Object])
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map