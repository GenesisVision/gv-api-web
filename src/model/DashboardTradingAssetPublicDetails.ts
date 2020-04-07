import { FundAssetDetails } from './FundAssetDetails';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface DashboardTradingAssetPublicDetails {
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    programDetails: ProgramAssetDetails;
    fundDetails: FundAssetDetails;
}

