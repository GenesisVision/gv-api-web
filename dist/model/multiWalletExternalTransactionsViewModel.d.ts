import { MultiWalletExternalTransaction } from './multiWalletExternalTransaction';
export declare class MultiWalletExternalTransactionsViewModel {
    'transactions'?: Array<MultiWalletExternalTransaction>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MultiWalletExternalTransactionsViewModel): MultiWalletExternalTransactionsViewModel;
}
