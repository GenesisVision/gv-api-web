import { FacetSortType } from './FacetSortType';
import { ProgramsFilterSorting } from './ProgramsFilterSorting';
import { Timeframe } from './Timeframe';
export declare class ProgramFacet {
    'sorting': ProgramsFilterSorting;
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
    }): ProgramFacet;
}
