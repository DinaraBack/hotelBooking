import { IsOptional, IsString } from 'class-validator';

export class UpdateRoomDto {
    @IsOptional()
    @IsString()
    name?: string;  // Название комнаты

    @IsOptional()
    @IsString()
    description?: string;  // Описание комнаты

    @IsOptional()
    @IsString()
    type?: string;  // Тип комнаты (например, одноместная, двухместная и т.д.)

    @IsOptional()
    @IsString()
    view?: boolean;  // Вид (необязательное поле)
}