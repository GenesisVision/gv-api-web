import { ConvertingDetails } from './ConvertingDetails';
import { Currency } from './Currency';
import { ExternalTransactionDetails } from './ExternalTransactionDetails';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { ProgramTransactionDetails } from './ProgramTransactionDetails';
import { SignalFee } from './SignalFee';
import { TransactionDetailsType } from './TransactionDetailsType';
import ApiClient from "../ApiClient";
export class TransactionDetails {
    constructor(data) {
        this['type'] = data['type'];
        this['programDetails'] = data['programDetails'];
        this['convertingDetails'] = data['convertingDetails'];
        this['externalTransactionDetails'] = data['externalTransactionDetails'];
        this['status'] = data['status'];
        this['signalFees'] = data['signalFees'];
        this['currency'] = data['currency'];
        this['currencyName'] = data['currencyName'];
        this['currencyLogo'] = data['currencyLogo'];
        this['gvCommission'] = data['gvCommission'];
        this['gvCommissionCurrency'] = data['gvCommissionCurrency'];
        this['gvCommissionPercent'] = data['gvCommissionPercent'];
        this['amount'] = data['amount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TransactionDetails({
                'type': TransactionDetailsType.constructFromObject(data['type']),
                'programDetails': ProgramTransactionDetails.constructFromObject(data['programDetails']),
                'convertingDetails': ConvertingDetails.constructFromObject(data['convertingDetails']),
                'externalTransactionDetails': ExternalTransactionDetails.constructFromObject(data['externalTransactionDetails']),
                'status': MultiWalletTransactionStatus.constructFromObject(data['status']),
                'signalFees': ApiClient.convertToType(data['signalFees'], [SignalFee]),
                'currency': Currency.constructFromObject(data['currency']),
                'currencyName': ApiClient.convertToType(data['currencyName'], 'string'),
                'currencyLogo': ApiClient.convertToType(data['currencyLogo'], 'string'),
                'gvCommission': ApiClient.convertToType(data['gvCommission'], 'number'),
                'gvCommissionCurrency': ApiClient.convertToType(data['gvCommissionCurrency'], 'string'),
                'gvCommissionPercent': ApiClient.convertToType(data['gvCommissionPercent'], 'number'),
                'amount': ApiClient.convertToType(data['amount'], 'number'),
            });
        }
    }
}
