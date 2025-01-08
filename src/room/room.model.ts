import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class RoomCharacteristic {
    @prop()
    name: string;

    @prop()
    value: string;
}

export interface RoomModel extends Base {}

export class RoomModel extends TimeStamps {
    @prop()
    roomNumber: string;

    @prop()
    roomType: string;

    @prop({ type: () => [RoomCharacteristic], _id: false})
    characteristics: RoomCharacteristic[];

    @prop()
    isAvailable: boolean;
}