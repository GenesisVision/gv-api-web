import { Currency } from './Currency';

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
    withdrawalCommission: number;
    depositAddress: string;
    depositUrlCoindirect: string;
}

