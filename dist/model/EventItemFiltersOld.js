import { FilterModelOld } from './FilterModelOld';
import ApiClient from "../ApiClient";
export class EventItemFiltersOld {
    static constructFromObject(data, obj = new EventItemFiltersOld()) {
        if (data) {
            if (data.hasOwnProperty('programDetails')) {
                obj['programDetails'] = ApiClient.convertToType(data['programDetails'], [FilterModelOld]);
            }
            if (data.hasOwnProperty('fundDetails')) {
                obj['fundDetails'] = ApiClient.convertToType(data['fundDetails'], [FilterModelOld]);
            }
            if (data.hasOwnProperty('allAssets')) {
                obj['allAssets'] = ApiClient.convertToType(data['allAssets'], [FilterModelOld]);
            }
        }
        return obj;
    }
}
