import { AssetDetails } from './AssetDetails';
import { ChangeState } from './ChangeState';
import { FeeDetails } from './FeeDetails';
import { InvestmentEventItemViewModel } from './InvestmentEventItemViewModel';
import ApiClient from "../ApiClient";
export class InvestmentEventViewModel {
    static constructFromObject(data, obj = new InvestmentEventViewModel()) {
        if (data) {
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'string');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('assetDetails')) {
                obj['assetDetails'] = AssetDetails.constructFromObject(data['assetDetails']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'string');
            }
            if (data.hasOwnProperty('changeState')) {
                obj['changeState'] = ChangeState.constructFromObject(data['changeState']);
            }
            if (data.hasOwnProperty('extendedInfo')) {
                obj['extendedInfo'] = ApiClient.convertToType(data['extendedInfo'], [InvestmentEventItemViewModel]);
            }
            if (data.hasOwnProperty('feesInfo')) {
                obj['feesInfo'] = ApiClient.convertToType(data['feesInfo'], [FeeDetails]);
            }
            if (data.hasOwnProperty('totalFeesAmount')) {
                obj['totalFeesAmount'] = ApiClient.convertToType(data['totalFeesAmount'], 'number');
            }
            if (data.hasOwnProperty('totalFeesCurrency')) {
                obj['totalFeesCurrency'] = ApiClient.convertToType(data['totalFeesCurrency'], 'string');
            }
        }
        return obj;
    }
}
