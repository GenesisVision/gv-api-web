import { RecoveryCode } from './RecoveryCode';
export declare class RecoveryCodesViewModel {
    'codes'?: Array<RecoveryCode>;
    'authToken'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RecoveryCodesViewModel): RecoveryCodesViewModel;
}
