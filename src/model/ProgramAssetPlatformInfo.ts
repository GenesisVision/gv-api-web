import { AssetFacet } from './AssetFacet';
import { ProgramCreateAssetPlatformInfo } from './ProgramCreateAssetPlatformInfo';
import { ProgramMinInvestAmount } from './ProgramMinInvestAmount';
import { Tag } from './Tag';

export interface ProgramAssetPlatformInfo {
    facets: Array<AssetFacet>;
    tags: Array<Tag>;
    availableProgramCurrencies: Array<string>;
    minInvestAmounts: Array<ProgramMinInvestAmount>;
    periods: Array<number>;
    createProgramInfo: ProgramCreateAssetPlatformInfo;
}

