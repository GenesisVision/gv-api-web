import { ProgramFacet } from './ProgramFacet';
import { ProgramMinInvestAmount } from './ProgramMinInvestAmount';
import { ProgramTag } from './ProgramTag';
export declare class ProgramAssetPlatformInfo {
    'facets': Array<ProgramFacet>;
    'tags': Array<ProgramTag>;
    'availableProgramCurrencies': Array<string>;
    'minInvestAmounts': Array<ProgramMinInvestAmount>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramAssetPlatformInfo | undefined;
}
