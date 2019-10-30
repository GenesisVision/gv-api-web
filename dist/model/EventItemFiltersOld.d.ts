import { FilterModelOld } from './FilterModelOld';
export declare class EventItemFiltersOld {
    'programDetails'?: Array<FilterModelOld>;
    'fundDetails'?: Array<FilterModelOld>;
    'allAssets'?: Array<FilterModelOld>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: EventItemFiltersOld): EventItemFiltersOld;
}
