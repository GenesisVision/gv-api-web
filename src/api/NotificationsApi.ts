import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FollowNotificationSettingList } from '../model/FollowNotificationSettingList';
import { FundNotificationSettingList } from '../model/FundNotificationSettingList';
import { ManagerNotificationSettingList } from '../model/ManagerNotificationSettingList';
import { NotificationList } from '../model/NotificationList';
import { NotificationSettingConditionType } from '../model/NotificationSettingConditionType';
import { NotificationSettingList } from '../model/NotificationSettingList';
import { NotificationType } from '../model/NotificationType';
import { ProgramNotificationSettingList } from '../model/ProgramNotificationSettingList';

export default class NotificationsApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  addNotificationsSettings = (
    options: {
      assetId?: string,
      managerId?: string,
      type?: NotificationType,
      conditionType?: NotificationSettingConditionType,
      conditionAmount?: number
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        queryParams: {  AssetId: options['assetId'],   ManagerId: options['managerId'],   Type: options['type'],   ConditionType: options['conditionType'],   ConditionAmount: options['conditionAmount']  },
        apiClient: this.apiClient,
        path: "/v2.0/notifications/settings/add",
        
        returnType: "primitive",
        method: "POST",
    })
  };

  getNewNotificationsCount = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<number> => {
    
    return generateMethod<Promise<number>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/notifications/new",
        
        returnType: "primitive",
        method: "GET",
    })
  };

  getNotifications = (
    options: {
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<NotificationList> => {
    
    return generateMethod<Promise<NotificationList>>({
        init,
        queryParams: {  skip: options['skip'],   take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/notifications",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getNotificationsFollowSettings = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<FollowNotificationSettingList> => {
    
    return generateMethod<Promise<FollowNotificationSettingList>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/notifications/settings/follow/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getNotificationsFundSettings = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<FundNotificationSettingList> => {
    
    return generateMethod<Promise<FundNotificationSettingList>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/notifications/settings/funds/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getNotificationsManagerSettings = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<ManagerNotificationSettingList> => {
    
    return generateMethod<Promise<ManagerNotificationSettingList>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/notifications/settings/managers/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getNotificationsProgramSettings = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<ProgramNotificationSettingList> => {
    
    return generateMethod<Promise<ProgramNotificationSettingList>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/notifications/settings/programs/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getNotificationsSettings = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<NotificationSettingList> => {
    
    return generateMethod<Promise<NotificationSettingList>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/notifications/settings",
        
        returnType: "structure",
        method: "GET",
    })
  };

  readAllNotification = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/notifications/all/read",
        
        
        method: "POST",
    })
  };

  readNotification = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/notifications/{id}/read",
        
        
        method: "POST",
    })
  };

  removeNotificationsSettings = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/notifications/settings/remove/{id}",
        
        
        method: "POST",
    })
  };

  toggleNotificationSettings = (
    id: string,
    enable: boolean,
    options: {
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        pathParams: {  id,   enable  },
        apiClient: this.apiClient,
        path: "/v2.0/notifications/settings/{id}/{enable}",
        
        returnType: "primitive",
        method: "POST",
    })
  };
}
