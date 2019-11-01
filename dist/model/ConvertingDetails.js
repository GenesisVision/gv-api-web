import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class ConvertingDetails {
    constructor(data) {
        this['currencyTo'] = data['currencyTo'];
        this['currencyToName'] = data['currencyToName'];
        this['amountTo'] = data['amountTo'];
        this['rateValue'] = data['rateValue'];
        this['currencyToLogo'] = data['currencyToLogo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ConvertingDetails({
                'currencyTo': Currency.constructFromObject(data['currencyTo']),
                'currencyToName': ApiClient.convertToType(data['currencyToName'], 'string'),
                'amountTo': ApiClient.convertToType(data['amountTo'], 'number'),
                'rateValue': ApiClient.convertToType(data['rateValue'], 'number'),
                'currencyToLogo': ApiClient.convertToType(data['currencyToLogo'], 'string'),
            });
        }
    }
}
