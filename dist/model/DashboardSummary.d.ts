import { DashboardProfits } from './DashboardProfits';
export declare class DashboardSummary {
    'invested': number;
    'trading': number;
    'wallets': number;
    'total': number;
    'profits': DashboardProfits;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardSummary | undefined;
}
