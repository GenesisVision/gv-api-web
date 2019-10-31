import { AmountRowCell } from './AmountRowCell';
import { AssetDetails } from './AssetDetails';
import { ButtonAction } from './ButtonAction';
import { ExternalDetails } from './ExternalDetails';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { TransactionDetail } from './TransactionDetail';
import { WalletRowCell } from './WalletRowCell';
export declare class TransactionViewModel {
    'wallet': WalletRowCell;
    'date': Date;
    'status': MultiWalletTransactionStatus;
    'description': string;
    'amount': AmountRowCell;
    'asset': AssetDetails;
    'external': ExternalDetails;
    'buttons': Array<ButtonAction>;
    'details': Array<TransactionDetail>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionViewModel | undefined;
}
