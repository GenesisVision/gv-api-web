import { DashboardTimeframeProfit } from './dashboardTimeframeProfit';
export declare class DashboardProfits {
    'dayProfit'?: DashboardTimeframeProfit;
    'weekProfit'?: DashboardTimeframeProfit;
    'monthProfit'?: DashboardTimeframeProfit;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardProfits): DashboardProfits;
}
