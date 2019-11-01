import { EventInvestorItemFiltersOld } from './EventInvestorItemFiltersOld';
import { EventItemFiltersOld } from './EventItemFiltersOld';
export class EventFiltersOld {
    constructor(data) {
        this['manager'] = data['manager'];
        this['investor'] = data['investor'];
    }
    static constructFromObject(data) {
        if (data) {
            return new EventFiltersOld({
                'manager': EventItemFiltersOld.constructFromObject(data['manager']),
                'investor': EventInvestorItemFiltersOld.constructFromObject(data['investor']),
            });
        }
    }
}
