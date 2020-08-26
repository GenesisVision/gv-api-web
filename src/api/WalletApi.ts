import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { CreateWithdrawalRequestModel } from '../model/CreateWithdrawalRequestModel';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { InternalTransferRequest } from '../model/InternalTransferRequest';
import { TransactionExternalType } from '../model/TransactionExternalType';
import { TransactionInternalType } from '../model/TransactionInternalType';
import { TransactionViewModelItemsViewModel } from '../model/TransactionViewModelItemsViewModel';
import { UserCommissionData } from '../model/UserCommissionData';
import { WalletDepositSummary } from '../model/WalletDepositSummary';
import { WalletMultiAvailable } from '../model/WalletMultiAvailable';
import { WalletSummary } from '../model/WalletSummary';
import { WithdrawalSummary } from '../model/WithdrawalSummary';

export default class WalletApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  cancelWithdrawalRequest = (
    txId: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  txId  },
        apiClient: this.apiClient,
        path: "/v2.0/wallet/withdraw/request/cancel/{txId}",
        
        
        method: "POST",
    })
  };

  confirmWithdrawalRequestByCode = (
    options: {
      requestId?: string,
      code?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  requestId: options['requestId'],   code: options['code']  },
        apiClient: this.apiClient,
        path: "/v2.0/wallet/withdraw/request/confirm",
        
        
        method: "POST",
    })
  };

  createWithdrawalRequest = (
    options: {
      body?: CreateWithdrawalRequestModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/wallet/withdraw/request/new",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  getGMCommissionData = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<UserCommissionData> => {
    
    return generateMethod<Promise<UserCommissionData>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/wallet/fee/gvtholding",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getTransactionsExternal = (
    options: {
      transactionType?: TransactionExternalType,
      dateFrom?: Date,
      dateTo?: Date,
      currency?: Currency,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<TransactionViewModelItemsViewModel> => {
    
    return generateMethod<Promise<TransactionViewModelItemsViewModel>>({
        init,
        queryParams: {  TransactionType: options['transactionType'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Currency: options['currency'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/wallet/transactions/external",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getTransactionsInternal = (
    options: {
      transactionType?: TransactionInternalType,
      dateFrom?: Date,
      dateTo?: Date,
      currency?: Currency,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<TransactionViewModelItemsViewModel> => {
    
    return generateMethod<Promise<TransactionViewModelItemsViewModel>>({
        init,
        queryParams: {  TransactionType: options['transactionType'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Currency: options['currency'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/wallet/transactions/internal",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getUserWithdrawalSummary = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<WithdrawalSummary> => {
    
    return generateMethod<Promise<WithdrawalSummary>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/wallet/withdraw/info",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getWalletAvailable = (
    currency: Currency,
    options: {
      } = {},
    init: RequestInit = {}): Promise<WalletMultiAvailable> => {
    
    return generateMethod<Promise<WalletMultiAvailable>>({
        init,
        pathParams: {  currency  },
        apiClient: this.apiClient,
        path: "/v2.0/wallet/{currency}/available",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getWalletSummary = (
    currency: Currency,
    options: {
      } = {},
    init: RequestInit = {}): Promise<WalletSummary> => {
    
    return generateMethod<Promise<WalletSummary>>({
        init,
        pathParams: {  currency  },
        apiClient: this.apiClient,
        path: "/v2.0/wallet/{currency}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  resendWithdrawalRequestEmail = (
    txId: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  txId  },
        apiClient: this.apiClient,
        path: "/v2.0/wallet/withdraw/request/resend/{txId}",
        
        
        method: "POST",
    })
  };

  transfer = (
    options: {
      body?: InternalTransferRequest
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/wallet/transfer",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateDepositWallets = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<WalletDepositSummary> => {
    
    return generateMethod<Promise<WalletDepositSummary>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/wallet/deposit/update",
        
        returnType: "structure",
        method: "POST",
    })
  };
}
