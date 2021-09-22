import { CoinsTrade } from './CoinsTrade';

export interface CoinsHistoryEvent {
    date: Date;
    trade: CoinsTrade;
}

