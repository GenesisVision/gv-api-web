import { BinanceRawAccountType } from './BinanceRawAccountType';
import { BinanceRawBinanceBalance } from './BinanceRawBinanceBalance';

export interface BinanceRawAccountInfo {
    makerCommission: number;
    takerCommission: number;
    buyerCommission: number;
    sellerCommission: number;
    canTrade: boolean;
    canWithdraw: boolean;
    canDeposit: boolean;
    updateTime: Date;
    accountType: BinanceRawAccountType;
    permissions: Array<BinanceRawAccountType>;
    balances: Array<BinanceRawBinanceBalance>;
}

