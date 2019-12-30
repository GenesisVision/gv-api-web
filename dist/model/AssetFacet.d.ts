import { FacetSortType } from './FacetSortType';
import { Timeframe } from './Timeframe';
export declare class AssetFacet {
    'id': string;
    'title': string;
    'description': string;
    'logo': string;
    'url': string;
    'sortType': FacetSortType;
    'timeframe': Timeframe;
    'sorting': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetFacet | undefined;
}
