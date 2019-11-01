import { AssetDetails } from './AssetDetails';
import { Currency } from './Currency';
import { FundAssetInvestmentRequest } from './FundAssetInvestmentRequest';
import { InvestmentRequestStatus } from './InvestmentRequestStatus';
import { InvestmentRequestType } from './InvestmentRequestType';
import { ProgramAssetInvestmentRequest } from './ProgramAssetInvestmentRequest';
import ApiClient from "../ApiClient";
export class AssetInvestmentRequest {
    constructor(data) {
        this['id'] = data['id'];
        this['date'] = data['date'];
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
        this['type'] = data['type'];
        this['status'] = data['status'];
        this['canCancelRequest'] = data['canCancelRequest'];
        this['assetDetails'] = data['assetDetails'];
        this['fundRequestDetails'] = data['fundRequestDetails'];
        this['programRequestDetails'] = data['programRequestDetails'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetInvestmentRequest({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'currency': Currency.constructFromObject(data['currency']),
                'type': InvestmentRequestType.constructFromObject(data['type']),
                'status': InvestmentRequestStatus.constructFromObject(data['status']),
                'canCancelRequest': ApiClient.convertToType(data['canCancelRequest'], 'boolean'),
                'assetDetails': AssetDetails.constructFromObject(data['assetDetails']),
                'fundRequestDetails': FundAssetInvestmentRequest.constructFromObject(data['fundRequestDetails']),
                'programRequestDetails': ProgramAssetInvestmentRequest.constructFromObject(data['programRequestDetails']),
            });
        }
    }
}
