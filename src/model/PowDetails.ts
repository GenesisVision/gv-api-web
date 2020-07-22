import { SecureAlgorithm } from './SecureAlgorithm';

export interface PowDetails {
    secureAlgorithm: SecureAlgorithm;
    difficulty: number;
    nonce: string;
}

