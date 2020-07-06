import { BasePlatformAsset } from './BasePlatformAsset';

export interface FundTradingEventViewModel {
    date: Date;
    soldAmount: number;
    soldAsset: BasePlatformAsset;
    boughtAmount: number;
    boughtAsset: BasePlatformAsset;
    commission: number;
    commissionCurrency: string;
}

