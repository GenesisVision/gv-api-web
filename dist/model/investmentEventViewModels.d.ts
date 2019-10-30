import { InvestmentEventViewModel } from './investmentEventViewModel';
export declare class InvestmentEventViewModels {
    'events'?: [InvestmentEventViewModel];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: InvestmentEventViewModels): InvestmentEventViewModels;
}
