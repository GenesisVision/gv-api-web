import { ProgramFacet } from './ProgramFacet';
export declare class ProgramSets {
    'sets': Array<ProgramFacet>;
    'favoritesCount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramSets | undefined;
}
