export declare class ProgramPwdUpdate {
    'password': string;
    'twoFactorCode': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramPwdUpdate;
}
