import { TradingAccountDetails } from './TradingAccountDetails';

export interface TradingAccountDetailsItemsViewModel {
    readonly items: Array<TradingAccountDetails>;
    readonly total: number;
}

