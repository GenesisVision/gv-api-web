import { MoneyLocation } from './moneyLocation';
export declare class DashboardPortfolio {
    'distribution'?: [MoneyLocation];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardPortfolio): DashboardPortfolio;
}
