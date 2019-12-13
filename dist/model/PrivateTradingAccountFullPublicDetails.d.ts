import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
export declare class PrivateTradingAccountFullPublicDetails {
    'title': string;
    'creationDate': Date;
    'status': DashboardTradingAssetStatus;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PrivateTradingAccountFullPublicDetails | undefined;
}
