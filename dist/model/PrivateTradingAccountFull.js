import { BrokerDetails } from './BrokerDetails';
import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import { PrivateTradingAccountOwnerActions } from './PrivateTradingAccountOwnerActions';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';
import ApiClient from "../ApiClient";
export class PrivateTradingAccountFull {
    constructor(data) {
        this['id'] = data['id'];
        this['creationDate'] = data['creationDate'];
        this['currency'] = data['currency'];
        this['leverage'] = data['leverage'];
        this['apiKey'] = data['apiKey'];
        this['login'] = data['login'];
        this['balance'] = data['balance'];
        this['type'] = data['type'];
        this['status'] = data['status'];
        this['brokerDetails'] = data['brokerDetails'];
        this['ownerActions'] = data['ownerActions'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PrivateTradingAccountFull({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
                'apiKey': ApiClient.convertToType(data['apiKey'], 'string'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'type': PrivateTradingAccountType.constructFromObject(data['type']),
                'status': DashboardTradingAssetStatus.constructFromObject(data['status']),
                'brokerDetails': BrokerDetails.constructFromObject(data['brokerDetails']),
                'ownerActions': PrivateTradingAccountOwnerActions.constructFromObject(data['ownerActions']),
            });
        }
    }
}
