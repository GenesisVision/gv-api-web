import { MultiWalletExternalTransaction } from './MultiWalletExternalTransaction';
export declare class MultiWalletExternalTransactionsViewModel {
    'transactions'?: Array<MultiWalletExternalTransaction>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MultiWalletExternalTransactionsViewModel): MultiWalletExternalTransactionsViewModel;
}
