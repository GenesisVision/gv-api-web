import { FilterItemInfo } from './FilterItemInfo';
import ApiClient from "../ApiClient";
export class FilterInfo {
    constructor(data) {
        this['walletTransactions'] = data['walletTransactions'];
        this['walletExternalTransactions'] = data['walletExternalTransactions'];
        this['events'] = data['events'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FilterInfo({
                'walletTransactions': ApiClient.convertToType(data['walletTransactions'], [FilterItemInfo]),
                'walletExternalTransactions': ApiClient.convertToType(data['walletExternalTransactions'], [FilterItemInfo]),
                'events': ApiClient.convertToType(data['events'], [FilterItemInfo]),
            });
        }
    }
}
