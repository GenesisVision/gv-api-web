import { SignalSubscription } from './SignalSubscription';
export declare class ItemsViewModelSignalSubscription {
    'items': Array<SignalSubscription>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelSignalSubscription | undefined;
}
