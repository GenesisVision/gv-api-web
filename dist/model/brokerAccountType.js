import { BrokerTradeServerType } from './brokerTradeServerType';
import ApiClient from "../ApiClient";
export class BrokerAccountType {
    constructor() {
    }
    static constructFromObject(data, obj = new BrokerAccountType()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = BrokerTradeServerType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('leverages')) {
                obj['leverages'] = ApiClient.convertToType(data['leverages'], ['number']);
            }
            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], ['string']);
            }
            if (data.hasOwnProperty('minimumDepositsAmount')) {
                obj['minimumDepositsAmount'] = ApiClient.convertToType(data['minimumDepositsAmount'], { String: 'number' });
            }
            if (data.hasOwnProperty('isKycRequired')) {
                obj['isKycRequired'] = ApiClient.convertToType(data['isKycRequired'], 'boolean');
            }
            if (data.hasOwnProperty('isSignalsAvailable')) {
                obj['isSignalsAvailable'] = ApiClient.convertToType(data['isSignalsAvailable'], 'boolean');
            }
        }
        return obj;
    }
}
