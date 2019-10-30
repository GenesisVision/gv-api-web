export declare class TwoFactorCodeWithPassword {
    'twoFactorCode': string;
    'password': string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: TwoFactorCodeWithPassword): TwoFactorCodeWithPassword;
}
