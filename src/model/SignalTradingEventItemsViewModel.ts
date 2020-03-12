import { SignalTradingEvent } from './SignalTradingEvent';

export interface SignalTradingEventItemsViewModel {
    readonly items: Array<SignalTradingEvent>;
    readonly total: number;
}

