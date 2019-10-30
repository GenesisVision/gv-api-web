import { ProgramFacet } from './programFacet';
export declare class ProgramSets {
    'sets'?: Array<ProgramFacet>;
    'favoritesCount'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramSets): ProgramSets;
}
