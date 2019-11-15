import { FilterItemInfo } from './FilterItemInfo';
export declare class FilterInfo {
    'walletTransactions': Array<FilterItemInfo>;
    'walletExternalTransactions': Array<FilterItemInfo>;
    'events': Array<FilterItemInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FilterInfo | undefined;
}
