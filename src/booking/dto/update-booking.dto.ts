import { IsEnum, IsOptional, IsString } from 'class-validator';

enum BookingStatus {
    Active = 'active',
    Cancelled = 'cancelled',
}

export class UpdateBookingDto {
    @IsOptional()
    @IsString()
    roomId?: string;

    @IsOptional()
    @IsString()
    bookingDate?: string;

    @IsOptional()
    @IsEnum(BookingStatus)
    status?: BookingStatus;

    @IsOptional()
    @IsString()
    customerId?: string;
}