import { FilterItemInfo } from './FilterItemInfo';
import ApiClient from "../ApiClient";
export class EventInvestingItemFilters {
    constructor(data) {
        this['all'] = data['all'];
        this['program'] = data['program'];
        this['fund'] = data['fund'];
    }
    static constructFromObject(data) {
        if (data) {
            return new EventInvestingItemFilters({
                'all': ApiClient.convertToType(data['all'], [FilterItemInfo]),
                'program': ApiClient.convertToType(data['program'], [FilterItemInfo]),
                'fund': ApiClient.convertToType(data['fund'], [FilterItemInfo]),
            });
        }
    }
}
