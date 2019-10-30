import { Currency } from './Currency';
import { FeeDetails } from './FeeDetails';
import { OrderModelSignalData } from './OrderModelSignalData';
import { OrderSignalProgramInfo } from './OrderSignalProgramInfo';
import { TradeDirectionType } from './TradeDirectionType';
import { TradeEntryType } from './TradeEntryType';
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
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: OrderSignalModel): OrderSignalModel;
}
