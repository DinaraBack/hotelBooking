import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateBookingDto {
    @IsOptional()
    @IsString()
    roomId?: string;

    @IsOptional()
    @IsString()
    bookingDate?: string;

    @IsOptional()
    @IsEnum(['active', 'cancelled'])
    status?: 'active' | 'cancelled';

    @IsOptional()
    @IsString()
    customerId?: string;
}