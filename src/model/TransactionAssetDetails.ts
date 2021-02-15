import { AssetType } from './AssetType';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface TransactionAssetDetails {
    id: string;
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    programDetails: ProgramAssetDetails;
    description: string;
    manager: string;
}

