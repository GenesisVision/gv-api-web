export interface ProgramChartStatistic {
    investors: number;
    lastPeriodStarts: Date;
    lastPeriodEnds: Date;
    subscribers: number;
    tradingVolume: number;
    trades: number;
    successTradesPercent: number;
    profitFactor: number;
    balance: number;
    profitPercent: number;
    sharpeRatio: number;
    sortinoRatio: number;
    calmarRatio: number;
    maxDrawdown: number;
}

