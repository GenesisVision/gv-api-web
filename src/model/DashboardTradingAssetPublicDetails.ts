import { DashboardProgramDetails } from './DashboardProgramDetails';
import { FundAssetDetails } from './FundAssetDetails';

export interface DashboardTradingAssetPublicDetails {
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    programDetails: DashboardProgramDetails;
    fundDetails: FundAssetDetails;
}

