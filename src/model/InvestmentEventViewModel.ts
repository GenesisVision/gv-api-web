import { AssetDetails } from './AssetDetails';
import { ChangeState } from './ChangeState';
import { FeeDetails } from './FeeDetails';
import { InvestmentEventItemViewModel } from './InvestmentEventItemViewModel';

export interface InvestmentEventViewModel {
    title: string;
    icon: string;
    date: Date;
    assetDetails: AssetDetails;
    amount: number;
    currency: CurrencyEnum;
    changeState: ChangeState;
    extendedInfo: Array<InvestmentEventItemViewModel>;
    feesInfo: Array<FeeDetails>;
    totalFeesAmount: number;
    totalFeesCurrency: TotalFeesCurrencyEnum;
}

type CurrencyEnum = 'USDT' | 'USD' | 'BTC' | 'ETH' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
type TotalFeesCurrencyEnum = 'USDT' | 'USD' | 'BTC' | 'ETH' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
