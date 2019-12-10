import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import ApiClient from "../ApiClient";
export class PersonalInvestingProgramDetailsList {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
        this['isReinvest'] = data['isReinvest'];
        this['canInvest'] = data['canInvest'];
        this['canWithdraw'] = data['canWithdraw'];
        this['share'] = data['share'];
        this['value'] = data['value'];
        this['profit'] = data['profit'];
        this['profitPercent'] = data['profitPercent'];
        this['invested'] = data['invested'];
        this['status'] = data['status'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalInvestingProgramDetailsList({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'isReinvest': ApiClient.convertToType(data['isReinvest'], 'boolean'),
                'canInvest': ApiClient.convertToType(data['canInvest'], 'boolean'),
                'canWithdraw': ApiClient.convertToType(data['canWithdraw'], 'boolean'),
                'share': ApiClient.convertToType(data['share'], 'number'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
                'invested': ApiClient.convertToType(data['invested'], 'number'),
                'status': AssetInvestmentStatus.constructFromObject(data['status']),
            });
        }
    }
}
