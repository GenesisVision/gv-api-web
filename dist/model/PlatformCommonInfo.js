import { PlatformCommissionInfo } from './PlatformCommissionInfo';
import { PlatformCurrencyInfo } from './PlatformCurrencyInfo';
import ApiClient from "../ApiClient";
export class PlatformCommonInfo {
    constructor(data) {
        this['platformCommission'] = data['platformCommission'];
        this['platformCurrencies'] = data['platformCurrencies'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformCommonInfo({
                'platformCommission': PlatformCommissionInfo.constructFromObject(data['platformCommission']),
                'platformCurrencies': ApiClient.convertToType(data['platformCurrencies'], [PlatformCurrencyInfo]),
            });
        }
    }
}
