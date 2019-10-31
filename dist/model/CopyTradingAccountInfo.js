import { Currency } from './Currency';
import { PersonalCopyTradingAccountInfo } from './PersonalCopyTradingAccountInfo';
import ApiClient from "../ApiClient";
export class CopyTradingAccountInfo {
    constructor(data) {
        this['id'] = data['id'];
        this['currency'] = data['currency'];
        this['logo'] = data['logo'];
        this['title'] = data['title'];
        this['balance'] = data['balance'];
        this['equity'] = data['equity'];
        this['freeMargin'] = data['freeMargin'];
        this['marginLevel'] = data['marginLevel'];
        this['available'] = data['available'];
        this['personalInfo'] = data['personalInfo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CopyTradingAccountInfo({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'currency': Currency.constructFromObject(data['currency']),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'equity': ApiClient.convertToType(data['equity'], 'number'),
                'freeMargin': ApiClient.convertToType(data['freeMargin'], 'number'),
                'marginLevel': ApiClient.convertToType(data['marginLevel'], 'number'),
                'available': ApiClient.convertToType(data['available'], 'number'),
                'personalInfo': PersonalCopyTradingAccountInfo.constructFromObject(data['personalInfo']),
            });
        }
    }
}
