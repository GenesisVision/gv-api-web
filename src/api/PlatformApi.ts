import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AssetInfo } from '../model/AssetInfo';
import { CaptchaDetails } from '../model/CaptchaDetails';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { LandingInfo } from '../model/LandingInfo';
import { LevelsParamsInfo } from '../model/LevelsParamsInfo';
import { PlatformAssets } from '../model/PlatformAssets';
import { PlatformEvents } from '../model/PlatformEvents';
import { PlatformInfo } from '../model/PlatformInfo';
import { ProgramsLevelsInfo } from '../model/ProgramsLevelsInfo';
import { SiteMapInfo } from '../model/SiteMapInfo';

export default class PlatformApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getAllPlatformTradingAssets = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<PlatformAssets> => {
    
    return generateMethod<Promise<PlatformAssets>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/platform/trading/assets",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPlatformAssetInfo = (
    asset: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<AssetInfo> => {
    
    return generateMethod<Promise<AssetInfo>>({
        init,
        pathParams: {  asset  },
        apiClient: this.apiClient,
        path: "/v2.0/platform/asset/{asset}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPlatformDate = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/platform/date",
        
        returnType: "primitive",
        method: "POST",
    })
  };

  getPlatformEvents = (
    options: {
      take?: number
      } = {},
    init: RequestInit = {}): Promise<PlatformEvents> => {
    
    return generateMethod<Promise<PlatformEvents>>({
        init,
        queryParams: {  take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/platform/events",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPlatformInfo = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<PlatformInfo> => {
    
    return generateMethod<Promise<PlatformInfo>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/platform/info",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPlatformLandingInfo = (
    options: {
      eventsTake?: number,
      followTake?: number,
      programsTake?: number,
      fundsTake?: number,
      newsTake?: number
      } = {},
    init: RequestInit = {}): Promise<LandingInfo> => {
    
    return generateMethod<Promise<LandingInfo>>({
        init,
        queryParams: {  eventsTake: options['eventsTake'],   followTake: options['followTake'],   programsTake: options['programsTake'],   fundsTake: options['fundsTake'],   newsTake: options['newsTake']  },
        apiClient: this.apiClient,
        path: "/v2.0/platform/landing",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramLevels = (
    options: {
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<ProgramsLevelsInfo> => {
    
    return generateMethod<Promise<ProgramsLevelsInfo>>({
        init,
        queryParams: {  currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/platform/levels",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramLevelsParams = (
    options: {
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<LevelsParamsInfo> => {
    
    return generateMethod<Promise<LevelsParamsInfo>>({
        init,
        queryParams: {  currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/platform/levels/parameters",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getRiskControlInfo = (
    route: string,
    options: {
      client?: string,
      version?: string
      } = {},
    init: RequestInit = {}): Promise<CaptchaDetails> => {
    
    return generateMethod<Promise<CaptchaDetails>>({
        init,
        queryParams: {  Route: route,   Client: options['client'],   Version: options['version']  },
        apiClient: this.apiClient,
        path: "/v2.0/platform/riskcontrol",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getSitemapInfo = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<SiteMapInfo> => {
    
    return generateMethod<Promise<SiteMapInfo>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/platform/sitemap",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
