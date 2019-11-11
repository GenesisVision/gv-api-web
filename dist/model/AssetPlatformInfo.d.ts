import { FollowAssetPlatformInfo } from './FollowAssetPlatformInfo';
import { FundAssetPlatformInfo } from './FundAssetPlatformInfo';
import { ProgramAssetPlatformInfo } from './ProgramAssetPlatformInfo';
export declare class AssetPlatformInfo {
    'programInfo': ProgramAssetPlatformInfo;
    'fundInfo': FundAssetPlatformInfo;
    'followInfo': FollowAssetPlatformInfo;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetPlatformInfo | undefined;
}
