import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { BookingModel } from './booking.model';
import { ROOM_ALREADY_BOOKED_ERROR } from 'src/constants/constants';

@Injectable()
export class BookingService {
    constructor(@InjectModel(BookingModel) private readonly bookingModel: ModelType<BookingModel>) { }

    async create(bookingData: any) {
        const existingBooking = await this.bookingModel.findOne({
            roomId: bookingData.roomId,
            bookingDate: bookingData.bookingDate,
        });

        if (existingBooking) {
            throw new NotFoundException(ROOM_ALREADY_BOOKED_ERROR);
        }

        return this.bookingModel.create(bookingData);
    }

    async cancel(id: string) {
        return this.bookingModel.findByIdAndUpdate(id, { status: 'cancelled' }, { new: true }).exec();
    }

    async findById(id: string) {
        return this.bookingModel.findById(id).exec();
    }

    async findByRoomId(roomId: string) {
        return this.bookingModel.find({ roomId }).exec();
    }

    async deleteById(id: string) {
        return this.bookingModel.findByIdAndDelete(id).exec();
    }
}