import { AssetDetails } from './assetDetails';
import { Currency } from './currency';
import { FundAssetInvestmentRequest } from './fundAssetInvestmentRequest';
import { InvestmentRequestStatus } from './investmentRequestStatus';
import { InvestmentRequestType } from './investmentRequestType';
import { ProgramAssetInvestmentRequest } from './programAssetInvestmentRequest';
import ApiClient from "../ApiClient";
export class AssetInvestmentRequest {
    constructor() {
    }
    static constructFromObject(data, obj = new AssetInvestmentRequest()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = InvestmentRequestType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InvestmentRequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('canCancelRequest')) {
                obj['canCancelRequest'] = ApiClient.convertToType(data['canCancelRequest'], 'boolean');
            }
            if (data.hasOwnProperty('assetDetails')) {
                obj['assetDetails'] = AssetDetails.constructFromObject(data['assetDetails']);
            }
            if (data.hasOwnProperty('fundRequestDetails')) {
                obj['fundRequestDetails'] = FundAssetInvestmentRequest.constructFromObject(data['fundRequestDetails']);
            }
            if (data.hasOwnProperty('programRequestDetails')) {
                obj['programRequestDetails'] = ProgramAssetInvestmentRequest.constructFromObject(data['programRequestDetails']);
            }
        }
        return obj;
    }
}
