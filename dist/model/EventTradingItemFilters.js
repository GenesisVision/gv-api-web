import { FilterModel } from './FilterModel';
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
                'signalProgramDetails': ApiClient.convertToType(data['signalProgramDetails'], [FilterModel]),
                'allAssets': ApiClient.convertToType(data['allAssets'], [FilterModel]),
                'programDetails': ApiClient.convertToType(data['programDetails'], [FilterModel]),
                'fundDetails': ApiClient.convertToType(data['fundDetails'], [FilterModel]),
            });
        }
    }
}
