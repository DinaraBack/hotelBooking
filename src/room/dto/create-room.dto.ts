import { IsString, IsOptional } from 'class-validator';

export class CreateRoomDto {
    @IsString()
    name: string;  // Название комнаты

    @IsString()
    description: string;  // Описание комнаты

    @IsString()
    type: string;  // Тип комнаты (например, одноместная, двухместная и т.д.)

    @IsOptional()
    @IsString()
    view?: boolean;  // Дополнительная характеристика, например, вид на море (необязательное поле)
}