import { SecureAlgorithm } from './SecureAlgorithm';
export declare class PowDetails {
    'secureAlgorithm': SecureAlgorithm;
    'difficulty': number;
    'nonce': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PowDetails;
}
