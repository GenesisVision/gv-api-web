import { FundAssetPart } from './FundAssetPart';
import ApiClient from "../ApiClient";
export class NewFundRequest {
    constructor(data) {
        this['assets'] = data['assets'];
        this['entryFee'] = data['entryFee'];
        this['exitFee'] = data['exitFee'];
        this['depositAmount'] = data['depositAmount'];
        this['depositWalletId'] = data['depositWalletId'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new NewFundRequest({
                'assets': ApiClient.convertToType(data['assets'], [FundAssetPart]),
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
                'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
                'depositAmount': ApiClient.convertToType(data['depositAmount'], 'number'),
                'depositWalletId': ApiClient.convertToType(data['depositWalletId'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
            });
        }
    }
}
