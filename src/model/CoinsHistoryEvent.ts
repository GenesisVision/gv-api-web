import { CoinsTrade } from './CoinsTrade';

export interface CoinsHistoryEvent {
    date: Date;
    price: number;
    trade: CoinsTrade;
}

