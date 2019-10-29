import { FundFacet } from './fundFacet';
import { PlatformAsset } from './platformAsset';
export declare class FundAssetPlatformInfo {
    'facets'?: [FundFacet];
    'assets'?: [PlatformAsset];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundAssetPlatformInfo): FundAssetPlatformInfo;
}
