import { FilterItemInfo } from './FilterItemInfo';
export declare class EventTradingItemFilters {
    'signalProgramDetails': Array<FilterItemInfo>;
    'allAssets': Array<FilterItemInfo>;
    'programDetails': Array<FilterItemInfo>;
    'fundDetails': Array<FilterItemInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): EventTradingItemFilters | undefined;
}
