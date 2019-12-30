export declare class TradingAccountPwdUpdate {
    'password': string;
    'twoFactorCode': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradingAccountPwdUpdate | undefined;
}
