import { DashboardProfits } from './dashboardProfits';
export declare class DashboardSummary {
    'total'?: number;
    'invested'?: number;
    'pending'?: number;
    'available'?: number;
    'profits'?: DashboardProfits;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardSummary): DashboardSummary;
}
