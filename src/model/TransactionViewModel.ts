import { AmountRowCell } from './AmountRowCell';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { TransactionAssetDetails } from './TransactionAssetDetails';
import { TransactionDetailItem } from './TransactionDetailItem';
import { TransactionDetailsActions } from './TransactionDetailsActions';

export interface TransactionViewModel {
    id: string;
    date: Date;
    description: string;
    amount: AmountRowCell;
    detailsTitle: string;
    asset: TransactionAssetDetails;
    details: Array<TransactionDetailItem>;
    actions: TransactionDetailsActions;
    status: MultiWalletTransactionStatus;
}

