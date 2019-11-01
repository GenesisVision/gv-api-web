import { PlatformCurrencyInfo } from './PlatformCurrencyInfo';
import ApiClient from "../ApiClient";
export class PlatformCommonInfo {
    constructor(data) {
        this['platformCurrencies'] = data['platformCurrencies'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformCommonInfo({
                'platformCurrencies': ApiClient.convertToType(data['platformCurrencies'], [PlatformCurrencyInfo]),
            });
        }
    }
}
