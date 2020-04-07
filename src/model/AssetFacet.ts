import { FacetSortType } from './FacetSortType';
import { Timeframe } from './Timeframe';

export interface AssetFacet {
    id: string;
    title: string;
    description: string;
    logoUrl: string;
    url: string;
    sortType: FacetSortType;
    timeframe: Timeframe;
    sorting: string;
}

