import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { MigrationRequest } from './MigrationRequest';
import { ProgramOwnerActions } from './ProgramOwnerActions';
import ApiClient from "../ApiClient";
export class PersonalProgramDetails {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
        this['isReinvest'] = data['isReinvest'];
        this['isInvested'] = data['isInvested'];
        this['canInvest'] = data['canInvest'];
        this['canWithdraw'] = data['canWithdraw'];
        this['ownerActions'] = data['ownerActions'];
        this['hasNotifications'] = data['hasNotifications'];
        this['showTwoFactorButton'] = data['showTwoFactorButton'];
        this['value'] = data['value'];
        this['profit'] = data['profit'];
        this['profitPercent'] = data['profitPercent'];
        this['invested'] = data['invested'];
        this['pendingInput'] = data['pendingInput'];
        this['pendingOutput'] = data['pendingOutput'];
        this['pendingOutputIsWithdrawAll'] = data['pendingOutputIsWithdrawAll'];
        this['status'] = data['status'];
        this['successFeePersonal'] = data['successFeePersonal'];
        this['migration'] = data['migration'];
        this['subscribedAccounts'] = data['subscribedAccounts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalProgramDetails({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'isReinvest': ApiClient.convertToType(data['isReinvest'], 'boolean'),
                'isInvested': ApiClient.convertToType(data['isInvested'], 'boolean'),
                'canInvest': ApiClient.convertToType(data['canInvest'], 'boolean'),
                'canWithdraw': ApiClient.convertToType(data['canWithdraw'], 'boolean'),
                'ownerActions': ProgramOwnerActions.constructFromObject(data['ownerActions']),
                'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
                'showTwoFactorButton': ApiClient.convertToType(data['showTwoFactorButton'], 'boolean'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
                'invested': ApiClient.convertToType(data['invested'], 'number'),
                'pendingInput': ApiClient.convertToType(data['pendingInput'], 'number'),
                'pendingOutput': ApiClient.convertToType(data['pendingOutput'], 'number'),
                'pendingOutputIsWithdrawAll': ApiClient.convertToType(data['pendingOutputIsWithdrawAll'], 'boolean'),
                'status': AssetInvestmentStatus.constructFromObject(data['status']),
                'successFeePersonal': ApiClient.convertToType(data['successFeePersonal'], 'number'),
                'migration': MigrationRequest.constructFromObject(data['migration']),
                'subscribedAccounts': ApiClient.convertToType(data['subscribedAccounts'], 'number'),
            });
        }
    }
}
