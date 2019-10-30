import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import ApiClient from "../ApiClient";
export class PersonalFundDetailsFullOld {
    static constructFromObject(data, obj = new PersonalFundDetailsFullOld()) {
        if (data) {
            if (data.hasOwnProperty('withdrawPercent')) {
                obj['withdrawPercent'] = ApiClient.convertToType(data['withdrawPercent'], 'number');
            }
            if (data.hasOwnProperty('canReallocate')) {
                obj['canReallocate'] = ApiClient.convertToType(data['canReallocate'], 'boolean');
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
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'boolean');
            }
            if (data.hasOwnProperty('isInvested')) {
                obj['isInvested'] = ApiClient.convertToType(data['isInvested'], 'boolean');
            }
            if (data.hasOwnProperty('isOwnProgram')) {
                obj['isOwnProgram'] = ApiClient.convertToType(data['isOwnProgram'], 'boolean');
            }
            if (data.hasOwnProperty('canCloseAsset')) {
                obj['canCloseAsset'] = ApiClient.convertToType(data['canCloseAsset'], 'boolean');
            }
            if (data.hasOwnProperty('isFinishing')) {
                obj['isFinishing'] = ApiClient.convertToType(data['isFinishing'], 'boolean');
            }
            if (data.hasOwnProperty('canInvest')) {
                obj['canInvest'] = ApiClient.convertToType(data['canInvest'], 'boolean');
            }
            if (data.hasOwnProperty('canWithdraw')) {
                obj['canWithdraw'] = ApiClient.convertToType(data['canWithdraw'], 'boolean');
            }
            if (data.hasOwnProperty('canClosePeriod')) {
                obj['canClosePeriod'] = ApiClient.convertToType(data['canClosePeriod'], 'boolean');
            }
            if (data.hasOwnProperty('hasNotifications')) {
                obj['hasNotifications'] = ApiClient.convertToType(data['hasNotifications'], 'boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('invested')) {
                obj['invested'] = ApiClient.convertToType(data['invested'], 'number');
            }
            if (data.hasOwnProperty('pendingInput')) {
                obj['pendingInput'] = ApiClient.convertToType(data['pendingInput'], 'number');
            }
            if (data.hasOwnProperty('pendingOutput')) {
                obj['pendingOutput'] = ApiClient.convertToType(data['pendingOutput'], 'number');
            }
            if (data.hasOwnProperty('pendingOutputIsWithdrawAll')) {
                obj['pendingOutputIsWithdrawAll'] = ApiClient.convertToType(data['pendingOutputIsWithdrawAll'], 'boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = AssetInvestmentStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }
}
