import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { RoomModel } from './room.model';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';

@Module({
    controllers: [RoomController],
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: RoomModel,
                schemaOptions: {
                    collection: 'Room'
                }
            }
        ])
    ],
    providers: [RoomService]
})
export class RoomsModule { }
