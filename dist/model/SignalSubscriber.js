import { Currency } from './Currency';
import { SignalSubscriberStatus } from './SignalSubscriberStatus';
import ApiClient from "../ApiClient";
export class SignalSubscriber {
    static constructFromObject(data, obj = new SignalSubscriber()) {
        if (data) {
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'number');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], 'number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'number');
            }
            if (data.hasOwnProperty('subscriptionDate')) {
                obj['subscriptionDate'] = ApiClient.convertToType(data['subscriptionDate'], 'Date');
            }
            if (data.hasOwnProperty('unsubscriptionDate')) {
                obj['unsubscriptionDate'] = ApiClient.convertToType(data['unsubscriptionDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = SignalSubscriberStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('totalCommissionAmount')) {
                obj['totalCommissionAmount'] = ApiClient.convertToType(data['totalCommissionAmount'], 'number');
            }
            if (data.hasOwnProperty('totalCommissionCurrency')) {
                obj['totalCommissionCurrency'] = Currency.constructFromObject(data['totalCommissionCurrency']);
            }
            if (data.hasOwnProperty('totalSuccessFeeAmount')) {
                obj['totalSuccessFeeAmount'] = ApiClient.convertToType(data['totalSuccessFeeAmount'], 'number');
            }
            if (data.hasOwnProperty('totalSuccessFeeCurrency')) {
                obj['totalSuccessFeeCurrency'] = Currency.constructFromObject(data['totalSuccessFeeCurrency']);
            }
            if (data.hasOwnProperty('totalVolumeFeeAmount')) {
                obj['totalVolumeFeeAmount'] = ApiClient.convertToType(data['totalVolumeFeeAmount'], 'number');
            }
            if (data.hasOwnProperty('totalVolumeFeeCurrency')) {
                obj['totalVolumeFeeCurrency'] = Currency.constructFromObject(data['totalVolumeFeeCurrency']);
            }
        }
        return obj;
    }
}
