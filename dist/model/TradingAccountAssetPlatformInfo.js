import { TradingAccountMinCreateAmount } from './TradingAccountMinCreateAmount';
import ApiClient from "../ApiClient";
export class TradingAccountAssetPlatformInfo {
    constructor(data) {
        this['minAmounts'] = data['minAmounts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradingAccountAssetPlatformInfo({
                'minAmounts': ApiClient.convertToType(data['minAmounts'], [TradingAccountMinCreateAmount]),
            });
        }
    }
}
