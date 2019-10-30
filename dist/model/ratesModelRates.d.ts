import { RateItem } from './rateItem';
export declare class RatesModelRates {
    'Undefined'?: [RateItem];
    'GVT'?: [RateItem];
    'ETH'?: [RateItem];
    'BTC'?: [RateItem];
    'ADA'?: [RateItem];
    'USDT'?: [RateItem];
    'XRP'?: [RateItem];
    'BCH'?: [RateItem];
    'LTC'?: [RateItem];
    'DOGE'?: [RateItem];
    'BNB'?: [RateItem];
    'USD'?: [RateItem];
    'EUR'?: [RateItem];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RatesModelRates): RatesModelRates;
}
