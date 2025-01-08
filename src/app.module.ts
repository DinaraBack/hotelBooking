import { Module } from '@nestjs/common';
import { RoomsModule } from './room/room.module';
import { ConfigModule } from '@nestjs/config';
import { BookingModule } from './booking/booking.module';


@Module({
    imports: [
        ConfigModule.forRoot(),
        RoomsModule,
        BookingModule
    ]
})
export class AppModule { }