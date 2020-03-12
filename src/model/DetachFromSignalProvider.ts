import { SignalDetachMode } from './SignalDetachMode';

export interface DetachFromSignalProvider {
    tradingAccountId: string;
    mode: SignalDetachMode;
}

