import { TwoFactorAuthenticator } from './TwoFactorAuthenticator';

export interface TradingAccountCreateResult {
    id: string;
    twoFactorRequired: boolean;
    twoFactor: TwoFactorAuthenticator;
}

