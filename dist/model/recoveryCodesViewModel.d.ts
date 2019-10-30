import { RecoveryCode } from './recoveryCode';
export declare class RecoveryCodesViewModel {
    'codes'?: Array<RecoveryCode>;
    'authToken'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RecoveryCodesViewModel): RecoveryCodesViewModel;
}
