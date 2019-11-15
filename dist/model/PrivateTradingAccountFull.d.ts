import { BrokerDetails } from './BrokerDetails';
import { PrivateTradingAccountOwnerActions } from './PrivateTradingAccountOwnerActions';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';
export declare class PrivateTradingAccountFull {
    'id': string;
    'creationDate': Date;
    'currency': CurrencyEnum;
    'login': string;
    'balance': number;
    'type': PrivateTradingAccountType;
    'brokerDetails': BrokerDetails;
    'ownerActions': PrivateTradingAccountOwnerActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PrivateTradingAccountFull | undefined;
}
declare type CurrencyEnum = 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};
