export declare class TwoFactorAuthenticatorConfirm {
    'code': string;
    'sharedKey': string;
    'password': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TwoFactorAuthenticatorConfirm;
}
