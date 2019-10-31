import { AmountRowCell } from './AmountRowCell';
import { AssetDetails } from './AssetDetails';
import { ButtonAction } from './ButtonAction';
import { ExternalDetails } from './ExternalDetails';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { TransactionDetail } from './TransactionDetail';
import { WalletRowCell } from './WalletRowCell';
import ApiClient from "../ApiClient";
export class TransactionViewModel {
    constructor(data) {
        this['wallet'] = data['wallet'];
        this['date'] = data['date'];
        this['status'] = data['status'];
        this['description'] = data['description'];
        this['amount'] = data['amount'];
        this['asset'] = data['asset'];
        this['external'] = data['external'];
        this['buttons'] = data['buttons'];
        this['details'] = data['details'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TransactionViewModel({
                'wallet': WalletRowCell.constructFromObject(data['wallet']),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'status': MultiWalletTransactionStatus.constructFromObject(data['status']),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'amount': AmountRowCell.constructFromObject(data['amount']),
                'asset': AssetDetails.constructFromObject(data['asset']),
                'external': ExternalDetails.constructFromObject(data['external']),
                'buttons': ApiClient.convertToType(data['buttons'], [ButtonAction]),
                'details': ApiClient.convertToType(data['details'], [TransactionDetail]),
            });
        }
    }
}
