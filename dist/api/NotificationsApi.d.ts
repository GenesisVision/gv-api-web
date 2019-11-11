import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { FundNotificationSettingList } from "../model/FundNotificationSettingList";
import { ManagerNotificationSettingList } from "../model/ManagerNotificationSettingList";
import { NotificationList } from "../model/NotificationList";
import { NotificationSettingList } from "../model/NotificationSettingList";
import { ProgramNotificationSettingList } from "../model/ProgramNotificationSettingList";
export declare class NotificationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    addNotificationsSettings(authorization: string, opts?: {
        assetId?: string;
        managerId?: string;
        type?: 'PlatformNewsAndUpdates' | 'PlatformEmergency' | 'PlatformOther' | 'ProfileUpdated' | 'ProfilePwdUpdated' | 'ProfileVerification' | 'Profile2FA' | 'ProfileSecurity' | 'TradingAccountPwdUpdated' | 'ProgramNewsAndUpdates' | 'ProgramEndOfPeriod' | 'ProgramCondition' | 'ProgramExceedInvestmentLimit' | 'FundNewsAndUpdates' | 'FundEndOfPeriod' | 'FundRebalancing' | 'ManagerNewProgram' | 'ManagerNewFund' | 'ManagerNewExternalSignalAccount' | 'ManagerNewSignalProvider' | 'Signals' | 'ExternalSignals';
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
