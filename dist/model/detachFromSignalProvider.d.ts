import { SignalDetachMode } from './signalDetachMode';
export declare class DetachFromSignalProvider {
    'mode'?: SignalDetachMode;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DetachFromSignalProvider): DetachFromSignalProvider;
}
