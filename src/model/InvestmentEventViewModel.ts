import { AssetDetails } from './AssetDetails';
import { ChangeState } from './ChangeState';
import { Currency } from './Currency';
import { FeeDetails } from './FeeDetails';
import { InvestmentEventItemViewModel } from './InvestmentEventItemViewModel';

export interface InvestmentEventViewModel {
    title: string;
    icon: string;
    logoUrl: string;
    date: Date;
    assetDetails: AssetDetails;
    amount: number;
    currency: Currency;
    changeState: ChangeState;
    extendedInfo: Array<InvestmentEventItemViewModel>;
    feesInfo: Array<FeeDetails>;
    totalFeesAmount: number;
    totalFeesCurrency: Currency;
}

