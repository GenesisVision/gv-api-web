import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class NewProgramRequest {
    constructor(data) {
        this['currency'] = data['currency'];
        this['periodLength'] = data['periodLength'];
        this['successFee'] = data['successFee'];
        this['stopOutLevel'] = data['stopOutLevel'];
        this['leverage'] = data['leverage'];
        this['brokerAccountTypeId'] = data['brokerAccountTypeId'];
        this['signalSuccessFee'] = data['signalSuccessFee'];
        this['signalVolumeFee'] = data['signalVolumeFee'];
        this['isSignalProgram'] = data['isSignalProgram'];
        this['investmentLimit'] = data['investmentLimit'];
        this['tradesDelay'] = data['tradesDelay'];
        this['entryFee'] = data['entryFee'];
        this['depositAmount'] = data['depositAmount'];
        this['depositWalletId'] = data['depositWalletId'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
    }
    static constructFromObject(data) {
        return new NewProgramRequest({
            'currency': Currency.constructFromObject(data['currency']),
            'periodLength': ApiClient.convertToType(data['periodLength'], 'number'),
            'successFee': ApiClient.convertToType(data['successFee'], 'number'),
            'stopOutLevel': ApiClient.convertToType(data['stopOutLevel'], 'number'),
            'leverage': ApiClient.convertToType(data['leverage'], 'number'),
            'brokerAccountTypeId': ApiClient.convertToType(data['brokerAccountTypeId'], 'string'),
            'signalSuccessFee': ApiClient.convertToType(data['signalSuccessFee'], 'number'),
            'signalVolumeFee': ApiClient.convertToType(data['signalVolumeFee'], 'number'),
            'isSignalProgram': ApiClient.convertToType(data['isSignalProgram'], 'boolean'),
            'investmentLimit': ApiClient.convertToType(data['investmentLimit'], 'number'),
            'tradesDelay': ApiClient.convertToType(data['tradesDelay'], 'string'),
            'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
            'depositAmount': ApiClient.convertToType(data['depositAmount'], 'number'),
            'depositWalletId': ApiClient.convertToType(data['depositWalletId'], 'string'),
            'title': ApiClient.convertToType(data['title'], 'string'),
            'description': ApiClient.convertToType(data['description'], 'string'),
            'logo': ApiClient.convertToType(data['logo'], 'string'),
        });
    }
}
