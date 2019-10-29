import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { CreateWithdrawalRequestModel } from "../model/createWithdrawalRequestModel";
import { InternalTransferRequest } from "../model/internalTransferRequest";
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
