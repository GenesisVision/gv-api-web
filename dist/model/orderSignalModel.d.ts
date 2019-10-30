import { Currency } from './currency';
import { FeeDetails } from './feeDetails';
import { OrderModelSignalData } from './orderModelSignalData';
import { OrderSignalProgramInfo } from './orderSignalProgramInfo';
import { TradeDirectionType } from './tradeDirectionType';
import { TradeEntryType } from './tradeEntryType';
export declare class OrderSignalModel {
    'providers'?: Array<OrderSignalProgramInfo>;
    'totalCommission'?: number;
    'totalCommissionByType'?: Array<FeeDetails>;
    'tradingAccountId'?: string;
    'currency'?: Currency;
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
    }, obj?: OrderSignalModel): OrderSignalModel;
}
