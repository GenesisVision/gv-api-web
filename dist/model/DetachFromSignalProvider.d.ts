import { SignalDetachMode } from './SignalDetachMode';
export declare class DetachFromSignalProvider {
    'mode': SignalDetachMode;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DetachFromSignalProvider | undefined;
}
