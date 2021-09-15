import { CoinsTrade } from './CoinsTrade';

export interface CoinsHistoryEvent {
    date: Date;
    trade: CoinsTrade;
    price: number;
    commission: number;
    commissionCurrency: string;
}

