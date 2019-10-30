import { FundFacet } from './FundFacet';
export declare class FundSets {
    'sets'?: Array<FundFacet>;
    'favoritesCount'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundSets): FundSets;
}
