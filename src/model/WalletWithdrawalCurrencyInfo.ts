import { Blockchain } from './Blockchain';

export interface WalletWithdrawalCurrencyInfo {
    value: number;
    blockchain: Blockchain;
    blockchainTitle: string;
}

