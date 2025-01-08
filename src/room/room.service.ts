import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { RoomModel } from './room.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
    constructor(@InjectModel(RoomModel) private readonly roomModel: ModelType<RoomModel>) { }

    async create(roomData: CreateRoomDto) {
        return this.roomModel.create(roomData)
    }

    async findById(id: string) {
        return this.roomModel.findById(id).exec();
    }

    async updateById(id: string, roomData: UpdateRoomDto) {
        return this.roomModel.findByIdAndUpdate(id, roomData, { new: true }).exec();
    }

    async deleteById(id: string) {
        return this.roomModel.findByIdAndDelete(id).exec();
    }

    async findAll() {
        return this.roomModel.find().exec();
    }
}
