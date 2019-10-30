export declare class ProgramPwdUpdate {
    'password'?: string;
    'twoFactorCode'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramPwdUpdate): ProgramPwdUpdate;
}
