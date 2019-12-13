import { BrokerDetails } from './BrokerDetails';
import { PrivateTradingAccountFullPublicDetails } from './PrivateTradingAccountFullPublicDetails';
import { PrivateTradingAccountFullTradingAccountDetails } from './PrivateTradingAccountFullTradingAccountDetails';
import { PrivateTradingAccountOwnerActions } from './PrivateTradingAccountOwnerActions';
export declare class PrivateTradingAccountFull {
    'id': string;
    'publicInfo': PrivateTradingAccountFullPublicDetails;
    'tradingAccountInfo': PrivateTradingAccountFullTradingAccountDetails;
    'brokerDetails': BrokerDetails;
    'ownerActions': PrivateTradingAccountOwnerActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PrivateTradingAccountFull | undefined;
}
