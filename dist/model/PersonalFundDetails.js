import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { FundOwnerActions } from './FundOwnerActions';
import ApiClient from "../ApiClient";
export class PersonalFundDetails {
    constructor(data) {
        this['isFavorite'] = data['isFavorite'];
        this['isInvested'] = data['isInvested'];
        this['canInvest'] = data['canInvest'];
        this['canWithdraw'] = data['canWithdraw'];
        this['ownerActions'] = data['ownerActions'];
        this['hasNotifications'] = data['hasNotifications'];
        this['value'] = data['value'];
        this['status'] = data['status'];
        this['pendingInput'] = data['pendingInput'];
        this['pendingOutput'] = data['pendingOutput'];
        this['pendingInOutCurrency'] = data['pendingInOutCurrency'];
        this['withdrawPercent'] = data['withdrawPercent'];
        this['availableReallocationPercents'] = data['availableReallocationPercents'];
        this['nextReallocationPercents'] = data['nextReallocationPercents'];
        this['exitFeePersonal'] = data['exitFeePersonal'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalFundDetails({
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'isInvested': ApiClient.convertToType(data['isInvested'], 'boolean'),
                'canInvest': ApiClient.convertToType(data['canInvest'], 'boolean'),
                'canWithdraw': ApiClient.convertToType(data['canWithdraw'], 'boolean'),
                'ownerActions': FundOwnerActions.constructFromObject(data['ownerActions']),
                'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'status': AssetInvestmentStatus.constructFromObject(data['status']),
                'pendingInput': ApiClient.convertToType(data['pendingInput'], 'number'),
                'pendingOutput': ApiClient.convertToType(data['pendingOutput'], 'number'),
                'pendingInOutCurrency': ApiClient.convertToType(data['pendingInOutCurrency'], 'string'),
                'withdrawPercent': ApiClient.convertToType(data['withdrawPercent'], 'number'),
                'availableReallocationPercents': ApiClient.convertToType(data['availableReallocationPercents'], 'number'),
                'nextReallocationPercents': ApiClient.convertToType(data['nextReallocationPercents'], 'Date'),
                'exitFeePersonal': ApiClient.convertToType(data['exitFeePersonal'], 'number'),
            });
        }
    }
}
