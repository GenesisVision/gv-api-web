import { SignalSubscriberStatus } from './SignalSubscriberStatus';
import { SignalSubscription } from './SignalSubscription';
import ApiClient from "../ApiClient";
export class PersonalSignalDetailsFull {
    static constructFromObject(data, obj = new PersonalSignalDetailsFull()) {
        if (data) {
            if (data.hasOwnProperty('subscriptionDate')) {
                obj['subscriptionDate'] = ApiClient.convertToType(data['subscriptionDate'], 'Date');
            }
            if (data.hasOwnProperty('tradesCount')) {
                obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'number');
            }
            if (data.hasOwnProperty('signalSubscription')) {
                obj['signalSubscription'] = SignalSubscription.constructFromObject(data['signalSubscription']);
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'number');
            }
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'boolean');
            }
            if (data.hasOwnProperty('isInvested')) {
                obj['isInvested'] = ApiClient.convertToType(data['isInvested'], 'boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = SignalSubscriberStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('signalSettingsId')) {
                obj['signalSettingsId'] = ApiClient.convertToType(data['signalSettingsId'], 'string');
            }
        }
        return obj;
    }
}
