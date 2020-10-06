import { FundAssetPart } from './FundAssetPart';

export interface NewFundRequest {
    title: string;
    description: string;
    logo: string;
    assets: Array<FundAssetPart>;
    entryFee: number;
    exitFee: number;
    depositAmount: number;
    depositWalletId: string;
}

