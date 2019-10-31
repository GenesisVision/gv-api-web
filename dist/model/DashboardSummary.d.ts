import { DashboardProfits } from './DashboardProfits';
export declare class DashboardSummary {
    'total': number;
    'invested': number;
    'pending': number;
    'available': number;
    'profits': DashboardProfits;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardSummary | undefined;
}
