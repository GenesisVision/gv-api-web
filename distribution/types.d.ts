declare interface CancelablePromise<T> extends Promise<T> {
    changecancel: any;
    changethen: any;
    changecatch: any;
}

declare class ApiClient {
    paramToString: any;
    buildUrl: any;
    isJsonMime: any;
    jsonPreferredMime: any;
    readonly static CollectionFormatEnum: "CSV" | "SSV" | "TSV" | "PIPES" | "MULTI";
    applyAuthToRequest: any;
    deserialize: any;
    callApi: any;
    static parseDate: any;
    static convertToType: any;
    static constructFromObject: any;
    static instance: ApiClient;
}

declare class AuthApi {
    constructor(apiClient: ApiClient): AuthApi;
    v10Auth2faConfirmPost(authorization: string, opts?: {
        model?: TwoFactorAuthenticatorConfirm;
    }): CancelablePromise<RecoveryCodesViewModel>;
    v10Auth2faCreatePost(authorization: string): CancelablePromise<TwoFactorAuthenticator>;
    v10Auth2faDisablePost(authorization: string, opts?: {
        model?: TwoFactorCodeModel;
    }): CancelablePromise<any>;
    v10Auth2faGet(authorization: string): CancelablePromise<TwoFactorStatus>;
    v10Auth2faRecoverycodesNewPost(authorization: string, opts?: {
        model?: PasswordModel;
    }): CancelablePromise<RecoveryCodesViewModel>;
    v10Auth2faRecoverycodesPost(authorization: string, opts?: {
        model?: PasswordModel;
    }): CancelablePromise<RecoveryCodesViewModel>;
    v10AuthPasswordChangePost(authorization: string, opts?: {
        model?: ChangePasswordViewModel;
    }): CancelablePromise<'String'>;
    v10AuthPasswordForgotInvestorPost(opts?: {
        model?: ForgotPasswordViewModel;
    }): CancelablePromise<any>;
    v10AuthPasswordForgotManagerPost(opts?: {
        model?: ForgotPasswordViewModel;
    }): CancelablePromise<any>;
    v10AuthPasswordResetPost(opts?: {
        model?: ResetPasswordViewModel;
    }): CancelablePromise<'String'>;
    v10AuthPhoneCodePost(authorization: string): CancelablePromise<'Number'>;
    v10AuthPhoneVerifyPost(authorization: string, opts?: {
        code?: string;
    }): CancelablePromise<any>;
    v10AuthResendconfirmationlinkPost(opts?: {
        model?: ResendConfirmationViewModel;
    }): CancelablePromise<any>;
    v10AuthSigninInvestorPost(opts?: {
        model?: LoginViewModel;
    }): CancelablePromise<'String'>;
    v10AuthSigninManagerPost(opts?: {
        model?: LoginViewModel;
    }): CancelablePromise<'String'>;
    v10AuthSignupConfirmPost(opts?: {
        userId?: string;
        code?: string;
    }): CancelablePromise<'String'>;
    v10AuthSignupInvestorPost(opts?: {
        model?: RegisterInvestorViewModel;
    }): CancelablePromise<any>;
    v10AuthSignupManagerPost(opts?: {
        model?: RegisterManagerViewModel;
    }): CancelablePromise<any>;
    v10AuthTokenDevicesLogoutPost(authorization: string): CancelablePromise<'String'>;
    v10AuthTokenUpdatePost(authorization: string): CancelablePromise<'String'>;
}

declare class BrokersApi {
    constructor(apiClient: ApiClient): BrokersApi;
    v10BrokersGet(): CancelablePromise<BrokersInfo>;
}

declare class FileApi {
    constructor(apiClient: ApiClient): FileApi;
    v10FileByIdGet(id: string): CancelablePromise<any>;
    v10FileDocumentUploadPost(authorization: string, uploadedFile: File): CancelablePromise<UploadResult>;
    v10FileUploadPost(uploadedFile: File, opts?: {
        authorization?: string;
    }): CancelablePromise<UploadResult>;
}

declare class FundsApi {
    constructor(apiClient: ApiClient): FundsApi;
    v10FundsAssetsGet(): CancelablePromise<PlatformAssets>;
    v10FundsByIdAssetsGet(id: string): CancelablePromise<FundAssetsListInfo>;
    v10FundsByIdChartsBalanceGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
    }): CancelablePromise<FundBalanceChart>;
    v10FundsByIdChartsProfitGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
    }): CancelablePromise<FundProfitChart>;
    v10FundsByIdFavoriteAddPost(id: string, authorization: string): CancelablePromise<any>;
    v10FundsByIdFavoriteRemovePost(id: string, authorization: string): CancelablePromise<any>;
    v10FundsByIdGet(id: string, opts?: {
        authorization?: string;
        currencySecondary?: string;
    }): CancelablePromise<FundDetailsFull>;
    v10FundsGet(opts?: {
        authorization?: string;
        sorting?: string;
        currencySecondary?: string;
        statisticDateFrom?: Date;
        statisticDateTo?: Date;
        chartPointsCount?: number;
        mask?: string;
        facetId?: string;
        isFavorite?: boolean;
        isEnabled?: boolean;
        hasInvestorsForAll?: boolean;
        hasInvestorsForClosed?: boolean;
        ids?: string[];
        managerId?: string;
        programManagerId?: string;
        status?: string[];
        skip?: number;
        take?: number;
    }): CancelablePromise<FundsList>;
    v10FundsSetsGet(authorization: string): CancelablePromise<FundSets>;
}

declare class InvestorApi {
    constructor(apiClient: ApiClient): InvestorApi;
    v10InvestorFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    v10InvestorFundsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): CancelablePromise<FundInvestInfo>;
    v10InvestorFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequests>;
    v10InvestorFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    v10InvestorFundsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): CancelablePromise<FundWithdrawInfo>;
    v10InvestorFundsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<FundsList>;
    v10InvestorGet(authorization: string, opts?: {
        chartCurrency?: string;
        from?: Date;
        to?: Date;
        balancePoints?: number;
        programsPoints?: number;
        eventsTake?: number;
        requestsSkip?: number;
        requestsTake?: number;
    }): CancelablePromise<DashboardSummary>;
    v10InvestorKeysBinanceGet(authorization: string): any;
    v10InvestorKeysBinanceRemoveByKeyIdPost(keyId: string, authorization: string): CancelablePromise<any>;
    v10InvestorKeysBinanceSavePost(authorization: string, opts?: {
        title?: string;
        appKey?: string;
        encryptedSecret?: string;
    }): CancelablePromise<any>;
    v10InvestorPortfolioChartGet(authorization: string, opts?: {
        currency?: string;
        from?: Date;
        to?: Date;
        balancePoints?: number;
        programsPoints?: number;
    }): CancelablePromise<DashboardChartValue>;
    v10InvestorPortfolioEventsGet(authorization: string, opts?: {
        assetId?: string;
        from?: Date;
        to?: Date;
        type?: string;
        assetType?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<DashboardPortfolioEvents>;
    v10InvestorProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    v10InvestorProgramsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): CancelablePromise<ProgramInvestInfo>;
    v10InvestorProgramsByIdReinvestOffPost(id: string, authorization: string): CancelablePromise<any>;
    v10InvestorProgramsByIdReinvestOnPost(id: string, authorization: string): CancelablePromise<any>;
    v10InvestorProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequests>;
    v10InvestorProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): CancelablePromise<any>;
    v10InvestorProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): CancelablePromise<ProgramWithdrawInfo>;
    v10InvestorProgramsByIdWithdrawMultiByAmountPost(id: string, amount: number, authorization: string): CancelablePromise<any>;
    v10InvestorProgramsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramsList>;
    v10InvestorProgramsRequestsByIdCancelPost(id: string, authorization: string): CancelablePromise<any>;
    v10InvestorRequestsBySkipByTakeGet(skip: number, take: number, authorization: string): CancelablePromise<ProgramRequests>;
    v10InvestorSignalsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalsList>;
}

declare class ManagerApi {
    constructor(apiClient: ApiClient): ManagerApi;
    v10ManagerAssetsGet(authorization: string): CancelablePromise<ManagerAssets>;
    v10ManagerByIdDetailsGet(id: string): CancelablePromise<ManagerProfileDetails>;
    v10ManagerByIdGet(id: string): CancelablePromise<ManagerProfile>;
    v10ManagerEventsGet(authorization: string, opts?: {
        assetId?: string;
        from?: Date;
        to?: Date;
        type?: string;
        assetType?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<ManagerPortfolioEvents>;
    v10ManagerFundsByIdAssetsUpdatePost(id: string, authorization: string, opts?: {
        assets?: FundAssetPart[];
    }): CancelablePromise<any>;
    v10ManagerFundsByIdClosePost(id: string, authorization: string, opts?: {
        twoFactorCode?: string;
    }): CancelablePromise<any>;
    v10ManagerFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    v10ManagerFundsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): CancelablePromise<FundInvestInfo>;
    v10ManagerFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequests>;
    v10ManagerFundsByIdUpdatePost(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<any>;
    v10ManagerFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    v10ManagerFundsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): CancelablePromise<ManagerFundWithdrawInfo>;
    v10ManagerFundsCreatePost(authorization: string, opts?: {
        request?: NewFundRequest;
    }): CancelablePromise<any>;
    v10ManagerFundsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<FundsList>;
    v10ManagerFundsInvestmentAmountGet(authorization: string): CancelablePromise<'Number'>;
    v10ManagerFundsRequestsByIdCancelPost(id: string, authorization: string): CancelablePromise<any>;
    v10ManagerGet(authorization: string, opts?: {
        assetId?: string;
        from?: Date;
        to?: Date;
        type?: string;
        assetType?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<ManagerDashboard>;
    v10ManagerPrograms2faConfirmPost(authorization: string, opts?: {
        programId?: string;
        code?: string;
    }): CancelablePromise<any>;
    v10ManagerPrograms2faGetGet(authorization: string, opts?: {
        programId?: string;
    }): CancelablePromise<TwoFactorAuthenticator>;
    v10ManagerProgramsByIdClosePost(id: string, authorization: string, opts?: {
        twoFactorCode?: string;
    }): CancelablePromise<any>;
    v10ManagerProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    v10ManagerProgramsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): CancelablePromise<ProgramInvestInfo>;
    v10ManagerProgramsByIdPasswordChangePost(id: string, authorization: string, opts?: {
        model?: ProgramPwdUpdate;
    }): CancelablePromise<any>;
    v10ManagerProgramsByIdPeriodClosePost(id: string, authorization: string): CancelablePromise<any>;
    v10ManagerProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequests>;
    v10ManagerProgramsByIdUpdatePost(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<any>;
    v10ManagerProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): CancelablePromise<any>;
    v10ManagerProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): CancelablePromise<ManagerProgramWithdrawInfo>;
    v10ManagerProgramsByIdWithdrawMultiByAmountPost(id: string, amount: number, authorization: string): CancelablePromise<any>;
    v10ManagerProgramsCreatePost(authorization: string, opts?: {
        request?: NewProgramRequest;
    }): CancelablePromise<ManagerProgramCreateResult>;
    v10ManagerProgramsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramsList>;
    v10ManagerProgramsInvestmentAmountGet(authorization: string, opts?: {
        brokerTradingAccount?: string;
    }): CancelablePromise<ProgramMinimumDeposit>;
    v10ManagerProgramsRequestsByIdCancelPost(id: string, authorization: string): CancelablePromise<any>;
    v10ManagerRequestsBySkipByTakeGet(skip: number, take: number, authorization: string): CancelablePromise<ProgramRequests>;
    v10ManagerSignalCreatePost(authorization: string, opts?: {
        programId?: string;
        subscriptionFee?: number;
        successFee?: number;
    }): CancelablePromise<any>;
    v10ManagerSignalEditPost(authorization: string, opts?: {
        programId?: string;
        subscriptionFee?: number;
        successFee?: number;
    }): CancelablePromise<any>;
}

declare class NotificationsApi {
    constructor(apiClient: ApiClient): NotificationsApi;
    v10NotificationsByIdReadPost(id: string, authorization: string): CancelablePromise<any>;
    v10NotificationsGet(authorization: string, opts?: {
        skip?: number;
        take?: number;
    }): CancelablePromise<NotificationList>;
    v10NotificationsNewGet(authorization: string): CancelablePromise<'Number'>;
    v10NotificationsSettingsAddPost(authorization: string, opts?: {
        assetId?: string;
        managerId?: string;
        type?: string;
        conditionType?: string;
        conditionAmount?: number;
    }): CancelablePromise<'String'>;
    v10NotificationsSettingsByIdByEnablePost(id: string, enable: boolean, authorization: string): CancelablePromise<'String'>;
    v10NotificationsSettingsFundsByIdGet(id: string, authorization: string): CancelablePromise<FundNotificationSettingList>;
    v10NotificationsSettingsGet(authorization: string): CancelablePromise<NotificationSettingList>;
    v10NotificationsSettingsManagersByIdGet(id: string, authorization: string): CancelablePromise<ManagerNotificationSettingList>;
    v10NotificationsSettingsProgramsByIdGet(id: string, authorization: string): CancelablePromise<ProgramNotificationSettingList>;
    v10NotificationsSettingsRemoveByIdPost(id: string, authorization: string): CancelablePromise<any>;
}

declare class PlatformApi {
    constructor(apiClient: ApiClient): PlatformApi;
    v10PlatformInfoGet(): CancelablePromise<PlatformInfo>;
    v10PlatformLevelsGet(opts?: {
        currency?: string;
    }): CancelablePromise<ProgramsLevelsInfo>;
    v10PlatformRiskcontrolGet(route: string, opts?: {
        client?: string;
        version?: string;
    }): CancelablePromise<CaptchaDetails>;
    v10PlatformStatisticGet(): CancelablePromise<PlatformStatistic>;
}

declare class ProfileApi {
    constructor(apiClient: ApiClient): ProfileApi;
    v10ProfileAvatarRemovePost(authorization: string): CancelablePromise<any>;
    v10ProfileAvatarUpdateByFileIdPost(fileId: string, authorization: string): CancelablePromise<any>;
    v10ProfileGet(authorization: string): CancelablePromise<ProfileFullViewModel>;
    v10ProfileHeaderGet(authorization: string): CancelablePromise<ProfileHeaderViewModel>;
    v10ProfilePersonalUpdatePost(authorization: string, opts?: {
        model?: UpdatePersonalDetailViewModel;
    }): CancelablePromise<any>;
    v10ProfilePushTokenPost(authorization: string, opts?: {
        token?: FcmTokenViewModel;
    }): CancelablePromise<any>;
    v10ProfileUpdatePost(authorization: string, opts?: {
        model?: UpdateProfileViewModel;
    }): CancelablePromise<any>;
    v10ProfileVerificationTokenPost(authorization: string): CancelablePromise<'String'>;
}

declare class ProgramsApi {
    constructor(apiClient: ApiClient): ProgramsApi;
    v10ProgramsByIdChartsBalanceGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
    }): CancelablePromise<ProgramBalanceChart>;
    v10ProgramsByIdChartsProfitGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
    }): CancelablePromise<ProgramProfitChart>;
    v10ProgramsByIdFavoriteAddPost(id: string, authorization: string): CancelablePromise<any>;
    v10ProgramsByIdFavoriteRemovePost(id: string, authorization: string): CancelablePromise<any>;
    v10ProgramsByIdGet(id: string, opts?: {
        authorization?: string;
        currencySecondary?: string;
    }): CancelablePromise<ProgramDetailsFull>;
    v10ProgramsByIdPeriodsGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramPeriodsViewModel>;
    v10ProgramsByIdTradesGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: string;
        accountId?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesViewModel>;
    v10ProgramsByIdTradesOpenGet(id: string, opts?: {
        sorting?: string;
        symbol?: string;
        accountId?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesViewModel>;
    v10ProgramsGet(opts?: {
        authorization?: string;
        levelMin?: number;
        levelMax?: number;
        levelsSet?: number[];
        profitAvgMin?: number;
        profitAvgMax?: number;
        sorting?: string;
        programCurrency?: string;
        currencySecondary?: string;
        levelUpFrom?: number;
        tags?: string[];
        isSignal?: boolean;
        statisticDateFrom?: Date;
        statisticDateTo?: Date;
        chartPointsCount?: number;
        mask?: string;
        facetId?: string;
        isFavorite?: boolean;
        isEnabled?: boolean;
        hasInvestorsForAll?: boolean;
        hasInvestorsForClosed?: boolean;
        ids?: string[];
        managerId?: string;
        programManagerId?: string;
        status?: string[];
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramsList>;
    v10ProgramsLevelupSummaryGet(opts?: {
        authorization?: string;
    }): CancelablePromise<LevelUpSummary>;
    v10ProgramsSetsGet(authorization: string): CancelablePromise<ProgramSets>;
}

declare class RateApi {
    constructor(apiClient: ApiClient): RateApi;
    v10RateByExchangeByFromByToGet(exchange: string, from: string, to: string): CancelablePromise<'Number'>;
    v10RateByFromByToGet(from: string, to: string): CancelablePromise<'Number'>;
    v10RateGet(opts?: {
        from?: string[];
        to?: string[];
    }): CancelablePromise<RatesModel>;
}

declare class SearchApi {
    constructor(apiClient: ApiClient): SearchApi;
    v10SearchGet(opts?: {
        mask?: string;
        take?: number;
    }): CancelablePromise<SearchViewModel>;
}

declare class SignalApi {
    constructor(apiClient: ApiClient): SignalApi;
    v10SignalAccountsGet(authorization: string): CancelablePromise<CopyTradingAccountsList>;
    v10SignalAttachByIdInfoGet(id: string, authorization: string): CancelablePromise<AttachToSignalProviderInfo>;
    v10SignalAttachByIdPost(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<any>;
    v10SignalByIdUpdatePost(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<any>;
    v10SignalDetachByIdPost(id: string, authorization: string, opts?: {
        model?: DetachFromSignalProvider;
    }): CancelablePromise<any>;
    v10SignalTradesByIdClosePost(id: string, authorization: string): CancelablePromise<any>;
    v10SignalTradesGet(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: string;
        accountId?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesSignalViewModel>;
    v10SignalTradesOpenGet(authorization: string, opts?: {
        sorting?: string;
        symbol?: string;
        accountId?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesSignalViewModel>;
}

declare class WalletApi {
    constructor(apiClient: ApiClient): WalletApi;
    v10WalletAddressesByCurrencyGet(currency: string, authorization: string): CancelablePromise<WalletInfo>;
    v10WalletAddressesGet(authorization: string): CancelablePromise<WalletsInfo>;
    v10WalletByCurrencyGet(currency: string, authorization: string): CancelablePromise<WalletSummary>;
    v10WalletFeeGvtholdingGet(authorization: string): CancelablePromise<UserCommissionData>;
    v10WalletMultiByCurrencyAvailableGet(currency: string, authorization: string): CancelablePromise<WalletMultiAvailable>;
    v10WalletMultiByCurrencyGet(currency: string, authorization: string): CancelablePromise<WalletMultiSummary>;
    v10WalletMultiTransactionsExternalGet(authorization: string, opts?: {
        from?: Date;
        to?: Date;
        type?: string;
        currency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<MultiWalletExternalTransactionsViewModel>;
    v10WalletMultiTransactionsGet(authorization: string, opts?: {
        from?: Date;
        to?: Date;
        type?: string;
        currency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<MultiWalletTransactionsViewModel>;
    v10WalletPaygvtfeeOffPost(authorization: string): CancelablePromise<any>;
    v10WalletPaygvtfeeOnPost(authorization: string): CancelablePromise<any>;
    v10WalletTransactionByIdGet(id: string, authorization: string): CancelablePromise<TransactionDetails>;
    v10WalletTransactionsGet(authorization: string, opts?: {
        assetId?: string;
        from?: Date;
        to?: Date;
        assetType?: string;
        txAction?: string;
        wallet?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<WalletTransactionsViewModel>;
    v10WalletTransferPost(authorization: string, opts?: {
        request?: InternalTransferRequest;
    }): CancelablePromise<any>;
    v10WalletWithdrawInfoGet(authorization: string): CancelablePromise<WithdrawalSummary>;
    v10WalletWithdrawRequestCancelByTxIdPost(txId: string, authorization: string): CancelablePromise<any>;
    v10WalletWithdrawRequestConfirmPost(opts?: {
        requestId?: string;
        code?: string;
    }): CancelablePromise<any>;
    v10WalletWithdrawRequestNewPost(authorization: string, opts?: {
        model?: CreateWithdrawalRequestModel;
    }): CancelablePromise<any>;
    v10WalletWithdrawRequestResendByTxIdPost(txId: string, authorization: string): CancelablePromise<any>;
}

declare interface index {
    ApiClient: ApiClient;
    AmountWithCurrency: AmountWithCurrency;
    AndroidAppVersion: AndroidAppVersion;
    AndroidVersion: AndroidVersion;
    AssetEvent: AssetEvent;
    AssetSelection: AssetSelection;
    AssetsValue: AssetsValue;
    AttachToSignalProvider: AttachToSignalProvider;
    AttachToSignalProviderInfo: AttachToSignalProviderInfo;
    BalanceChartElement: BalanceChartElement;
    BinanceKey: BinanceKey;
    BlockchainInfo: BlockchainInfo;
    Broker: Broker;
    BrokerAccountType: BrokerAccountType;
    BrokersInfo: BrokersInfo;
    CaptchaCheckResult: CaptchaCheckResult;
    CaptchaDetails: CaptchaDetails;
    ChangePasswordViewModel: ChangePasswordViewModel;
    ChartSimple: ChartSimple;
    ConvertingDetails: ConvertingDetails;
    CopyTradingAccountInfo: CopyTradingAccountInfo;
    CopyTradingAccountsList: CopyTradingAccountsList;
    CreateWithdrawalRequestModel: CreateWithdrawalRequestModel;
    DashboardChartValue: DashboardChartValue;
    DashboardPortfolioEvent: DashboardPortfolioEvent;
    DashboardPortfolioEvents: DashboardPortfolioEvents;
    DashboardProgramDetails: DashboardProgramDetails;
    DashboardSummary: DashboardSummary;
    DetachFromSignalProvider: DetachFromSignalProvider;
    Enums: Enums;
    ErrorMessage: ErrorMessage;
    ErrorViewModel: ErrorViewModel;
    ExternalTransactionDetails: ExternalTransactionDetails;
    FcmTokenViewModel: FcmTokenViewModel;
    ForgotPasswordViewModel: ForgotPasswordViewModel;
    FundAssetInfo: FundAssetInfo;
    FundAssetPart: FundAssetPart;
    FundAssetPartWithIcon: FundAssetPartWithIcon;
    FundAssetPercent: FundAssetPercent;
    FundAssetsListInfo: FundAssetsListInfo;
    FundBalanceChart: FundBalanceChart;
    FundDetails: FundDetails;
    FundDetailsFull: FundDetailsFull;
    FundDetailsListStatistic: FundDetailsListStatistic;
    FundFacet: FundFacet;
    FundInvestInfo: FundInvestInfo;
    FundNotificationSettingList: FundNotificationSettingList;
    FundProfitChart: FundProfitChart;
    FundSets: FundSets;
    FundStatistic: FundStatistic;
    FundWithdrawInfo: FundWithdrawInfo;
    FundsList: FundsList;
    GeeTestDetails: GeeTestDetails;
    GeeTestResult: GeeTestResult;
    IOsAppVersion: IOsAppVersion;
    InternalTransferRequest: InternalTransferRequest;
    LevelInfo: LevelInfo;
    LevelUpData: LevelUpData;
    LevelUpSummary: LevelUpSummary;
    LoginViewModel: LoginViewModel;
    ManagerAssets: ManagerAssets;
    ManagerDashboard: ManagerDashboard;
    ManagerFundWithdrawInfo: ManagerFundWithdrawInfo;
    ManagerNotificationSettingList: ManagerNotificationSettingList;
    ManagerOverview: ManagerOverview;
    ManagerPortfolioEvent: ManagerPortfolioEvent;
    ManagerPortfolioEvents: ManagerPortfolioEvents;
    ManagerProfile: ManagerProfile;
    ManagerProfileDetails: ManagerProfileDetails;
    ManagerProgramCreateResult: ManagerProgramCreateResult;
    ManagerProgramWithdrawInfo: ManagerProgramWithdrawInfo;
    ManagerSimpleFund: ManagerSimpleFund;
    ManagerSimpleProgram: ManagerSimpleProgram;
    ManagersList: ManagersList;
    MultiWalletExternalTransaction: MultiWalletExternalTransaction;
    MultiWalletExternalTransactionsViewModel: MultiWalletExternalTransactionsViewModel;
    MultiWalletFilters: MultiWalletFilters;
    MultiWalletTransaction: MultiWalletTransaction;
    MultiWalletTransactionsViewModel: MultiWalletTransactionsViewModel;
    NewFundRequest: NewFundRequest;
    NewProgramRequest: NewProgramRequest;
    NotificationList: NotificationList;
    NotificationSettingList: NotificationSettingList;
    NotificationSettingViewModel: NotificationSettingViewModel;
    NotificationViewModel: NotificationViewModel;
    OrderModel: OrderModel;
    OrderProgramData: OrderProgramData;
    OrderSignalModel: OrderSignalModel;
    OrderSignalProgramInfo: OrderSignalProgramInfo;
    OtherAssetsValue: OtherAssetsValue;
    PasswordModel: PasswordModel;
    PeriodDate: PeriodDate;
    PersonalFundDetailsFull: PersonalFundDetailsFull;
    PersonalProgramDetailsFull: PersonalProgramDetailsFull;
    PersonalSignalDetailsFull: PersonalSignalDetailsFull;
    PlatformAsset: PlatformAsset;
    PlatformAssets: PlatformAssets;
    PlatformCurrency: PlatformCurrency;
    PlatformInfo: PlatformInfo;
    PlatformStatistic: PlatformStatistic;
    PowDetails: PowDetails;
    PowResult: PowResult;
    ProfileFullViewModel: ProfileFullViewModel;
    ProfileHeaderViewModel: ProfileHeaderViewModel;
    ProfilePublic: ProfilePublic;
    ProgramBalanceChart: ProgramBalanceChart;
    ProgramBalanceChartElement: ProgramBalanceChartElement;
    ProgramDetails: ProgramDetails;
    ProgramDetailsFull: ProgramDetailsFull;
    ProgramDetailsListStatistic: ProgramDetailsListStatistic;
    ProgramDetailsRating: ProgramDetailsRating;
    ProgramFacet: ProgramFacet;
    ProgramFilters: ProgramFilters;
    ProgramInfo: ProgramInfo;
    ProgramInvestInfo: ProgramInvestInfo;
    ProgramMinimumDeposit: ProgramMinimumDeposit;
    ProgramNotificationSettingList: ProgramNotificationSettingList;
    ProgramPeriodViewModel: ProgramPeriodViewModel;
    ProgramPeriodsViewModel: ProgramPeriodsViewModel;
    ProgramProfitChart: ProgramProfitChart;
    ProgramPwdUpdate: ProgramPwdUpdate;
    ProgramRequest: ProgramRequest;
    ProgramRequests: ProgramRequests;
    ProgramSets: ProgramSets;
    ProgramStatistic: ProgramStatistic;
    ProgramTag: ProgramTag;
    ProgramTransactionDetails: ProgramTransactionDetails;
    ProgramUpdate: ProgramUpdate;
    ProgramWithdrawInfo: ProgramWithdrawInfo;
    ProgramsInfo: ProgramsInfo;
    ProgramsLevelsInfo: ProgramsLevelsInfo;
    ProgramsList: ProgramsList;
    RateItem: RateItem;
    RatesModel: RatesModel;
    RatesModelRates: RatesModelRates;
    RecoveryCode: RecoveryCode;
    RecoveryCodesViewModel: RecoveryCodesViewModel;
    RegisterInvestorViewModel: RegisterInvestorViewModel;
    RegisterManagerViewModel: RegisterManagerViewModel;
    ResendConfirmationViewModel: ResendConfirmationViewModel;
    ResetPasswordViewModel: ResetPasswordViewModel;
    SearchViewModel: SearchViewModel;
    SignalDetails: SignalDetails;
    SignalSubscription: SignalSubscription;
    SignalsList: SignalsList;
    TradesSignalViewModel: TradesSignalViewModel;
    TradesViewModel: TradesViewModel;
    TransactionDetails: TransactionDetails;
    TwoFactorAuthenticator: TwoFactorAuthenticator;
    TwoFactorAuthenticatorConfirm: TwoFactorAuthenticatorConfirm;
    TwoFactorCodeModel: TwoFactorCodeModel;
    TwoFactorStatus: TwoFactorStatus;
    UpdatePersonalDetailViewModel: UpdatePersonalDetailViewModel;
    UpdateProfileViewModel: UpdateProfileViewModel;
    UploadResult: UploadResult;
    UserCommissionData: UserCommissionData;
    ValueChartBar: ValueChartBar;
    WalletBaseData: WalletBaseData;
    WalletData: WalletData;
    WalletInfo: WalletInfo;
    WalletMultiAvailable: WalletMultiAvailable;
    WalletMultiSummary: WalletMultiSummary;
    WalletSummary: WalletSummary;
    WalletTransaction: WalletTransaction;
    WalletTransactionsViewModel: WalletTransactionsViewModel;
    WalletWithdrawalInfo: WalletWithdrawalInfo;
    WalletsGrandTotal: WalletsGrandTotal;
    WalletsInfo: WalletsInfo;
    WithdrawalInfo: WithdrawalInfo;
    WithdrawalSummary: WithdrawalSummary;
    AuthApi: AuthApi;
    BrokersApi: BrokersApi;
    FileApi: FileApi;
    FundsApi: FundsApi;
    InvestorApi: InvestorApi;
    ManagerApi: ManagerApi;
    NotificationsApi: NotificationsApi;
    PlatformApi: PlatformApi;
    ProfileApi: ProfileApi;
    ProgramsApi: ProgramsApi;
    RateApi: RateApi;
    SearchApi: SearchApi;
    SignalApi: SignalApi;
    WalletApi: WalletApi;
}

declare type AmountWithCurrencyCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface AmountWithCurrency {
    amount: number;
    currency: AmountWithCurrencyCurrencyEnum;
}

declare interface AndroidAppVersion {
    minVersion: AndroidVersion;
    lastVersion: AndroidVersion;
}

declare interface AndroidVersion {
    versionCode: string;
    versionName: string;
}

declare interface AssetEvent {
    programs: string[];
    funds: string[];
}

declare type AssetSelectionTypeEnum = "Program" | "Fund";

declare interface AssetSelection {
    id: string;
    title: string;
    logo: string;
    type: AssetSelectionTypeEnum;
}

declare type AssetsValueTypeEnum = "All" | "Program" | "Fund";

declare interface AssetsValue {
    type: AssetsValueTypeEnum;
    id: string;
    title: string;
    avatar: string;
    color: string;
    value: number;
    changePercent: number;
    changeValue: number;
}

declare type AttachToSignalProviderModeEnum = "ByBalance" | "Percent" | "Fixed";

declare type AttachToSignalProviderFixedCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type AttachToSignalProviderInitialDepositCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface AttachToSignalProvider {
    mode: AttachToSignalProviderModeEnum;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: AttachToSignalProviderFixedCurrencyEnum;
    initialDepositCurrency: AttachToSignalProviderInitialDepositCurrencyEnum;
    initialDepositAmount: number;
}

declare type AttachToSignalProviderInfoSubscriptionFeeCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type AttachToSignalProviderInfoMinDepositCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface AttachToSignalProviderInfo {
    hasSignalAccount: boolean;
    hasActiveSubscription: boolean;
    subscriptionFee: number;
    subscriptionFeeCurrency: AttachToSignalProviderInfoSubscriptionFeeCurrencyEnum;
    minDeposit: number;
    minDepositCurrency: AttachToSignalProviderInfoMinDepositCurrencyEnum;
}

declare interface BalanceChartElement {
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

declare interface BinanceKey {
    id: string;
    appKey: string;
    title: string;
    isValid: boolean;
}

declare type BlockchainInfoStatusEnum = "Undefined" | "New" | "Pending" | "ConfirmedByGate" | "ConfirmedAndValidated" | "Error" | "Cancelled";

declare interface BlockchainInfo {
    hash: string;
    status: BlockchainInfoStatusEnum;
}

declare interface Broker {
    name: string;
    description: string;
    logo: string;
    terms: string;
    assets: string;
    fee: number;
    leverageMin: number;
    leverageMax: number;
    accountTypes: BrokerAccountType[];
    isForex: boolean;
    isSignalsAvailable: boolean;
    tags: ProgramTag[];
}

declare type BrokerAccountTypeTypeEnum = "Undefined" | "MetaTrader4" | "MetaTrader5" | "NinjaTrader" | "cTrader" | "Rumus" | "Metastock" | "IDEX" | "Huobi";

declare interface BrokerAccountType {
    id: string;
    name: string;
    description: string;
    type: BrokerAccountTypeTypeEnum;
    leverages: number[];
    currencies: string[];
    isForex: boolean;
    isSignalsAvailable: boolean;
}

declare interface BrokersInfo {
    brokers: Broker[];
}

declare interface CaptchaCheckResult {
    id: string;
    pow: PowResult;
    geeTest: GeeTestResult;
}

declare type CaptchaDetailsCaptchaTypeEnum = "None" | "Pow" | "GeeTest";

declare interface CaptchaDetails {
    captchaType: CaptchaDetailsCaptchaTypeEnum;
    id: string;
    route: string;
    pow: PowDetails;
    geeTest: GeeTestDetails;
}

declare interface ChangePasswordViewModel {
    oldPassword: string;
    password: string;
    confirmPassword: string;
}

declare interface ChartSimple {
    value: number;
    date: Date;
}

declare type ConvertingDetailsCurrencyToEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface ConvertingDetails {
    currencyTo: ConvertingDetailsCurrencyToEnum;
    currencyToName: string;
    amountTo: number;
    rateValue: number;
    currencyToLogo: string;
}

declare type CopyTradingAccountInfoCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface CopyTradingAccountInfo {
    id: string;
    currency: CopyTradingAccountInfoCurrencyEnum;
    logo: string;
    title: string;
    balance: number;
    equity: number;
    freeMargin: number;
    marginLevel: number;
    available: number;
}

declare interface CopyTradingAccountsList {
    accounts: CopyTradingAccountInfo[];
    total: number;
}

declare type CreateWithdrawalRequestModelCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface CreateWithdrawalRequestModel {
    amount: number;
    currency: CreateWithdrawalRequestModelCurrencyEnum;
    address: string;
    twoFactorCode: string;
}

declare interface DashboardChartValue {
    investedProgramsInfo: ValueChartBar[];
    balanceChart: ChartSimple[];
    value: number;
    valueCurrency: number;
    changePercent: number;
    changeValue: number;
    changeValueCurrency: number;
    rate: number;
}

declare type DashboardPortfolioEventFeeSuccessManagerCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type DashboardPortfolioEventFeeSuccessPlatformCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type DashboardPortfolioEventCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type DashboardPortfolioEventTypeEnum = "All" | "Invest" | "Withdraw" | "Profit" | "Loss" | "Reinvest" | "Canceled" | "Ended" | "WithdrawByStopOut";

declare type DashboardPortfolioEventAssetTypeEnum = "Program" | "Fund";

declare interface DashboardPortfolioEvent {
    assetId: string;
    date: Date;
    title: string;
    url: string;
    value: number;
    valueTotal: number;
    feeSuccessManager: number;
    feeSuccessManagerCurrency: DashboardPortfolioEventFeeSuccessManagerCurrencyEnum;
    feeSuccessPlatform: number;
    feeSuccessPlatformCurrency: DashboardPortfolioEventFeeSuccessPlatformCurrencyEnum;
    profitPercent: number;
    currency: DashboardPortfolioEventCurrencyEnum;
    type: DashboardPortfolioEventTypeEnum;
    logo: string;
    color: string;
    description: string;
    assetType: DashboardPortfolioEventAssetTypeEnum;
}

declare interface DashboardPortfolioEvents {
    events: DashboardPortfolioEvent[];
    total: number;
}

declare interface DashboardProgramDetails {
    share: number;
}

declare interface DashboardSummary {
    chart: DashboardChartValue;
    events: DashboardPortfolioEvents;
    profileHeader: ProfileHeaderViewModel;
    programsCount: number;
    fundsCount: number;
    signalsCount: number;
    requests: ProgramRequests;
}

declare type DetachFromSignalProviderModeEnum = "None" | "ProviderCloseOnly" | "CloseAllImmediately";

declare interface DetachFromSignalProvider {
    mode: DetachFromSignalProviderModeEnum;
}

declare interface Enums {
    multiWallet: MultiWalletFilters;
    program: ProgramFilters;
}

declare interface ErrorMessage {
    message: string;
    property: string;
}

declare type ErrorViewModelCodeEnum = "InternalServerError" | "ValidationError" | "RequiresTwoFactor" | "WrongCaptcha";

declare interface ErrorViewModel {
    errors: ErrorMessage[];
    code: ErrorViewModelCodeEnum;
}

declare interface ExternalTransactionDetails {
    description: string;
    descriptionUrl: string;
    fromAddress: string;
    isEnableActions: boolean;
}

declare interface FcmTokenViewModel {
    token: string;
}

declare interface ForgotPasswordViewModel {
    email: string;
}

declare interface FundAssetInfo {
    asset: string;
    symbol: string;
    icon: string;
    target: number;
    current: number;
}

declare interface FundAssetPart {
    id: string;
    percent: number;
}

declare interface FundAssetPartWithIcon {
    icon: string;
    color: string;
    name: string;
    asset: string;
    percent: number;
}

declare interface FundAssetPercent {
    asset: string;
    name: string;
    percent: number;
    icon: string;
}

declare interface FundAssetsListInfo {
    assets: FundAssetInfo[];
}

declare interface FundBalanceChart {
    usdBalance: number;
    balanceChart: BalanceChartElement[];
    gvtBalance: number;
}

declare type FundDetailsStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

declare interface FundDetails {
    totalAssetsCount: number;
    topFundAssets: FundAssetPercent[];
    statistic: FundDetailsListStatistic;
    personalDetails: PersonalFundDetailsFull;
    dashboardAssetsDetails: DashboardProgramDetails;
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    status: FundDetailsStatusEnum;
    creationDate: Date;
    manager: ProfilePublic;
    chart: ChartSimple[];
}

declare type FundDetailsFullStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

declare interface FundDetailsFull {
    entryFee: number;
    exitFee: number;
    managementFee: number;
    currentAssets: FundAssetPartWithIcon[];
    statistic: FundStatistic;
    personalFundDetails: PersonalFundDetailsFull;
    id: string;
    logo: string;
    url: string;
    color: string;
    description: string;
    title: string;
    ipfsHash: string;
    creationDate: Date;
    status: FundDetailsFullStatusEnum;
    manager: ProfilePublic;
}

declare interface FundDetailsListStatistic {
    balanceGVT: AmountWithCurrency;
    balanceSecondary: AmountWithCurrency;
    profitPercent: number;
    drawdownPercent: number;
    investorsCount: number;
}

declare type FundFacetSortingEnum = "ByProfitAsc" | "ByProfitDesc" | "ByDrawdownAsc" | "ByDrawdownDesc" | "ByInvestorsAsc" | "ByInvestorsDesc" | "ByNewAsc" | "ByNewDesc" | "ByTitleAsc" | "ByTitleDesc" | "ByBalanceAsc" | "ByBalanceDesc";

declare type FundFacetSortTypeEnum = "New" | "Top" | "WeeklyTop" | "Popular" | "ToLevelUp";

declare type FundFacetTimeframeEnum = "Day" | "Week" | "Month" | "ThreeMonths" | "Year" | "AllTime";

declare interface FundFacet {
    sorting: FundFacetSortingEnum;
    id: string;
    title: string;
    description: string;
    logo: string;
    url: string;
    sortType: FundFacetSortTypeEnum;
    timeframe: FundFacetTimeframeEnum;
}

declare interface FundInvestInfo {
    title: string;
    availableInWallet: number;
    minInvestmentAmount: number;
    entryFee: number;
    gvCommission: number;
    rate: number;
    isOwnProgram: boolean;
}

declare interface FundNotificationSettingList {
    assetId: string;
    title: string;
    url: string;
    logo: string;
    color: string;
    settingsGeneral: NotificationSettingViewModel[];
}

declare interface FundProfitChart {
    totalUsdProfit: number;
    timeframeUsdProfit: number;
    rebalances: number;
    creationDate: Date;
    profitPercent: number;
    equityChart: ChartSimple[];
    balance: number;
    investors: number;
    profitChangePercent: number;
    sharpeRatio: number;
    sortinoRatio: number;
    calmarRatio: number;
    maxDrawdown: number;
    totalGvtProfit: number;
    timeframeGvtProfit: number;
    rate: number;
}

declare interface FundSets {
    sets: FundFacet[];
    favoritesCount: number;
}

declare interface FundStatistic {
    balanceGVT: AmountWithCurrency;
    balanceSecondary: AmountWithCurrency;
    profitPercent: number;
    drawdownPercent: number;
    investorsCount: number;
    startDate: Date;
    startBalance: number;
    investedAmount: number;
    rebalancingCount: number;
}

declare interface FundWithdrawInfo {
    exitFee: number;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

declare interface FundsList {
    funds: FundDetails[];
    total: number;
}

declare interface GeeTestDetails {
}

declare interface GeeTestResult {
}

declare interface IOsAppVersion {
    minVersion: string;
    lastVersion: string;
}

declare type InternalTransferRequestSourceTypeEnum = "Undefined" | "Wallet" | "CopyTradingAccount";

declare type InternalTransferRequestDestinationTypeEnum = "Undefined" | "Wallet" | "CopyTradingAccount";

declare interface InternalTransferRequest {
    sourceId: string;
    sourceType: InternalTransferRequestSourceTypeEnum;
    destinationId: string;
    destinationType: InternalTransferRequestDestinationTypeEnum;
    amount: number;
    transferAll: boolean;
}

declare interface LevelInfo {
    level: number;
    investmentLimit: number;
}

declare interface LevelUpData {
    level: number;
    total: number;
    totalOwn: number;
    quota: number;
    targetProfit: number;
}

declare interface LevelUpSummary {
    levelData: LevelUpData[];
}

declare interface LoginViewModel {
    email: string;
    password: string;
    rememberMe: boolean;
    twoFactorCode: string;
    recoveryCode: string;
    client: string;
    captchaCheckResult: CaptchaCheckResult;
}

declare interface ManagerAssets {
    programs: ManagerSimpleProgram[];
    funds: ManagerSimpleFund[];
}

declare interface ManagerDashboard {
    profile: ManagerProfileDetails;
    requests: ProgramRequest;
    events: ManagerPortfolioEvents;
    allAssets: AssetSelection[];
    programChart: ProgramProfitChart;
    fundChart: FundProfitChart;
}

declare interface ManagerEvent {
    programs: string[];
    funds: string[];
}

declare interface ManagerFundWithdrawInfo {
    withheldInvestment: number;
    exitFee: number;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

declare interface ManagerNotificationSettingList {
    managerId: string;
    url: string;
    username: string;
    avatar: string;
    about: string;
    settingsGeneral: NotificationSettingViewModel[];
}

declare interface ManagerOverview {
}

declare type ManagerPortfolioEventCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type ManagerPortfolioEventTypeEnum = "All" | "AssetStarted" | "ProgramPeriodStarts" | "ProgramPeriodEnds" | "InvestorInvest" | "InvestorWithdraw" | "ManagerInvest" | "ManagerWithdraw" | "AssetFinished" | "EntranceFee" | "ExitFee" | "ProgramStopOut" | "ProgramManagerTradingFeeAccrual" | "ProgramSignalSubscribe";

declare type ManagerPortfolioEventProgramTypeEnum = "Program" | "Fund";

declare interface ManagerPortfolioEvent {
    assetId: string;
    date: Date;
    title: string;
    value: number;
    feeValue: number;
    profitPercent: number;
    currency: ManagerPortfolioEventCurrencyEnum;
    type: ManagerPortfolioEventTypeEnum;
    programType: ManagerPortfolioEventProgramTypeEnum;
    logo: string;
    color: string;
    description: string;
    url: string;
    periodNumber: number;
}

declare interface ManagerPortfolioEvents {
    events: ManagerPortfolioEvent[];
    total: number;
}

declare interface ManagerProfile {
    id: string;
    username: string;
    about: string;
    avatar: string;
    regDate: Date;
    assets: string[];
    url: string;
}

declare interface ManagerProfileDetails {
    managerProfile: ManagerProfile;
    overview: ManagerOverview;
    programsCount: number;
    fundsCount: number;
}

declare interface ManagerProgramCreateResult {
    programId: string;
    twoFactorRequired: boolean;
    twoFactor: TwoFactorAuthenticator;
}

declare interface ManagerProgramWithdrawInfo {
    withheldInvestment: number;
    periodEnds: Date;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

declare interface ManagerSimpleFund {
    id: string;
    title: string;
    color: string;
    logo: string;
    url: string;
}

declare interface ManagerSimpleProgram {
    level: number;
    id: string;
    title: string;
    color: string;
    logo: string;
    url: string;
}

declare interface ManagersList {
    managers: ManagerProfile[];
    total: number;
}

declare type MultiWalletExternalTransactionCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type MultiWalletExternalTransactionTypeEnum = "All" | "Deposit" | "Withdrawal";

declare interface MultiWalletExternalTransaction {
    id: string;
    currency: MultiWalletExternalTransactionCurrencyEnum;
    logo: string;
    date: Date;
    amount: number;
    type: MultiWalletExternalTransactionTypeEnum;
    status: string;
    isEnableActions: boolean;
    statusUrl: string;
}

declare interface MultiWalletExternalTransactionsViewModel {
    transactions: MultiWalletExternalTransaction[];
    total: number;
}

declare interface MultiWalletFilters {
    transactionType: string[];
    externalTransactionType: string[];
}

declare type MultiWalletTransactionCurrencyFromEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type MultiWalletTransactionCurrencyToEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type MultiWalletTransactionTypeEnum = "All" | "Investment" | "Converting" | "Withdrawal" | "Close" | "Open" | "Fee" | "Profits" | "SubscribeSignal" | "ReceiveSignal" | "DepositSignal" | "WithdrawalSignal" | "Platform";

declare type MultiWalletTransactionStatusEnum = "Done" | "Pending" | "Canceled" | "Error";

declare interface MultiWalletTransaction {
    id: string;
    currencyFrom: MultiWalletTransactionCurrencyFromEnum;
    currencyTo: MultiWalletTransactionCurrencyToEnum;
    type: MultiWalletTransactionTypeEnum;
    date: Date;
    status: MultiWalletTransactionStatusEnum;
    logoFrom: string;
    logoTo: string;
    description: string;
    amount: number;
    amountTo: number;
}

declare interface MultiWalletTransactionsViewModel {
    transactions: MultiWalletTransaction[];
    total: number;
}

declare interface NewFundRequest {
    exitFee: number;
    managementFee: number;
    assets: FundAssetPart[];
    title: string;
    description: string;
    logo: string;
    entryFee: number;
    depositAmount: number;
    depositWalletId: string;
}

declare type NewProgramRequestCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface NewProgramRequest {
    currency: NewProgramRequestCurrencyEnum;
    periodLength: number;
    successFee: number;
    stopOutLevel: number;
    leverage: number;
    brokerAccountTypeId: string;
    signalSuccessFee: number;
    signalSubscriptionFee: number;
    isSignalProgram: boolean;
    title: string;
    description: string;
    logo: string;
    entryFee: number;
    depositAmount: number;
    depositWalletId: string;
}

declare interface NotificationList {
    notifications: NotificationViewModel[];
    total: number;
}

declare interface NotificationSettingList {
    settingsGeneral: NotificationSettingViewModel[];
    settingsProgram: ProgramNotificationSettingList[];
    settingsFund: FundNotificationSettingList[];
    settingsManager: ManagerNotificationSettingList[];
}

declare type NotificationSettingViewModelTypeEnum = "PlatformNewsAndUpdates" | "PlatformEmergency" | "PlatformOther" | "ProfileUpdated" | "ProfilePwdUpdated" | "ProfileVerification" | "Profile2FA" | "ProfileSecurity" | "TradingAccountPwdUpdated" | "ProgramNewsAndUpdates" | "ProgramEndOfPeriod" | "ProgramCondition" | "FundNewsAndUpdates" | "FundEndOfPeriod" | "FundRebalancing" | "ManagerNewProgram" | "Signals";

declare type NotificationSettingViewModelConditionTypeEnum = "Empty" | "Profit" | "Level" | "AvailableToInvest";

declare interface NotificationSettingViewModel {
    id: string;
    isEnabled: boolean;
    assetId: string;
    managerId: string;
    type: NotificationSettingViewModelTypeEnum;
    conditionType: NotificationSettingViewModelConditionTypeEnum;
    conditionAmount: number;
}

declare type NotificationViewModelTypeEnum = "PlatformNewsAndUpdates" | "PlatformEmergency" | "PlatformOther" | "ProfileUpdated" | "ProfilePwdUpdated" | "ProfileVerification" | "Profile2FA" | "ProfileSecurity" | "TradingAccountPwdUpdated" | "ProgramNewsAndUpdates" | "ProgramEndOfPeriod" | "ProgramCondition" | "FundNewsAndUpdates" | "FundEndOfPeriod" | "FundRebalancing" | "ManagerNewProgram" | "Signals";

declare type NotificationViewModelAssetTypeEnum = "Program" | "Fund";

declare interface NotificationViewModel {
    id: string;
    text: string;
    date: Date;
    type: NotificationViewModelTypeEnum;
    assetId: string;
    managerId: string;
    logo: string;
    url: string;
    color: string;
    isUnread: boolean;
    assetType: NotificationViewModelAssetTypeEnum;
}

declare type OrderModelDirectionEnum = "Buy" | "Sell" | "Balance" | "Credit" | "Undefined";

declare type OrderModelEntryEnum = "In" | "Out" | "InOut" | "OutBy";

declare interface OrderModel {
    id: string;
    login: string;
    ticket: string;
    symbol: string;
    volume: number;
    profit: number;
    direction: OrderModelDirectionEnum;
    date: Date;
    price: number;
    priceCurrent: number;
    entry: OrderModelEntryEnum;
    baseVolume: number;
    originalCommission: number;
    originalCommissionCurrency: string;
    commission: number;
    swap: number;
    showOriginalCommission: boolean;
    masterLogin: string;
}

declare interface OrderProgramData {
    title: string;
    level: number;
    color: string;
    url: string;
    logo: string;
}

declare type OrderSignalModelDirectionEnum = "Buy" | "Sell" | "Balance" | "Credit" | "Undefined";

declare type OrderSignalModelEntryEnum = "In" | "Out" | "InOut" | "OutBy";

declare interface OrderSignalModel {
    providers: OrderSignalProgramInfo[];
    id: string;
    login: string;
    ticket: string;
    symbol: string;
    volume: number;
    profit: number;
    direction: OrderSignalModelDirectionEnum;
    date: Date;
    price: number;
    priceCurrent: number;
    entry: OrderSignalModelEntryEnum;
    baseVolume: number;
    originalCommission: number;
    originalCommissionCurrency: string;
    commission: number;
    swap: number;
    showOriginalCommission: boolean;
    masterLogin: string;
}

declare interface OrderSignalProgramInfo {
    manager: ProfilePublic;
    program: OrderProgramData;
    programId: string;
    volume: number;
}

declare interface OtherAssetsValue {
    amount: number;
    value: number;
    changePercent: number;
    changeValue: number;
}

declare interface PasswordModel {
    password: string;
}

declare interface PeriodDate {
    dateFrom: Date;
    dateTo: Date;
}

declare type PersonalFundDetailsFullStatusEnum = "Pending" | "Active" | "Investing" | "Withdrawing" | "Ended";

declare interface PersonalFundDetailsFull {
    withdrawPercent: number;
    canReallocate: boolean;
    possibleReallocationTime: Date;
    isFavorite: boolean;
    isInvested: boolean;
    isOwnProgram: boolean;
    canCloseProgram: boolean;
    isFinishing: boolean;
    canInvest: boolean;
    canWithdraw: boolean;
    canClosePeriod: boolean;
    hasNotifications: boolean;
    value: number;
    profit: number;
    invested: number;
    pendingInput: number;
    pendingOutput: number;
    status: PersonalFundDetailsFullStatusEnum;
    isFollowSignals: boolean;
    canMakeSignalProvider: boolean;
}

declare type PersonalProgramDetailsFullStatusEnum = "Pending" | "Active" | "Investing" | "Withdrawing" | "Ended";

declare interface PersonalProgramDetailsFull {
    isReinvest: boolean;
    gvtValue: number;
    showTwoFactorButton: boolean;
    signalSubscription: SignalSubscription;
    login: string;
    notificationAvailableToInvestId: string;
    isFavorite: boolean;
    isInvested: boolean;
    isOwnProgram: boolean;
    canCloseProgram: boolean;
    isFinishing: boolean;
    canInvest: boolean;
    canWithdraw: boolean;
    canClosePeriod: boolean;
    hasNotifications: boolean;
    value: number;
    profit: number;
    invested: number;
    pendingInput: number;
    pendingOutput: number;
    status: PersonalProgramDetailsFullStatusEnum;
    isFollowSignals: boolean;
    canMakeSignalProvider: boolean;
}

declare interface PersonalSignalDetailsFull {
    subscriptionDate: Date;
    tradesCount: number;
    signalSubscription: SignalSubscription;
    profit: number;
}

declare interface PlatformAsset {
    id: string;
    name: string;
    asset: string;
    description: string;
    icon: string;
    color: string;
}

declare interface PlatformAssets {
    assets: PlatformAsset[];
}

declare interface PlatformCurrency {
    name: string;
    rateToGvt: number;
}

declare interface PlatformInfo {
    iOSVersion: IOsAppVersion;
    androidVersion: AndroidAppVersion;
    programsFacets: ProgramFacet[];
    fundsFacets: FundFacet[];
    programsInfo: ProgramsInfo;
    currencies: string[];
    platformCurrencies: PlatformCurrency[];
    enums: Enums;
}

declare interface PlatformStatistic {
    managers: number;
    investors: number;
    profitWeek: number;
    investmentAmount: number;
    totalInvestorsProfit: number;
    totalProfit: number;
}

declare type PowDetailsSecureAlgorithmEnum = "Sha256";

declare interface PowDetails {
    secureAlgorithm: PowDetailsSecureAlgorithmEnum;
    difficulty: number;
    nonce: string;
}

declare interface PowResult {
    prefix: string;
}

declare type ProfileFullViewModelVerificationStatusEnum = "NotVerified" | "Verified" | "UnderReview" | "Rejected";

declare interface ProfileFullViewModel {
    id: string;
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    country: string;
    city: string;
    address: string;
    phone: string;
    phoneNumberConfirmed: boolean;
    birthday: Date;
    gender: boolean;
    avatar: string;
    about: string;
    userName: string;
    index: string;
    citizenship: string;
    refUrl: string;
    verificationStatus: ProfileFullViewModelVerificationStatusEnum;
}

declare type ProfileHeaderViewModelUserTypeEnum = "Investor" | "Manager";

declare interface ProfileHeaderViewModel {
    id: string;
    name: string;
    email: string;
    avatar: string;
    userType: ProfileHeaderViewModelUserTypeEnum;
    notificationsCount: number;
    favoritesCount: number;
    kycConfirmed: boolean;
    allowForex: boolean;
    isTwoFactorEnabled: boolean;
    isNewUser: boolean;
    totalBalanceGvt: number;
    investedGvt: number;
    availableGvt: number;
    totalBalance: number;
    invested: number;
    available: number;
    pending: number;
}

declare interface ProfilePublic {
    id: string;
    username: string;
    avatar: string;
    registrationDate: Date;
    url: string;
}

declare type ProgramBalanceChartProgramCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface ProgramBalanceChart {
    programCurrencyBalance: number;
    programCurrency: ProgramBalanceChartProgramCurrencyEnum;
    balanceChart: ProgramBalanceChartElement[];
    gvtBalance: number;
}

declare interface ProgramBalanceChartElement {
    profit: number;
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

declare type ProgramDetailsCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type ProgramDetailsStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

declare interface ProgramDetails {
    currency: ProgramDetailsCurrencyEnum;
    level: number;
    periodDuration: number;
    stopOutLevel: number;
    periodStarts: Date;
    periodEnds: Date;
    availableInvestment: number;
    availableInvestmentBase: number;
    dashboardAssetsDetails: DashboardProgramDetails;
    statistic: ProgramDetailsListStatistic;
    rating: ProgramDetailsRating;
    personalDetails: PersonalProgramDetailsFull;
    tags: ProgramTag[];
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    status: ProgramDetailsStatusEnum;
    creationDate: Date;
    manager: ProfilePublic;
    chart: ChartSimple[];
}

declare type ProgramDetailsFullCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type ProgramDetailsFullStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

declare interface ProgramDetailsFull {
    currency: ProgramDetailsFullCurrencyEnum;
    level: number;
    periodDuration: number;
    periodStarts: Date;
    periodEnds: Date;
    entryFee: number;
    entryFeeSelected: number;
    entryFeeCurrent: number;
    successFee: number;
    stopOutLevel: number;
    isReinvesting: boolean;
    isSignalProgram: boolean;
    signalSuccessFee: number;
    signalSubscriptionFee: number;
    isForex: boolean;
    availableInvestment: number;
    availableInvestmentBase: number;
    statistic: ProgramStatistic;
    rating: ProgramDetailsRating;
    personalProgramDetails: PersonalProgramDetailsFull;
    tags: ProgramTag[];
    id: string;
    logo: string;
    url: string;
    color: string;
    description: string;
    title: string;
    ipfsHash: string;
    creationDate: Date;
    status: ProgramDetailsFullStatusEnum;
    manager: ProfilePublic;
}

declare interface ProgramDetailsListStatistic {
    balanceBase: AmountWithCurrency;
    balanceGVT: AmountWithCurrency;
    balanceSecondary: AmountWithCurrency;
    currentValue: number;
    profitPercent: number;
    profitValue: number;
    drawdownPercent: number;
    investorsCount: number;
    tradesCount: number;
}

declare interface ProgramDetailsRating {
    rating: number;
    profit: number;
    canLevelUp: boolean;
    topPercent: number;
}

declare type ProgramFacetSortingEnum = "ByLevelAsc" | "ByLevelDesc" | "ByProfitAsc" | "ByProfitDesc" | "ByDrawdownAsc" | "ByDrawdownDesc" | "ByTradesAsc" | "ByTradesDesc" | "ByInvestorsAsc" | "ByInvestorsDesc" | "ByNewDesc" | "ByNewAsc" | "ByEndOfPeriodAsc" | "ByEndOfPeriodDesc" | "ByTitleAsc" | "ByTitleDesc" | "ByBalanceAsc" | "ByBalanceDesc" | "ByCurrDesc" | "ByCurrAsc";

declare type ProgramFacetSortTypeEnum = "New" | "Top" | "WeeklyTop" | "Popular" | "ToLevelUp";

declare type ProgramFacetTimeframeEnum = "Day" | "Week" | "Month" | "ThreeMonths" | "Year" | "AllTime";

declare interface ProgramFacet {
    sorting: ProgramFacetSortingEnum;
    id: string;
    title: string;
    description: string;
    logo: string;
    url: string;
    sortType: ProgramFacetSortTypeEnum;
    timeframe: ProgramFacetTimeframeEnum;
}

declare interface ProgramFilters {
    programTags: ProgramTag[];
    actionType: string[];
    customNotificationType: string[];
    managerNotificationType: AssetEvent;
    investorNotificationType: AssetEvent;
}

declare interface ProgramInfo {
    title: string;
}

declare interface ProgramInvestInfo {
    periodEnds: Date;
    availableToInvest: number;
    availableToInvestBase: number;
    title: string;
    availableInWallet: number;
    minInvestmentAmount: number;
    entryFee: number;
    gvCommission: number;
    rate: number;
    isOwnProgram: boolean;
}

declare interface ProgramMinimumDeposit {
    minimumDepositsAmount: any;
}

declare interface ProgramNotificationSettingList {
    level: number;
    settingsCustom: NotificationSettingViewModel[];
    assetId: string;
    title: string;
    url: string;
    logo: string;
    color: string;
    settingsGeneral: NotificationSettingViewModel[];
}

declare type ProgramPeriodViewModelStatusEnum = "Planned" | "InProccess" | "Closed";

declare interface ProgramPeriodViewModel {
    dateFrom: Date;
    dateTo: Date;
    status: ProgramPeriodViewModelStatusEnum;
    number: number;
    profit: number;
}

declare interface ProgramPeriodsViewModel {
    periods: ProgramPeriodViewModel[];
    total: number;
}

declare type ProgramProfitChartProgramCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface ProgramProfitChart {
    totalProgramCurrencyProfit: number;
    timeframeProgramCurrencyProfit: number;
    programCurrency: ProgramProfitChartProgramCurrencyEnum;
    trades: number;
    successTradesPercent: number;
    profitFactor: number;
    pnLChart: ChartSimple[];
    periods: PeriodDate[];
    lastPeriodStarts: Date;
    lastPeriodEnds: Date;
    equityChart: ChartSimple[];
    balance: number;
    investors: number;
    profitChangePercent: number;
    sharpeRatio: number;
    sortinoRatio: number;
    calmarRatio: number;
    maxDrawdown: number;
    totalGvtProfit: number;
    timeframeGvtProfit: number;
    rate: number;
}

declare interface ProgramPwdUpdate {
    password: string;
    twoFactorCode: string;
}

declare type ProgramRequestCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type ProgramRequestTypeEnum = "Invest" | "Withdrawal";

declare type ProgramRequestStatusEnum = "New" | "Executed" | "Cancelled";

declare type ProgramRequestProgramTypeEnum = "Program" | "Fund";

declare interface ProgramRequest {
    id: string;
    programId: string;
    date: Date;
    value: number;
    valueGvt: number;
    feeEntry: number;
    feeExit: number;
    currency: ProgramRequestCurrencyEnum;
    fundWithdrawPercent: number;
    type: ProgramRequestTypeEnum;
    status: ProgramRequestStatusEnum;
    logo: string;
    title: string;
    color: string;
    canCancelRequest: boolean;
    programType: ProgramRequestProgramTypeEnum;
}

declare interface ProgramRequests {
    requests: ProgramRequest[];
    total: number;
    totalValue: number;
}

declare interface ProgramSets {
    sets: ProgramFacet[];
    favoritesCount: number;
}

declare type ProgramStatisticStartCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type ProgramStatisticInvestedCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface ProgramStatistic {
    balanceBase: AmountWithCurrency;
    balanceGVT: AmountWithCurrency;
    balanceSecondary: AmountWithCurrency;
    currentValue: number;
    profitPercent: number;
    profitValue: number;
    drawdownPercent: number;
    investorsCount: number;
    hasNotifications: boolean;
    startDate: Date;
    startBalance: number;
    startCurrency: ProgramStatisticStartCurrencyEnum;
    investedAmount: number;
    investedCurrency: ProgramStatisticInvestedCurrencyEnum;
    tradesCount: number;
    tradesSuccessCount: number;
    profitFactorPercent: number;
    sharpeRatioPercent: number;
}

declare interface ProgramTag {
    name: string;
    color: string;
}

declare type ProgramTransactionDetailsProgramTypeEnum = "Program" | "Fund";

declare interface ProgramTransactionDetails {
    id: string;
    managerName: string;
    programType: ProgramTransactionDetailsProgramTypeEnum;
    logo: string;
    title: string;
    entryFee: number;
    entryFeePercent: number;
    successFee: number;
    successFeePercent: number;
    level: number;
    exitFee: number;
    exitFeePercent: number;
    color: string;
}

declare interface ProgramUpdate {
    title: string;
    description: string;
    logo: string;
    stopOutLevel: number;
}

declare interface ProgramWithdrawInfo {
    periodEnds: Date;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

declare interface ProgramsInfo {
    managerProgramInvestment: number;
    managerProgramInvestmentUSD: number;
    managerProgramInvestmentUSDT: number;
    managerProgramInvestmentBTC: number;
    managerProgramInvestmentETH: number;
    managerMaxEntryFee: number;
    managerMaxSuccessFee: number;
    managerFundInvestment: number;
    managerMaxExitFee: number;
    managerMaxSignalSubscriptionFee: number;
    managerMinSignalSubscriptionFee: number;
    managerMaxSignalSuccessFee: number;
    managerMinSignalSuccessFee: number;
    periods: number[];
}

declare interface ProgramsLevelsInfo {
    levels: LevelInfo[];
}

declare interface ProgramsList {
    programs: ProgramDetails[];
    total: number;
}

declare type RateItemCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface RateItem {
    currency: RateItemCurrencyEnum;
    rate: number;
}

declare interface RatesModel {
    rates: RatesModelRates;
}

declare interface RatesModelRates {
    Undefined: RateItem[];
    GVT: RateItem[];
    ETH: RateItem[];
    BTC: RateItem[];
    ADA: RateItem[];
    USDT: RateItem[];
    XRP: RateItem[];
    BCH: RateItem[];
    LTC: RateItem[];
    DOGE: RateItem[];
    BNB: RateItem[];
    USD: RateItem[];
    EUR: RateItem[];
}

declare interface RecoveryCode {
    code: string;
    isActive: boolean;
}

declare interface RecoveryCodesViewModel {
    codes: RecoveryCode[];
    authToken: string;
}

declare interface RegisterInvestorViewModel {
    email: string;
    password: string;
    confirmPassword: string;
    refCode: string;
    isAuto: boolean;
}

declare interface RegisterManagerViewModel {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    refCode: string;
    isAuto: boolean;
}

declare interface ResendConfirmationViewModel {
    email: string;
}

declare interface ResetPasswordViewModel {
    userId: string;
    code: string;
    password: string;
    confirmPassword: string;
}

declare interface SearchViewModel {
    programs: ProgramsList;
    funds: FundsList;
    managers: ManagersList;
}

declare type SignalDetailsCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type SignalDetailsStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

declare interface SignalDetails {
    statistic: ProgramDetailsListStatistic;
    personalDetails: PersonalSignalDetailsFull;
    currency: SignalDetailsCurrencyEnum;
    level: number;
    tags: ProgramTag[];
    subscribers: number;
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    status: SignalDetailsStatusEnum;
    creationDate: Date;
    manager: ProfilePublic;
    chart: ChartSimple[];
}

declare type SignalSubscriptionModeEnum = "ByBalance" | "Percent" | "Fixed";

declare type SignalSubscriptionFixedCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface SignalSubscription {
    hasSignalAccount: boolean;
    hasActiveSubscription: boolean;
    mode: SignalSubscriptionModeEnum;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: SignalSubscriptionFixedCurrencyEnum;
}

declare interface SignalsList {
    programs: SignalDetails[];
    total: number;
}

declare interface TradesSignalViewModel {
    showSwaps: boolean;
    showTickets: boolean;
    trades: OrderSignalModel[];
    total: number;
}

declare interface TradesViewModel {
    showSwaps: boolean;
    showTickets: boolean;
    trades: OrderModel[];
    total: number;
}

declare type TransactionDetailsTypeEnum = "Investing" | "Withdrawal" | "ExternalWithdrawal" | "ExternalDeposit" | "Converting" | "Open" | "Close" | "Profit" | "PlatformFee" | "SubscribeSignal" | "ReceiveSignal" | "DepositSignal" | "WithdrawalSignal" | "Platform";

declare type TransactionDetailsStatusEnum = "Done" | "Pending" | "Canceled" | "Error";

declare type TransactionDetailsCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type TransactionDetailsGvCommissionCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface TransactionDetails {
    type: TransactionDetailsTypeEnum;
    programDetails: ProgramTransactionDetails;
    convertingDetails: ConvertingDetails;
    externalTransactionDetails: ExternalTransactionDetails;
    status: TransactionDetailsStatusEnum;
    currency: TransactionDetailsCurrencyEnum;
    currencyName: string;
    currencyLogo: string;
    gvCommission: number;
    gvCommissionCurrency: TransactionDetailsGvCommissionCurrencyEnum;
    gvCommissionPercent: number;
    amount: number;
}

declare interface TwoFactorAuthenticator {
    sharedKey: string;
    authenticatorUri: string;
}

declare interface TwoFactorAuthenticatorConfirm {
    code: string;
    sharedKey: string;
    password: string;
}

declare interface TwoFactorCodeModel {
    twoFactorCode: string;
    password: string;
}

declare interface TwoFactorStatus {
    twoFactorEnabled: boolean;
}

declare interface UpdatePersonalDetailViewModel {
    firstName: string;
    middleName: string;
    lastName: string;
    birthday: Date;
    citizenship: string;
    gender: boolean;
    documentId: string;
    phoneNumber: string;
    country: string;
    city: string;
    address: string;
    index: string;
}

declare interface UpdateProfileViewModel {
    userName: string;
    about: string;
}

declare interface UploadResult {
    id: string;
}

declare interface UserCommissionData {
    isPayingCommissionInGvt: boolean;
    gvtHolderTradingFee: number;
    gvtHolderDiscount: number;
    regularTradingFee: number;
    regularDiscount: number;
}

declare interface ValueChartBar {
    value: number;
    date: Date;
    topAssets: AssetsValue[];
    otherAssetsValue: OtherAssetsValue;
}

declare type WalletBaseDataCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface WalletBaseData {
    id: string;
    title: string;
    logo: string;
    currency: WalletBaseDataCurrencyEnum;
    available: number;
    rate: number;
}

declare type WalletDataCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type WalletDataCurrencyCcyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface WalletData {
    id: string;
    title: string;
    logo: string;
    rateToGVT: number;
    isDepositEnabled: boolean;
    isWithdrawalEnabled: boolean;
    withdrawalCommission: number;
    depositAddress: string;
    currency: WalletDataCurrencyEnum;
    available: number;
    invested: number;
    pending: number;
    total: number;
    currencyCcy: WalletDataCurrencyCcyEnum;
    availableCcy: number;
    investedCcy: number;
    pendingCcy: number;
    totalCcy: number;
}

declare type WalletInfoCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface WalletInfo {
    currency: WalletInfoCurrencyEnum;
    address: string;
    rateToGVT: number;
    description: string;
    logo: string;
    isDepositEnabled: boolean;
}

declare interface WalletMultiAvailable {
    wallets: WalletBaseData[];
}

declare interface WalletMultiSummary {
    grandTotal: WalletsGrandTotal;
    wallets: WalletData[];
    payFeesWithGvt: boolean;
}

declare interface WalletSummary {
    totalBalanceGVT: number;
    totalBalanceCurrency: number;
    investedGVT: number;
    investedCurrency: number;
    availableGVT: number;
    availableCurrency: number;
}

declare type WalletTransactionSourceTypeEnum = "Wallet" | "Program" | "Fund" | "ProgramRequest" | "FundRequest" | "WithdrawalRequest" | "PaymentTransaction" | "Blockchain" | "GenesisVisionPlatform" | "SignalMasterSetting" | "SignalTradingAccount";

declare type WalletTransactionSourceCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type WalletTransactionActionEnum = "Transfer" | "ProgramOpen" | "ProgramProfit" | "ProgramInvest" | "ProgramWithdrawal" | "ProgramRefundPartialExecution" | "ProgramRefundClose" | "ProgramRefundStopOut" | "ProgramRequestInvest" | "ProgramRequestWithdrawal" | "ProgramRequestCancel" | "PayingFee" | "SignalSlaveSubscribe" | "SignalMasterReceiveSubscription";

declare type WalletTransactionDestinationTypeEnum = "Wallet" | "Program" | "Fund" | "ProgramRequest" | "FundRequest" | "WithdrawalRequest" | "PaymentTransaction" | "Blockchain" | "GenesisVisionPlatform" | "SignalMasterSetting" | "SignalTradingAccount";

declare type WalletTransactionDestinationCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface WalletTransaction {
    id: string;
    amount: number;
    amountConverted: number;
    date: Date;
    number: number;
    sourceId: string;
    sourceType: WalletTransactionSourceTypeEnum;
    sourceCurrency: WalletTransactionSourceCurrencyEnum;
    sourceProgramInfo: ProgramInfo;
    sourceBlockchainInfo: BlockchainInfo;
    sourceWithdrawalInfo: WithdrawalInfo;
    action: WalletTransactionActionEnum;
    information: string;
    destinationId: string;
    destinationType: WalletTransactionDestinationTypeEnum;
    destinationCurrency: WalletTransactionDestinationCurrencyEnum;
    destinationProgramInfo: ProgramInfo;
    destinationBlockchainInfo: BlockchainInfo;
    destinationWithdrawalInfo: WithdrawalInfo;
}

declare interface WalletTransactionsViewModel {
    transactions: WalletTransaction[];
    total: number;
}

declare type WalletWithdrawalInfoCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface WalletWithdrawalInfo {
    currency: WalletWithdrawalInfoCurrencyEnum;
    description: string;
    logo: string;
    commission: number;
    rateToGvt: number;
    availableToWithdrawal: number;
}

declare type WalletsGrandTotalCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare type WalletsGrandTotalCurrencyCcyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

declare interface WalletsGrandTotal {
    currency: WalletsGrandTotalCurrencyEnum;
    available: number;
    invested: number;
    pending: number;
    total: number;
    currencyCcy: WalletsGrandTotalCurrencyCcyEnum;
    availableCcy: number;
    investedCcy: number;
    pendingCcy: number;
    totalCcy: number;
}

declare interface WalletsInfo {
    wallets: WalletInfo[];
}

declare type WithdrawalInfoStatusEnum = "New" | "InProcess" | "Done" | "Error" | "Rejected" | "Cancelled";

declare interface WithdrawalInfo {
    wallet: string;
    status: WithdrawalInfoStatusEnum;
    canResendEmail: boolean;
    canCancelRequest: boolean;
}

declare interface WithdrawalSummary {
    availableToWithdrawal: number;
    wallets: WalletWithdrawalInfo[];
}

