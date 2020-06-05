import { BrokerDetails } from './BrokerDetails';
import { DashboardTradingAssetCredentials } from './DashboardTradingAssetCredentials';
import { PrivateTradingAccountFullPublicDetails } from './PrivateTradingAccountFullPublicDetails';
import { PrivateTradingAccountFullTradingAccountDetails } from './PrivateTradingAccountFullTradingAccountDetails';
import { PrivateTradingAccountOwnerActions } from './PrivateTradingAccountOwnerActions';

export interface PrivateTradingAccountFull {
    id: string;
    publicInfo: PrivateTradingAccountFullPublicDetails;
    tradingAccountInfo: PrivateTradingAccountFullTradingAccountDetails;
    brokerDetails: BrokerDetails;
    credentials: DashboardTradingAssetCredentials;
    ownerActions: PrivateTradingAccountOwnerActions;
}

