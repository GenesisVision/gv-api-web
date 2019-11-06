import { DashboardTimeframeProfit } from './DashboardTimeframeProfit';
export declare class DashboardProfits {
    'day': DashboardTimeframeProfit;
    'week': DashboardTimeframeProfit;
    'month': DashboardTimeframeProfit;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardProfits | undefined;
}
