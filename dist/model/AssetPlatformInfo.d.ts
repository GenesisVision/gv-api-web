import { FollowAssetPlatformInfo } from './FollowAssetPlatformInfo';
import { FundAssetPlatformInfo } from './FundAssetPlatformInfo';
import { ProgramAssetPlatformInfo } from './ProgramAssetPlatformInfo';
import { TradingAccountAssetPlatformInfo } from './TradingAccountAssetPlatformInfo';
export declare class AssetPlatformInfo {
    'programInfo': ProgramAssetPlatformInfo;
    'tradingAccountInfo': TradingAccountAssetPlatformInfo;
    'fundInfo': FundAssetPlatformInfo;
    'followInfo': FollowAssetPlatformInfo;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetPlatformInfo | undefined;
}
