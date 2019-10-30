import { SecureAlgorithm } from './SecureAlgorithm';
export declare class PowDetails {
    'secureAlgorithm'?: SecureAlgorithm;
    'difficulty'?: number;
    'nonce'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PowDetails): PowDetails;
}
