import { FilterModelOld } from './filterModelOld';
export declare class EventInvestorItemFiltersOld {
    'signalProgramDetails'?: Array<FilterModelOld>;
    'programDetails'?: Array<FilterModelOld>;
    'fundDetails'?: Array<FilterModelOld>;
    'allAssets'?: Array<FilterModelOld>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: EventInvestorItemFiltersOld): EventInvestorItemFiltersOld;
}
