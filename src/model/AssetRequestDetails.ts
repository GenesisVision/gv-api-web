import { AssetType } from './AssetType';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface AssetRequestDetails {
    id: string;
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    programDetails: ProgramAssetDetails;
    entryFee: number;
    managementFee: number;
    exitFee: number;
    withdrawPercent: number;
    isWithdrawAll: boolean;
    successFee: number;
}

