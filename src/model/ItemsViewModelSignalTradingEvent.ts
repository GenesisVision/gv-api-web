import { SignalTradingEvent } from './SignalTradingEvent';

export interface ItemsViewModelSignalTradingEvent {
    readonly items: Array<SignalTradingEvent>;
    readonly total: number;
}

