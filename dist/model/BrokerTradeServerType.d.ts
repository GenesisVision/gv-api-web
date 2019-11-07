import { GenericFabric } from "../constructFromObject";
export declare type BrokerTradeServerType = 'Undefined' | 'MetaTrader4' | 'MetaTrader5' | 'NinjaTrader' | 'cTrader' | 'Rumus' | 'Metastock' | 'IDEX' | 'Huobi' | 'Exante' | 'BinanceExchange';
export declare const BrokerTradeServerType: {
    constructFromObject: GenericFabric<BrokerTradeServerType>;
};