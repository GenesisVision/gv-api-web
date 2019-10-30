import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { FundNotificationSettingList } from "../model/fundNotificationSettingList";
import { ManagerNotificationSettingList } from "../model/managerNotificationSettingList";
import { NotificationList } from "../model/notificationList";
import { NotificationSettingList } from "../model/notificationSettingList";
import { ProgramNotificationSettingList } from "../model/programNotificationSettingList";
export declare class NotificationsService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    addNotificationsSettings(authorization: string, opts?: {
        assetId?: string;
        managerId?: string;
        type?: 'PlatformNewsAndUpdates' | 'PlatformEmergency' | 'PlatformOther' | 'ProfileUpdated' | 'ProfilePwdUpdated' | 'ProfileVerification' | 'Profile2FA' | 'ProfileSecurity' | 'TradingAccountPwdUpdated' | 'ProgramNewsAndUpdates' | 'ProgramEndOfPeriod' | 'ProgramCondition' | 'ProgramExceedInvestmentLimit' | 'FundNewsAndUpdates' | 'FundEndOfPeriod' | 'FundRebalancing' | 'ManagerNewProgram' | 'ManagerNewFund' | 'ManagerNewExternalSignalAccount' | 'Signals' | 'ExternalSignals';
        conditionType?: 'Empty' | 'Profit' | 'Level' | 'AvailableToInvest';
        conditionAmount?: number;
    }): CancelablePromise<string>;
    private addNotificationsSettingsWithHttpInfo;
    getNewNotificationsCount(authorization: string): CancelablePromise<number>;
    private getNewNotificationsCountWithHttpInfo;
    getNotifications(authorization: string, opts?: {
        skip?: number;
        take?: number;
    }): CancelablePromise<NotificationList>;
    private getNotificationsWithHttpInfo;
    getNotificationsFundSettings(id: string, authorization: string): CancelablePromise<FundNotificationSettingList>;
    private getNotificationsFundSettingsWithHttpInfo;
    getNotificationsManagerSettings(id: string, authorization: string): CancelablePromise<ManagerNotificationSettingList>;
    private getNotificationsManagerSettingsWithHttpInfo;
    getNotificationsProgramSettings(id: string, authorization: string): CancelablePromise<ProgramNotificationSettingList>;
    private getNotificationsProgramSettingsWithHttpInfo;
    getNotificationsSettings(authorization: string): CancelablePromise<NotificationSettingList>;
    private getNotificationsSettingsWithHttpInfo;
    readNotification(id: string, authorization: string): CancelablePromise<null>;
    private readNotificationWithHttpInfo;
    removeNotificationsSettings(id: string, authorization: string): CancelablePromise<null>;
    private removeNotificationsSettingsWithHttpInfo;
    toggleNotificationSettings(id: string, enable: boolean, authorization: string): CancelablePromise<string>;
    private toggleNotificationSettingsWithHttpInfo;
}
