import { FilterItemInfo } from './filterItemInfo';
export declare class FilterInfo {
    'walletTransactions'?: [FilterItemInfo];
    'walletExternalTransactions'?: [FilterItemInfo];
    'events'?: [FilterItemInfo];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FilterInfo): FilterInfo;
}
