import { AssetDetails } from './AssetDetails';
import { ChangeState } from './ChangeState';
import { FeeDetails } from './FeeDetails';
import { InvestmentEventItemViewModel } from './InvestmentEventItemViewModel';
export declare class InvestmentEventViewModel {
    'title': string;
    'icon': string;
    'date': Date;
    'assetDetails': AssetDetails;
    'amount': number;
    'currency': CurrencyEnum;
    'changeState': ChangeState;
    'extendedInfo': Array<InvestmentEventItemViewModel>;
    'feesInfo': Array<FeeDetails>;
    'totalFeesAmount': number;
    'totalFeesCurrency': TotalFeesCurrencyEnum;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): InvestmentEventViewModel | undefined;
}
declare type CurrencyEnum = 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
declare type TotalFeesCurrencyEnum = 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};
