import { DashboardFundDetails } from './DashboardFundDetails';
import { DashboardProgramDetails } from './DashboardProgramDetails';
import { ProfilePublicShort } from './ProfilePublicShort';

export interface DashboardTradingAssetPublicDetails {
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    programDetails: DashboardProgramDetails;
    fundDetails: DashboardFundDetails;
    owner: ProfilePublicShort;
}

