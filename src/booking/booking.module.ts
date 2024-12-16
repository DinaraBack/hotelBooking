import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { BookingModel } from './booking.model';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';

@Module({
    controllers: [BookingController],
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: BookingModel,
                schemaOptions: {
                    collection: 'Booking'
                }
            }
        ])
    ],
    providers: [BookingService]
})
export class BookingModule {}
