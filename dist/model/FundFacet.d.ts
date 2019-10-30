import { FacetSortType } from './FacetSortType';
import { FundsFilterSorting } from './FundsFilterSorting';
import { Timeframe } from './Timeframe';
export declare class FundFacet {
    'sorting'?: FundsFilterSorting;
    'id'?: string;
    'title'?: string;
    'description'?: string;
    'logo'?: string;
    'url'?: string;
    'sortType'?: FacetSortType;
    'timeframe'?: Timeframe;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundFacet): FundFacet;
}
