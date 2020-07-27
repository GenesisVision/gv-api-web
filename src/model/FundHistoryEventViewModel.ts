import { BasePlatformAsset } from './BasePlatformAsset';
import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
import { FundHistoryEventType } from './FundHistoryEventType';
import { FundTradingEventViewModel } from './FundTradingEventViewModel';

export interface FundHistoryEventViewModel {
    date: Date;
    type: FundHistoryEventType;
    description: string;
    amount: number;
    asset: BasePlatformAsset;
    logoUrl: string;
    trades: Array<FundTradingEventViewModel>;
    newAssets: Array<FundAssetPartWithIcon>;
}

