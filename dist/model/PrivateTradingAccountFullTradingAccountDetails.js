import { PrivateTradingAccountType } from './PrivateTradingAccountType';
import ApiClient from "../ApiClient";
export class PrivateTradingAccountFullTradingAccountDetails {
    constructor(data) {
        this['currency'] = data['currency'];
        this['leverage'] = data['leverage'];
        this['apiKey'] = data['apiKey'];
        this['login'] = data['login'];
        this['balance'] = data['balance'];
        this['type'] = data['type'];
        this['subscriptions'] = data['subscriptions'];
        this['isExternal'] = data['isExternal'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PrivateTradingAccountFullTradingAccountDetails({
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
                'apiKey': ApiClient.convertToType(data['apiKey'], 'string'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'type': PrivateTradingAccountType.constructFromObject(data['type']),
                'subscriptions': ApiClient.convertToType(data['subscriptions'], 'number'),
                'isExternal': ApiClient.convertToType(data['isExternal'], 'boolean'),
            });
        }
    }
}
