
export interface ProgramChartStatistic {
    balance: number;
    profitPercent: number;
    sharpeRatio: number;
    sortinoRatio: number;
    calmarRatio: number;
    maxDrawdown: number;
    tradingVolume: number;
    trades: number;
    successTradesPercent: number;
    profitFactor: number;
    investors: number;
    lastPeriodStarts: Date;
    lastPeriodEnds: Date;
    subscribers: number;
}

