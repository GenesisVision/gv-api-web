import { AppVersion } from './AppVersion';
import { AssetPlatformInfo } from './AssetPlatformInfo';
import { FilterInfo } from './FilterInfo';
export declare class PlatformInfo {
    'appVersionInfo': AppVersion;
    'filters': FilterInfo;
    'assetInfo': AssetPlatformInfo;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformInfo | undefined;
}
