import { Body, Controller, Post, Get, Param, Delete, Patch } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) { }

    @Post('create')
    async create(@Body() bookingData: CreateBookingDto) {
        return this.bookingService.create(bookingData);
    }

    @Patch('update/:id')
    async update(@Param('id') id: string, @Body() bookingData: UpdateBookingDto) {
        return this.bookingService.updateById(id, bookingData);
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