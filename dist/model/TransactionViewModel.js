import { AmountRowCell } from './AmountRowCell';
import { ManagerAssetDetails } from './ManagerAssetDetails';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { TransactionDetailItem } from './TransactionDetailItem';
import { TransactionDetailsActions } from './TransactionDetailsActions';
import { WalletRowCell } from './WalletRowCell';
import ApiClient from "../ApiClient";
export class TransactionViewModel {
    constructor(data) {
        this['id'] = data['id'];
        this['wallet'] = data['wallet'];
        this['date'] = data['date'];
        this['status'] = data['status'];
        this['description'] = data['description'];
        this['amount'] = data['amount'];
        this['asset'] = data['asset'];
        this['details'] = data['details'];
        this['actions'] = data['actions'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TransactionViewModel({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'wallet': WalletRowCell.constructFromObject(data['wallet']),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'status': MultiWalletTransactionStatus.constructFromObject(data['status']),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'amount': AmountRowCell.constructFromObject(data['amount']),
                'asset': ManagerAssetDetails.constructFromObject(data['asset']),
                'details': ApiClient.convertToType(data['details'], [TransactionDetailItem]),
                'actions': TransactionDetailsActions.constructFromObject(data['actions']),
            });
        }
    }
}
