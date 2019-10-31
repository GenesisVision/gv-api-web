import { MultiWalletExternalTransaction } from './MultiWalletExternalTransaction';
export declare class MultiWalletExternalTransactionsViewModel {
    'transactions': Array<MultiWalletExternalTransaction>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MultiWalletExternalTransactionsViewModel | undefined;
}
