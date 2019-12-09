import { FilterItemInfo } from './FilterItemInfo';
export declare class EventInvestingItemFilters {
    'all': Array<FilterItemInfo>;
    'program': Array<FilterItemInfo>;
    'fund': Array<FilterItemInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): EventInvestingItemFilters | undefined;
}
