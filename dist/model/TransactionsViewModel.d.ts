import { TransactionViewModel } from './TransactionViewModel';
export declare class TransactionsViewModel {
    'transactions': Array<TransactionViewModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionsViewModel | undefined;
}
