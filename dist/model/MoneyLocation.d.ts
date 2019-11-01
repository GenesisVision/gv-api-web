import { MoneyLocationType } from './MoneyLocationType';
export declare class MoneyLocation {
    'type': MoneyLocationType;
    'percent': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MoneyLocation | undefined;
}
