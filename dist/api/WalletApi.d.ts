import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { CreateWithdrawalRequestModel } from "../model/CreateWithdrawalRequestModel";
import { InternalTransferRequest } from "../model/InternalTransferRequest";
import { ItemsViewModelTransactionViewModel } from "../model/ItemsViewModelTransactionViewModel";
import { UserCommissionData } from "../model/UserCommissionData";
import { WalletDepositSummary } from "../model/WalletDepositSummary";
import { WalletMultiAvailable } from "../model/WalletMultiAvailable";
import { WalletMultiSummary } from "../model/WalletMultiSummary";
import { WithdrawalSummary } from "../model/WithdrawalSummary";
export declare class WalletApi {
    private apiClient;
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
    getTransactionsExternal(authorization: string, opts?: {
        transactionType?: 'All' | 'Withdrawal' | 'Deposit' | 'Platform';
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelTransactionViewModel>;
    private getTransactionsExternalWithHttpInfo;
    getTransactionsInternal(authorization: string, opts?: {
        transactionType?: 'All' | 'Investment' | 'Withdrawal' | 'Deposit' | 'Conversion' | 'Commission' | 'Program' | 'Fund' | 'Follow' | 'TradingAccounts' | 'AgentReward' | 'Platform';
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelTransactionViewModel>;
    private getTransactionsInternalWithHttpInfo;
    getUserWithdrawalSummary(authorization: string): CancelablePromise<WithdrawalSummary>;
    private getUserWithdrawalSummaryWithHttpInfo;
    getWalletAvailable(currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<WalletMultiAvailable>;
    private getWalletAvailableWithHttpInfo;
    getWalletSummary(currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<WalletMultiSummary>;
    private getWalletSummaryWithHttpInfo;
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
