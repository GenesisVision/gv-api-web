import { AssetDetails } from './AssetDetails';
import { SignalSubscriberInfo } from './SignalSubscriberInfo';
import { SubscriptionMode } from './SubscriptionMode';
import ApiClient from "../ApiClient";
export class SignalSubscription {
    constructor(data) {
        this['subscriberInfo'] = data['subscriberInfo'];
        this['asset'] = data['asset'];
        this['status'] = data['status'];
        this['subscriptionDate'] = data['subscriptionDate'];
        this['unsubscriptionDate'] = data['unsubscriptionDate'];
        this['hasSignalAccount'] = data['hasSignalAccount'];
        this['hasActiveSubscription'] = data['hasActiveSubscription'];
        this['isExternal'] = data['isExternal'];
        this['mode'] = data['mode'];
        this['detachMode'] = data['detachMode'];
        this['percent'] = data['percent'];
        this['openTolerancePercent'] = data['openTolerancePercent'];
        this['fixedVolume'] = data['fixedVolume'];
        this['fixedCurrency'] = data['fixedCurrency'];
        this['totalProfit'] = data['totalProfit'];
        this['totalVolume'] = data['totalVolume'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SignalSubscription({
                'subscriberInfo': SignalSubscriberInfo.constructFromObject(data['subscriberInfo']),
                'asset': AssetDetails.constructFromObject(data['asset']),
                'status': ApiClient.convertToType(data['status'], 'string'),
                'subscriptionDate': ApiClient.convertToType(data['subscriptionDate'], 'Date'),
                'unsubscriptionDate': ApiClient.convertToType(data['unsubscriptionDate'], 'Date'),
                'hasSignalAccount': ApiClient.convertToType(data['hasSignalAccount'], 'boolean'),
                'hasActiveSubscription': ApiClient.convertToType(data['hasActiveSubscription'], 'boolean'),
                'isExternal': ApiClient.convertToType(data['isExternal'], 'boolean'),
                'mode': SubscriptionMode.constructFromObject(data['mode']),
                'detachMode': ApiClient.convertToType(data['detachMode'], 'string'),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
                'openTolerancePercent': ApiClient.convertToType(data['openTolerancePercent'], 'number'),
                'fixedVolume': ApiClient.convertToType(data['fixedVolume'], 'number'),
                'fixedCurrency': ApiClient.convertToType(data['fixedCurrency'], 'string'),
                'totalProfit': ApiClient.convertToType(data['totalProfit'], 'number'),
                'totalVolume': ApiClient.convertToType(data['totalVolume'], 'number'),
            });
        }
    }
}
