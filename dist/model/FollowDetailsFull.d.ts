import { AssetSignalSettings } from './AssetSignalSettings';
import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
export declare class FollowDetailsFull {
    'currency': CurrencyEnum;
    'tradesCount': number;
    'leverageMin': number;
    'leverageMax': number;
    'signalSettings': AssetSignalSettings;
    'subscribersCount': number;
    'personalDetails': PersonalFollowDetailsFull;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowDetailsFull | undefined;
}
declare type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};
