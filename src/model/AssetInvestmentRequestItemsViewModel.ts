import { AssetInvestmentRequest } from './AssetInvestmentRequest';

export interface AssetInvestmentRequestItemsViewModel {
    readonly items: Array<AssetInvestmentRequest>;
    readonly total: number;
}

