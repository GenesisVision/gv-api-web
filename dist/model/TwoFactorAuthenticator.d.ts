export declare class TwoFactorAuthenticator {
    'sharedKey': string;
    'authenticatorUri': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TwoFactorAuthenticator;
}
