import { EventFilters } from './EventFilters';
import { PlatformCommissionInfo } from './PlatformCommissionInfo';
import { PlatformCurrencyInfo } from './PlatformCurrencyInfo';
import { PlatformUrlInfo } from './PlatformUrlInfo';
import ApiClient from "../ApiClient";
export class PlatformCommonInfo {
    constructor(data) {
        this['platformCommission'] = data['platformCommission'];
        this['platformCurrencies'] = data['platformCurrencies'];
        this['platformUrls'] = data['platformUrls'];
        this['eventFilters'] = data['eventFilters'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformCommonInfo({
                'platformCommission': PlatformCommissionInfo.constructFromObject(data['platformCommission']),
                'platformCurrencies': ApiClient.convertToType(data['platformCurrencies'], [PlatformCurrencyInfo]),
                'platformUrls': ApiClient.convertToType(data['platformUrls'], [PlatformUrlInfo]),
                'eventFilters': EventFilters.constructFromObject(data['eventFilters']),
            });
        }
    }
}
