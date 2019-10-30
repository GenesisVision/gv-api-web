export declare class TwoFactorAuthenticator {
    'sharedKey'?: string;
    'authenticatorUri'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: TwoFactorAuthenticator): TwoFactorAuthenticator;
}
