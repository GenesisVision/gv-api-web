import { FacetSortType } from './FacetSortType';
import { FundsFilterSorting } from './FundsFilterSorting';
import { Timeframe } from './Timeframe';
export declare class FundFacet {
    'sorting': FundsFilterSorting;
    'id': string;
    'title': string;
    'description': string;
    'logo': string;
    'url': string;
    'sortType': FacetSortType;
    'timeframe': Timeframe;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundFacet | undefined;
}
