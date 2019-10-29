import { AssetInvestmentRequest } from './assetInvestmentRequest';
export declare class ItemsViewModelAssetInvestmentRequest {
    'items'?: [AssetInvestmentRequest];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ItemsViewModelAssetInvestmentRequest): ItemsViewModelAssetInvestmentRequest;
}
