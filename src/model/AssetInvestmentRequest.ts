import { AssetRequestDetails } from './AssetRequestDetails';
import { Currency } from './Currency';
import { InvestmentRequestStatus } from './InvestmentRequestStatus';
import { InvestmentRequestType } from './InvestmentRequestType';

export interface AssetInvestmentRequest {
    id: string;
    date: Date;
    amount: number;
    currency: Currency;
    type: InvestmentRequestType;
    status: InvestmentRequestStatus;
    canCancelRequest: boolean;
    assetDetails: AssetRequestDetails;
}

