import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { FundWithdrawInfo } from "../model/FundWithdrawInfo";
import { ItemsViewModelAssetInvestmentRequest } from "../model/ItemsViewModelAssetInvestmentRequest";
import { ProgramWithdrawInfo } from "../model/ProgramWithdrawInfo";
export declare class InvestmentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    cancelRequest(id: string, authorization: string): CancelablePromise<null>;
    private cancelRequestWithHttpInfo;
    getFundWithdrawInfo(id: string, authorization: string, opts?: {
        currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<FundWithdrawInfo>;
    private getFundWithdrawInfoWithHttpInfo;
    getProgramWithdrawInfo(id: string, authorization: string): CancelablePromise<ProgramWithdrawInfo>;
    private getProgramWithdrawInfoWithHttpInfo;
    getRequests(skip: number, take: number, authorization: string): CancelablePromise<ItemsViewModelAssetInvestmentRequest>;
    private getRequestsWithHttpInfo;
    getRequestsByProgram(id: string, skip: number, take: number, authorization: string): CancelablePromise<ItemsViewModelAssetInvestmentRequest>;
    private getRequestsByProgramWithHttpInfo;
    investIntoFund(id: string, authorization: string, opts?: {
        amount?: number;
        walletId?: string;
    }): CancelablePromise<null>;
    private investIntoFundWithHttpInfo;
    investIntoProgram(id: string, authorization: string, opts?: {
        amount?: number;
        walletId?: string;
    }): CancelablePromise<null>;
    private investIntoProgramWithHttpInfo;
    switchReinvestOff(id: string, authorization: string): CancelablePromise<null>;
    private switchReinvestOffWithHttpInfo;
    switchReinvestOn(id: string, authorization: string): CancelablePromise<null>;
    private switchReinvestOnWithHttpInfo;
    withdrawFromFund(id: string, authorization: string, opts?: {
        percent?: number;
        currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<null>;
    private withdrawFromFundWithHttpInfo;
    withdrawFromProgram(id: string, authorization: string, opts?: {
        amount?: number;
        withdrawAll?: boolean;
    }): CancelablePromise<null>;
    private withdrawFromProgramWithHttpInfo;
}
