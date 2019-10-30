import { InvestmentEventViewModel } from './investmentEventViewModel';
export declare class InvestmentEventViewModels {
    'events'?: Array<InvestmentEventViewModel>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: InvestmentEventViewModels): InvestmentEventViewModels;
}
