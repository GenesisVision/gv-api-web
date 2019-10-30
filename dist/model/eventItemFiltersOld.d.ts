import { FilterModelOld } from './filterModelOld';
export declare class EventItemFiltersOld {
    'programDetails'?: [FilterModelOld];
    'fundDetails'?: [FilterModelOld];
    'allAssets'?: [FilterModelOld];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: EventItemFiltersOld): EventItemFiltersOld;
}
