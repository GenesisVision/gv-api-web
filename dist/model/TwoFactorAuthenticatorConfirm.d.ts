export declare class TwoFactorAuthenticatorConfirm {
    'code'?: string;
    'sharedKey'?: string;
    'password'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: TwoFactorAuthenticatorConfirm): TwoFactorAuthenticatorConfirm;
}
