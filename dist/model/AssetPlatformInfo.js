import { FundAssetPlatformInfo } from './FundAssetPlatformInfo';
import { ProgramAssetPlatformInfo } from './ProgramAssetPlatformInfo';
export class AssetPlatformInfo {
    constructor(data) {
        this['programInfo'] = data['programInfo'];
        this['fundInfo'] = data['fundInfo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetPlatformInfo({
                'programInfo': ProgramAssetPlatformInfo.constructFromObject(data['programInfo']),
                'fundInfo': FundAssetPlatformInfo.constructFromObject(data['fundInfo']),
            });
        }
    }
}
