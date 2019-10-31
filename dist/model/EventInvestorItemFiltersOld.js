import { FilterModelOld } from './FilterModelOld';
import ApiClient from "../ApiClient";
export class EventInvestorItemFiltersOld {
    constructor(data) {
        this['signalProgramDetails'] = data['signalProgramDetails'];
        this['programDetails'] = data['programDetails'];
        this['fundDetails'] = data['fundDetails'];
        this['allAssets'] = data['allAssets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new EventInvestorItemFiltersOld({
                'signalProgramDetails': ApiClient.convertToType(data['signalProgramDetails'], [FilterModelOld]),
                'programDetails': ApiClient.convertToType(data['programDetails'], [FilterModelOld]),
                'fundDetails': ApiClient.convertToType(data['fundDetails'], [FilterModelOld]),
                'allAssets': ApiClient.convertToType(data['allAssets'], [FilterModelOld]),
            });
        }
    }
}
