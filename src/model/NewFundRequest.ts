import { FundAssetPart } from './FundAssetPart';

export interface NewFundRequest {
    assets: Array<FundAssetPart>;
    entryFee: number;
    exitFee: number;
    depositAmount: number;
    depositWalletId: string;
    title: string;
    description: string;
    logo: string;
}

