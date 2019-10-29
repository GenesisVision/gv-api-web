import { FundAssetPlatformInfo } from './fundAssetPlatformInfo';
import { ProgramAssetPlatformInfo } from './programAssetPlatformInfo';
export declare class AssetPlatformInfo {
    'programInfo'?: ProgramAssetPlatformInfo;
    'fundInfo'?: FundAssetPlatformInfo;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AssetPlatformInfo): AssetPlatformInfo;
}
