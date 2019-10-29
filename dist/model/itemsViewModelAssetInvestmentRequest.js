import { AssetInvestmentRequest } from './assetInvestmentRequest';
import ApiClient from "../ApiClient";
export class ItemsViewModelAssetInvestmentRequest {
    constructor() {
    }
    static constructFromObject(data, obj = new ItemsViewModelAssetInvestmentRequest()) {
        if (data) {
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [AssetInvestmentRequest]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
