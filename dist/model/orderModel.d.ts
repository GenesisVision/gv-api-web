import { OrderModelSignalData } from './orderModelSignalData';
import { TradeDirectionType } from './tradeDirectionType';
import { TradeEntryType } from './tradeEntryType';
export declare class OrderModel {
    'id'?: string;
    'login'?: string;
    'ticket'?: string;
    'symbol'?: string;
    'volume'?: number;
    'profit'?: number;
    'direction'?: TradeDirectionType;
    'date'?: Date;
    'price'?: number;
    'priceCurrent'?: number;
    'entry'?: TradeEntryType;
    'baseVolume'?: number;
    'originalCommission'?: number;
    'originalCommissionCurrency'?: string;
    'commission'?: number;
    'swap'?: number;
    'showOriginalCommission'?: boolean;
    'signalData'?: OrderModelSignalData;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: OrderModel): OrderModel;
}
