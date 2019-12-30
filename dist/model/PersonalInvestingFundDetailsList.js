import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import ApiClient from "../ApiClient";
export class PersonalInvestingFundDetailsList {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
        this['canInvest'] = data['canInvest'];
        this['canWithdraw'] = data['canWithdraw'];
        this['share'] = data['share'];
        this['value'] = data['value'];
        this['status'] = data['status'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalInvestingFundDetailsList({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'canInvest': ApiClient.convertToType(data['canInvest'], 'boolean'),
                'canWithdraw': ApiClient.convertToType(data['canWithdraw'], 'boolean'),
                'share': ApiClient.convertToType(data['share'], 'number'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'status': AssetInvestmentStatus.constructFromObject(data['status']),
            });
        }
    }
}
