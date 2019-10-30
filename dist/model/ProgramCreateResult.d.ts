import { TwoFactorAuthenticator } from './TwoFactorAuthenticator';
export declare class ProgramCreateResult {
    'programId'?: string;
    'twoFactorRequired'?: boolean;
    'twoFactor'?: TwoFactorAuthenticator;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramCreateResult): ProgramCreateResult;
}
