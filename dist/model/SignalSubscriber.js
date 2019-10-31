import { Currency } from './Currency';
import { SignalSubscriberStatus } from './SignalSubscriberStatus';
import ApiClient from "../ApiClient";
export class SignalSubscriber {
    constructor(data) {
        this['number'] = data['number'];
        this['trades'] = data['trades'];
        this['profit'] = data['profit'];
        this['volume'] = data['volume'];
        this['subscriptionDate'] = data['subscriptionDate'];
        this['unsubscriptionDate'] = data['unsubscriptionDate'];
        this['status'] = data['status'];
        this['totalCommissionAmount'] = data['totalCommissionAmount'];
        this['totalCommissionCurrency'] = data['totalCommissionCurrency'];
        this['totalSuccessFeeAmount'] = data['totalSuccessFeeAmount'];
        this['totalSuccessFeeCurrency'] = data['totalSuccessFeeCurrency'];
        this['totalVolumeFeeAmount'] = data['totalVolumeFeeAmount'];
        this['totalVolumeFeeCurrency'] = data['totalVolumeFeeCurrency'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SignalSubscriber({
                'number': ApiClient.convertToType(data['number'], 'number'),
                'trades': ApiClient.convertToType(data['trades'], 'number'),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'volume': ApiClient.convertToType(data['volume'], 'number'),
                'subscriptionDate': ApiClient.convertToType(data['subscriptionDate'], 'Date'),
                'unsubscriptionDate': ApiClient.convertToType(data['unsubscriptionDate'], 'Date'),
                'status': SignalSubscriberStatus.constructFromObject(data['status']),
                'totalCommissionAmount': ApiClient.convertToType(data['totalCommissionAmount'], 'number'),
                'totalCommissionCurrency': Currency.constructFromObject(data['totalCommissionCurrency']),
                'totalSuccessFeeAmount': ApiClient.convertToType(data['totalSuccessFeeAmount'], 'number'),
                'totalSuccessFeeCurrency': Currency.constructFromObject(data['totalSuccessFeeCurrency']),
                'totalVolumeFeeAmount': ApiClient.convertToType(data['totalVolumeFeeAmount'], 'number'),
                'totalVolumeFeeCurrency': Currency.constructFromObject(data['totalVolumeFeeCurrency']),
            });
        }
    }
}
