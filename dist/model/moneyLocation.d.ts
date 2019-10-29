import { MoneyLocationType } from './moneyLocationType';
export declare class MoneyLocation {
    'type'?: MoneyLocationType;
    'percent'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MoneyLocation): MoneyLocation;
}
