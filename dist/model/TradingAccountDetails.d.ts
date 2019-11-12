import { Currency } from './Currency';
export declare class TradingAccountDetails {
    'id': string;
    'currency': Currency;
    'login': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradingAccountDetails | undefined;
}
