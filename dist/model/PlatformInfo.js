import { AppVersion } from './AppVersion';
import { AssetPlatformInfo } from './AssetPlatformInfo';
import { FilterInfo } from './FilterInfo';
export class PlatformInfo {
    constructor(data) {
        this['appVersionInfo'] = data['appVersionInfo'];
        this['filters'] = data['filters'];
        this['assetInfo'] = data['assetInfo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformInfo({
                'appVersionInfo': AppVersion.constructFromObject(data['appVersionInfo']),
                'filters': FilterInfo.constructFromObject(data['filters']),
                'assetInfo': AssetPlatformInfo.constructFromObject(data['assetInfo']),
            });
        }
    }
}
