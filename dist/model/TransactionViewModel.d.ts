import { AmountRowCell } from './AmountRowCell';
import { ExternalDetails } from './ExternalDetails';
import { ManagedAssetDetails } from './ManagedAssetDetails';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { TransactionDetail } from './TransactionDetail';
import { TransactionDetailsActions } from './TransactionDetailsActions';
import { WalletRowCell } from './WalletRowCell';
export declare class TransactionViewModel {
    'id': string;
    'wallet': WalletRowCell;
    'date': Date;
    'status': MultiWalletTransactionStatus;
    'description': string;
    'amount': AmountRowCell;
    'asset': ManagedAssetDetails;
    'external': ExternalDetails;
    'details': Array<TransactionDetail>;
    'actions': TransactionDetailsActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionViewModel | undefined;
}
