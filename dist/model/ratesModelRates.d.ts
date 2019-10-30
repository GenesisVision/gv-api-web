import { RateItem } from './rateItem';
export declare class RatesModelRates {
    'Undefined'?: Array<RateItem>;
    'GVT'?: Array<RateItem>;
    'ETH'?: Array<RateItem>;
    'BTC'?: Array<RateItem>;
    'ADA'?: Array<RateItem>;
    'USDT'?: Array<RateItem>;
    'XRP'?: Array<RateItem>;
    'BCH'?: Array<RateItem>;
    'LTC'?: Array<RateItem>;
    'DOGE'?: Array<RateItem>;
    'BNB'?: Array<RateItem>;
    'USD'?: Array<RateItem>;
    'EUR'?: Array<RateItem>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RatesModelRates): RatesModelRates;
}
