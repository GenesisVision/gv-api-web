import { Currency } from './Currency';
export declare class ConvertingDetails {
    'currencyTo'?: Currency;
    'currencyToName'?: string;
    'amountTo'?: number;
    'rateValue'?: number;
    'currencyToLogo'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ConvertingDetails): ConvertingDetails;
}
