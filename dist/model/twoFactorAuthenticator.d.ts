export declare class TwoFactorAuthenticator {
    'sharedKey'?: string;
    'authenticatorUri'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: TwoFactorAuthenticator): TwoFactorAuthenticator;
}
