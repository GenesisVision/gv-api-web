import { RecoveryCode } from './recoveryCode';
export declare class RecoveryCodesViewModel {
    'codes'?: [RecoveryCode];
    'authToken'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RecoveryCodesViewModel): RecoveryCodesViewModel;
}
