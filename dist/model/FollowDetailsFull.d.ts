import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
export declare class FollowDetailsFull {
    'currency': CurrencyEnum;
    'tradesCount': number;
    'leverage': number;
    'personalDetails': PersonalFollowDetailsFull;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowDetailsFull | undefined;
}
declare type CurrencyEnum = 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};
