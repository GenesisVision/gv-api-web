import { DashboardTimeframeProfit } from './DashboardTimeframeProfit';
export declare class DashboardProfits {
    'dayProfit': DashboardTimeframeProfit;
    'weekProfit': DashboardTimeframeProfit;
    'monthProfit': DashboardTimeframeProfit;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardProfits | undefined;
}
