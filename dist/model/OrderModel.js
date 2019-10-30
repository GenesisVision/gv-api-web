import { OrderModelSignalData } from './OrderModelSignalData';
import { TradeDirectionType } from './TradeDirectionType';
import { TradeEntryType } from './TradeEntryType';
import ApiClient from "../ApiClient";
export class OrderModel {
    static constructFromObject(data, obj = new OrderModel()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'string');
            }
            if (data.hasOwnProperty('ticket')) {
                obj['ticket'] = ApiClient.convertToType(data['ticket'], 'string');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'string');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = TradeDirectionType.constructFromObject(data['direction']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'number');
            }
            if (data.hasOwnProperty('priceCurrent')) {
                obj['priceCurrent'] = ApiClient.convertToType(data['priceCurrent'], 'number');
            }
            if (data.hasOwnProperty('entry')) {
                obj['entry'] = TradeEntryType.constructFromObject(data['entry']);
            }
            if (data.hasOwnProperty('baseVolume')) {
                obj['baseVolume'] = ApiClient.convertToType(data['baseVolume'], 'number');
            }
            if (data.hasOwnProperty('originalCommission')) {
                obj['originalCommission'] = ApiClient.convertToType(data['originalCommission'], 'number');
            }
            if (data.hasOwnProperty('originalCommissionCurrency')) {
                obj['originalCommissionCurrency'] = ApiClient.convertToType(data['originalCommissionCurrency'], 'string');
            }
            if (data.hasOwnProperty('commission')) {
                obj['commission'] = ApiClient.convertToType(data['commission'], 'number');
            }
            if (data.hasOwnProperty('swap')) {
                obj['swap'] = ApiClient.convertToType(data['swap'], 'number');
            }
            if (data.hasOwnProperty('showOriginalCommission')) {
                obj['showOriginalCommission'] = ApiClient.convertToType(data['showOriginalCommission'], 'boolean');
            }
            if (data.hasOwnProperty('signalData')) {
                obj['signalData'] = OrderModelSignalData.constructFromObject(data['signalData']);
            }
        }
        return obj;
    }
}
