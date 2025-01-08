import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface BookingModel extends Base {}

export class BookingModel extends TimeStamps {
    @prop()
    roomId: string;

    @prop()
    bookingDate: string

    @prop()
    status: 'active' | 'cancelled'

    @prop()
    customerId?: string

}