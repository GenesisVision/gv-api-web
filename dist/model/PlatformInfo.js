import { AppVersion } from './AppVersion';
import { AssetPlatformInfo } from './AssetPlatformInfo';
import { FilterInfo } from './FilterInfo';
import { PlatformCommonInfo } from './PlatformCommonInfo';
import { UsersPlatformInfo } from './UsersPlatformInfo';
export class PlatformInfo {
    constructor(data) {
        this['appVersionInfo'] = data['appVersionInfo'];
        this['filters'] = data['filters'];
        this['assetInfo'] = data['assetInfo'];
        this['usersInfo'] = data['usersInfo'];
        this['commonInfo'] = data['commonInfo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformInfo({
                'appVersionInfo': AppVersion.constructFromObject(data['appVersionInfo']),
                'filters': FilterInfo.constructFromObject(data['filters']),
                'assetInfo': AssetPlatformInfo.constructFromObject(data['assetInfo']),
                'usersInfo': UsersPlatformInfo.constructFromObject(data['usersInfo']),
                'commonInfo': PlatformCommonInfo.constructFromObject(data['commonInfo']),
            });
        }
    }
}
