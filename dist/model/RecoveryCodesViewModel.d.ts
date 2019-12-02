import { RecoveryCode } from './RecoveryCode';
export declare class RecoveryCodesViewModel {
    'codes': Array<RecoveryCode>;
    'authToken': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): RecoveryCodesViewModel | undefined;
}
