import { OrderModelSignalData } from './OrderModelSignalData';
import { TradeDirectionType } from './TradeDirectionType';
import { TradeEntryType } from './TradeEntryType';
import ApiClient from "../ApiClient";
export class OrderModel {
    constructor(data) {
        this['id'] = data['id'];
        this['login'] = data['login'];
        this['ticket'] = data['ticket'];
        this['symbol'] = data['symbol'];
        this['volume'] = data['volume'];
        this['profit'] = data['profit'];
        this['direction'] = data['direction'];
        this['date'] = data['date'];
        this['price'] = data['price'];
        this['priceCurrent'] = data['priceCurrent'];
        this['entry'] = data['entry'];
        this['baseVolume'] = data['baseVolume'];
        this['originalCommission'] = data['originalCommission'];
        this['originalCommissionCurrency'] = data['originalCommissionCurrency'];
        this['commission'] = data['commission'];
        this['swap'] = data['swap'];
        this['showOriginalCommission'] = data['showOriginalCommission'];
        this['signalData'] = data['signalData'];
        this['externalSignalAccountId'] = data['externalSignalAccountId'];
    }
    static constructFromObject(data) {
        if (data) {
            return new OrderModel({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'ticket': ApiClient.convertToType(data['ticket'], 'string'),
                'symbol': ApiClient.convertToType(data['symbol'], 'string'),
                'volume': ApiClient.convertToType(data['volume'], 'number'),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'direction': TradeDirectionType.constructFromObject(data['direction']),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'price': ApiClient.convertToType(data['price'], 'number'),
                'priceCurrent': ApiClient.convertToType(data['priceCurrent'], 'number'),
                'entry': TradeEntryType.constructFromObject(data['entry']),
                'baseVolume': ApiClient.convertToType(data['baseVolume'], 'number'),
                'originalCommission': ApiClient.convertToType(data['originalCommission'], 'number'),
                'originalCommissionCurrency': ApiClient.convertToType(data['originalCommissionCurrency'], 'string'),
                'commission': ApiClient.convertToType(data['commission'], 'number'),
                'swap': ApiClient.convertToType(data['swap'], 'number'),
                'showOriginalCommission': ApiClient.convertToType(data['showOriginalCommission'], 'boolean'),
                'signalData': OrderModelSignalData.constructFromObject(data['signalData']),
                'externalSignalAccountId': ApiClient.convertToType(data['externalSignalAccountId'], 'string'),
            });
        }
    }
}
