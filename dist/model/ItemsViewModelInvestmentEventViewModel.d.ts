import { InvestmentEventViewModel } from './InvestmentEventViewModel';
export declare class ItemsViewModelInvestmentEventViewModel {
    'items': Array<InvestmentEventViewModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelInvestmentEventViewModel | undefined;
}
