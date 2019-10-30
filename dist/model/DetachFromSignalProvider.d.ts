import { SignalDetachMode } from './SignalDetachMode';
export declare class DetachFromSignalProvider {
    'mode'?: SignalDetachMode;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DetachFromSignalProvider): DetachFromSignalProvider;
}
