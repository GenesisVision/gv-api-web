export declare class ApiClient {
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

export declare class AuthApi {
    constructor(apiClient: ApiClient): AuthApi;
    v10Auth2faConfirmPost(authorization: string, opts?: {
        model?: TwoFactorAuthenticatorConfirm;
    }): Promise<RecoveryCodesViewModel>;
    v10Auth2faCreatePost(authorization: string): Promise<TwoFactorAuthenticator>;
    v10Auth2faDisablePost(authorization: string, opts?: {
        model?: TwoFactorCodeModel;
    }): Promise<any>;
    v10Auth2faGet(authorization: string): Promise<TwoFactorStatus>;
    v10Auth2faRecoverycodesNewPost(authorization: string, opts?: {
        model?: PasswordModel;
    }): Promise<RecoveryCodesViewModel>;
    v10Auth2faRecoverycodesPost(authorization: string, opts?: {
        model?: PasswordModel;
    }): Promise<RecoveryCodesViewModel>;
    v10AuthPasswordChangePost(authorization: string, opts?: {
        model?: ChangePasswordViewModel;
    }): Promise<'String'>;
    v10AuthPasswordForgotInvestorPost(opts?: {
        model?: ForgotPasswordViewModel;
    }): Promise<any>;
    v10AuthPasswordForgotManagerPost(opts?: {
        model?: ForgotPasswordViewModel;
    }): Promise<any>;
    v10AuthPasswordResetPost(opts?: {
        model?: ResetPasswordViewModel;
    }): Promise<'String'>;
    v10AuthPhoneCodePost(authorization: string): Promise<'Number'>;
    v10AuthPhoneVerifyPost(authorization: string, opts?: {
        code?: string;
    }): Promise<any>;
    v10AuthResendconfirmationlinkPost(opts?: {
        model?: ResendConfirmationViewModel;
    }): Promise<any>;
    v10AuthSigninInvestorPost(opts?: {
        model?: LoginViewModel;
    }): Promise<'String'>;
    v10AuthSigninManagerPost(opts?: {
        model?: LoginViewModel;
    }): Promise<'String'>;
    v10AuthSignupConfirmPost(opts?: {
        userId?: string;
        code?: string;
    }): Promise<'String'>;
    v10AuthSignupInvestorPost(opts?: {
        model?: RegisterInvestorViewModel;
    }): Promise<any>;
    v10AuthSignupManagerPost(opts?: {
        model?: RegisterManagerViewModel;
    }): Promise<any>;
    v10AuthTokenDevicesLogoutPost(authorization: string): Promise<'String'>;
    v10AuthTokenUpdatePost(authorization: string): Promise<'String'>;
}

export declare class BrokersApi {
    constructor(apiClient: ApiClient): BrokersApi;
    v10BrokersGet(): Promise<BrokersInfo>;
}

export declare class FileApi {
    constructor(apiClient: ApiClient): FileApi;
    v10FileByIdGet(id: string): Promise<any>;
    v10FileDocumentUploadPost(authorization: string, uploadedFile: File): Promise<UploadResult>;
    v10FileUploadPost(uploadedFile: File, opts?: {
        authorization?: string;
    }): Promise<UploadResult>;
}

export declare class FundsApi {
    constructor(apiClient: ApiClient): FundsApi;
    v10FundsAssetsGet(): Promise<PlatformAssets>;
    v10FundsByIdAssetsGet(id: string): Promise<FundAssetsListInfo>;
    v10FundsByIdChartsBalanceGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
    }): Promise<FundBalanceChart>;
    v10FundsByIdChartsProfitGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
    }): Promise<FundProfitChart>;
    v10FundsByIdFavoriteAddPost(id: string, authorization: string): Promise<any>;
    v10FundsByIdFavoriteRemovePost(id: string, authorization: string): Promise<any>;
    v10FundsByIdGet(id: string, opts?: {
        authorization?: string;
        currencySecondary?: string;
    }): Promise<FundDetailsFull>;
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
        ids?: string[];
        managerId?: string;
        programManagerId?: string;
        skip?: number;
        take?: number;
    }): Promise<FundsList>;
    v10FundsSetsGet(authorization: string): Promise<FundSets>;
}

export declare class InvestorApi {
    constructor(apiClient: ApiClient): InvestorApi;
    v10InvestorFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): Promise<any>;
    v10InvestorFundsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<FundInvestInfo>;
    v10InvestorFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10InvestorFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string, opts?: {
        currency?: string;
    }): Promise<any>;
    v10InvestorFundsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<FundWithdrawInfo>;
    v10InvestorFundsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        skip?: number;
        take?: number;
    }): Promise<FundsList>;
    v10InvestorGet(authorization: string, opts?: {
        chartCurrency?: string;
        from?: Date;
        to?: Date;
        balancePoints?: number;
        programsPoints?: number;
        eventsTake?: number;
        requestsSkip?: number;
        requestsTake?: number;
    }): Promise<DashboardSummary>;
    v10InvestorPortfolioChartGet(authorization: string, opts?: {
        currency?: string;
        from?: Date;
        to?: Date;
        balancePoints?: number;
        programsPoints?: number;
    }): Promise<DashboardChartValue>;
    v10InvestorPortfolioEventsGet(authorization: string, opts?: {
        assetId?: string;
        from?: Date;
        to?: Date;
        type?: string;
        assetType?: string;
        skip?: number;
        take?: number;
    }): Promise<DashboardPortfolioEvents>;
    v10InvestorProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): Promise<any>;
    v10InvestorProgramsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<ProgramInvestInfo>;
    v10InvestorProgramsByIdReinvestOffPost(id: string, authorization: string): Promise<any>;
    v10InvestorProgramsByIdReinvestOnPost(id: string, authorization: string): Promise<any>;
    v10InvestorProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10InvestorProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10InvestorProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<ProgramWithdrawInfo>;
    v10InvestorProgramsByIdWithdrawMultiByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10InvestorProgramsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        skip?: number;
        take?: number;
    }): Promise<ProgramsList>;
    v10InvestorProgramsRequestsByIdCancelPost(id: string, authorization: string): Promise<any>;
    v10InvestorRequestsBySkipByTakeGet(skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10InvestorSignalsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        skip?: number;
        take?: number;
    }): Promise<SignalsList>;
}

export declare class KycApi {
    constructor(apiClient: ApiClient): KycApi;
    v10KycCallbackPost(opts?: {
        model?: KycCallback;
    }): Promise<'String'>;
}

export declare class ManagerApi {
    constructor(apiClient: ApiClient): ManagerApi;
    v10ManagerAssetsGet(authorization: string): Promise<ManagerAssets>;
    v10ManagerByIdDetailsGet(id: string): Promise<ManagerProfileDetails>;
    v10ManagerByIdGet(id: string): Promise<ManagerProfile>;
    v10ManagerEventsGet(authorization: string, opts?: {
        assetId?: string;
        from?: Date;
        to?: Date;
        type?: string;
        assetType?: string;
        skip?: number;
        take?: number;
    }): Promise<ManagerPortfolioEvents>;
    v10ManagerFundsByIdAssetsUpdatePost(id: string, authorization: string, opts?: {
        assets?: FundAssetPart[];
    }): Promise<any>;
    v10ManagerFundsByIdClosePost(id: string, authorization: string, opts?: {
        twoFactorCode?: string;
    }): Promise<any>;
    v10ManagerFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): Promise<any>;
    v10ManagerFundsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<FundInvestInfo>;
    v10ManagerFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10ManagerFundsByIdUpdatePost(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): Promise<any>;
    v10ManagerFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string, opts?: {
        currency?: string;
    }): Promise<any>;
    v10ManagerFundsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<ManagerFundWithdrawInfo>;
    v10ManagerFundsCreatePost(authorization: string, opts?: {
        request?: NewFundRequest;
    }): Promise<any>;
    v10ManagerFundsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        skip?: number;
        take?: number;
    }): Promise<FundsList>;
    v10ManagerFundsInvestmentAmountGet(authorization: string): Promise<'Number'>;
    v10ManagerFundsRequestsByIdCancelPost(id: string, authorization: string): Promise<any>;
    v10ManagerGet(authorization: string, opts?: {
        assetId?: string;
        from?: Date;
        to?: Date;
        type?: string;
        assetType?: string;
        skip?: number;
        take?: number;
    }): Promise<ManagerDashboard>;
    v10ManagerProgramsByIdClosePost(id: string, authorization: string, opts?: {
        twoFactorCode?: string;
    }): Promise<any>;
    v10ManagerProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): Promise<any>;
    v10ManagerProgramsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<ProgramInvestInfo>;
    v10ManagerProgramsByIdPasswordChangePost(id: string, authorization: string, opts?: {
        model?: ProgramPwdUpdate;
    }): Promise<any>;
    v10ManagerProgramsByIdPeriodClosePost(id: string, authorization: string): Promise<any>;
    v10ManagerProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10ManagerProgramsByIdUpdatePost(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): Promise<any>;
    v10ManagerProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10ManagerProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<ManagerProgramWithdrawInfo>;
    v10ManagerProgramsByIdWithdrawMultiByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10ManagerProgramsCreatePost(authorization: string, opts?: {
        request?: NewProgramRequest;
    }): Promise<any>;
    v10ManagerProgramsGet(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        skip?: number;
        take?: number;
    }): Promise<ProgramsList>;
    v10ManagerProgramsInvestmentAmountGet(authorization: string): Promise<ProgramMinimumDeposit>;
    v10ManagerProgramsRequestsByIdCancelPost(id: string, authorization: string): Promise<any>;
    v10ManagerRequestsBySkipByTakeGet(skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10ManagerSignalCreatePost(authorization: string, opts?: {
        programId?: string;
        subscriptionFee?: number;
        successFee?: number;
    }): Promise<any>;
}

export declare class NotificationsApi {
    constructor(apiClient: ApiClient): NotificationsApi;
    v10NotificationsByIdReadPost(id: string, authorization: string): Promise<any>;
    v10NotificationsGet(authorization: string, opts?: {
        skip?: number;
        take?: number;
    }): Promise<NotificationList>;
    v10NotificationsNewGet(authorization: string): Promise<'Number'>;
    v10NotificationsSettingsAddPost(authorization: string, opts?: {
        assetId?: string;
        managerId?: string;
        type?: string;
        conditionType?: string;
        conditionAmount?: number;
    }): Promise<'String'>;
    v10NotificationsSettingsByIdByEnablePost(id: string, enable: boolean, authorization: string): Promise<'String'>;
    v10NotificationsSettingsFundsByIdGet(id: string, authorization: string): Promise<FundNotificationSettingList>;
    v10NotificationsSettingsGet(authorization: string): Promise<NotificationSettingList>;
    v10NotificationsSettingsManagersByIdGet(id: string, authorization: string): Promise<ManagerNotificationSettingList>;
    v10NotificationsSettingsProgramsByIdGet(id: string, authorization: string): Promise<ProgramNotificationSettingList>;
    v10NotificationsSettingsRemoveByIdPost(id: string, authorization: string): Promise<any>;
}

export declare class PlatformApi {
    constructor(apiClient: ApiClient): PlatformApi;
    v10PlatformInfoGet(): Promise<PlatformInfo>;
    v10PlatformLevelsGet(opts?: {
        currency?: string;
    }): Promise<ProgramsLevelsInfo>;
    v10PlatformStatisticGet(): Promise<PlatformStatistic>;
}

export declare class ProfileApi {
    constructor(apiClient: ApiClient): ProfileApi;
    v10ProfileAvatarRemovePost(authorization: string): Promise<any>;
    v10ProfileAvatarUpdateByFileIdPost(fileId: string, authorization: string): Promise<any>;
    v10ProfileGet(authorization: string): Promise<ProfileFullViewModel>;
    v10ProfileHeaderGet(authorization: string): Promise<ProfileHeaderViewModel>;
    v10ProfilePersonalUpdatePost(authorization: string, opts?: {
        model?: UpdatePersonalDetailViewModel;
    }): Promise<any>;
    v10ProfilePushTokenPost(authorization: string, opts?: {
        token?: FcmTokenViewModel;
    }): Promise<any>;
    v10ProfileUpdatePost(authorization: string, opts?: {
        model?: UpdateProfileViewModel;
    }): Promise<any>;
    v10ProfileVerificationTokenPost(authorization: string): Promise<'String'>;
}

export declare class ProgramsApi {
    constructor(apiClient: ApiClient): ProgramsApi;
    v10ProgramsByIdChartsBalanceGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
    }): Promise<ProgramBalanceChart>;
    v10ProgramsByIdChartsProfitGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
    }): Promise<ProgramProfitChart>;
    v10ProgramsByIdFavoriteAddPost(id: string, authorization: string): Promise<any>;
    v10ProgramsByIdFavoriteRemovePost(id: string, authorization: string): Promise<any>;
    v10ProgramsByIdGet(id: string, opts?: {
        authorization?: string;
        currencySecondary?: string;
    }): Promise<ProgramDetailsFull>;
    v10ProgramsByIdTradesGet(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: string;
        skip?: number;
        take?: number;
    }): Promise<TradesViewModel>;
    v10ProgramsByIdTradesOpenGet(id: string, opts?: {
        sorting?: string;
        symbol?: string;
        skip?: number;
        take?: number;
    }): Promise<TradesViewModel>;
    v10ProgramsGet(opts?: {
        authorization?: string;
        levelMin?: number;
        levelMax?: number;
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
        ids?: string[];
        managerId?: string;
        programManagerId?: string;
        skip?: number;
        take?: number;
    }): Promise<ProgramsList>;
    v10ProgramsLevelupSummaryGet(opts?: {
        authorization?: string;
    }): Promise<LevelUpSummary>;
    v10ProgramsSetsGet(authorization: string): Promise<ProgramSets>;
}

export declare class RateApi {
    constructor(apiClient: ApiClient): RateApi;
    v10RateByExchangeByFromByToGet(exchange: string, from: string, to: string): Promise<'Number'>;
    v10RateByFromByToGet(from: string, to: string): Promise<'Number'>;
    v10RateGet(opts?: {
        from?: string[];
        to?: string[];
    }): Promise<RatesModel>;
}

export declare class SearchApi {
    constructor(apiClient: ApiClient): SearchApi;
    v10SearchGet(opts?: {
        mask?: string;
        take?: number;
    }): Promise<SearchViewModel>;
}

export declare class SignalApi {
    constructor(apiClient: ApiClient): SignalApi;
    v10SignalAccountsGet(authorization: string): Promise<CopyTradingAccountsList>;
    v10SignalAttachByIdPost(id: string, authorization: string, opts?: {
        mode?: string;
        percent?: number;
        openTolerancePercent?: number;
        fixedVolume?: number;
        fixedCurrency?: string;
        initialDepositCurrency?: string;
        initialDepositAmount?: number;
    }): Promise<any>;
    v10SignalDetachByIdPost(id: string, authorization: string): Promise<any>;
    v10SignalTradesByIdClosePost(id: string, authorization: string): Promise<any>;
    v10SignalTradesGet(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: string;
        skip?: number;
        take?: number;
    }): Promise<TradesHistorySignalSlaveViewModel>;
    v10SignalTradesOpenGet(authorization: string, opts?: {
        sorting?: string;
        symbol?: string;
        skip?: number;
        take?: number;
    }): Promise<TradesOpenSignalSlaveViewModel>;
    v10SignalUpdatePost(authorization: string, opts?: {
        id?: string;
        mode?: string;
        percent?: number;
        openTolerancePercent?: number;
        fixedVolume?: number;
        fixedCurrency?: string;
        initialDepositCurrency?: string;
        initialDepositAmount?: number;
    }): Promise<any>;
}

export declare class WalletApi {
    constructor(apiClient: ApiClient): WalletApi;
    v10WalletAddressesByCurrencyGet(currency: string, authorization: string): Promise<WalletInfo>;
    v10WalletAddressesGet(authorization: string): Promise<WalletsInfo>;
    v10WalletByCurrencyGet(currency: string, authorization: string): Promise<WalletSummary>;
    v10WalletFeeGvtholdingGet(authorization: string): Promise<UserCommissionData>;
    v10WalletMultiByCurrencyAvailableGet(currency: string, authorization: string): Promise<WalletMultiAvailable>;
    v10WalletMultiByCurrencyGet(currency: string, authorization: string): Promise<WalletMultiSummary>;
    v10WalletMultiTransactionsExternalGet(authorization: string, opts?: {
        from?: Date;
        to?: Date;
        type?: string;
        currency?: string;
        skip?: number;
        take?: number;
    }): Promise<MultiWalletExternalTransactionsViewModel>;
    v10WalletMultiTransactionsGet(authorization: string, opts?: {
        from?: Date;
        to?: Date;
        type?: string;
        currency?: string;
        skip?: number;
        take?: number;
    }): Promise<MultiWalletTransactionsViewModel>;
    v10WalletPaygvtfeeOffPost(authorization: string): Promise<any>;
    v10WalletPaygvtfeeOnPost(authorization: string): Promise<any>;
    v10WalletTransactionByIdGet(id: string, authorization: string): Promise<TransactionDetails>;
    v10WalletTransactionsGet(authorization: string, opts?: {
        assetId?: string;
        from?: Date;
        to?: Date;
        assetType?: string;
        txAction?: string;
        wallet?: string;
        skip?: number;
        take?: number;
    }): Promise<WalletTransactionsViewModel>;
    v10WalletTransferPost(authorization: string, opts?: {
        request?: InternalTransferRequest;
    }): Promise<any>;
    v10WalletWithdrawInfoGet(authorization: string): Promise<WithdrawalSummary>;
    v10WalletWithdrawRequestCancelByTxIdPost(txId: string, authorization: string): Promise<any>;
    v10WalletWithdrawRequestConfirmPost(opts?: {
        requestId?: string;
        code?: string;
    }): Promise<any>;
    v10WalletWithdrawRequestNewPost(authorization: string, opts?: {
        model?: CreateWithdrawalRequestModel;
    }): Promise<any>;
    v10WalletWithdrawRequestResendByTxIdPost(txId: string, authorization: string): Promise<any>;
}

export declare interface index {
    ApiClient: ApiClient;
    AmountWithCurrency: AmountWithCurrency;
    AndroidAppVersion: AndroidAppVersion;
    AndroidVersion: AndroidVersion;
    AssetSelection: AssetSelection;
    AssetsValue: AssetsValue;
    BalanceChartElement: BalanceChartElement;
    BlockchainInfo: BlockchainInfo;
    Broker: Broker;
    BrokerAccountType: BrokerAccountType;
    BrokersInfo: BrokersInfo;
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
    IOsAppVersion: IOsAppVersion;
    InternalTransferRequest: InternalTransferRequest;
    KycCallback: KycCallback;
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
    OrderClosedSignalSlaveModel: OrderClosedSignalSlaveModel;
    OrderModel: OrderModel;
    OrderOpenSignalSlaveModel: OrderOpenSignalSlaveModel;
    OrderProgramData: OrderProgramData;
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
    Review: Review;
    SearchViewModel: SearchViewModel;
    SignalDetails: SignalDetails;
    SignalsList: SignalsList;
    TradesHistorySignalSlaveViewModel: TradesHistorySignalSlaveViewModel;
    TradesOpenSignalSlaveViewModel: TradesOpenSignalSlaveViewModel;
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
    KycApi: KycApi;
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

export declare interface AmountWithCurrency {
    amount: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
}

export declare interface AndroidAppVersion {
    minVersion: AndroidVersion;
    lastVersion: AndroidVersion;
}

export declare interface AndroidVersion {
    versionCode: string;
    versionName: string;
}

export declare interface AssetSelection {
    id: string;
    title: string;
    logo: string;
    type: "Program" | "Fund";
}

export declare interface AssetsValue {
    type: "All" | "Program" | "Fund";
    id: string;
    title: string;
    avatar: string;
    color: string;
    value: number;
    changePercent: number;
    changeValue: number;
}

export declare interface BalanceChartElement {
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

export declare interface BlockchainInfo {
    hash: string;
    status: "Undefined" | "New" | "Pending" | "ConfirmedByGate" | "ConfirmedAndValidated" | "Error" | "Cancelled";
}

export declare interface Broker {
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
}

export declare interface BrokerAccountType {
    id: string;
    name: string;
    description: string;
    type: "Undefined" | "MetaTrader4" | "MetaTrader5" | "NinjaTrader" | "cTrader" | "Rumus" | "Metastock" | "IDEX";
    leverages: number[];
    currencies: string[];
    isForex: boolean;
    isSignalsAvailable: boolean;
}

export declare interface BrokersInfo {
    brokers: Broker[];
}

export declare interface ChangePasswordViewModel {
    oldPassword: string;
    password: string;
    confirmPassword: string;
}

export declare interface ChartSimple {
    value: number;
    date: Date;
}

export declare interface ConvertingDetails {
    currencyTo: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    currencyToName: string;
    amountTo: number;
    rateValue: number;
    currencyToLogo: string;
}

export declare interface CopyTradingAccountInfo {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    currencyLogo: string;
    balance: number;
    equity: number;
    freeMargin: number;
}

export declare interface CopyTradingAccountsList {
    accounts: CopyTradingAccountInfo[];
}

export declare interface CreateWithdrawalRequestModel {
    amount: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    address: string;
    twoFactorCode: string;
}

export declare interface DashboardChartValue {
    investedProgramsInfo: ValueChartBar[];
    balanceChart: ChartSimple[];
    value: number;
    valueCurrency: number;
    changePercent: number;
    changeValue: number;
    changeValueCurrency: number;
    rate: number;
}

export declare interface DashboardPortfolioEvent {
    assetId: string;
    date: Date;
    title: string;
    value: number;
    valueTotal: number;
    feeSuccessManager: number;
    feeSuccessManagerCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    feeSuccessPlatform: number;
    feeSuccessPlatformCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    profitPercent: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    type: "All" | "Invest" | "Withdraw" | "Profit" | "Loss" | "Reinvest" | "Canceled" | "Ended" | "WithdrawByStopOut";
    logo: string;
    color: string;
    description: string;
    assetType: "Program" | "Fund";
}

export declare interface DashboardPortfolioEvents {
    events: DashboardPortfolioEvent[];
    total: number;
}

export declare interface DashboardProgramDetails {
    share: number;
}

export declare interface DashboardSummary {
    chart: DashboardChartValue;
    events: DashboardPortfolioEvents;
    profileHeader: ProfileHeaderViewModel;
    programsCount: number;
    fundsCount: number;
    signalsCount: number;
    requests: ProgramRequests;
}

export declare interface Enums {
    multiWallet: MultiWalletFilters;
    program: ProgramFilters;
}

export declare interface ErrorMessage {
    message: string;
    property: string;
}

export declare interface ErrorViewModel {
    errors: ErrorMessage[];
    code: "InternalServerError" | "ValidationError" | "RequiresTwoFactor";
}

export declare interface ExternalTransactionDetails {
    description: string;
    descriptionUrl: string;
    fromAddress: string;
    isEnableActions: boolean;
}

export declare interface Facet {
    id: string;
    title: string;
    description: string;
    logo: string;
    url: string;
    sortType: "New" | "Top" | "WeeklyTop" | "Popular" | "ToLevelUp";
    timeframe: "Day" | "Week" | "Month" | "ThreeMonths" | "Year" | "AllTime";
}

export declare interface FcmTokenViewModel {
    token: string;
}

export declare interface ForgotPasswordViewModel {
    email: string;
}

export declare interface FundAssetInfo {
    asset: string;
    symbol: string;
    icon: string;
    target: number;
    current: number;
}

export declare interface FundAssetPart {
    id: string;
    percent: number;
}

export declare interface FundAssetPartWithIcon {
    icon: string;
    color: string;
    name: string;
    asset: string;
    percent: number;
}

export declare interface FundAssetPercent {
    asset: string;
    name: string;
    percent: number;
    icon: string;
}

export declare interface FundAssetsListInfo {
    assets: FundAssetInfo[];
}

export declare interface FundBalanceChart {
    usdBalance: number;
    balanceChart: BalanceChartElement[];
    gvtBalance: number;
}

export declare interface FundDetails {
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
    status: "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";
    manager: ProfilePublic;
    chart: ChartSimple[];
}

export declare interface FundDetailsFull {
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
    status: "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";
    manager: ProfilePublic;
}

export declare interface FundDetailsListStatistic {
    balanceGVT: AmountWithCurrency;
    balanceSecondary: AmountWithCurrency;
    profitPercent: number;
    drawdownPercent: number;
    investorsCount: number;
}

export declare interface FundFacet {
    sorting: "ByProfitAsc" | "ByProfitDesc" | "ByDrawdownAsc" | "ByDrawdownDesc" | "ByInvestorsAsc" | "ByInvestorsDesc" | "ByNewAsc" | "ByNewDesc" | "ByTitleAsc" | "ByTitleDesc" | "ByBalanceAsc" | "ByBalanceDesc";
    id: string;
    title: string;
    description: string;
    logo: string;
    url: string;
    sortType: "New" | "Top" | "WeeklyTop" | "Popular" | "ToLevelUp";
    timeframe: "Day" | "Week" | "Month" | "ThreeMonths" | "Year" | "AllTime";
}

export declare interface FundInvestInfo {
    title: string;
    availableInWallet: number;
    minInvestmentAmount: number;
    entryFee: number;
    gvCommission: number;
    rate: number;
    isOwnProgram: boolean;
}

export declare interface FundNotificationSettingList {
    assetId: string;
    title: string;
    url: string;
    logo: string;
    color: string;
    settingsGeneral: NotificationSettingViewModel[];
}

export declare interface FundProfitChart {
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

export declare interface FundSets {
    sets: FundFacet[];
    favoritesCount: number;
}

export declare interface FundStatistic {
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

export declare interface FundWithdrawInfo {
    exitFee: number;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

export declare interface FundsList {
    funds: FundDetails[];
    total: number;
}

export declare interface IOsAppVersion {
    minVersion: string;
    lastVersion: string;
}

export declare interface InternalTransferRequest {
    sourceId: string;
    sourceType: "Undefined" | "Wallet";
    destinationId: string;
    destinationType: "Undefined" | "Wallet";
    amount: number;
    transferAll: boolean;
}

export declare interface KycCallback {
    applicantId: string;
    inspectionId: string;
    correlationId: string;
    externalUserId: string;
    success: boolean;
    type: string;
    review: Review;
}

export declare interface LevelInfo {
    level: number;
    investmentLimit: number;
}

export declare interface LevelUpData {
    level: number;
    total: number;
    totalOwn: number;
    quota: number;
    targetProfit: number;
}

export declare interface LevelUpSummary {
    levelData: LevelUpData[];
}

export declare interface LoginViewModel {
    email: string;
    password: string;
    rememberMe: boolean;
    twoFactorCode: string;
    recoveryCode: string;
    client: string;
}

export declare interface ManagerAssets {
    programs: ManagerSimpleProgram[];
    funds: ManagerSimpleFund[];
}

export declare interface ManagerDashboard {
    profile: ManagerProfileDetails;
    requests: ProgramRequest;
    events: ManagerPortfolioEvents;
    allAssets: AssetSelection[];
    programChart: ProgramProfitChart;
    fundChart: FundProfitChart;
}

export declare interface ManagerFundWithdrawInfo {
    withheldInvestment: number;
    exitFee: number;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

export declare interface ManagerNotificationSettingList {
    managerId: string;
    url: string;
    username: string;
    avatar: string;
    about: string;
    settingsGeneral: NotificationSettingViewModel[];
}

export declare interface ManagerOverview {
}

export declare interface ManagerPortfolioEvent {
    assetId: string;
    date: Date;
    title: string;
    value: number;
    feeValue: number;
    profitPercent: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    type: "All" | "AssetStarted" | "ProgramPeriodStarts" | "ProgramPeriodEnds" | "InvestorInvest" | "InvestorWithdraw" | "ManagerInvest" | "ManagerWithdraw" | "AssetFinished" | "EntranceFee" | "ExitFee" | "ProgramStopOut";
    programType: "Program" | "Fund";
    logo: string;
    color: string;
    description: string;
    periodNumber: number;
}

export declare interface ManagerPortfolioEvents {
    events: ManagerPortfolioEvent[];
    total: number;
}

export declare interface ManagerProfile {
    id: string;
    username: string;
    about: string;
    avatar: string;
    regDate: Date;
    assets: string[];
    url: string;
}

export declare interface ManagerProfileDetails {
    managerProfile: ManagerProfile;
    overview: ManagerOverview;
    programsCount: number;
    fundsCount: number;
}

export declare interface ManagerProgramWithdrawInfo {
    withheldInvestment: number;
    periodEnds: Date;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

export declare interface ManagerSimpleFund {
    id: string;
    title: string;
    color: string;
    logo: string;
    url: string;
}

export declare interface ManagerSimpleProgram {
    level: number;
    id: string;
    title: string;
    color: string;
    logo: string;
    url: string;
}

export declare interface ManagersList {
    managers: ManagerProfile[];
    total: number;
}

export declare interface MultiWalletExternalTransaction {
    id: string;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    logo: string;
    date: Date;
    amount: number;
    type: "All" | "Deposit" | "Withdrawal";
    status: string;
    isEnableActions: boolean;
    statusUrl: string;
}

export declare interface MultiWalletExternalTransactionsViewModel {
    transactions: MultiWalletExternalTransaction[];
    total: number;
}

export declare interface MultiWalletFilters {
    transactionType: string[];
    externalTransactionType: string[];
}

export declare interface MultiWalletTransaction {
    id: string;
    currencyFrom: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    currencyTo: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    type: "All" | "Investment" | "Converting" | "Withdrawal" | "Close" | "Open" | "Fee" | "Profits";
    date: Date;
    status: "Done" | "Pending" | "Canceled" | "Error";
    logoFrom: string;
    logoTo: string;
    description: string;
    amount: number;
    amountTo: number;
}

export declare interface MultiWalletTransactionsViewModel {
    transactions: MultiWalletTransaction[];
    total: number;
}

export declare interface NewFundRequest {
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

export declare interface NewProgramRequest {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
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

export declare interface NotificationList {
    notifications: NotificationViewModel[];
    total: number;
}

export declare interface NotificationSettingList {
    settingsGeneral: NotificationSettingViewModel[];
    settingsProgram: ProgramNotificationSettingList[];
    settingsFund: FundNotificationSettingList[];
    settingsManager: ManagerNotificationSettingList[];
}

export declare interface NotificationSettingViewModel {
    id: string;
    isEnabled: boolean;
    assetId: string;
    managerId: string;
    type: "PlatformNewsAndUpdates" | "PlatformEmergency" | "PlatformOther" | "ProfileUpdated" | "ProfilePwdUpdated" | "ProfileVerification" | "Profile2FA" | "ProfileSecurity" | "ProgramNewsAndUpdates" | "ProgramEndOfPeriod" | "ProgramCondition" | "FundNewsAndUpdates" | "FundEndOfPeriod" | "FundRebalancing" | "ManagerNewProgram";
    conditionType: "Empty" | "Profit" | "Level";
    conditionAmount: number;
}

export declare interface NotificationViewModel {
    id: string;
    text: string;
    date: Date;
    type: "PlatformNewsAndUpdates" | "PlatformEmergency" | "PlatformOther" | "ProfileUpdated" | "ProfilePwdUpdated" | "ProfileVerification" | "Profile2FA" | "ProfileSecurity" | "ProgramNewsAndUpdates" | "ProgramEndOfPeriod" | "ProgramCondition" | "FundNewsAndUpdates" | "FundEndOfPeriod" | "FundRebalancing" | "ManagerNewProgram";
    assetId: string;
    managerId: string;
    logo: string;
    url: string;
    color: string;
    isUnread: boolean;
    assetType: "Program" | "Fund";
}

export declare interface OpenSignalTrade {
    id: string;
    symbol: string;
    manager: ProfilePublic;
    orderId: number;
    openDate: Date;
    openPrice: number;
    volume: number;
    price: number;
    profit: number;
}

export declare interface OpenSignalTradesList {
    signalTrades: OpenSignalTrade[];
}

export declare interface OrderClosedSignalSlaveModel {
    dateClose: Date;
    priceClose: number;
    manager: ProfilePublic;
    program: OrderProgramData;
    programId: string;
    id: string;
    login: string;
    ticket: string;
    symbol: string;
    volume: number;
    profit: number;
    direction: "Buy" | "Sell" | "Balance" | "Credit" | "Undefined";
    date: Date;
    price: number;
    priceCurrent: number;
    entry: "In" | "Out" | "InOut" | "OutBy";
    baseVolume: number;
}

export declare interface OrderModel {
    id: string;
    login: string;
    ticket: string;
    symbol: string;
    volume: number;
    profit: number;
    direction: "Buy" | "Sell" | "Balance" | "Credit" | "Undefined";
    date: Date;
    price: number;
    priceCurrent: number;
    entry: "In" | "Out" | "InOut" | "OutBy";
    baseVolume: number;
}

export declare interface OrderOpenSignalSlaveModel {
    manager: ProfilePublic;
    program: OrderProgramData;
    programId: string;
    id: string;
    login: string;
    ticket: string;
    symbol: string;
    volume: number;
    profit: number;
    direction: "Buy" | "Sell" | "Balance" | "Credit" | "Undefined";
    date: Date;
    price: number;
    priceCurrent: number;
    entry: "In" | "Out" | "InOut" | "OutBy";
    baseVolume: number;
}

export declare interface OrderProgramData {
    title: string;
    level: number;
    color: string;
    url: string;
    logo: string;
}

export declare interface OrderSignalSlaveModel {
    manager: ProfilePublic;
    program: OrderProgramData;
    programId: string;
    id: string;
    login: string;
    ticket: string;
    symbol: string;
    volume: number;
    profit: number;
    direction: "Buy" | "Sell" | "Balance" | "Credit" | "Undefined";
    date: Date;
    price: number;
    priceCurrent: number;
    entry: "In" | "Out" | "InOut" | "OutBy";
}

export declare interface OtherAssetsValue {
    amount: number;
    value: number;
    changePercent: number;
    changeValue: number;
}

export declare interface PasswordModel {
    password: string;
}

export declare interface PeriodDate {
    dateFrom: Date;
    dateTo: Date;
}

export declare interface PersonalFundDetailsFull {
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
    status: "Pending" | "Active" | "Investing" | "Withdrawing" | "Ended";
    isFollowSignals: boolean;
    canMakeSignalProvider: boolean;
}

export declare interface PersonalProgramDetailsFull {
    isReinvest: boolean;
    gvtValue: number;
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
    status: "Pending" | "Active" | "Investing" | "Withdrawing" | "Ended";
    isFollowSignals: boolean;
    canMakeSignalProvider: boolean;
}

export declare interface PersonalSignalDetailsFull {
    subscribeDate: Date;
    investorProfit: number;
    investorTrades: number;
}

export declare interface PlatformAsset {
    id: string;
    name: string;
    asset: string;
    description: string;
    icon: string;
    color: string;
}

export declare interface PlatformAssets {
    assets: PlatformAsset[];
}

export declare interface PlatformCurrency {
    name: string;
    rateToGvt: number;
}

export declare interface PlatformInfo {
    iOSVersion: IOsAppVersion;
    androidVersion: AndroidAppVersion;
    programsFacets: ProgramFacet[];
    fundsFacets: FundFacet[];
    programsInfo: ProgramsInfo;
    currencies: string[];
    platformCurrencies: PlatformCurrency[];
    enums: Enums;
}

export declare interface PlatformStatistic {
    managers: number;
    investors: number;
    profitWeek: number;
    investmentAmount: number;
    totalInvestorsProfit: number;
    totalProfit: number;
}

export declare interface ProfileFullViewModel {
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
    verificationStatus: "NotVerified" | "Verified" | "UnderReview" | "Rejected";
}

export declare interface ProfileHeaderViewModel {
    id: string;
    name: string;
    email: string;
    avatar: string;
    userType: "Investor" | "Manager";
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

export declare interface ProfilePublic {
    id: string;
    username: string;
    avatar: string;
    registrationDate: Date;
    url: string;
}

export declare interface ProgramBalanceChart {
    programCurrencyBalance: number;
    programCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    balanceChart: ProgramBalanceChartElement[];
    gvtBalance: number;
}

export declare interface ProgramBalanceChartElement {
    profit: number;
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

export declare interface ProgramDetails {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
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
    status: "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";
    manager: ProfilePublic;
    chart: ChartSimple[];
}

export declare interface ProgramDetailsFull {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
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
    status: "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";
    manager: ProfilePublic;
}

export declare interface ProgramDetailsListStatistic {
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

export declare interface ProgramDetailsRating {
    rating: number;
    profit: number;
    canLevelUp: boolean;
    topPercent: number;
}

export declare interface ProgramFacet {
    sorting: "ByLevelAsc" | "ByLevelDesc" | "ByProfitAsc" | "ByProfitDesc" | "ByDrawdownAsc" | "ByDrawdownDesc" | "ByTradesAsc" | "ByTradesDesc" | "ByInvestorsAsc" | "ByInvestorsDesc" | "ByNewDesc" | "ByNewAsc" | "ByEndOfPeriodAsc" | "ByEndOfPeriodDesc" | "ByTitleAsc" | "ByTitleDesc" | "ByBalanceAsc" | "ByBalanceDesc" | "ByCurrDesc" | "ByCurrAsc";
    id: string;
    title: string;
    description: string;
    logo: string;
    url: string;
    sortType: "New" | "Top" | "WeeklyTop" | "Popular" | "ToLevelUp";
    timeframe: "Day" | "Week" | "Month" | "ThreeMonths" | "Year" | "AllTime";
}

export declare interface ProgramFilters {
    programTags: ProgramTag[];
}

export declare interface ProgramInfo {
    title: string;
}

export declare interface ProgramInvestInfo {
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

export declare interface ProgramMinimumDeposit {
    minimumDepositsAmount: any;
}

export declare interface ProgramNotificationSettingList {
    level: number;
    settingsCustom: NotificationSettingViewModel[];
    assetId: string;
    title: string;
    url: string;
    logo: string;
    color: string;
    settingsGeneral: NotificationSettingViewModel[];
}

export declare interface ProgramProfitChart {
    totalProgramCurrencyProfit: number;
    timeframeProgramCurrencyProfit: number;
    programCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
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

export declare interface ProgramPwdUpdate {
    password: string;
    twoFactorCode: string;
}

export declare interface ProgramRequest {
    id: string;
    programId: string;
    date: Date;
    value: number;
    valueGvt: number;
    feeEntry: number;
    feeExit: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    fundWithdrawPercent: number;
    type: "Invest" | "Withdrawal";
    status: "New" | "Executed" | "Cancelled";
    logo: string;
    title: string;
    color: string;
    canCancelRequest: boolean;
    programType: "Program" | "Fund";
}

export declare interface ProgramRequests {
    requests: ProgramRequest[];
    total: number;
    totalValue: number;
}

export declare interface ProgramSets {
    sets: ProgramFacet[];
    favoritesCount: number;
}

export declare interface ProgramStatistic {
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
    startCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    investedAmount: number;
    investedCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    tradesCount: number;
    tradesSuccessCount: number;
    profitFactorPercent: number;
    sharpeRatioPercent: number;
}

export declare interface ProgramTag {
    name: string;
    color: string;
}

export declare interface ProgramTransactionDetails {
    id: string;
    managerName: string;
    programType: "Program" | "Fund";
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

export declare interface ProgramUpdate {
    title: string;
    description: string;
    logo: string;
    stopOutLevel: number;
}

export declare interface ProgramWithdrawInfo {
    periodEnds: Date;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

export declare interface ProgramsInfo {
    managerProgramInvestment: number;
    managerProgramInvestmentUSD: number;
    managerProgramInvestmentUSDT: number;
    managerProgramInvestmentBTC: number;
    managerProgramInvestmentETH: number;
    managerMaxEntryFee: number;
    managerMaxSuccessFee: number;
    managerFundInvestment: number;
    managerMaxExitFee: number;
    periods: number[];
}

export declare interface ProgramsLevelsInfo {
    levels: LevelInfo[];
}

export declare interface ProgramsList {
    programs: ProgramDetails[];
    total: number;
}

export declare interface RateItem {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    rate: number;
}

export declare interface RatesModel {
    rates: RatesModelRates;
}

export declare interface RatesModelRates {
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

export declare interface RecoveryCode {
    code: string;
    isActive: boolean;
}

export declare interface RecoveryCodesViewModel {
    codes: RecoveryCode[];
    authToken: string;
}

export declare interface RegisterInvestorViewModel {
    email: string;
    password: string;
    confirmPassword: string;
    refCode: string;
    isAuto: boolean;
}

export declare interface RegisterManagerViewModel {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    refCode: string;
    isAuto: boolean;
}

export declare interface ResendConfirmationViewModel {
    email: string;
}

export declare interface ResetPasswordViewModel {
    userId: string;
    code: string;
    password: string;
    confirmPassword: string;
}

export declare interface Review {
    moderationComment: string;
    clientComment: string;
    reviewAnswer: string;
    rejectLabels: string[];
    reviewRejectType: string;
}

export declare interface SearchViewModel {
    programs: ProgramsList;
    funds: FundsList;
    managers: ManagersList;
}

export declare interface SignalDetails {
    statistic: ProgramDetailsListStatistic;
    personalDetails: PersonalSignalDetailsFull;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    level: number;
    tags: ProgramTag[];
    subscribers: number;
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    status: "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";
    manager: ProfilePublic;
    chart: ChartSimple[];
}

export declare interface SignalsList {
    programs: SignalDetails[];
    total: number;
}

export declare interface TradesHistorySignalSlaveViewModel {
    trades: OrderClosedSignalSlaveModel[];
    total: number;
}

export declare interface TradesOpenSignalSlaveViewModel {
    trades: OrderOpenSignalSlaveModel[];
    total: number;
}

export declare interface TradesSignalSlaveViewModel {
    trades: OrderSignalSlaveModel[];
    total: number;
}

export declare interface TradesViewModel {
    trades: OrderModel[];
    total: number;
}

export declare interface TransactionDetails {
    type: "Investing" | "Withdrawal" | "ExternalWithdrawal" | "ExternalDeposit" | "Converting" | "Open" | "Close" | "Profit" | "PlatformFee";
    programDetails: ProgramTransactionDetails;
    convertingDetails: ConvertingDetails;
    externalTransactionDetails: ExternalTransactionDetails;
    status: "Done" | "Pending" | "Canceled" | "Error";
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    currencyName: string;
    currencyLogo: string;
    gvCommission: number;
    gvCommissionCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    gvCommissionPercent: number;
    amount: number;
}

export declare interface TransactionDetatils {
    currencyFrom: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    currencyTo: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    type: "InvestingProgram" | "InvestingFund" | "WithdrawalProgram" | "WithdrawalFund" | "ExternalWithdrawal" | "ExternalDeposit";
    programId: string;
    foundId: string;
    name: string;
    logo: string;
    entryFee: number;
    gvCommission: number;
    exitFee: number;
    description: string;
    descriptionUrl: string;
    fromAddress: string;
    amountFrom: number;
    amountTo: number;
    rateValue: number;
}

export declare interface TwoFactorAuthenticator {
    sharedKey: string;
    authenticatorUri: string;
}

export declare interface TwoFactorAuthenticatorConfirm {
    code: string;
    sharedKey: string;
    password: string;
}

export declare interface TwoFactorCodeModel {
    twoFactorCode: string;
    password: string;
}

export declare interface TwoFactorStatus {
    twoFactorEnabled: boolean;
}

export declare interface UpdatePersonalDetailViewModel {
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

export declare interface UpdateProfileViewModel {
    userName: string;
    about: string;
}

export declare interface UploadResult {
    id: string;
}

export declare interface UserCommissionData {
    isPayingCommissionInGvt: boolean;
    gvtHolderTradingFee: number;
    gvtHolderDiscount: number;
    regularTradingFee: number;
    regularDiscount: number;
}

export declare interface ValueChartBar {
    value: number;
    date: Date;
    topAssets: AssetsValue[];
    otherAssetsValue: OtherAssetsValue;
}

export declare interface WalletBaseData {
    id: string;
    title: string;
    logo: string;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    available: number;
    rate: number;
}

export declare interface WalletData {
    id: string;
    title: string;
    logo: string;
    rateToGVT: number;
    isDepositEnabled: boolean;
    isWithdrawalEnabled: boolean;
    withdrawalCommission: number;
    depositAddress: string;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    available: number;
    invested: number;
    pending: number;
    total: number;
    currencyCcy: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    availableCcy: number;
    investedCcy: number;
    pendingCcy: number;
    totalCcy: number;
}

export declare interface WalletInfo {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    address: string;
    rateToGVT: number;
    description: string;
    logo: string;
    isDepositEnabled: boolean;
}

export declare interface WalletMultiAvailable {
    wallets: WalletBaseData[];
}

export declare interface WalletMultiSummary {
    grandTotal: WalletsGrandTotal;
    wallets: WalletData[];
    payFeesWithGvt: boolean;
}

export declare interface WalletPendingTransaction {
    id: string;
    hash: string;
    amount: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    type: "Deposit" | "Withdrawn";
    dateCreated: Date;
    lastUpdated: Date;
    address: string;
}

export declare interface WalletPendingTransactionsViewModel {
    transactions: WalletPendingTransaction[];
    total: number;
}

export declare interface WalletSummary {
    totalBalanceGVT: number;
    totalBalanceCurrency: number;
    investedGVT: number;
    investedCurrency: number;
    availableGVT: number;
    availableCurrency: number;
}

export declare interface WalletTransaction {
    id: string;
    amount: number;
    amountConverted: number;
    date: Date;
    number: number;
    sourceId: string;
    sourceType: "Wallet" | "Program" | "Fund" | "ProgramRequest" | "FundRequest" | "WithdrawalRequest" | "PaymentTransaction" | "Blockchain" | "GenesisVisionPlatform";
    sourceCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    sourceProgramInfo: ProgramInfo;
    sourceBlockchainInfo: BlockchainInfo;
    sourceWithdrawalInfo: WithdrawalInfo;
    action: "Transfer" | "ProgramOpen" | "ProgramProfit" | "ProgramInvest" | "ProgramWithdrawal" | "ProgramRefundPartialExecution" | "ProgramRefundClose" | "ProgramRequestInvest" | "ProgramRequestWithdrawal" | "ProgramRequestCancel" | "PayingFee";
    information: string;
    destinationId: string;
    destinationType: "Wallet" | "Program" | "Fund" | "ProgramRequest" | "FundRequest" | "WithdrawalRequest" | "PaymentTransaction" | "Blockchain" | "GenesisVisionPlatform";
    destinationCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    destinationProgramInfo: ProgramInfo;
    destinationBlockchainInfo: BlockchainInfo;
    destinationWithdrawalInfo: WithdrawalInfo;
}

export declare interface WalletTransactionsViewModel {
    transactions: WalletTransaction[];
    total: number;
}

export declare interface WalletWithdrawalInfo {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    description: string;
    logo: string;
    commission: number;
    rateToGvt: number;
    availableToWithdrawal: number;
}

export declare interface WalletsGrandTotal {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    available: number;
    invested: number;
    pending: number;
    total: number;
    currencyCcy: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    availableCcy: number;
    investedCcy: number;
    pendingCcy: number;
    totalCcy: number;
}

export declare interface WalletsInfo {
    wallets: WalletInfo[];
}

export declare interface WithdrawalInfo {
    wallet: string;
    status: "New" | "InProcess" | "Done" | "Error" | "Rejected" | "Cancelled";
    canResendEmail: boolean;
    canCancelRequest: boolean;
}

export declare interface WithdrawalSummary {
    availableToWithdrawal: number;
    wallets: WalletWithdrawalInfo[];
}

