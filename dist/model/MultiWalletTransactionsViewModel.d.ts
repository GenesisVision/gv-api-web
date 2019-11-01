import { MultiWalletTransaction } from './MultiWalletTransaction';
export declare class MultiWalletTransactionsViewModel {
    'transactions': Array<MultiWalletTransaction>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MultiWalletTransactionsViewModel | undefined;
}
