import { SignalSubscriberStatus } from './SignalSubscriberStatus';
import { SignalSubscription } from './SignalSubscription';
export declare class PersonalSignalDetailsFull {
    'subscriptionDate': Date;
    'tradesCount': number;
    'signalSubscription': SignalSubscription;
    'profit': number;
    'volume': number;
    'isFavorite': boolean;
    'isInvested': boolean;
    'status': SignalSubscriberStatus;
    'signalSettingsId': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalSignalDetailsFull | undefined;
}
