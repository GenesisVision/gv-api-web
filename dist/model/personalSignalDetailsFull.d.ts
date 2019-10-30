import { SignalSubscriberStatus } from './signalSubscriberStatus';
import { SignalSubscription } from './signalSubscription';
export declare class PersonalSignalDetailsFull {
    'subscriptionDate'?: Date;
    'tradesCount'?: number;
    'signalSubscription'?: SignalSubscription;
    'profit'?: number;
    'volume'?: number;
    'isFavorite'?: boolean;
    'isInvested'?: boolean;
    'status'?: SignalSubscriberStatus;
    'signalSettingsId'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PersonalSignalDetailsFull): PersonalSignalDetailsFull;
}
