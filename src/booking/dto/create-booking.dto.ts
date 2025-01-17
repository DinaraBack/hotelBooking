import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

enum BookingStatus {
    Active = 'active',
    Cancelled = 'cancelled',
}

export class CreateBookingDto {
    @IsNotEmpty()
    @IsString()
    roomId: string;

    @IsNotEmpty()
    @IsString()
    bookingDate: string;

    @IsEnum(BookingStatus)
    status: BookingStatus;

    @IsOptional()
    @IsString()
    customerId?: string;
}