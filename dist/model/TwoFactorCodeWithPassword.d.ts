export declare class TwoFactorCodeWithPassword {
    'twoFactorCode': string;
    'password': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TwoFactorCodeWithPassword;
}
