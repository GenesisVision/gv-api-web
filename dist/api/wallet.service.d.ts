import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { CreateWithdrawalRequestModel } from "../model/createWithdrawalRequestModel";
import { InternalTransferRequest } from "../model/internalTransferRequest";
import { MultiWalletExternalTransactionsViewModel } from "../model/multiWalletExternalTransactionsViewModel";
import { MultiWalletTransactionsViewModel } from "../model/multiWalletTransactionsViewModel";
import { TransactionDetails } from "../model/transactionDetails";
import { UserCommissionData } from "../model/userCommissionData";
import { WalletDepositSummary } from "../model/walletDepositSummary";
import { WalletMultiAvailable } from "../model/walletMultiAvailable";
import { WalletMultiSummary } from "../model/walletMultiSummary";
import { WithdrawalSummary } from "../model/withdrawalSummary";
export declare class WalletService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    cancelWithdrawalRequest(txId: string, authorization: string): CancelablePromise<null>;
    private cancelWithdrawalRequestWithHttpInfo;
    confirmWithdrawalRequestByCode(opts?: {
        requestId?: string;
        code?: string;
    }): CancelablePromise<null>;
    private confirmWithdrawalRequestByCodeWithHttpInfo;
    createWithdrawalRequest(authorization: string, opts?: {
        model?: CreateWithdrawalRequestModel;
    }): CancelablePromise<null>;
    private createWithdrawalRequestWithHttpInfo;
    getGMCommissionData(authorization: string): CancelablePromise<UserCommissionData>;
    private getGMCommissionDataWithHttpInfo;
    getMultiWalletTransactions(authorization: string, opts?: {
        from?: Date;
        to?: Date;
        type?: 'All' | 'Investment' | 'Converting' | 'Withdrawal' | 'Close' | 'Open' | 'Fee' | 'Profits' | 'SubscribeSignal' | 'ReceiveSignal' | 'DepositSignal' | 'WithdrawalSignal' | 'Platform';
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<MultiWalletTransactionsViewModel>;
    private getMultiWalletTransactionsWithHttpInfo;
    getTransactionDetails(id: string, authorization: string): CancelablePromise<TransactionDetails>;
    private getTransactionDetailsWithHttpInfo;
    getUserWithdrawalSummary(authorization: string): CancelablePromise<WithdrawalSummary>;
    private getUserWithdrawalSummaryWithHttpInfo;
    getWalletExternalTransactions(authorization: string, opts?: {
        from?: Date;
        to?: Date;
        type?: 'All' | 'Deposit' | 'Withdrawal';
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<MultiWalletExternalTransactionsViewModel>;
    private getWalletExternalTransactionsWithHttpInfo;
    getWalletMultiAvailable(currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<WalletMultiAvailable>;
    private getWalletMultiAvailableWithHttpInfo;
    getWalletMultiSummary(currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<WalletMultiSummary>;
    private getWalletMultiSummaryWithHttpInfo;
    resendWithdrawalRequestEmail(txId: string, authorization: string): CancelablePromise<null>;
    private resendWithdrawalRequestEmailWithHttpInfo;
    switchPayFeeInGvtOff(authorization: string): CancelablePromise<null>;
    private switchPayFeeInGvtOffWithHttpInfo;
    switchPayFeeInGvtOn(authorization: string): CancelablePromise<null>;
    private switchPayFeeInGvtOnWithHttpInfo;
    transfer(authorization: string, opts?: {
        request?: InternalTransferRequest;
    }): CancelablePromise<null>;
    private transferWithHttpInfo;
    updateDepositWallets(authorization: string): CancelablePromise<WalletDepositSummary>;
    private updateDepositWalletsWithHttpInfo;
}
