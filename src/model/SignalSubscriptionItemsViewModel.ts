import { SignalSubscription } from './SignalSubscription';

export interface SignalSubscriptionItemsViewModel {
    readonly items: Array<SignalSubscription>;
    readonly total: number;
}

