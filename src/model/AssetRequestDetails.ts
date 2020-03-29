import { AssetType } from './AssetType';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface AssetRequestDetails {
    entryFee: number;
    exitFee: number;
    withdrawPercent: number;
    isWithdrawAll: boolean;
    successFee: number;
    id: string;
    logo: string;
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    programDetails: ProgramAssetDetails;
}

