import { AssetDetails } from './assetDetails';
import { Currency } from './currency';
import { FundAssetInvestmentRequest } from './fundAssetInvestmentRequest';
import { InvestmentRequestStatus } from './investmentRequestStatus';
import { InvestmentRequestType } from './investmentRequestType';
import { ProgramAssetInvestmentRequest } from './programAssetInvestmentRequest';
export declare class AssetInvestmentRequest {
    'id'?: string;
    'date'?: Date;
    'amount'?: number;
    'currency'?: Currency;
    'type'?: InvestmentRequestType;
    'status'?: InvestmentRequestStatus;
    'canCancelRequest'?: boolean;
    'assetDetails'?: AssetDetails;
    'fundRequestDetails'?: FundAssetInvestmentRequest;
    'programRequestDetails'?: ProgramAssetInvestmentRequest;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AssetInvestmentRequest): AssetInvestmentRequest;
}
