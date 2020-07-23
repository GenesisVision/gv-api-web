import { WalletWithdrawalInfo } from './WalletWithdrawalInfo';

export interface WithdrawalSummary {
    availableToWithdrawal: number;
    wallets: Array<WalletWithdrawalInfo>;
}

