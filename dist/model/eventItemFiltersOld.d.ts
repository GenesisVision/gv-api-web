import { FilterModelOld } from './filterModelOld';
export declare class EventItemFiltersOld {
    'programDetails'?: Array<FilterModelOld>;
    'fundDetails'?: Array<FilterModelOld>;
    'allAssets'?: Array<FilterModelOld>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: EventItemFiltersOld): EventItemFiltersOld;
}
