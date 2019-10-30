import { ConvertingDetails } from './convertingDetails';
import { Currency } from './currency';
import { ExternalTransactionDetails } from './externalTransactionDetails';
import { MultiWalletTransactionStatus } from './multiWalletTransactionStatus';
import { ProgramTransactionDetails } from './programTransactionDetails';
import { SignalFee } from './signalFee';
import { TransactionDetailsType } from './transactionDetailsType';
import ApiClient from "../ApiClient";
export class TransactionDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new TransactionDetails()) {
        if (data) {
            if (data.hasOwnProperty('type')) {
                obj['type'] = TransactionDetailsType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('programDetails')) {
                obj['programDetails'] = ProgramTransactionDetails.constructFromObject(data['programDetails']);
            }
            if (data.hasOwnProperty('convertingDetails')) {
                obj['convertingDetails'] = ConvertingDetails.constructFromObject(data['convertingDetails']);
            }
            if (data.hasOwnProperty('externalTransactionDetails')) {
                obj['externalTransactionDetails'] = ExternalTransactionDetails.constructFromObject(data['externalTransactionDetails']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = MultiWalletTransactionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('signalFees')) {
                obj['signalFees'] = ApiClient.convertToType(data['signalFees'], [SignalFee]);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('currencyName')) {
                obj['currencyName'] = ApiClient.convertToType(data['currencyName'], 'string');
            }
            if (data.hasOwnProperty('currencyLogo')) {
                obj['currencyLogo'] = ApiClient.convertToType(data['currencyLogo'], 'string');
            }
            if (data.hasOwnProperty('gvCommission')) {
                obj['gvCommission'] = ApiClient.convertToType(data['gvCommission'], 'number');
            }
            if (data.hasOwnProperty('gvCommissionCurrency')) {
                obj['gvCommissionCurrency'] = ApiClient.convertToType(data['gvCommissionCurrency'], 'string');
            }
            if (data.hasOwnProperty('gvCommissionPercent')) {
                obj['gvCommissionPercent'] = ApiClient.convertToType(data['gvCommissionPercent'], 'number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
        }
        return obj;
    }
}
