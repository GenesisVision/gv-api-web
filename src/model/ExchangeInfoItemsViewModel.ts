import { ExchangeInfo } from './ExchangeInfo';

export interface ExchangeInfoItemsViewModel {
    readonly items: Array<ExchangeInfo>;
    readonly total: number;
}

