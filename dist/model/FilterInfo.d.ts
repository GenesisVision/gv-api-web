import { EventFilters } from './EventFilters';
import { FilterItemInfo } from './FilterItemInfo';
export declare class FilterInfo {
    'walletTransactions': Array<FilterItemInfo>;
    'walletExternalTransactions': Array<FilterItemInfo>;
    'events': EventFilters;
    'assets': Array<FilterItemInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FilterInfo | undefined;
}
