import { AppVersion } from './AppVersion';
import { AssetPlatformInfo } from './AssetPlatformInfo';
import { FilterInfo } from './FilterInfo';
import { PlatformCommonInfo } from './PlatformCommonInfo';
import { UsersPlatformInfo } from './UsersPlatformInfo';
export declare class PlatformInfo {
    'appVersionInfo': AppVersion;
    'filters': FilterInfo;
    'assetInfo': AssetPlatformInfo;
    'usersInfo': UsersPlatformInfo;
    'commonInfo': PlatformCommonInfo;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformInfo | undefined;
}
