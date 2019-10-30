import { FilterModelOld } from './FilterModelOld';
export declare class EventInvestorItemFiltersOld {
    'signalProgramDetails'?: Array<FilterModelOld>;
    'programDetails'?: Array<FilterModelOld>;
    'fundDetails'?: Array<FilterModelOld>;
    'allAssets'?: Array<FilterModelOld>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: EventInvestorItemFiltersOld): EventInvestorItemFiltersOld;
}
