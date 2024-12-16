import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
declare class RoomCharacteristic {
    name: string;
    value: string;
}
export interface RoomModel extends Base {
}
export declare class RoomModel extends TimeStamps {
    roomNumber: string;
    roomType: string;
    characteristics: RoomCharacteristic[];
    isAvailable: boolean;
}
export {};
