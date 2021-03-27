import { FundAssetPart } from './FundAssetPart';

export interface NewSelfManagedFundRequest {
    title: string;
    logo: string;
    assets: Array<FundAssetPart>;
    depositAmount: number;
    depositWalletId: string;
}

