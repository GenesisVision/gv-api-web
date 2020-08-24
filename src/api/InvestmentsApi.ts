import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AssetInvestmentRequestItemsViewModel } from '../model/AssetInvestmentRequestItemsViewModel';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundWithdrawInfo } from '../model/FundWithdrawInfo';
import { ProgramWithdrawInfo } from '../model/ProgramWithdrawInfo';

export default class InvestmentsApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  cancelRequest = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/requests/{id}/cancel",
        
        
        method: "POST",
    })
  };

  getFundWithdrawInfo = (
    id: string,
    options: {
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<FundWithdrawInfo> => {
    
    return generateMethod<Promise<FundWithdrawInfo>>({
        init,
        pathParams: {  id  },
        queryParams: {  currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/funds/{id}/withdraw/info",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramWithdrawInfo = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<ProgramWithdrawInfo> => {
    
    return generateMethod<Promise<ProgramWithdrawInfo>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/programs/{id}/withdraw/info",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getRequests = (
    skip: number,
    take: number,
    options: {
      } = {},
    init: RequestInit = {}): Promise<AssetInvestmentRequestItemsViewModel> => {
    
    return generateMethod<Promise<AssetInvestmentRequestItemsViewModel>>({
        init,
        pathParams: {  skip,   take  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/requests/{skip}/{take}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getRequestsByProgram = (
    id: string,
    skip: number,
    take: number,
    options: {
      } = {},
    init: RequestInit = {}): Promise<AssetInvestmentRequestItemsViewModel> => {
    
    return generateMethod<Promise<AssetInvestmentRequestItemsViewModel>>({
        init,
        pathParams: {  id,   skip,   take  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/requests/{id}/{skip}/{take}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  investIntoFund = (
    id: string,
    options: {
      amount?: number,
      walletId?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        queryParams: {  amount: options['amount'],   walletId: options['walletId']  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/funds/{id}/invest",
        
        
        method: "POST",
    })
  };

  investIntoProgram = (
    id: string,
    options: {
      amount?: number,
      walletId?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        queryParams: {  amount: options['amount'],   walletId: options['walletId']  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/programs/{id}/invest",
        
        
        method: "POST",
    })
  };

  switchAutoJoinOff = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/programs/{id}/autojoin/off",
        
        
        method: "POST",
    })
  };

  switchAutoJoinOn = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/programs/{id}/autojoin/on",
        
        
        method: "POST",
    })
  };

  switchReinvestOff = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/programs/{id}/reinvest/off",
        
        
        method: "POST",
    })
  };

  switchReinvestOn = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/programs/{id}/reinvest/on",
        
        
        method: "POST",
    })
  };

  withdrawFromFund = (
    id: string,
    options: {
      percent?: number,
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        queryParams: {  percent: options['percent'],   currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/funds/{id}/withdraw",
        
        
        method: "POST",
    })
  };

  withdrawFromProgram = (
    id: string,
    options: {
      amount?: number,
      withdrawAll?: boolean
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        queryParams: {  amount: options['amount'],   withdrawAll: options['withdrawAll']  },
        apiClient: this.apiClient,
        path: "/v2.0/investments/programs/{id}/withdraw",
        
        
        method: "POST",
    })
  };
}
