import { TwoFactorAuthenticator } from './twoFactorAuthenticator';
export declare class ProgramCreateResult {
    'programId'?: string;
    'twoFactorRequired'?: boolean;
    'twoFactor'?: TwoFactorAuthenticator;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramCreateResult): ProgramCreateResult;
}
