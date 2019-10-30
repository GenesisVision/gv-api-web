import { FacetSortType } from './facetSortType';
import { FundsFilterSorting } from './fundsFilterSorting';
import { Timeframe } from './timeframe';
export declare class FundFacet {
    'sorting'?: FundsFilterSorting;
    'id'?: string;
    'title'?: string;
    'description'?: string;
    'logo'?: string;
    'url'?: string;
    'sortType'?: FacetSortType;
    'timeframe'?: Timeframe;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundFacet): FundFacet;
}
