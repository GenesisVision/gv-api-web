import { FilterModel } from './FilterModel';
import ApiClient from "../ApiClient";
export class EventInvestingItemFilters {
    constructor(data) {
        this['allAssets'] = data['allAssets'];
        this['programDetails'] = data['programDetails'];
        this['fundDetails'] = data['fundDetails'];
    }
    static constructFromObject(data) {
        if (data) {
            return new EventInvestingItemFilters({
                'allAssets': ApiClient.convertToType(data['allAssets'], [FilterModel]),
                'programDetails': ApiClient.convertToType(data['programDetails'], [FilterModel]),
                'fundDetails': ApiClient.convertToType(data['fundDetails'], [FilterModel]),
            });
        }
    }
}
