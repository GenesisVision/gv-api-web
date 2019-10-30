import { Currency } from './currency';
export declare class InvestmentEventItemViewModel {
    'title'?: string;
    'amount'?: number;
    'currency'?: Currency;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: InvestmentEventItemViewModel): InvestmentEventItemViewModel;
}
