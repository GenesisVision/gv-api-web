import { BasePlatformAsset } from './BasePlatformAsset';

export interface CoinsTrade {
    date: Date;
    soldAmount: number;
    soldAsset: BasePlatformAsset;
    boughtAmount: number;
    boughtAsset: BasePlatformAsset;
    price: number;
    commission: number;
    commissionCurrency: string;
}

