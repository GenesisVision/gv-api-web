import { AmountRowCell } from './AmountRowCell';
import { ExternalDetails } from './ExternalDetails';
import { ManagerAssetDetails } from './ManagerAssetDetails';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
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
    'asset': ManagerAssetDetails;
    'external': ExternalDetails;
    'details': Array<TransactionDetailItem>;
    'actions': TransactionDetailsActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionViewModel | undefined;
}
