import { ChartSimple } from './ChartSimple';
import { Currency } from './Currency';
import { PeriodDate } from './PeriodDate';
export declare class ProgramProfitChartOld {
    'equityChart': Array<ChartSimple>;
    'totalProfit': number;
    'timeframeProfit': number;
    'programCurrency': Currency;
    'trades': number;
    'successTradesPercent': number;
    'profitFactor': number;
    'periods': Array<PeriodDate>;
    'lastPeriodStarts': Date;
    'lastPeriodEnds': Date;
    'tradingVolume': number;
    'balance': number;
    'investors': number;
    'profitChangePercent': number;
    'sharpeRatio': number;
    'sortinoRatio': number;
    'calmarRatio': number;
    'maxDrawdown': number;
    'rate': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramProfitChartOld | undefined;
}
