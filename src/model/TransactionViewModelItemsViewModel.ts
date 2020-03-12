import { TransactionViewModel } from './TransactionViewModel';

export interface TransactionViewModelItemsViewModel {
    readonly items: Array<TransactionViewModel>;
    readonly total: number;
}

