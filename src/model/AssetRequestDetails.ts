import { AssetType } from './AssetType';
import { ProgramAssetDetails } from './ProgramAssetDetails';

export interface AssetRequestDetails {
    entryFee: number;
    managementFee: number;
    exitFee: number;
    withdrawPercent: number;
    isWithdrawAll: boolean;
    successFee: number;
    id: string;
    logoUrl: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    programDetails: ProgramAssetDetails;
}

