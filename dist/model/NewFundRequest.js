import { FundAssetPart } from './FundAssetPart';
import ApiClient from "../ApiClient";
export class NewFundRequest {
    constructor(data) {
        this['exitFee'] = data['exitFee'];
        this['assets'] = data['assets'];
        this['entryFee'] = data['entryFee'];
        this['depositAmount'] = data['depositAmount'];
        this['depositWalletId'] = data['depositWalletId'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new NewFundRequest({
                'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
                'assets': ApiClient.convertToType(data['assets'], [FundAssetPart]),
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
                'depositAmount': ApiClient.convertToType(data['depositAmount'], 'number'),
                'depositWalletId': ApiClient.convertToType(data['depositWalletId'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
            });
        }
    }
}
