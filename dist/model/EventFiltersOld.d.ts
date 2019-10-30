import { EventInvestorItemFiltersOld } from './EventInvestorItemFiltersOld';
import { EventItemFiltersOld } from './EventItemFiltersOld';
export declare class EventFiltersOld {
    'manager'?: EventItemFiltersOld;
    'investor'?: EventInvestorItemFiltersOld;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: EventFiltersOld): EventFiltersOld;
}
