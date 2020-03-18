import { AppVersion } from './AppVersion';
import { AssetPlatformInfo } from './AssetPlatformInfo';
import { FilterInfo } from './FilterInfo';
import { PlatformCommonInfo } from './PlatformCommonInfo';
import { UsersPlatformInfo } from './UsersPlatformInfo';

export interface PlatformInfo {
    appVersionInfo: AppVersion;
    filters: FilterInfo;
    assetInfo: AssetPlatformInfo;
    usersInfo: UsersPlatformInfo;
    commonInfo: PlatformCommonInfo;
}

