import { FundAssetDetails } from './FundAssetDetails';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface DashboardTradingAssetPublicDetails {
    logo: string;
    color: string;
    title: string;
    url: string;
    programDetails: ProgramAssetDetails;
    fundDetails: FundAssetDetails;
}

