import { AmountRowCell } from './AmountRowCell';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { TransactionAssetDetails } from './TransactionAssetDetails';
import { TransactionDetailItem } from './TransactionDetailItem';
import { TransactionDetailsActions } from './TransactionDetailsActions';
export declare class TransactionViewModel {
    'id': string;
    'date': Date;
    'description': string;
    'amount': AmountRowCell;
    'detailsTitle': string;
    'asset': TransactionAssetDetails;
    'details': Array<TransactionDetailItem>;
    'actions': TransactionDetailsActions;
    'status': MultiWalletTransactionStatus;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionViewModel | undefined;
}
