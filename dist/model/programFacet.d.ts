import { FacetSortType } from './facetSortType';
import { ProgramsFilterSorting } from './programsFilterSorting';
import { Timeframe } from './timeframe';
export declare class ProgramFacet {
    'sorting'?: ProgramsFilterSorting;
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
    }, obj?: ProgramFacet): ProgramFacet;
}
