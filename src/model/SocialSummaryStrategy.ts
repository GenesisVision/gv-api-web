import { AssetType } from './AssetType';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface SocialSummaryStrategy {
    id: string;
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    programDetails: ProgramAssetDetails;
    investorsCount: number;
    subscribersCount: number;
    profitPercent: number;
}

