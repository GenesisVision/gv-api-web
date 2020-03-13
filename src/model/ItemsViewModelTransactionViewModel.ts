import { TransactionViewModel } from './TransactionViewModel';

export interface ItemsViewModelTransactionViewModel {
    readonly items: Array<TransactionViewModel>;
    readonly total: number;
}

