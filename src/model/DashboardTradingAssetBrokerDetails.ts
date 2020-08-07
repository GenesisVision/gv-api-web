import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface DashboardTradingAssetBrokerDetails {
    id: string;
    logoUrl: string;
    name: string;
    type: BrokerTradeServerType;
}

