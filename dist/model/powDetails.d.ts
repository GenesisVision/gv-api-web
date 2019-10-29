import { SecureAlgorithm } from './secureAlgorithm';
export declare class PowDetails {
    'secureAlgorithm'?: SecureAlgorithm;
    'difficulty'?: number;
    'nonce'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PowDetails): PowDetails;
}
