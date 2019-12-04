import { FilterItemInfo } from './FilterItemInfo';
import ApiClient from "../ApiClient";
export class EventTradingItemFilters {
    constructor(data) {
        this['signalProgramDetails'] = data['signalProgramDetails'];
        this['allAssets'] = data['allAssets'];
        this['programDetails'] = data['programDetails'];
        this['fundDetails'] = data['fundDetails'];
    }
    static constructFromObject(data) {
        if (data) {
            return new EventTradingItemFilters({
                'signalProgramDetails': ApiClient.convertToType(data['signalProgramDetails'], [FilterItemInfo]),
                'allAssets': ApiClient.convertToType(data['allAssets'], [FilterItemInfo]),
                'programDetails': ApiClient.convertToType(data['programDetails'], [FilterItemInfo]),
                'fundDetails': ApiClient.convertToType(data['fundDetails'], [FilterItemInfo]),
            });
        }
    }
}
