import { Currency } from './Currency';
import { WalletDepositData } from './WalletDepositData';
import { WalletWithdrawalCurrencyInfo } from './WalletWithdrawalCurrencyInfo';

export interface WalletData {
    currency: Currency;
    available: number;
    invested: number;
    trading: number;
    pending: number;
    readonly total: number;
    availableCcy: number;
    investedCcy: number;
    tradingCcy: number;
    pendingCcy: number;
    readonly totalCcy: number;
    id: string;
    title: string;
    logoUrl: string;
    isDepositEnabled: boolean;
    isWithdrawalEnabled: boolean;
    depositAddresses: Array<WalletDepositData>;
    withdrawalCommissions: Array<WalletWithdrawalCurrencyInfo>;
    depositUrlCoindirect: string;
}

