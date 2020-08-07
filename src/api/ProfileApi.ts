import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { BetaTestingType } from '../model/BetaTestingType';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FcmTokenViewModel } from '../model/FcmTokenViewModel';
import { ProfileFullViewModel } from '../model/ProfileFullViewModel';
import { ProfileHeaderViewModel } from '../model/ProfileHeaderViewModel';
import { SocialLinksViewModel } from '../model/SocialLinksViewModel';
import { SocialViewMode } from '../model/SocialViewMode';
import { UpdatePersonalDetailViewModel } from '../model/UpdatePersonalDetailViewModel';
import { UpdateProfileViewModel } from '../model/UpdateProfileViewModel';
import { UpdateSocialLinkViewModel } from '../model/UpdateSocialLinkViewModel';
import { UpdateSocialLinksViewModel } from '../model/UpdateSocialLinksViewModel';

export default class ProfileApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getProfileFull = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<ProfileFullViewModel> => {
    
    return generateMethod<Promise<ProfileFullViewModel>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProfileHeader = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<ProfileHeaderViewModel> => {
    
    return generateMethod<Promise<ProfileHeaderViewModel>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/header",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getSocialLinks = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<SocialLinksViewModel> => {
    
    return generateMethod<Promise<SocialLinksViewModel>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/sociallinks",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getVerificationToken = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/verification/token",
        
        returnType: "primitive",
        method: "POST",
    })
  };

  removeAvatar = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/avatar/remove",
        
        
        method: "POST",
    })
  };

  removeFcmToken = (
    options: {
      body?: FcmTokenViewModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/push/token/remove",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  switchBetaFeatureOff = (
    options: {
      feature?: BetaTestingType
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  feature: options['feature']  },
        apiClient: this.apiClient,
        path: "/v2.0/profile/beta/off",
        
        
        method: "POST",
    })
  };

  switchBetaFeatureOn = (
    options: {
      feature?: BetaTestingType
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  feature: options['feature']  },
        apiClient: this.apiClient,
        path: "/v2.0/profile/beta/on",
        
        
        method: "POST",
    })
  };

  switchPublicInvestorOff = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/investor/public/off",
        
        
        method: "POST",
    })
  };

  switchPublicInvestorOn = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/investor/public/on",
        
        
        method: "POST",
    })
  };

  updateAllSocialLinks = (
    options: {
      body?: UpdateSocialLinksViewModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/sociallinks/all/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateAvatar = (
    fileId: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  fileId  },
        apiClient: this.apiClient,
        path: "/v2.0/profile/avatar/update/{fileId}",
        
        
        method: "POST",
    })
  };

  updateFcmToken = (
    options: {
      body?: FcmTokenViewModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/push/token",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updatePersonalDetails = (
    options: {
      body?: UpdatePersonalDetailViewModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/personal/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateProfile = (
    options: {
      body?: UpdateProfileViewModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateSocialLinks = (
    options: {
      body?: UpdateSocialLinkViewModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/profile/sociallinks/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateUserPlatformCurrency = (
    options: {
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/profile/currency/update",
        
        
        method: "POST",
    })
  };

  updateUserSocialSettings = (
    options: {
      whoCanPostToMayWall?: SocialViewMode,
      whoCanViewCommentsOnMyPosts?: SocialViewMode,
      whoCanCommentOnMyPosts?: SocialViewMode
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  WhoCanPostToMayWall: options['whoCanPostToMayWall'],   WhoCanViewCommentsOnMyPosts: options['whoCanViewCommentsOnMyPosts'],   WhoCanCommentOnMyPosts: options['whoCanCommentOnMyPosts']  },
        apiClient: this.apiClient,
        path: "/v2.0/profile/social/settings/update",
        
        
        method: "POST",
    })
  };
}
