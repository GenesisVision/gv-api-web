import { BrokerDetails } from './BrokerDetails';
import { PrivateTradingAccountFullPublicDetails } from './PrivateTradingAccountFullPublicDetails';
import { PrivateTradingAccountFullTradingAccountDetails } from './PrivateTradingAccountFullTradingAccountDetails';
import { PrivateTradingAccountOwnerActions } from './PrivateTradingAccountOwnerActions';

export interface PrivateTradingAccountFull {
    id: string;
    publicInfo: PrivateTradingAccountFullPublicDetails;
    tradingAccountInfo: PrivateTradingAccountFullTradingAccountDetails;
    brokerDetails: BrokerDetails;
    ownerActions: PrivateTradingAccountOwnerActions;
}

