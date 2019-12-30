import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';
export declare class TradingAccountMinCreateAmount {
    'serverType': BrokerTradeServerType;
    'minDepositCreateAsset': Array<AmountWithCurrency>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradingAccountMinCreateAmount | undefined;
}
