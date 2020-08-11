import { DashboardTradingAssetBrokerDetails } from './DashboardTradingAssetBrokerDetails';
import { DashboardTradingAssetCredentials } from './DashboardTradingAssetCredentials';

export interface DashboardExchangeTradingAsset {
    credentials: DashboardTradingAssetCredentials;
    broker: DashboardTradingAssetBrokerDetails;
}

