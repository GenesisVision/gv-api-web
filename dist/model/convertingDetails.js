import { Currency } from './currency';
import ApiClient from "../ApiClient";
export class ConvertingDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new ConvertingDetails()) {
        if (data) {
            if (data.hasOwnProperty('currencyTo')) {
                obj['currencyTo'] = Currency.constructFromObject(data['currencyTo']);
            }
            if (data.hasOwnProperty('currencyToName')) {
                obj['currencyToName'] = ApiClient.convertToType(data['currencyToName'], 'string');
            }
            if (data.hasOwnProperty('amountTo')) {
                obj['amountTo'] = ApiClient.convertToType(data['amountTo'], 'number');
            }
            if (data.hasOwnProperty('rateValue')) {
                obj['rateValue'] = ApiClient.convertToType(data['rateValue'], 'number');
            }
            if (data.hasOwnProperty('currencyToLogo')) {
                obj['currencyToLogo'] = ApiClient.convertToType(data['currencyToLogo'], 'string');
            }
        }
        return obj;
    }
}
