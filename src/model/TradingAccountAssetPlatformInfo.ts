import { TradingAccountMaxCreateAmount } from './TradingAccountMaxCreateAmount';
import { TradingAccountMinCreateAmount } from './TradingAccountMinCreateAmount';

export interface TradingAccountAssetPlatformInfo {
    minAmounts: Array<TradingAccountMinCreateAmount>;
    maxAmounts: Array<TradingAccountMaxCreateAmount>;
}

