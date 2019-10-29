import { FilterItemInfo } from './filterItemInfo';
import ApiClient from "../ApiClient";
export class FilterInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new FilterInfo()) {
        if (data) {
            if (data.hasOwnProperty('walletTransactions')) {
                obj['walletTransactions'] = ApiClient.convertToType(data['walletTransactions'], [FilterItemInfo]);
            }
            if (data.hasOwnProperty('walletExternalTransactions')) {
                obj['walletExternalTransactions'] = ApiClient.convertToType(data['walletExternalTransactions'], [FilterItemInfo]);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [FilterItemInfo]);
            }
        }
        return obj;
    }
}
