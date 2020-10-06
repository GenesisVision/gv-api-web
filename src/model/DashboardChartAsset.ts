import { AssetType } from './AssetType';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface DashboardChartAsset {
    id: string;
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    programDetails: ProgramAssetDetails;
    isPrivateAccount: boolean;
}

