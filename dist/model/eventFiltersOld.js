import { EventInvestorItemFiltersOld } from './eventInvestorItemFiltersOld';
import { EventItemFiltersOld } from './eventItemFiltersOld';
export class EventFiltersOld {
    constructor() {
    }
    static constructFromObject(data, obj = new EventFiltersOld()) {
        if (data) {
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = EventItemFiltersOld.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('investor')) {
                obj['investor'] = EventInvestorItemFiltersOld.constructFromObject(data['investor']);
            }
        }
        return obj;
    }
}
