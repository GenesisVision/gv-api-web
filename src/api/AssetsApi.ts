import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ChangeBrokerProgramRequest } from '../model/ChangeBrokerProgramRequest';
import { CreateSignalProvider } from '../model/CreateSignalProvider';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundAssetPart } from '../model/FundAssetPart';
import { MakeExchangeAccountProgram } from '../model/MakeExchangeAccountProgram';
import { MakeProgram } from '../model/MakeProgram';
import { MakeSignalProviderProgram } from '../model/MakeSignalProviderProgram';
import { MakeTradingAccountProgram } from '../model/MakeTradingAccountProgram';
import { MakeTradingAccountSignalProvider } from '../model/MakeTradingAccountSignalProvider';
import { NewExchangeAccountRequest } from '../model/NewExchangeAccountRequest';
import { NewExternalTradingAccountRequest } from '../model/NewExternalTradingAccountRequest';
import { NewFundRequest } from '../model/NewFundRequest';
import { NewTradingAccountRequest } from '../model/NewTradingAccountRequest';
import { ProgramLevelInfo } from '../model/ProgramLevelInfo';
import { ProgramUpdate } from '../model/ProgramUpdate';
import { StringItemsViewModel } from '../model/StringItemsViewModel';
import { TradingAccountCreateResult } from '../model/TradingAccountCreateResult';
import { TradingAccountDemoDeposit } from '../model/TradingAccountDemoDeposit';
import { TradingAccountPwdUpdate } from '../model/TradingAccountPwdUpdate';
import { TwoFactorAuthenticator } from '../model/TwoFactorAuthenticator';
import { TwoFactorCodeModel } from '../model/TwoFactorCodeModel';

export default class AssetsApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  addFavoriteSymbol = (
    id: string,
    symbol: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id,   symbol  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/{id}/symbol/favorite/{symbol}/add",
        
        
        method: "POST",
    })
  };

  cancelChangeBroker = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/{id}/broker/change/cancel",
        
        
        method: "POST",
    })
  };

  changeBroker = (
    id: string,
    options: {
      body?: ChangeBrokerProgramRequest
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/{id}/broker/change",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  changeTradingAccountPassword = (
    id: string,
    options: {
      body?: TradingAccountPwdUpdate
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/{id}/password/change",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  closeCurrentPeriod = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/{id}/period/close",
        
        
        method: "POST",
    })
  };

  closeFund = (
    id: string,
    options: {
      body?: TwoFactorCodeModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/funds/{id}/close",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  closeInvestmentProgram = (
    id: string,
    options: {
      body?: TwoFactorCodeModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/{id}/close",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  closeTradingAccount = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/{id}/close",
        
        
        method: "POST",
    })
  };

  confirmProgram2FA = (
    id: string,
    options: {
      body?: TwoFactorCodeModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/{id}/2fa/confirm",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  createExchangeAccount = (
    options: {
      body?: NewExchangeAccountRequest
      } = {},
    init: RequestInit = {}): Promise<TradingAccountCreateResult> => {
    
    return generateMethod<Promise<TradingAccountCreateResult>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/exchange/create",
        body: JSON.stringify(options['body']),
        returnType: "structure",
        method: "POST",
    })
  };

  createExternalTradingAccount = (
    options: {
      body?: NewExternalTradingAccountRequest
      } = {},
    init: RequestInit = {}): Promise<TradingAccountCreateResult> => {
    
    return generateMethod<Promise<TradingAccountCreateResult>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/external/create",
        body: JSON.stringify(options['body']),
        returnType: "structure",
        method: "POST",
    })
  };

  createFund = (
    options: {
      body?: NewFundRequest
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/funds/create",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  createTradingAccount = (
    options: {
      body?: NewTradingAccountRequest
      } = {},
    init: RequestInit = {}): Promise<TradingAccountCreateResult> => {
    
    return generateMethod<Promise<TradingAccountCreateResult>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/create",
        body: JSON.stringify(options['body']),
        returnType: "structure",
        method: "POST",
    })
  };

  getFavoriteSymbols = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<StringItemsViewModel> => {
    
    return generateMethod<Promise<StringItemsViewModel>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/{id}/symbol/favorite",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getLevelsCalculator = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<ProgramLevelInfo> => {
    
    return generateMethod<Promise<ProgramLevelInfo>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/{id}/levels/info",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgram2FA = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<TwoFactorAuthenticator> => {
    
    return generateMethod<Promise<TwoFactorAuthenticator>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/{id}/2fa/get",
        
        returnType: "structure",
        method: "GET",
    })
  };

  makeAccountProgram = (
    options: {
      body?: MakeTradingAccountProgram
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/fromaccount/create",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  makeAccountSignalProvider = (
    options: {
      body?: MakeTradingAccountSignalProvider
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/signal/create",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  makeDemoTradingAccountDeposit = (
    id: string,
    options: {
      body?: TradingAccountDemoDeposit
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/{id}/demo/deposit",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  makeExchangeAccountProgram = (
    options: {
      body?: MakeExchangeAccountProgram
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/fromexchangeaccount/create",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  makeExternalAccountSignalProvider = (
    options: {
      body?: MakeTradingAccountSignalProvider
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/external/fromaccount/create",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  makeProgram = (
    options: {
      body?: MakeProgram
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/create",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  makeSignalProviderProgram = (
    options: {
      body?: MakeSignalProviderProgram
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/fromsignalprovider/create",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  removeFavoriteSymbol = (
    id: string,
    symbol: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id,   symbol  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/tradingaccounts/{id}/symbol/favorite/{symbol}/remove",
        
        
        method: "POST",
    })
  };

  updateAsset = (
    id: string,
    options: {
      body?: ProgramUpdate
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/follow/{id}/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateAsset_0 = (
    id: string,
    options: {
      body?: ProgramUpdate
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/funds/{id}/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateAsset_1 = (
    id: string,
    options: {
      body?: ProgramUpdate
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/programs/{id}/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateFundAssets = (
    id: string,
    options: {
      body?: Array<FundAssetPart>
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/assets/funds/{id}/assets/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateSignalProviderSettings = (
    options: {
      body?: CreateSignalProvider
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/assets/signal/edit",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };
}
