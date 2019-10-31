import { InvestmentEventViewModel } from './InvestmentEventViewModel';
export declare class InvestmentEventViewModels {
    'events': Array<InvestmentEventViewModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): InvestmentEventViewModels | undefined;
}
