import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { MigrationRequestOld } from './MigrationRequestOld';
import { SignalSubscription } from './SignalSubscription';
import ApiClient from "../ApiClient";
export class PersonalProgramDetailsFullOld {
    static constructFromObject(data, obj = new PersonalProgramDetailsFullOld()) {
        if (data) {
            if (data.hasOwnProperty('isReinvest')) {
                obj['isReinvest'] = ApiClient.convertToType(data['isReinvest'], 'boolean');
            }
            if (data.hasOwnProperty('gvtValue')) {
                obj['gvtValue'] = ApiClient.convertToType(data['gvtValue'], 'number');
            }
            if (data.hasOwnProperty('showTwoFactorButton')) {
                obj['showTwoFactorButton'] = ApiClient.convertToType(data['showTwoFactorButton'], 'boolean');
            }
            if (data.hasOwnProperty('signalSubscription')) {
                obj['signalSubscription'] = SignalSubscription.constructFromObject(data['signalSubscription']);
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'string');
            }
            if (data.hasOwnProperty('notificationAvailableToInvestId')) {
                obj['notificationAvailableToInvestId'] = ApiClient.convertToType(data['notificationAvailableToInvestId'], 'string');
            }
            if (data.hasOwnProperty('canMakeSignalProvider')) {
                obj['canMakeSignalProvider'] = ApiClient.convertToType(data['canMakeSignalProvider'], 'boolean');
            }
            if (data.hasOwnProperty('canChangePassword')) {
                obj['canChangePassword'] = ApiClient.convertToType(data['canChangePassword'], 'boolean');
            }
            if (data.hasOwnProperty('migration')) {
                obj['migration'] = MigrationRequestOld.constructFromObject(data['migration']);
            }
            if (data.hasOwnProperty('successFeePersonal')) {
                obj['successFeePersonal'] = ApiClient.convertToType(data['successFeePersonal'], 'number');
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
