import { Currency } from './Currency';
export declare class InvestmentEventItemViewModel {
    'title'?: string;
    'amount'?: number;
    'currency'?: Currency;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: InvestmentEventItemViewModel): InvestmentEventItemViewModel;
}
