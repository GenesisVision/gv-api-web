import { FundAssetsState } from './fundAssetsState';
export declare class FundEquityChartElementOld {
    'assetsState'?: FundAssetsState;
    'value'?: number;
    'date'?: Date;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundEquityChartElementOld): FundEquityChartElementOld;
}
