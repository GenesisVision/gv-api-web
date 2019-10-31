import { FilterModelOld } from './FilterModelOld';
import ApiClient from "../ApiClient";
export class EventItemFiltersOld {
    constructor(data) {
        this['programDetails'] = data['programDetails'];
        this['fundDetails'] = data['fundDetails'];
        this['allAssets'] = data['allAssets'];
    }
    static constructFromObject(data) {
        return new EventItemFiltersOld({
            'programDetails': ApiClient.convertToType(data['programDetails'], [FilterModelOld]),
            'fundDetails': ApiClient.convertToType(data['fundDetails'], [FilterModelOld]),
            'allAssets': ApiClient.convertToType(data['allAssets'], [FilterModelOld]),
        });
    }
}
