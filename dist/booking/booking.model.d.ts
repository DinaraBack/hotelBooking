import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface BookingModel extends Base {
}
export declare class BookingModel extends TimeStamps {
    roomId: string;
    bookingDate: string;
    status: 'active' | 'cancelled';
    customerId?: string;
}
