import { Currency } from './Currency';
import { SignalSubscriberStatus } from './SignalSubscriberStatus';
export declare class SignalSubscriber {
    'number': number;
    'trades': number;
    'profit': number;
    'volume': number;
    'subscriptionDate': Date;
    'unsubscriptionDate': Date;
    'status': SignalSubscriberStatus;
    'totalCommissionAmount': number;
    'totalCommissionCurrency': Currency;
    'totalSuccessFeeAmount': number;
    'totalSuccessFeeCurrency': Currency;
    'totalVolumeFeeAmount': number;
    'totalVolumeFeeCurrency': Currency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalSubscriber;
}
