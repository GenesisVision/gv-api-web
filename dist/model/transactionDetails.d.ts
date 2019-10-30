import { ConvertingDetails } from './convertingDetails';
import { Currency } from './currency';
import { ExternalTransactionDetails } from './externalTransactionDetails';
import { MultiWalletTransactionStatus } from './multiWalletTransactionStatus';
import { ProgramTransactionDetails } from './programTransactionDetails';
import { SignalFee } from './signalFee';
import { TransactionDetailsType } from './transactionDetailsType';
export declare class TransactionDetails {
    'type'?: TransactionDetailsType;
    'programDetails'?: ProgramTransactionDetails;
    'convertingDetails'?: ConvertingDetails;
    'externalTransactionDetails'?: ExternalTransactionDetails;
    'status'?: MultiWalletTransactionStatus;
    'signalFees'?: [SignalFee];
    'currency'?: Currency;
    'currencyName'?: string;
    'currencyLogo'?: string;
    'gvCommission'?: number;
    'gvCommissionCurrency'?: GvCommissionCurrencyEnum;
    'gvCommissionPercent'?: number;
    'amount'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: TransactionDetails): TransactionDetails;
}
declare type GvCommissionCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};
