import { CoinsHistoryEvent } from './CoinsHistoryEvent';

export interface CoinsHistoryEventItemsViewModel {
    readonly items: Array<CoinsHistoryEvent>;
    readonly total: number;
}

