import { TwoFactorAuthenticator } from './TwoFactorAuthenticator';
export declare class TradingAccountCreateResult {
    'id': string;
    'twoFactorRequired': boolean;
    'twoFactor': TwoFactorAuthenticator;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradingAccountCreateResult | undefined;
}
