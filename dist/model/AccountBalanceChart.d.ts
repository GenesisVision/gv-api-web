import { SimpleChartPoint } from './SimpleChartPoint';
export declare class AccountBalanceChart {
    'balance': number;
    'color': string;
    'chart': Array<SimpleChartPoint>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AccountBalanceChart | undefined;
}
