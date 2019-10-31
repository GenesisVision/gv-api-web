import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { MigrationRequestOld } from './MigrationRequestOld';
import { SignalSubscription } from './SignalSubscription';
import ApiClient from "../ApiClient";
export class PersonalProgramDetailsFullOld {
    constructor(data) {
        this['isReinvest'] = data['isReinvest'];
        this['gvtValue'] = data['gvtValue'];
        this['showTwoFactorButton'] = data['showTwoFactorButton'];
        this['signalSubscription'] = data['signalSubscription'];
        this['login'] = data['login'];
        this['notificationAvailableToInvestId'] = data['notificationAvailableToInvestId'];
        this['canMakeSignalProvider'] = data['canMakeSignalProvider'];
        this['canChangePassword'] = data['canChangePassword'];
        this['migration'] = data['migration'];
        this['successFeePersonal'] = data['successFeePersonal'];
        this['isFavorite'] = data['isFavorite'];
        this['isInvested'] = data['isInvested'];
        this['isOwnProgram'] = data['isOwnProgram'];
        this['canCloseAsset'] = data['canCloseAsset'];
        this['isFinishing'] = data['isFinishing'];
        this['canInvest'] = data['canInvest'];
        this['canWithdraw'] = data['canWithdraw'];
        this['canClosePeriod'] = data['canClosePeriod'];
        this['hasNotifications'] = data['hasNotifications'];
        this['value'] = data['value'];
        this['profit'] = data['profit'];
        this['invested'] = data['invested'];
        this['pendingInput'] = data['pendingInput'];
        this['pendingOutput'] = data['pendingOutput'];
        this['pendingOutputIsWithdrawAll'] = data['pendingOutputIsWithdrawAll'];
        this['status'] = data['status'];
    }
    static constructFromObject(data) {
        return new PersonalProgramDetailsFullOld({
            'isReinvest': ApiClient.convertToType(data['isReinvest'], 'boolean'),
            'gvtValue': ApiClient.convertToType(data['gvtValue'], 'number'),
            'showTwoFactorButton': ApiClient.convertToType(data['showTwoFactorButton'], 'boolean'),
            'signalSubscription': SignalSubscription.constructFromObject(data['signalSubscription']),
            'login': ApiClient.convertToType(data['login'], 'string'),
            'notificationAvailableToInvestId': ApiClient.convertToType(data['notificationAvailableToInvestId'], 'string'),
            'canMakeSignalProvider': ApiClient.convertToType(data['canMakeSignalProvider'], 'boolean'),
            'canChangePassword': ApiClient.convertToType(data['canChangePassword'], 'boolean'),
            'migration': MigrationRequestOld.constructFromObject(data['migration']),
            'successFeePersonal': ApiClient.convertToType(data['successFeePersonal'], 'number'),
            'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
            'isInvested': ApiClient.convertToType(data['isInvested'], 'boolean'),
            'isOwnProgram': ApiClient.convertToType(data['isOwnProgram'], 'boolean'),
            'canCloseAsset': ApiClient.convertToType(data['canCloseAsset'], 'boolean'),
            'isFinishing': ApiClient.convertToType(data['isFinishing'], 'boolean'),
            'canInvest': ApiClient.convertToType(data['canInvest'], 'boolean'),
            'canWithdraw': ApiClient.convertToType(data['canWithdraw'], 'boolean'),
            'canClosePeriod': ApiClient.convertToType(data['canClosePeriod'], 'boolean'),
            'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
            'value': ApiClient.convertToType(data['value'], 'number'),
            'profit': ApiClient.convertToType(data['profit'], 'number'),
            'invested': ApiClient.convertToType(data['invested'], 'number'),
            'pendingInput': ApiClient.convertToType(data['pendingInput'], 'number'),
            'pendingOutput': ApiClient.convertToType(data['pendingOutput'], 'number'),
            'pendingOutputIsWithdrawAll': ApiClient.convertToType(data['pendingOutputIsWithdrawAll'], 'boolean'),
            'status': AssetInvestmentStatus.constructFromObject(data['status']),
        });
    }
}
