import { SignalSubscriberStatus } from './SignalSubscriberStatus';
import { SignalSubscription } from './SignalSubscription';
import ApiClient from "../ApiClient";
export class PersonalSignalDetailsFull {
    constructor(data) {
        this['subscriptionDate'] = data['subscriptionDate'];
        this['tradesCount'] = data['tradesCount'];
        this['signalSubscription'] = data['signalSubscription'];
        this['profit'] = data['profit'];
        this['volume'] = data['volume'];
        this['isFavorite'] = data['isFavorite'];
        this['isInvested'] = data['isInvested'];
        this['status'] = data['status'];
        this['signalSettingsId'] = data['signalSettingsId'];
    }
    static constructFromObject(data) {
        return new PersonalSignalDetailsFull({
            'subscriptionDate': ApiClient.convertToType(data['subscriptionDate'], 'Date'),
            'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
            'signalSubscription': SignalSubscription.constructFromObject(data['signalSubscription']),
            'profit': ApiClient.convertToType(data['profit'], 'number'),
            'volume': ApiClient.convertToType(data['volume'], 'number'),
            'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
            'isInvested': ApiClient.convertToType(data['isInvested'], 'boolean'),
            'status': SignalSubscriberStatus.constructFromObject(data['status']),
            'signalSettingsId': ApiClient.convertToType(data['signalSettingsId'], 'string'),
        });
    }
}
