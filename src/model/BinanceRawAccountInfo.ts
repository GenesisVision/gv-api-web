import { BinanceAccountType } from './BinanceAccountType';
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
    accountType: BinanceAccountType;
    permissions: Array<BinanceAccountType>;
    balances: Array<BinanceRawBinanceBalance>;
}

