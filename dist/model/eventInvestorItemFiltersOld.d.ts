import { FilterModelOld } from './filterModelOld';
export declare class EventInvestorItemFiltersOld {
    'signalProgramDetails'?: [FilterModelOld];
    'programDetails'?: [FilterModelOld];
    'fundDetails'?: [FilterModelOld];
    'allAssets'?: [FilterModelOld];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: EventInvestorItemFiltersOld): EventInvestorItemFiltersOld;
}
