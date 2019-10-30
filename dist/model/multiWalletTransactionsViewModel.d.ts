import { MultiWalletTransaction } from './multiWalletTransaction';
export declare class MultiWalletTransactionsViewModel {
    'transactions'?: Array<MultiWalletTransaction>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MultiWalletTransactionsViewModel): MultiWalletTransactionsViewModel;
}
