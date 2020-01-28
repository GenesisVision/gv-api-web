/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AssetInvestmentStatus } from './AssetInvestmentStatus';
import { FundOwnerActions } from './FundOwnerActions';

import ApiClient from "../ApiClient";

export class PersonalFundDetails { 
    public 'isFavorite': boolean;
    public 'isInvested': boolean;
    public 'canInvest': boolean;
    public 'canWithdraw': boolean;
    public 'ownerActions': FundOwnerActions;
    public 'hasNotifications': boolean;
    public 'value': number;
    public 'status': AssetInvestmentStatus;
    public 'pendingInput': number;
    public 'pendingOutput': number;
    public 'pendingInOutCurrency': PendingInOutCurrencyEnum;
    public 'withdrawPercent': number;
    public 'availableReallocationPercents': number;
    public 'nextReallocationPercents': Date;
    public 'exitFeePersonal': number;

    constructor(data: {[key: string]: any}) { 
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

    static constructFromObject(data: {[key: string]: any}): PersonalFundDetails | undefined {
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


type PendingInOutCurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';



