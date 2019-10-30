import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class NewProgramRequest {
    static constructFromObject(data, obj = new NewProgramRequest()) {
        if (data) {
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('periodLength')) {
                obj['periodLength'] = ApiClient.convertToType(data['periodLength'], 'number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'number');
            }
            if (data.hasOwnProperty('stopOutLevel')) {
                obj['stopOutLevel'] = ApiClient.convertToType(data['stopOutLevel'], 'number');
            }
            if (data.hasOwnProperty('leverage')) {
                obj['leverage'] = ApiClient.convertToType(data['leverage'], 'number');
            }
            if (data.hasOwnProperty('brokerAccountTypeId')) {
                obj['brokerAccountTypeId'] = ApiClient.convertToType(data['brokerAccountTypeId'], 'string');
            }
            if (data.hasOwnProperty('signalSuccessFee')) {
                obj['signalSuccessFee'] = ApiClient.convertToType(data['signalSuccessFee'], 'number');
            }
            if (data.hasOwnProperty('signalVolumeFee')) {
                obj['signalVolumeFee'] = ApiClient.convertToType(data['signalVolumeFee'], 'number');
            }
            if (data.hasOwnProperty('isSignalProgram')) {
                obj['isSignalProgram'] = ApiClient.convertToType(data['isSignalProgram'], 'boolean');
            }
            if (data.hasOwnProperty('investmentLimit')) {
                obj['investmentLimit'] = ApiClient.convertToType(data['investmentLimit'], 'number');
            }
            if (data.hasOwnProperty('tradesDelay')) {
                obj['tradesDelay'] = ApiClient.convertToType(data['tradesDelay'], 'string');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'number');
            }
            if (data.hasOwnProperty('depositWalletId')) {
                obj['depositWalletId'] = ApiClient.convertToType(data['depositWalletId'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
        }
        return obj;
    }
}
