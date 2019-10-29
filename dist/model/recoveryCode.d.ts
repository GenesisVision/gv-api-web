export declare class RecoveryCode {
    'code'?: string;
    'isActive'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RecoveryCode): RecoveryCode;
}
