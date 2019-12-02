import { BrokerTradeServerType } from './BrokerTradeServerType';
export declare class DashboardTradingAssetBrokerDetails {
    'logo': string;
    'name': string;
    'type': BrokerTradeServerType;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingAssetBrokerDetails | undefined;
}
