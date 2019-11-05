import { TransactionViewModel } from './TransactionViewModel';
export declare class ItemsViewModelTransactionViewModel {
    'items': Array<TransactionViewModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelTransactionViewModel | undefined;
}
