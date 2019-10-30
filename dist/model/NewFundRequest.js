import { FundAssetPart } from './FundAssetPart';
import ApiClient from "../ApiClient";
export class NewFundRequest {
    static constructFromObject(data, obj = new NewFundRequest()) {
        if (data) {
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'number');
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [FundAssetPart]);
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'number');
            }
            if (data.hasOwnProperty('depositWalletId')) {
                obj['depositWalletId'] = ApiClient.convertToType(data['depositWalletId'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
        }
        return obj;
    }
}
