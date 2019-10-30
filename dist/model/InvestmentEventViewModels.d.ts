import { InvestmentEventViewModel } from './InvestmentEventViewModel';
export declare class InvestmentEventViewModels {
    'events'?: Array<InvestmentEventViewModel>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: InvestmentEventViewModels): InvestmentEventViewModels;
}
