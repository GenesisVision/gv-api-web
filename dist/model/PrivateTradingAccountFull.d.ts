import { BrokerDetails } from './BrokerDetails';
import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import { PrivateTradingAccountOwnerActions } from './PrivateTradingAccountOwnerActions';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';
import { SignalSubscription } from './SignalSubscription';
export declare class PrivateTradingAccountFull {
    'id': string;
    'creationDate': Date;
    'currency': CurrencyEnum;
    'leverage': number;
    'apiKey': string;
    'login': string;
    'balance': number;
    'type': PrivateTradingAccountType;
    'status': DashboardTradingAssetStatus;
    'signalSubscriptions': Array<SignalSubscription>;
    'brokerDetails': BrokerDetails;
    'ownerActions': PrivateTradingAccountOwnerActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PrivateTradingAccountFull | undefined;
}
declare type CurrencyEnum = 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};
