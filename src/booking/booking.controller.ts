import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) { }

    @Post('create')
    async create(@Body() bookingData: any) {
        return this.bookingService.create(bookingData);
    }

    @Post('cancel/:id')
    async cancel(@Param('id') id: string) {
        return this.bookingService.cancel(id);
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.bookingService.findById(id);
    }

    @Get('room/:roomId')
    async getByRoom(@Param('roomId') roomId: string) {
        return this.bookingService.findByRoomId(roomId);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.bookingService.deleteById(id);
    }
}