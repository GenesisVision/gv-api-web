import { AmountRowCell } from './AmountRowCell';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { TransactionAssetDetails } from './TransactionAssetDetails';
import { TransactionDetailItem } from './TransactionDetailItem';
import { TransactionDetailsActions } from './TransactionDetailsActions';
import { WalletRowCell } from './WalletRowCell';
export declare class TransactionViewModel {
    'id': string;
    'wallet': WalletRowCell;
    'date': Date;
    'status': MultiWalletTransactionStatus;
    'description': string;
    'amount': AmountRowCell;
    'asset': TransactionAssetDetails;
    'details': Array<TransactionDetailItem>;
    'actions': TransactionDetailsActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionViewModel | undefined;
}
