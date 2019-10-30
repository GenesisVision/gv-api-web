import { ProgramFacet } from './ProgramFacet';
export declare class ProgramSets {
    'sets'?: Array<ProgramFacet>;
    'favoritesCount'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramSets): ProgramSets;
}
