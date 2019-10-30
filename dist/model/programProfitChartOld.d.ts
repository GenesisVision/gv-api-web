import { ChartSimple } from './chartSimple';
import { Currency } from './currency';
import { PeriodDate } from './periodDate';
export declare class ProgramProfitChartOld {
    'equityChart'?: [ChartSimple];
    'totalProfit'?: number;
    'timeframeProfit'?: number;
    'programCurrency'?: Currency;
    'trades'?: number;
    'successTradesPercent'?: number;
    'profitFactor'?: number;
    'periods'?: [PeriodDate];
    'lastPeriodStarts'?: Date;
    'lastPeriodEnds'?: Date;
    'tradingVolume'?: number;
    'balance'?: number;
    'investors'?: number;
    'profitChangePercent'?: number;
    'sharpeRatio'?: number;
    'sortinoRatio'?: number;
    'calmarRatio'?: number;
    'maxDrawdown'?: number;
    'rate'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramProfitChartOld): ProgramProfitChartOld;
}
