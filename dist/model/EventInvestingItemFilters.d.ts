import { FilterModel } from './FilterModel';
export declare class EventInvestingItemFilters {
    'allAssets': Array<FilterModel>;
    'programDetails': Array<FilterModel>;
    'fundDetails': Array<FilterModel>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): EventInvestingItemFilters | undefined;
}
