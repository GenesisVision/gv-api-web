import { AmountRowCell } from './AmountRowCell';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { TransactionAssetDetails } from './TransactionAssetDetails';
import { TransactionDetailItem } from './TransactionDetailItem';
import { TransactionDetailsActions } from './TransactionDetailsActions';
import ApiClient from "../ApiClient";
export class TransactionViewModel {
    constructor(data) {
        this['id'] = data['id'];
        this['date'] = data['date'];
        this['description'] = data['description'];
        this['amount'] = data['amount'];
        this['detailsTitle'] = data['detailsTitle'];
        this['asset'] = data['asset'];
        this['details'] = data['details'];
        this['actions'] = data['actions'];
        this['status'] = data['status'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TransactionViewModel({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'amount': AmountRowCell.constructFromObject(data['amount']),
                'detailsTitle': ApiClient.convertToType(data['detailsTitle'], 'string'),
                'asset': TransactionAssetDetails.constructFromObject(data['asset']),
                'details': ApiClient.convertToType(data['details'], [TransactionDetailItem]),
                'actions': TransactionDetailsActions.constructFromObject(data['actions']),
                'status': MultiWalletTransactionStatus.constructFromObject(data['status']),
            });
        }
    }
}
