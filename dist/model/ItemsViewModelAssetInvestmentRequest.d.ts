import { AssetInvestmentRequest } from './AssetInvestmentRequest';
export declare class ItemsViewModelAssetInvestmentRequest {
    'items': Array<AssetInvestmentRequest>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelAssetInvestmentRequest | undefined;
}
