import { FundEquityChartElementOld } from './fundEquityChartElementOld';
export declare class FundProfitChartOld {
    'creationDate'?: Date;
    'profitPercent'?: number;
    'equityChart'?: Array<FundEquityChartElementOld>;
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
    }, obj?: FundProfitChartOld): FundProfitChartOld;
}
