import { EventInvestorItemFiltersOld } from './eventInvestorItemFiltersOld';
import { EventItemFiltersOld } from './eventItemFiltersOld';
export declare class EventFiltersOld {
    'manager'?: EventItemFiltersOld;
    'investor'?: EventInvestorItemFiltersOld;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: EventFiltersOld): EventFiltersOld;
}
