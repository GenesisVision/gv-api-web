import { ConvertingDetails } from './ConvertingDetails';
import { Currency } from './Currency';
import { ExternalTransactionDetails } from './ExternalTransactionDetails';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { ProgramTransactionDetails } from './ProgramTransactionDetails';
import { SignalFee } from './SignalFee';
import { TransactionDetailsType } from './TransactionDetailsType';
export declare class TransactionDetails {
    'type': TransactionDetailsType;
    'programDetails': ProgramTransactionDetails;
    'convertingDetails': ConvertingDetails;
    'externalTransactionDetails': ExternalTransactionDetails;
    'status': MultiWalletTransactionStatus;
    'signalFees': Array<SignalFee>;
    'currency': Currency;
    'currencyName': string;
    'currencyLogo': string;
    'gvCommission': number;
    'gvCommissionCurrency': GvCommissionCurrencyEnum;
    'gvCommissionPercent': number;
    'amount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionDetails;
}
declare type GvCommissionCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};
