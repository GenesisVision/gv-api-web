import { AppVersion } from './appVersion';
import { AssetPlatformInfo } from './assetPlatformInfo';
import { FilterInfo } from './filterInfo';
export class PlatformInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new PlatformInfo()) {
        if (data) {
            if (data.hasOwnProperty('appVersionInfo')) {
                obj['appVersionInfo'] = AppVersion.constructFromObject(data['appVersionInfo']);
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = FilterInfo.constructFromObject(data['filters']);
            }
            if (data.hasOwnProperty('assetInfo')) {
                obj['assetInfo'] = AssetPlatformInfo.constructFromObject(data['assetInfo']);
            }
        }
        return obj;
    }
}
