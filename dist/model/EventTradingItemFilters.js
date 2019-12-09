import { FilterItemInfo } from './FilterItemInfo';
import ApiClient from "../ApiClient";
export class EventTradingItemFilters {
    constructor(data) {
        this['follow'] = data['follow'];
        this['all'] = data['all'];
        this['program'] = data['program'];
        this['fund'] = data['fund'];
    }
    static constructFromObject(data) {
        if (data) {
            return new EventTradingItemFilters({
                'follow': ApiClient.convertToType(data['follow'], [FilterItemInfo]),
                'all': ApiClient.convertToType(data['all'], [FilterItemInfo]),
                'program': ApiClient.convertToType(data['program'], [FilterItemInfo]),
                'fund': ApiClient.convertToType(data['fund'], [FilterItemInfo]),
            });
        }
    }
}
