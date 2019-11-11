import { FilterItemInfo } from './FilterItemInfo';
import ApiClient from "../ApiClient";
export class FilterInfo {
    constructor(data) {
        this['walletTransactions'] = data['walletTransactions'];
        this['walletExternalTransactions'] = data['walletExternalTransactions'];
        this['events'] = data['events'];
        this['programs'] = data['programs'];
        this['funds'] = data['funds'];
        this['follow'] = data['follow'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FilterInfo({
                'walletTransactions': ApiClient.convertToType(data['walletTransactions'], [FilterItemInfo]),
                'walletExternalTransactions': ApiClient.convertToType(data['walletExternalTransactions'], [FilterItemInfo]),
                'events': ApiClient.convertToType(data['events'], [FilterItemInfo]),
                'programs': ApiClient.convertToType(data['programs'], [FilterItemInfo]),
                'funds': ApiClient.convertToType(data['funds'], [FilterItemInfo]),
                'follow': ApiClient.convertToType(data['follow'], [FilterItemInfo]),
            });
        }
    }
}
