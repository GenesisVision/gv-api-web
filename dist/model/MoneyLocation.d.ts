import { MoneyLocationType } from './MoneyLocationType';
export declare class MoneyLocation {
    'name': MoneyLocationType;
    'percent': number;
    'color': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MoneyLocation | undefined;
}
