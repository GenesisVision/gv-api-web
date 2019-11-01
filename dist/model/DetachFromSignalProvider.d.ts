import { SignalDetachMode } from './SignalDetachMode';
export declare class DetachFromSignalProvider {
    'tradingAccountId': string;
    'mode': SignalDetachMode;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DetachFromSignalProvider | undefined;
}
