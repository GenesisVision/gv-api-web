import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface TradingAccountMaxCreateAmount {
    serverType: BrokerTradeServerType;
    transferDemo: Array<AmountWithCurrency>;
}

