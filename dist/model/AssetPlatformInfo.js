import { FollowAssetPlatformInfo } from './FollowAssetPlatformInfo';
import { FundAssetPlatformInfo } from './FundAssetPlatformInfo';
import { ProgramAssetPlatformInfo } from './ProgramAssetPlatformInfo';
import { TradingAccountAssetPlatformInfo } from './TradingAccountAssetPlatformInfo';
export class AssetPlatformInfo {
    constructor(data) {
        this['programInfo'] = data['programInfo'];
        this['tradingAccountInfo'] = data['tradingAccountInfo'];
        this['fundInfo'] = data['fundInfo'];
        this['followInfo'] = data['followInfo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetPlatformInfo({
                'programInfo': ProgramAssetPlatformInfo.constructFromObject(data['programInfo']),
                'tradingAccountInfo': TradingAccountAssetPlatformInfo.constructFromObject(data['tradingAccountInfo']),
                'fundInfo': FundAssetPlatformInfo.constructFromObject(data['fundInfo']),
                'followInfo': FollowAssetPlatformInfo.constructFromObject(data['followInfo']),
            });
        }
    }
}
