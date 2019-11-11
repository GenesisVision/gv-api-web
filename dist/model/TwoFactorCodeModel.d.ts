export declare class TwoFactorCodeModel {
    'twoFactorCode': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TwoFactorCodeModel | undefined;
}
