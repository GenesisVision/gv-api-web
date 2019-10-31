import { Currency } from './Currency';
export declare class ConvertingDetails {
    'currencyTo': Currency;
    'currencyToName': string;
    'amountTo': number;
    'rateValue': number;
    'currencyToLogo': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ConvertingDetails;
}
