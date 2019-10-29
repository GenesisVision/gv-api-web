import { ProgramFacet } from './programFacet';
import { ProgramMinInvestAmount } from './programMinInvestAmount';
import { ProgramTag } from './programTag';
export declare class ProgramAssetPlatformInfo {
    'facets'?: [ProgramFacet];
    'tags'?: [ProgramTag];
    'availableProgramCurrencies'?: [string];
    'minInvestAmounts'?: [ProgramMinInvestAmount];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramAssetPlatformInfo): ProgramAssetPlatformInfo;
}
