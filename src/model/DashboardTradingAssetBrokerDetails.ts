import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface DashboardTradingAssetBrokerDetails {
    id: string;
    logo: string;
    logoUrl: string;
    name: string;
    type: BrokerTradeServerType;
}

