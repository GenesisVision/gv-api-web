import { MoneyLocation } from './MoneyLocation';
export declare class DashboardPortfolio {
    'distribution': Array<MoneyLocation>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardPortfolio | undefined;
}
