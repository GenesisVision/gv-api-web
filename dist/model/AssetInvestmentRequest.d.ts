import { AssetRequestDetails } from './AssetRequestDetails';
import { Currency } from './Currency';
import { InvestmentRequestStatus } from './InvestmentRequestStatus';
import { InvestmentRequestType } from './InvestmentRequestType';
export declare class AssetInvestmentRequest {
    'id': string;
    'date': Date;
    'amount': number;
    'currency': Currency;
    'type': InvestmentRequestType;
    'status': InvestmentRequestStatus;
    'canCancelRequest': boolean;
    'assetDetails': AssetRequestDetails;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetInvestmentRequest | undefined;
}
