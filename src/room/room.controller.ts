import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('rooms')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Post('create')
    async create(@Body() roomData: any) {
        return this.roomService.create(roomData);
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.roomService.findById(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() roomData: any) {
        return this.roomService.updateById(id, roomData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.roomService.deleteById(id);
    }

    @Get()
    async findAll() {
        return this.roomService.findAll();
    }
}