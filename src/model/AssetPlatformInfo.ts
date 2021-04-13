import { AnonymousPlatformInfo } from './AnonymousPlatformInfo';
import { FollowAssetPlatformInfo } from './FollowAssetPlatformInfo';
import { FundAssetPlatformInfo } from './FundAssetPlatformInfo';
import { ProgramAssetPlatformInfo } from './ProgramAssetPlatformInfo';
import { TradingAccountAssetPlatformInfo } from './TradingAccountAssetPlatformInfo';

export interface AssetPlatformInfo {
    programInfo: ProgramAssetPlatformInfo;
    tradingAccountInfo: TradingAccountAssetPlatformInfo;
    fundInfo: FundAssetPlatformInfo;
    followInfo: FollowAssetPlatformInfo;
    anonymousInfo: AnonymousPlatformInfo;
}

