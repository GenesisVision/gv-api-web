import { AssetDetails } from './assetDetails';
import { ChangeState } from './changeState';
import { FeeDetails } from './feeDetails';
import { InvestmentEventItemViewModel } from './investmentEventItemViewModel';
export declare class InvestmentEventViewModel {
    'title'?: string;
    'icon'?: string;
    'date'?: Date;
    'assetDetails'?: AssetDetails;
    'amount'?: number;
    'currency'?: InvestmentEventViewModel.CurrencyEnum;
    'changeState'?: ChangeState;
    'extendedInfo'?: [InvestmentEventItemViewModel];
    'feesInfo'?: [FeeDetails];
    'totalFeesAmount'?: number;
    'totalFeesCurrency'?: InvestmentEventViewModel.TotalFeesCurrencyEnum;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: InvestmentEventViewModel): InvestmentEventViewModel;
}
export declare namespace InvestmentEventViewModel {
    type CurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    type TotalFeesCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
}
