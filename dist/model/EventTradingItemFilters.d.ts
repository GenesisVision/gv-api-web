import { FilterItemInfo } from './FilterItemInfo';
export declare class EventTradingItemFilters {
    'follow': Array<FilterItemInfo>;
    'all': Array<FilterItemInfo>;
    'program': Array<FilterItemInfo>;
    'fund': Array<FilterItemInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): EventTradingItemFilters | undefined;
}
