import { SignalSubscription } from './SignalSubscription';

export interface ItemsViewModelSignalSubscription {
    readonly items: Array<SignalSubscription>;
    readonly total: number;
}

