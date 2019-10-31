export declare class RecoveryCode {
    'code': string;
    'isActive': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): RecoveryCode | undefined;
}
