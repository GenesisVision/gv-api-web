import { SignalSubscriber } from './SignalSubscriber';
export declare class SignalProviderSubscribers {
    'subscribers': Array<SignalSubscriber>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalProviderSubscribers;
}
