import { BasePlatformAsset } from './BasePlatformAsset';
import { FundTradingEventType } from './FundTradingEventType';

export interface FundTradingEventViewModel {
    date: Date;
    type: FundTradingEventType;
    amount: number;
    asset: BasePlatformAsset;
    boughtAmount: number;
    boughtAsset: BasePlatformAsset;
    commission: number;
    commissionCurrency: string;
}

