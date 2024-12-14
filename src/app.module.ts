import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { TimetableModule } from './timetable/timetable.module';


@Module({
    imports: [
        TimetableModule,
        RoomsModule,
    ]
})
export class AppModule { }