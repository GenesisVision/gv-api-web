import { SignalSubscriber } from './SignalSubscriber';

export interface SignalProviderSubscribers {
    subscribers: Array<SignalSubscriber>;
    total: number;
}

