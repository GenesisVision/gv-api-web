import { EventInvestorItemFiltersOld } from './EventInvestorItemFiltersOld';
import { EventItemFiltersOld } from './EventItemFiltersOld';
export class EventFiltersOld {
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
