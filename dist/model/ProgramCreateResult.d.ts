import { TwoFactorAuthenticator } from './TwoFactorAuthenticator';
export declare class ProgramCreateResult {
    'programId': string;
    'twoFactorRequired': boolean;
    'twoFactor': TwoFactorAuthenticator;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramCreateResult;
}
