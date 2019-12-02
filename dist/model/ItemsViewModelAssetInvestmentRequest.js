import { AssetInvestmentRequest } from './AssetInvestmentRequest';
import ApiClient from "../ApiClient";
export class ItemsViewModelAssetInvestmentRequest {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelAssetInvestmentRequest({
                'items': ApiClient.convertToType(data['items'], [AssetInvestmentRequest]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
