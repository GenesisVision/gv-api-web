import { BinanceIncomeType } from './BinanceIncomeType';

export interface BinanceRawFuturesIncomeHistory {
    symbol: string;
    incomeType: BinanceIncomeType;
    income: number;
    asset: string;
    info: string;
    time: Date;
    transactionId: string;
    tradeId: string;
}

