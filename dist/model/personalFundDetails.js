import { AssetInvestmentStatus } from './assetInvestmentStatus';
import ApiClient from "../ApiClient";
export class PersonalFundDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new PersonalFundDetails()) {
        if (data) {
            if (data.hasOwnProperty('isOwnProgram')) {
                obj['isOwnProgram'] = ApiClient.convertToType(data['isOwnProgram'], 'boolean');
            }
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'boolean');
            }
            if (data.hasOwnProperty('isInvested')) {
                obj['isInvested'] = ApiClient.convertToType(data['isInvested'], 'boolean');
            }
            if (data.hasOwnProperty('canClose')) {
                obj['canClose'] = ApiClient.convertToType(data['canClose'], 'boolean');
            }
            if (data.hasOwnProperty('canReallocate')) {
                obj['canReallocate'] = ApiClient.convertToType(data['canReallocate'], 'boolean');
            }
            if (data.hasOwnProperty('canInvest')) {
                obj['canInvest'] = ApiClient.convertToType(data['canInvest'], 'boolean');
            }
            if (data.hasOwnProperty('canWithdraw')) {
                obj['canWithdraw'] = ApiClient.convertToType(data['canWithdraw'], 'boolean');
            }
            if (data.hasOwnProperty('hasNotifications')) {
                obj['hasNotifications'] = ApiClient.convertToType(data['hasNotifications'], 'boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = AssetInvestmentStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('pendingInput')) {
                obj['pendingInput'] = ApiClient.convertToType(data['pendingInput'], 'number');
            }
            if (data.hasOwnProperty('pendingOutput')) {
                obj['pendingOutput'] = ApiClient.convertToType(data['pendingOutput'], 'number');
            }
            if (data.hasOwnProperty('withdrawPercent')) {
                obj['withdrawPercent'] = ApiClient.convertToType(data['withdrawPercent'], 'number');
            }
            if (data.hasOwnProperty('availableReallocationPercents')) {
                obj['availableReallocationPercents'] = ApiClient.convertToType(data['availableReallocationPercents'], 'number');
            }
            if (data.hasOwnProperty('nextReallocationPercents')) {
                obj['nextReallocationPercents'] = ApiClient.convertToType(data['nextReallocationPercents'], 'Date');
            }
            if (data.hasOwnProperty('exitFeePersonal')) {
                obj['exitFeePersonal'] = ApiClient.convertToType(data['exitFeePersonal'], 'number');
            }
        }
        return obj;
    }
}
