import { BasePlatformAsset } from './BasePlatformAsset';
import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
import { FundHistoryEventType } from './FundHistoryEventType';
import { FundTradingEventViewModel } from './FundTradingEventViewModel';

export interface FundHistoryEventViewModel {
    date: Date;
    type: FundHistoryEventType;
    amount: number;
    asset: BasePlatformAsset;
    trades: Array<FundTradingEventViewModel>;
    reallocateAssets: Array<FundAssetPartWithIcon>;
}

