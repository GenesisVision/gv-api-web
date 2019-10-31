import { AssetDetails } from './AssetDetails';
import { Currency } from './Currency';
import { FundAssetInvestmentRequest } from './FundAssetInvestmentRequest';
import { InvestmentRequestStatus } from './InvestmentRequestStatus';
import { InvestmentRequestType } from './InvestmentRequestType';
import { ProgramAssetInvestmentRequest } from './ProgramAssetInvestmentRequest';
export declare class AssetInvestmentRequest {
    'id': string;
    'date': Date;
    'amount': number;
    'currency': Currency;
    'type': InvestmentRequestType;
    'status': InvestmentRequestStatus;
    'canCancelRequest': boolean;
    'assetDetails': AssetDetails;
    'fundRequestDetails': FundAssetInvestmentRequest;
    'programRequestDetails': ProgramAssetInvestmentRequest;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetInvestmentRequest | undefined;
}
