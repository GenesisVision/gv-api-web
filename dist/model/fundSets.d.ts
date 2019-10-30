import { FundFacet } from './fundFacet';
export declare class FundSets {
    'sets'?: [FundFacet];
    'favoritesCount'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundSets): FundSets;
}
