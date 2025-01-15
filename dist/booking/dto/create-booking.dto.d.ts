declare enum BookingStatus {
    Active = "active",
    Cancelled = "cancelled"
}
export declare class CreateBookingDto {
    roomId: string;
    bookingDate: string;
    status: BookingStatus;
    customerId?: string;
}
export {};
