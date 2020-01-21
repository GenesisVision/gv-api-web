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

type CurrencyEnum = 'USD' | 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
type TotalFeesCurrencyEnum = 'USD' | 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
