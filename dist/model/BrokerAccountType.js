import { BrokerTradeServerType } from './BrokerTradeServerType';
import ApiClient from "../ApiClient";
export class BrokerAccountType {
    constructor(data) {
        this['id'] = data['id'];
        this['name'] = data['name'];
        this['description'] = data['description'];
        this['type'] = data['type'];
        this['leverages'] = data['leverages'];
        this['currencies'] = data['currencies'];
        this['minimumDepositsAmount'] = data['minimumDepositsAmount'];
        this['isKycRequired'] = data['isKycRequired'];
        this['isSignalsAvailable'] = data['isSignalsAvailable'];
        this['isDemo'] = data['isDemo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new BrokerAccountType({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'type': BrokerTradeServerType.constructFromObject(data['type']),
                'leverages': ApiClient.convertToType(data['leverages'], ['number']),
                'currencies': ApiClient.convertToType(data['currencies'], ['string']),
                'minimumDepositsAmount': ApiClient.convertToType(data['minimumDepositsAmount'], { 'string': 'number' }),
                'isKycRequired': ApiClient.convertToType(data['isKycRequired'], 'boolean'),
                'isSignalsAvailable': ApiClient.convertToType(data['isSignalsAvailable'], 'boolean'),
                'isDemo': ApiClient.convertToType(data['isDemo'], 'boolean'),
            });
        }
    }
}
