import { MultiWalletTransaction } from './MultiWalletTransaction';
export declare class MultiWalletTransactionsViewModel {
    'transactions'?: Array<MultiWalletTransaction>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MultiWalletTransactionsViewModel): MultiWalletTransactionsViewModel;
}
