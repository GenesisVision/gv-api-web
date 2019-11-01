import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { MigrationRequest } from './MigrationRequest';
import { SignalSubscription } from './SignalSubscription';
import ApiClient from "../ApiClient";
export class PersonalProgramDetails {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
        this['isReinvest'] = data['isReinvest'];
        this['isInvested'] = data['isInvested'];
        this['canClose'] = data['canClose'];
        this['canClosePeriod'] = data['canClosePeriod'];
        this['canInvest'] = data['canInvest'];
        this['canWithdraw'] = data['canWithdraw'];
        this['canMakeSignalProvider'] = data['canMakeSignalProvider'];
        this['canChangePassword'] = data['canChangePassword'];
        this['hasNotifications'] = data['hasNotifications'];
        this['showTwoFactorButton'] = data['showTwoFactorButton'];
        this['value'] = data['value'];
        this['profit'] = data['profit'];
        this['invested'] = data['invested'];
        this['pendingInput'] = data['pendingInput'];
        this['pendingOutput'] = data['pendingOutput'];
        this['pendingOutputIsWithdrawAll'] = data['pendingOutputIsWithdrawAll'];
        this['status'] = data['status'];
        this['successFeePersonal'] = data['successFeePersonal'];
        this['migration'] = data['migration'];
        this['signalSubscription'] = data['signalSubscription'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalProgramDetails({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'isReinvest': ApiClient.convertToType(data['isReinvest'], 'boolean'),
                'isInvested': ApiClient.convertToType(data['isInvested'], 'boolean'),
                'canClose': ApiClient.convertToType(data['canClose'], 'boolean'),
                'canClosePeriod': ApiClient.convertToType(data['canClosePeriod'], 'boolean'),
                'canInvest': ApiClient.convertToType(data['canInvest'], 'boolean'),
                'canWithdraw': ApiClient.convertToType(data['canWithdraw'], 'boolean'),
                'canMakeSignalProvider': ApiClient.convertToType(data['canMakeSignalProvider'], 'boolean'),
                'canChangePassword': ApiClient.convertToType(data['canChangePassword'], 'boolean'),
                'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
                'showTwoFactorButton': ApiClient.convertToType(data['showTwoFactorButton'], 'boolean'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'invested': ApiClient.convertToType(data['invested'], 'number'),
                'pendingInput': ApiClient.convertToType(data['pendingInput'], 'number'),
                'pendingOutput': ApiClient.convertToType(data['pendingOutput'], 'number'),
                'pendingOutputIsWithdrawAll': ApiClient.convertToType(data['pendingOutputIsWithdrawAll'], 'boolean'),
                'status': AssetInvestmentStatus.constructFromObject(data['status']),
                'successFeePersonal': ApiClient.convertToType(data['successFeePersonal'], 'number'),
                'migration': MigrationRequest.constructFromObject(data['migration']),
                'signalSubscription': SignalSubscription.constructFromObject(data['signalSubscription']),
            });
        }
    }
}
