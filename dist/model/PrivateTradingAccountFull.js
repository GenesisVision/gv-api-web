import { BrokerDetails } from './BrokerDetails';
import { PrivateTradingAccountFullPublicDetails } from './PrivateTradingAccountFullPublicDetails';
import { PrivateTradingAccountFullTradingAccountDetails } from './PrivateTradingAccountFullTradingAccountDetails';
import { PrivateTradingAccountOwnerActions } from './PrivateTradingAccountOwnerActions';
import ApiClient from "../ApiClient";
export class PrivateTradingAccountFull {
    constructor(data) {
        this['id'] = data['id'];
        this['publicInfo'] = data['publicInfo'];
        this['tradingAccountInfo'] = data['tradingAccountInfo'];
        this['brokerDetails'] = data['brokerDetails'];
        this['ownerActions'] = data['ownerActions'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PrivateTradingAccountFull({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'publicInfo': PrivateTradingAccountFullPublicDetails.constructFromObject(data['publicInfo']),
                'tradingAccountInfo': PrivateTradingAccountFullTradingAccountDetails.constructFromObject(data['tradingAccountInfo']),
                'brokerDetails': BrokerDetails.constructFromObject(data['brokerDetails']),
                'ownerActions': PrivateTradingAccountOwnerActions.constructFromObject(data['ownerActions']),
            });
        }
    }
}
