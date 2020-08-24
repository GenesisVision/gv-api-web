import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { PartnershipDetails } from '../model/PartnershipDetails';
import { ReferralFriendItemsViewModel } from '../model/ReferralFriendItemsViewModel';
import { RewardDetailsItemsViewModel } from '../model/RewardDetailsItemsViewModel';

export default class PartnershipApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  exportHistory = (
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/partnership/rewards/history/export",
        
        returnType: "primitive",
        method: "GET",
    })
  };

  getDetails = (
    options: {
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<PartnershipDetails> => {
    
    return generateMethod<Promise<PartnershipDetails>>({
        init,
        queryParams: {  currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/partnership/details",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getReferrals = (
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<ReferralFriendItemsViewModel> => {
    
    return generateMethod<Promise<ReferralFriendItemsViewModel>>({
        init,
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/partnership/referrals",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getRewardsHistory = (
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<RewardDetailsItemsViewModel> => {
    
    return generateMethod<Promise<RewardDetailsItemsViewModel>>({
        init,
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/partnership/rewards/history",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
