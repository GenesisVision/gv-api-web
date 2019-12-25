import { OrderModelSignalData } from './OrderModelSignalData';
import { TradeDirectionType } from './TradeDirectionType';
import { TradeEntryType } from './TradeEntryType';
export declare class OrderModel {
    'id': string;
    'login': string;
    'ticket': string;
    'symbol': string;
    'volume': number;
    'profit': number;
    'direction': TradeDirectionType;
    'date': Date;
    'price': number;
    'priceCurrent': number;
    'entry': TradeEntryType;
    'baseVolume': number;
    'originalCommission': number;
    'originalCommissionCurrency': string;
    'commission': number;
    'swap': number;
    'showOriginalCommission': boolean;
    'signalData': OrderModelSignalData;
    'externalSignalAccountId': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): OrderModel | undefined;
}
