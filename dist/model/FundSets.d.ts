import { FundFacet } from './FundFacet';
export declare class FundSets {
    'sets': Array<FundFacet>;
    'favoritesCount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundSets | undefined;
}
