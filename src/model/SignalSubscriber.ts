import { Currency } from './Currency';
import { SignalSubscriberStatus } from './SignalSubscriberStatus';

export interface SignalSubscriber {
    number: number;
    trades: number;
    profit: number;
    volume: number;
    subscriptionDate: Date;
    unsubscriptionDate: Date;
    status: SignalSubscriberStatus;
    totalCommissionAmount: number;
    totalCommissionCurrency: Currency;
    totalSuccessFeeAmount: number;
    totalSuccessFeeCurrency: Currency;
    totalVolumeFeeAmount: number;
    totalVolumeFeeCurrency: Currency;
}

