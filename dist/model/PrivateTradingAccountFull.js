import { BrokerDetails } from './BrokerDetails';
import { PrivateTradingAccountOwnerActions } from './PrivateTradingAccountOwnerActions';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';
import ApiClient from "../ApiClient";
export class PrivateTradingAccountFull {
    constructor(data) {
        this['id'] = data['id'];
        this['creationDate'] = data['creationDate'];
        this['currency'] = data['currency'];
        this['login'] = data['login'];
        this['balance'] = data['balance'];
        this['type'] = data['type'];
        this['brokerDetails'] = data['brokerDetails'];
        this['ownerActions'] = data['ownerActions'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PrivateTradingAccountFull({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'type': PrivateTradingAccountType.constructFromObject(data['type']),
                'brokerDetails': BrokerDetails.constructFromObject(data['brokerDetails']),
                'ownerActions': PrivateTradingAccountOwnerActions.constructFromObject(data['ownerActions']),
            });
        }
    }
}
