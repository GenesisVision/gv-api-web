import { AppVersion } from './appVersion';
import { AssetPlatformInfo } from './assetPlatformInfo';
import { FilterInfo } from './filterInfo';
export declare class PlatformInfo {
    'appVersionInfo'?: AppVersion;
    'filters'?: FilterInfo;
    'assetInfo'?: AssetPlatformInfo;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PlatformInfo): PlatformInfo;
}
