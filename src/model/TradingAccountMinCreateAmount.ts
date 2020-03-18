import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface TradingAccountMinCreateAmount {
    serverType: BrokerTradeServerType;
    minDepositCreateAsset: Array<AmountWithCurrency>;
}

