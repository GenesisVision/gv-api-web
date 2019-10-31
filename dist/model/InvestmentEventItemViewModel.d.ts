import { Currency } from './Currency';
export declare class InvestmentEventItemViewModel {
    'title': string;
    'amount': number;
    'currency': Currency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): InvestmentEventItemViewModel;
}
