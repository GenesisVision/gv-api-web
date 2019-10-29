import { SignalSubscriber } from './signalSubscriber';
export declare class SignalProviderSubscribers {
    'subscribers'?: [SignalSubscriber];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalProviderSubscribers): SignalProviderSubscribers;
}
