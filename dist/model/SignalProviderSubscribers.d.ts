import { SignalSubscriber } from './SignalSubscriber';
export declare class SignalProviderSubscribers {
    'subscribers'?: Array<SignalSubscriber>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalProviderSubscribers): SignalProviderSubscribers;
}
