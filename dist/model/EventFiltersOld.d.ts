import { EventInvestorItemFiltersOld } from './EventInvestorItemFiltersOld';
import { EventItemFiltersOld } from './EventItemFiltersOld';
export declare class EventFiltersOld {
    'manager': EventItemFiltersOld;
    'investor': EventInvestorItemFiltersOld;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): EventFiltersOld;
}
