import { AssetType } from './AssetType';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface AssetDetails {
    id: string;
    logo: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    programDetails: ProgramAssetDetails;
}

