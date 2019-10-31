import { FundAssetsState } from './FundAssetsState';
export declare class FundEquityChartElementOld {
    'assetsState': FundAssetsState;
    'value': number;
    'date': Date;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundEquityChartElementOld;
}
