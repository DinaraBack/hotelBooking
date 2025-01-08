import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookingDto {
    @IsNotEmpty()
    @IsString()
    roomId: string;

    @IsNotEmpty()
    @IsString()
    bookingDate: string;

    @IsEnum(['active', 'cancelled'])
    status: 'active' | 'cancelled';

    @IsOptional()
    @IsString()
    customerId?: string;
}