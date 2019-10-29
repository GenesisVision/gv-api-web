import { FundAssetPlatformInfo } from './fundAssetPlatformInfo';
import { ProgramAssetPlatformInfo } from './programAssetPlatformInfo';
export class AssetPlatformInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new AssetPlatformInfo()) {
        if (data) {
            if (data.hasOwnProperty('programInfo')) {
                obj['programInfo'] = ProgramAssetPlatformInfo.constructFromObject(data['programInfo']);
            }
            if (data.hasOwnProperty('fundInfo')) {
                obj['fundInfo'] = FundAssetPlatformInfo.constructFromObject(data['fundInfo']);
            }
        }
        return obj;
    }
}
