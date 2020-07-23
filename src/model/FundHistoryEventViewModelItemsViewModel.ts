import { FundHistoryEventViewModel } from './FundHistoryEventViewModel';

export interface FundHistoryEventViewModelItemsViewModel {
    readonly items: Array<FundHistoryEventViewModel>;
    readonly total: number;
}

