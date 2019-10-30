import { Currency } from './currency';
export declare class ConvertingDetails {
    'currencyTo'?: Currency;
    'currencyToName'?: string;
    'amountTo'?: number;
    'rateValue'?: number;
    'currencyToLogo'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ConvertingDetails): ConvertingDetails;
}
