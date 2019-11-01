import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import ApiClient from "../ApiClient";
export class PersonalFundDetailsFullOld {
    constructor(data) {
        this['withdrawPercent'] = data['withdrawPercent'];
        this['canReallocate'] = data['canReallocate'];
        this['availableReallocationPercents'] = data['availableReallocationPercents'];
        this['nextReallocationPercents'] = data['nextReallocationPercents'];
        this['exitFeePersonal'] = data['exitFeePersonal'];
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
        if (data) {
            return new PersonalFundDetailsFullOld({
                'withdrawPercent': ApiClient.convertToType(data['withdrawPercent'], 'number'),
                'canReallocate': ApiClient.convertToType(data['canReallocate'], 'boolean'),
                'availableReallocationPercents': ApiClient.convertToType(data['availableReallocationPercents'], 'number'),
                'nextReallocationPercents': ApiClient.convertToType(data['nextReallocationPercents'], 'Date'),
                'exitFeePersonal': ApiClient.convertToType(data['exitFeePersonal'], 'number'),
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
}
