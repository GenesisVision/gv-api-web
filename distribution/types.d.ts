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

declare class BrokersApi {
    constructor(apiClient: ApiClient): BrokersApi;
    v10BrokersGet(): Promise<BrokersInfo>;
}

declare class FileApi {
    constructor(apiClient: ApiClient): FileApi;
    v10FileByIdGet(id: string): Promise<any>;
    v10FileDocumentUploadPost(authorization: string, uploadedFile: File): Promise<UploadResult>;
    v10FileUploadPost(uploadedFile: File, opts?: {
        authorization?: string;
    }): Promise<UploadResult>;
}

declare class FundsApi {
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
    v10FundsSetsGet(authorization: string): Promise<ProgramSets>;
}

declare class InvestorApi {
    constructor(apiClient: ApiClient): InvestorApi;
    v10InvestorFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10InvestorFundsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<FundInvestInfo>;
    v10InvestorFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10InvestorFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string): Promise<any>;
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
    v10InvestorProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10InvestorProgramsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<ProgramInvestInfo>;
    v10InvestorProgramsByIdReinvestOffPost(id: string, authorization: string): Promise<any>;
    v10InvestorProgramsByIdReinvestOnPost(id: string, authorization: string): Promise<any>;
    v10InvestorProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10InvestorProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10InvestorProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<ProgramWithdrawInfo>;
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
}

declare class KycApi {
    constructor(apiClient: ApiClient): KycApi;
    v10KycCallbackPost(opts?: {
        model?: KycCallback;
    }): Promise<'String'>;
}

declare class ManagerApi {
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
    v10ManagerFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10ManagerFundsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<FundInvestInfo>;
    v10ManagerFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10ManagerFundsByIdUpdatePost(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): Promise<any>;
    v10ManagerFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string): Promise<any>;
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
    v10ManagerProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10ManagerProgramsByIdInvestInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<ProgramInvestInfo>;
    v10ManagerProgramsByIdPeriodClosePost(id: string, authorization: string): Promise<any>;
    v10ManagerProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise<ProgramRequests>;
    v10ManagerProgramsByIdUpdatePost(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): Promise<any>;
    v10ManagerProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): Promise<any>;
    v10ManagerProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: string, authorization: string): Promise<ManagerProgramWithdrawInfo>;
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
    v10ManagerProgramsInvestmentAmountGet(authorization: string): Promise<'Number'>;
    v10ManagerProgramsRequestsByIdCancelPost(id: string, authorization: string): Promise<any>;
    v10ManagerRequestsBySkipByTakeGet(skip: number, take: number, authorization: string): Promise<ProgramRequests>;
}

declare class NotificationsApi {
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

declare class PlatformApi {
    constructor(apiClient: ApiClient): PlatformApi;
    v10PlatformInfoGet(): Promise<PlatformInfo>;
    v10PlatformLevelsGet(opts?: {
        currency?: string;
    }): Promise<ProgramsLevelsInfo>;
    v10PlatformStatisticGet(): Promise<PlatformStatistic>;
}

declare class ProfileApi {
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

declare class ProgramsApi {
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

declare class RateApi {
    constructor(apiClient: ApiClient): RateApi;
    v10RateByExchangeByFromByToGet(exchange: string, from: string, to: string): Promise<'Number'>;
    v10RateByFromByToGet(from: string, to: string): Promise<'Number'>;
    v10RateGet(opts?: {
        from?: string[];
        to?: string[];
    }): Promise<RatesModel>;
}

declare class SearchApi {
    constructor(apiClient: ApiClient): SearchApi;
    v10SearchGet(opts?: {
        mask?: string;
        take?: number;
    }): Promise<SearchViewModel>;
}

declare class WalletApi {
    constructor(apiClient: ApiClient): WalletApi;
    v10WalletAddressesByCurrencyGet(currency: string, authorization: string): Promise<WalletInfo>;
    v10WalletAddressesGet(authorization: string): Promise<WalletsInfo>;
    v10WalletByCurrencyGet(currency: string, authorization: string): Promise<WalletSummary>;
    v10WalletMultiByCurrencyGet(currency: string, authorization: string): Promise<WalletMultiSummary>;
    v10WalletMultiFilterTransactionExternalGet(authorization: string): any;
    v10WalletMultiFilterTransactionGet(authorization: string): any;
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
        from?: string;
        to?: string;
        amount?: number;
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

declare interface index {
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
    CreateWithdrawalRequestModel: CreateWithdrawalRequestModel;
    DashboardChartValue: DashboardChartValue;
    DashboardPortfolioEvent: DashboardPortfolioEvent;
    DashboardPortfolioEvents: DashboardPortfolioEvents;
    DashboardProgramDetails: DashboardProgramDetails;
    DashboardSummary: DashboardSummary;
    ErrorMessage: ErrorMessage;
    ErrorViewModel: ErrorViewModel;
    Facet: Facet;
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
    FundInvestInfo: FundInvestInfo;
    FundNotificationSettingList: FundNotificationSettingList;
    FundProfitChart: FundProfitChart;
    FundStatistic: FundStatistic;
    FundWithdrawInfo: FundWithdrawInfo;
    FundsList: FundsList;
    IOsAppVersion: IOsAppVersion;
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
    MultiWalletTransaction: MultiWalletTransaction;
    MultiWalletTransactionsViewModel: MultiWalletTransactionsViewModel;
    NewFundRequest: NewFundRequest;
    NewProgramRequest: NewProgramRequest;
    NotificationList: NotificationList;
    NotificationSettingList: NotificationSettingList;
    NotificationSettingViewModel: NotificationSettingViewModel;
    NotificationViewModel: NotificationViewModel;
    OrderModel: OrderModel;
    OtherAssetsValue: OtherAssetsValue;
    PasswordModel: PasswordModel;
    PeriodDate: PeriodDate;
    PersonalFundDetailsFull: PersonalFundDetailsFull;
    PersonalProgramDetailsFull: PersonalProgramDetailsFull;
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
    ProgramInfo: ProgramInfo;
    ProgramInvestInfo: ProgramInvestInfo;
    ProgramNotificationSettingList: ProgramNotificationSettingList;
    ProgramProfitChart: ProgramProfitChart;
    ProgramRequest: ProgramRequest;
    ProgramRequests: ProgramRequests;
    ProgramSets: ProgramSets;
    ProgramStatistic: ProgramStatistic;
    ProgramTag: ProgramTag;
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
    TradesViewModel: TradesViewModel;
    TwoFactorAuthenticator: TwoFactorAuthenticator;
    TwoFactorAuthenticatorConfirm: TwoFactorAuthenticatorConfirm;
    TwoFactorCodeModel: TwoFactorCodeModel;
    TwoFactorStatus: TwoFactorStatus;
    UpdatePersonalDetailViewModel: UpdatePersonalDetailViewModel;
    UpdateProfileViewModel: UpdateProfileViewModel;
    UploadResult: UploadResult;
    ValueChartBar: ValueChartBar;
    WalletData: WalletData;
    WalletInfo: WalletInfo;
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
    WalletApi: WalletApi;
}

declare interface AmountWithCurrency {
    amount: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
}

declare interface AndroidAppVersion {
    minVersion: AndroidVersion;
    lastVersion: AndroidVersion;
}

declare interface AndroidVersion {
    versionCode: string;
    versionName: string;
}

declare interface AssetSelection {
    id: string;
    title: string;
    logo: string;
    type: "Program" | "Fund";
}

declare interface AssetsValue {
    type: "All" | "Program" | "Fund";
    id: string;
    title: string;
    avatar: string;
    color: string;
    value: number;
    changePercent: number;
    changeValue: number;
}

declare interface BalanceChartElement {
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

declare interface BlockchainInfo {
    hash: string;
    status: "Undefined" | "New" | "Pending" | "ConfirmedByGate" | "ConfirmedAndValidated" | "PendingAddInWallet" | "Error" | "Cancelled";
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
}

declare interface BrokerAccountType {
    id: string;
    name: string;
    description: string;
    type: "Undefined" | "MetaTrader4" | "MetaTrader5" | "NinjaTrader" | "cTrader" | "Rumus" | "Metastock" | "IDEX";
    leverages: number[];
    currencies: string[];
}

declare interface BrokersInfo {
    brokers: Broker[];
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

declare interface CreateWithdrawalRequestModel {
    amount: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
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

declare interface DashboardPortfolioEvent {
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
    type: "All" | "Invest" | "Withdraw" | "Profit" | "Loss" | "Reinvest" | "Canceled" | "Ended";
    logo: string;
    color: string;
    description: string;
    assetType: "Program" | "Fund";
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
    requests: ProgramRequests;
}

declare interface ErrorMessage {
    message: string;
    property: string;
}

declare interface ErrorViewModel {
    errors: ErrorMessage[];
    code: "InternalServerError" | "ValidationError" | "RequiresTwoFactor";
}

declare interface Facet {
    id: string;
    title: string;
    description: string;
    logo: string;
    url: string;
    sortType: "New" | "Top" | "WeeklyTop" | "Popular" | "ToLevelUp";
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

declare interface FundDetails {
    totalAssetsCount: number;
    topFundAssets: FundAssetPercent[];
    statistic: FundDetailsListStatistic;
    personalDetails: PersonalFundDetailsFull;
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    status: "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";
    manager: ProfilePublic;
    chart: ChartSimple[];
    dashboardAssetsDetails: DashboardProgramDetails;
}

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
    status: "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";
    manager: ProfilePublic;
}

declare interface FundDetailsListStatistic {
    balanceGVT: AmountWithCurrency;
    balanceSecondary: AmountWithCurrency;
    profitPercent: number;
    drawdownPercent: number;
    investorsCount: number;
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

declare interface IOsAppVersion {
    minVersion: string;
    lastVersion: string;
}

declare interface KycCallback {
    applicantId: string;
    inspectionId: string;
    correlationId: string;
    externalUserId: string;
    success: boolean;
    type: string;
    review: Review;
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

declare interface ManagerPortfolioEvent {
    assetId: string;
    date: Date;
    title: string;
    value: number;
    feeValue: number;
    profitPercent: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    type: "All" | "AssetStarted" | "ProgramPeriodStats" | "ProgramPeriodEnds" | "InvestorInvest" | "InvestorWithdraw" | "ManagerInvest" | "ManagerWithdraw" | "AssetFinished" | "EntranceFee" | "ExitFee";
    programType: "Program" | "Fund";
    logo: string;
    color: string;
    description: string;
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

declare interface MultiWalletExternalTransaction {
    id: string;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    date: Date;
    amount: number;
    type: "Deposit" | "Withdrawn";
    status: "Confirm" | "Pending" | "Canceled" | "Error";
    description: string;
    isEnableActions: boolean;
    url: string;
}

declare interface MultiWalletExternalTransactionsViewModel {
    transactions: MultiWalletExternalTransaction[];
    total: number;
}

declare interface MultiWalletTransaction {
    id: string;
    currencyFrom: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    currencyTo: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    type: "All" | "Investment" | "Converting" | "Withdrawal" | "Deposit" | "Fee" | "Profits";
    date: Date;
    status: "Confirm" | "Pending" | "Canceled" | "Error";
    description: string;
    amount: number;
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
}

declare interface NewProgramRequest {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    periodLength: number;
    successFee: number;
    stopOutLevel: number;
    leverage: number;
    brokerAccountTypeId: string;
    title: string;
    description: string;
    logo: string;
    entryFee: number;
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

declare interface NotificationSettingViewModel {
    id: string;
    isEnabled: boolean;
    assetId: string;
    managerId: string;
    type: "PlatformNewsAndUpdates" | "PlatformEmergency" | "PlatformOther" | "ProfileUpdated" | "ProfilePwdUpdated" | "ProfileVerification" | "Profile2FA" | "ProfileSecurity" | "ProgramNewsAndUpdates" | "ProgramEndOfPeriod" | "ProgramCondition" | "FundNewsAndUpdates" | "FundEndOfPeriod" | "FundRebalancing" | "ManagerNewProgram";
    conditionType: "Empty" | "Profit" | "Level";
    conditionAmount: number;
}

declare interface NotificationViewModel {
    id: string;
    text: string;
    date: Date;
    type: "PlatformNewsAndUpdates" | "PlatformEmergency" | "PlatformOther" | "ProfileUpdated" | "ProfilePwdUpdated" | "ProfileVerification" | "Profile2FA" | "ProfileSecurity" | "ProgramNewsAndUpdates" | "ProgramEndOfPeriod" | "ProgramCondition" | "FundNewsAndUpdates" | "FundEndOfPeriod" | "FundRebalancing" | "ManagerNewProgram";
    assetId: string;
    managerId: string;
    logo: string;
    url: string;
    isUnread: boolean;
    assetType: "Program" | "Fund";
}

declare interface OrderModel {
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
    status: "Pending" | "Active" | "Investing" | "Withdrawing" | "Ended";
}

declare interface PersonalProgramDetailsFull {
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
    programsFacets: Facet[];
    fundsFacets: Facet[];
    programsInfo: ProgramsInfo;
    currencies: string[];
    platformCurrencies: PlatformCurrency[];
    programTags: ProgramTag[];
}

declare interface PlatformStatistic {
    managers: number;
    investors: number;
    profitWeek: number;
    investmentAmount: number;
    totalInvestorsProfit: number;
    totalProfit: number;
}

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
    verificationStatus: "NotVerified" | "Verified" | "UnderReview" | "Rejected";
}

declare interface ProfileHeaderViewModel {
    id: string;
    name: string;
    email: string;
    avatar: string;
    notificationsCount: number;
    favoritesCount: number;
    totalBalanceGvt: number;
    investedGvt: number;
    availableGvt: number;
    totalBalance: number;
    invested: number;
    available: number;
    pending: number;
    kycConfirmed: boolean;
    allowForex: boolean;
    isTwoFactorEnabled: boolean;
    isNewUser: boolean;
}

declare interface ProfilePublic {
    id: string;
    username: string;
    avatar: string;
    registrationDate: Date;
    url: string;
}

declare interface ProgramBalanceChart {
    programCurrencyBalance: number;
    programCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    balanceChart: ProgramBalanceChartElement[];
    gvtBalance: number;
}

declare interface ProgramBalanceChartElement {
    profit: number;
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

declare interface ProgramDetails {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    level: number;
    periodDuration: number;
    periodStarts: Date;
    periodEnds: Date;
    availableInvestment: number;
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
    dashboardAssetsDetails: DashboardProgramDetails;
}

declare interface ProgramDetailsFull {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    level: number;
    periodDuration: number;
    periodStarts: Date;
    periodEnds: Date;
    entryFee: number;
    entryFeeSelected: number;
    entryFeeCurrent: number;
    successFee: number;
    isReinvesting: boolean;
    availableInvestment: number;
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

declare interface ProgramInfo {
    title: string;
}

declare interface ProgramInvestInfo {
    periodEnds: Date;
    availableToInvest: number;
    title: string;
    availableInWallet: number;
    minInvestmentAmount: number;
    entryFee: number;
    gvCommission: number;
    rate: number;
    isOwnProgram: boolean;
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

declare interface ProgramProfitChart {
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

declare interface ProgramRequest {
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

declare interface ProgramRequests {
    requests: ProgramRequest[];
    total: number;
    totalValue: number;
}

declare interface ProgramSets {
    sets: Facet[];
    favoritesCount: number;
}

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
    startCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    investedAmount: number;
    investedCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    tradesCount: number;
    tradesSuccessCount: number;
    profitFactorPercent: number;
    sharpeRatioPercent: number;
}

declare interface ProgramTag {
    name: "Crypto" | "Forex";
    color: string;
}

declare interface ProgramUpdate {
    title: string;
    description: string;
    logo: string;
}

declare interface ProgramWithdrawInfo {
    periodEnds: Date;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

declare interface ProgramsInfo {
    managerProgramInvestment: number;
    managerMaxEntryFee: number;
    managerMaxSuccessFee: number;
    managerFundInvestment: number;
    managerMaxExitFee: number;
    periods: number[];
}

declare interface ProgramsLevelsInfo {
    levels: LevelInfo[];
}

declare interface ProgramsList {
    programs: ProgramDetails[];
    total: number;
}

declare interface RateItem {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
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
}

declare interface RegisterManagerViewModel {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    refCode: string;
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

declare interface Review {
    moderationComment: string;
    clientComment: string;
    reviewAnswer: string;
    rejectLabels: string[];
    reviewRejectType: string;
}

declare interface SearchViewModel {
    programs: ProgramsList;
    funds: FundsList;
    managers: ManagersList;
}

declare interface TradesViewModel {
    trades: OrderModel[];
    total: number;
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

declare interface ValueChartBar {
    value: number;
    date: Date;
    topAssets: AssetsValue[];
    otherAssetsValue: OtherAssetsValue;
}

declare interface WalletData {
    id: string;
    title: string;
    icon: string;
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

declare interface WalletInfo {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    address: string;
    rateToGVT: number;
    description: string;
    logo: string;
}

declare interface WalletMultiSummary {
    grandTotal: WalletsGrandTotal;
    wallets: WalletData[];
}

declare interface WalletPendingTransaction {
    id: string;
    hash: string;
    amount: number;
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    type: "Deposit" | "Withdrawn";
    dateCreated: Date;
    lastUpdated: Date;
    address: string;
}

declare interface WalletPendingTransactionsViewModel {
    transactions: WalletPendingTransaction[];
    total: number;
}

declare interface WalletSummary {
    totalBalanceGVT: number;
    totalBalanceCurrency: number;
    investedGVT: number;
    investedCurrency: number;
    availableGVT: number;
    availableCurrency: number;
}

declare interface WalletTransaction {
    id: string;
    amount: number;
    amountConverted: number;
    date: Date;
    number: number;
    sourceId: string;
    sourceType: "Wallet" | "Program" | "Fund" | "ProgramRequest" | "FundRequest" | "WithdrawalRequest" | "PaymentTransaction";
    sourceCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    sourceProgramInfo: ProgramInfo;
    sourceBlockchainInfo: BlockchainInfo;
    sourceWithdrawalInfo: WithdrawalInfo;
    action: "Transfer" | "ProgramOpen" | "ProgramProfit" | "ProgramInvest" | "ProgramWithdrawal" | "ProgramRefundPartialExecution" | "ProgramRefundClose" | "ProgramRequestInvest" | "ProgramRequestWithdrawal" | "ProgramRequestCancel";
    information: string;
    destinationId: string;
    destinationType: "Wallet" | "Program" | "Fund" | "ProgramRequest" | "FundRequest" | "WithdrawalRequest" | "PaymentTransaction";
    destinationCurrency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    destinationProgramInfo: ProgramInfo;
    destinationBlockchainInfo: BlockchainInfo;
    destinationWithdrawalInfo: WithdrawalInfo;
}

declare interface WalletTransactionsViewModel {
    transactions: WalletTransaction[];
    total: number;
}

declare interface WalletWithdrawalInfo {
    currency: "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";
    description: string;
    logo: string;
    commission: number;
    rateToGvt: number;
    availableToWithdrawal: number;
}

declare interface WalletsGrandTotal {
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

declare interface WalletsInfo {
    wallets: WalletInfo[];
}

declare interface WithdrawalInfo {
    wallet: string;
    status: "New" | "InProcess" | "Done" | "Error" | "Rejected" | "Cancelled";
    canResendEmail: boolean;
    canCancelRequest: boolean;
}

declare interface WithdrawalSummary {
    availableToWithdrawal: number;
    wallets: WalletWithdrawalInfo[];
}

