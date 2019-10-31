export declare interface CancelablePromise<T> extends Promise<T> {
    cancel: () => CancelablePromise<T>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): CancelablePromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): CancelablePromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): CancelablePromise<T>
}

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
    authorize(opts?: {
        model?: LoginViewModel;
    }): CancelablePromise<string>;
    changePassword(authorization: string, opts?: {
        model?: ChangePasswordViewModel;
    }): CancelablePromise<string>;
    confirmEmail(opts?: {
        userId?: string;
        code?: string;
    }): CancelablePromise<string>;
    confirmTwoStepAuth(authorization: string, opts?: {
        model?: TwoFactorAuthenticatorConfirm;
    }): CancelablePromise<RecoveryCodesViewModel>;
    createTwoStepAuth(authorization: string): CancelablePromise<TwoFactorAuthenticator>;
    createTwoStepAuthRecoveryCodes(authorization: string, opts?: {
        model?: PasswordModel;
    }): CancelablePromise<RecoveryCodesViewModel>;
    disableTwoStepAuth(authorization: string, opts?: {
        model?: TwoFactorCodeWithPassword;
    }): CancelablePromise<any>;
    forgotPassword(opts?: {
        model?: ForgotPasswordViewModel;
    }): CancelablePromise<any>;
    getTwoStepAuthRecoveryCodes(authorization: string, opts?: {
        model?: PasswordModel;
    }): CancelablePromise<RecoveryCodesViewModel>;
    getTwoStepAuthStatus(authorization: string): CancelablePromise<TwoFactorStatus>;
    logoutFromAnotherDevices(authorization: string): CancelablePromise<string>;
    register(opts?: {
        model?: RegisterViewModel;
    }): CancelablePromise<any>;
    requestPhoneNumberVerificationCode(authorization: string): CancelablePromise<number>;
    resendConfirmationLink(opts?: {
        model?: ResendConfirmationViewModel;
    }): CancelablePromise<any>;
    resetPassword(opts?: {
        model?: ResetPasswordViewModel;
    }): CancelablePromise<string>;
    updateAuthToken(authorization: string): CancelablePromise<string>;
    validatePhoneNumber(authorization: string, opts?: {
        code?: string;
    }): CancelablePromise<any>;
}

export declare class BrokersApi {
    constructor(apiClient: ApiClient): BrokersApi;
    getBrokers(): CancelablePromise<BrokersInfoOld>;
    getBrokersForProgram(programId: string): CancelablePromise<BrokersProgramInfoOld>;
}

export declare class FileApi {
    constructor(apiClient: ApiClient): FileApi;
    getFile(id: string): CancelablePromise<any>;
    uploadFile(uploadedFile: File, opts?: {
        authorization?: string;
    }): CancelablePromise<UploadResult>;
}

export declare class FundsApi {
    constructor(apiClient: ApiClient): FundsApi;
    addToFavorites(id: string, authorization: string): CancelablePromise<any>;
    getAllAssets(): CancelablePromise<PlatformAssets>;
    getFundAssets(id: string): CancelablePromise<FundAssetsListInfo>;
    getFundBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: string;
    }): CancelablePromise<FundBalanceChartOld>;
    getFundDetails(id: string, opts?: {
        authorization?: string;
        currency?: string;
    }): CancelablePromise<FundDetailsFullOld>;
    getFundProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: string;
        chartAssetsCount?: number;
    }): CancelablePromise<FundProfitChartOld>;
    getFunds(opts?: {
        authorization?: string;
        sorting?: string;
        currencySecondary?: string;
        currency?: string;
        assets?: string[];
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
        forceUseIdsList?: boolean;
        managerId?: string;
        programManagerId?: string;
        status?: string[];
        skip?: number;
        take?: number;
    }): CancelablePromise<FundsListOld>;
    getProgramSets(authorization: string): CancelablePromise<FundSets>;
    getReallocationsHistory(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<ReallocationsViewModel>;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<any>;
}

export declare class InvestorApi {
    constructor(apiClient: ApiClient): InvestorApi;
    cancelRequest(id: string, authorization: string): CancelablePromise<any>;
    getDashboard(authorization: string, opts?: {
        chartCurrency?: string;
        from?: Date;
        to?: Date;
        balancePoints?: number;
        programsPoints?: number;
        eventsTake?: number;
        requestsSkip?: number;
        requestsTake?: number;
    }): CancelablePromise<DashboardSummary>;
    getEvents(authorization: string, opts?: {
        eventLocation?: string;
        assetId?: string;
        from?: Date;
        to?: Date;
        eventType?: string;
        assetType?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<InvestmentEventViewModels>;
    getFundInvestInfo(id: string, currency: string, authorization: string): CancelablePromise<FundInvestInfo>;
    getFundWithdrawInfo(id: string, currency: string, authorization: string): CancelablePromise<FundWithdrawInfoOld>;
    getFunds(authorization: string, opts?: {
        sorting?: string;
        currency?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        isHideInList?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<FundsListOld>;
    getPortfolioChart(authorization: string, opts?: {
        currency?: string;
        from?: Date;
        to?: Date;
        balancePoints?: number;
        programsPoints?: number;
    }): CancelablePromise<DashboardChartValue>;
    getProgramInvestInfo(id: string, currency: string, authorization: string): CancelablePromise<ProgramInvestInfoOld>;
    getProgramRequests(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    getProgramRequests_0(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    getProgramWithdrawInfo(id: string, currency: string, authorization: string): CancelablePromise<ProgramWithdrawInfoOld>;
    getPrograms(authorization: string, opts?: {
        sorting?: string;
        currency?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        isHideInList?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramsListOld>;
    getRequests(skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    getSignalPrograms(authorization: string, opts?: {
        sorting?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        isHideInList?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalsList>;
    investIntoFund(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    investIntoProgram(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    switchReinvestOff(id: string, authorization: string): CancelablePromise<any>;
    switchReinvestOn(id: string, authorization: string): CancelablePromise<any>;
    withdrawFromFund(id: string, percent: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    withdrawFromProgram(id: string, authorization: string, opts?: {
        amount?: number;
        withdrawAll?: boolean;
    }): CancelablePromise<any>;
    withdrawFromProgram_0(id: string, amount: number, authorization: string, opts?: {
        withdrawAll?: boolean;
    }): CancelablePromise<any>;
}

export declare class ManagerApi {
    constructor(apiClient: ApiClient): ManagerApi;
    cancelChangeBroker(authorization: string, opts?: {
        programId?: string;
    }): CancelablePromise<any>;
    cancelRequest(id: string, authorization: string): CancelablePromise<any>;
    cancelRequest_0(id: string, authorization: string): CancelablePromise<any>;
    changeBroker(authorization: string, opts?: {
        request?: ChangeBrokerProgramRequestOld;
    }): CancelablePromise<any>;
    changeProgramPassword(id: string, authorization: string, opts?: {
        model?: ProgramPwdUpdate;
    }): CancelablePromise<any>;
    closeCurrentPeriod(id: string, authorization: string): CancelablePromise<any>;
    closeFund(id: string, authorization: string, opts?: {
        twoFactorCode?: string;
    }): CancelablePromise<any>;
    closeInvestmentProgram(id: string, authorization: string, opts?: {
        twoFactorCode?: string;
    }): CancelablePromise<any>;
    confirmProgram2FA(authorization: string, opts?: {
        programId?: string;
        code?: string;
    }): CancelablePromise<any>;
    createFund(authorization: string, opts?: {
        request?: NewFundRequest;
    }): CancelablePromise<any>;
    createProgram(authorization: string, opts?: {
        request?: NewProgramRequest;
    }): CancelablePromise<ProgramCreateResult>;
    getEvents(authorization: string, opts?: {
        eventLocation?: string;
        assetId?: string;
        from?: Date;
        to?: Date;
        eventType?: string;
        assetType?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<InvestmentEventViewModels>;
    getFundInvestInfo(id: string, currency: string, authorization: string): CancelablePromise<FundInvestInfo>;
    getFundInvestment(authorization: string): CancelablePromise<number>;
    getFundWithdrawInfo(id: string, currency: string, authorization: string): CancelablePromise<ManagerFundWithdrawInfoOld>;
    getLevelsCalculator(id: string, authorization: string): CancelablePromise<ProgramLevelInfo>;
    getManagerAssets(authorization: string): CancelablePromise<ManagerAssets>;
    getManagerDetails(id: string): CancelablePromise<ManagerProfileDetails>;
    getManagerFunds(authorization: string, opts?: {
        sorting?: string;
        currency?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        isHideInList?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<FundsListOld>;
    getManagerProfile(id: string): CancelablePromise<PublicProfile>;
    getManagerPrograms(authorization: string, opts?: {
        sorting?: string;
        currency?: string;
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: string;
        actionStatus?: string;
        dashboardActionStatus?: string;
        isHideInList?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramsListOld>;
    getProgram2FA(authorization: string, opts?: {
        programId?: string;
    }): CancelablePromise<TwoFactorAuthenticator>;
    getProgramInvestInfo(id: string, currency: string, authorization: string): CancelablePromise<ProgramInvestInfoOld>;
    getProgramInvestment(authorization: string, opts?: {
        brokerTradingAccount?: string;
    }): CancelablePromise<ProgramMinimumDepositOld>;
    getProgramRequests(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    getProgramRequests_0(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    getProgramWithdrawInfo(id: string, currency: string, authorization: string): CancelablePromise<ManagerProgramWithdrawInfoOld>;
    getRequests(skip: number, take: number, authorization: string, opts?: {
        assetType?: string;
    }): CancelablePromise<ProgramRequestsOld>;
    investIntoFund(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    investIntoProgram(id: string, amount: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    updateFundAssets(id: string, authorization: string, opts?: {
        assets?: FundAssetPart[];
    }): CancelablePromise<any>;
    updateInvestmentProgram(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<any>;
    updateInvestmentProgram_0(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<any>;
    updateProgramSignalSettings(authorization: string, opts?: {
        programId?: string;
        volumeFee?: number;
        successFee?: number;
    }): CancelablePromise<any>;
    updateProgramSignalSettings_0(authorization: string, opts?: {
        programId?: string;
        volumeFee?: number;
        successFee?: number;
    }): CancelablePromise<any>;
    withdrawFromFund(id: string, percent: number, authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<any>;
    withdrawFromProgram(id: string, amount: number, authorization: string): CancelablePromise<any>;
}

export declare class NotificationsApi {
    constructor(apiClient: ApiClient): NotificationsApi;
    addNotificationsSettings(authorization: string, opts?: {
        assetId?: string;
        managerId?: string;
        type?: string;
        conditionType?: string;
        conditionAmount?: number;
    }): CancelablePromise<string>;
    getNewNotificationsCount(authorization: string): CancelablePromise<number>;
    getNotifications(authorization: string, opts?: {
        skip?: number;
        take?: number;
    }): CancelablePromise<NotificationList>;
    getNotificationsFundSettings(id: string, authorization: string): CancelablePromise<FundNotificationSettingList>;
    getNotificationsManagerSettings(id: string, authorization: string): CancelablePromise<ManagerNotificationSettingList>;
    getNotificationsProgramSettings(id: string, authorization: string): CancelablePromise<ProgramNotificationSettingList>;
    getNotificationsSettings(authorization: string): CancelablePromise<NotificationSettingList>;
    readNotification(id: string, authorization: string): CancelablePromise<any>;
    removeNotificationsSettings(id: string, authorization: string): CancelablePromise<any>;
    toggleNotificationSettings(id: string, enable: boolean, authorization: string): CancelablePromise<string>;
}

export declare class PartnershipApi {
    constructor(apiClient: ApiClient): PartnershipApi;
    exportHistory(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    getDetails(authorization: string, opts?: {
        currency?: string;
    }): CancelablePromise<PartnershipDetails>;
    getReferrals(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelReferralFriend>;
    getRewardsHistory(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelRewardDetails>;
}

export declare class PlatformApi {
    constructor(apiClient: ApiClient): PlatformApi;
    getCaptchaModel(route: string, opts?: {
        client?: string;
        version?: string;
    }): CancelablePromise<CaptchaDetails>;
    getLevelsParams(opts?: {
        currency?: string;
    }): CancelablePromise<LevelsParamsInfo>;
    getPlatformDate(): CancelablePromise<string>;
    getPlatformStatistic(): CancelablePromise<PlatformStatisticOld>;
    getPlatformStatus(): CancelablePromise<PlatformInfoOld>;
    getProgramsLevels(opts?: {
        currency?: string;
    }): CancelablePromise<ProgramsLevelsInfo>;
}

export declare class ProfileApi {
    constructor(apiClient: ApiClient): ProfileApi;
    addExternalKey(authorization: string, opts?: {
        model?: ExternalKeyAddViewModel;
    }): CancelablePromise<any>;
    deleteExternalKey(authorization: string, opts?: {
        model?: IdModel;
    }): CancelablePromise<any>;
    getExternalKey(authorization: string): CancelablePromise<ExternalKeysViewModel>;
    getManagerProfile(id: string): CancelablePromise<PublicProfile>;
    getProfileFull(authorization: string): CancelablePromise<ProfileFullViewModel>;
    getProfileHeader(authorization: string): CancelablePromise<ProfileHeaderViewModel>;
    getSocialLinks(authorization: string): CancelablePromise<SocialLinksViewModel>;
    getVerificationToken(authorization: string): CancelablePromise<string>;
    removeAvatar(authorization: string): CancelablePromise<any>;
    updateAvatar(fileId: string, authorization: string): CancelablePromise<any>;
    updateFcmToken(authorization: string, opts?: {
        token?: FcmTokenViewModel;
    }): CancelablePromise<any>;
    updatePersonalDetails(authorization: string, opts?: {
        model?: UpdatePersonalDetailViewModel;
    }): CancelablePromise<any>;
    updateProfile(authorization: string, opts?: {
        model?: UpdateProfileViewModel;
    }): CancelablePromise<any>;
    updateSocialLinks(authorization: string, opts?: {
        model?: UpdateSocialLinkViewModel;
    }): CancelablePromise<any>;
}

export declare class ProgramsApi {
    constructor(apiClient: ApiClient): ProgramsApi;
    addToFavorites(id: string, authorization: string): CancelablePromise<any>;
    exportProgramPeriods(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    exportProgramPeriodsFinStatistic(id: string, authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    exportTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: string;
        accountId?: string;
        accountCurrency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    getProgramBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: string;
    }): CancelablePromise<ProgramBalanceChartOld>;
    getProgramDetails(id: string, opts?: {
        authorization?: string;
        currencySecondary?: string;
    }): CancelablePromise<ProgramDetailsFullOld>;
    getProgramOpenTrades(id: string, opts?: {
        sorting?: string;
        symbol?: string;
        accountId?: string;
        accountCurrency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesViewModel>;
    getProgramPeriods(id: string, opts?: {
        authorization?: string;
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramPeriodsViewModel>;
    getProgramProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: string;
    }): CancelablePromise<ProgramProfitChartOld>;
    getProgramSets(authorization: string): CancelablePromise<ProgramSets>;
    getProgramSubscribers(id: string, authorization: string, opts?: {
        status?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalProviderSubscribers>;
    getProgramTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: string;
        accountId?: string;
        accountCurrency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesViewModel>;
    getPrograms(opts?: {
        authorization?: string;
        levelMin?: number;
        levelMax?: number;
        levelsSet?: number[];
        profitAvgMin?: number;
        profitAvgMax?: number;
        sorting?: string;
        programCurrency?: string;
        currencySecondary?: string;
        currency?: string;
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
        forceUseIdsList?: boolean;
        managerId?: string;
        programManagerId?: string;
        status?: string[];
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramsListOld>;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<any>;
}

export declare class RateApi {
    constructor(apiClient: ApiClient): RateApi;
    getRate(from: string, to: string): CancelablePromise<number>;
    getRateExchange(exchange: string, from: string, to: string): CancelablePromise<number>;
    getRates(opts?: {
        from?: string[];
        to?: string[];
    }): CancelablePromise<RatesModel>;
}

export declare class SearchApi {
    constructor(apiClient: ApiClient): SearchApi;
    search(opts?: {
        authorization?: string;
        mask?: string;
        take?: number;
    }): CancelablePromise<SearchViewModelOld>;
}

export declare class SignalApi {
    constructor(apiClient: ApiClient): SignalApi;
    attachSlaveToMaster(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<any>;
    closeTrade(id: string, authorization: string, opts?: {
        programId?: string;
    }): CancelablePromise<any>;
    detachSlaveFromMaster(id: string, authorization: string, opts?: {
        model?: DetachFromSignalProvider;
    }): CancelablePromise<any>;
    getCopytradingAccounts(authorization: string): CancelablePromise<CopyTradingAccountsList>;
    getOpenSignalTrades(authorization: string, opts?: {
        sorting?: string;
        symbol?: string;
        accountId?: string;
        accountCurrency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesSignalViewModel>;
    getSignalTrades(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: string;
        accountId?: string;
        accountCurrency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesSignalViewModel>;
    getSignalTradingLog(authorization: string, opts?: {
        accountId?: string;
        accountCurrency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalTradingEvents>;
    getSignals(opts?: {
        authorization?: string;
        tags?: string[];
        statisticDateFrom?: Date;
        statisticDateTo?: Date;
        chartPointsCount?: number;
        chartCurrency?: string;
        facetId?: string;
        mask?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelCopyTradingAccountInfo>;
    getSlaveAttachInfo(id: string, authorization: string): CancelablePromise<AttachToSignalProviderInfo>;
    updateSubscriptionSettings(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<any>;
}

export declare class WalletApi {
    constructor(apiClient: ApiClient): WalletApi;
    cancelWithdrawalRequest(txId: string, authorization: string): CancelablePromise<any>;
    confirmWithdrawalRequestByCode(opts?: {
        requestId?: string;
        code?: string;
    }): CancelablePromise<any>;
    createWithdrawalRequest(authorization: string, opts?: {
        model?: CreateWithdrawalRequestModel;
    }): CancelablePromise<any>;
    getGMCommissionData(authorization: string): CancelablePromise<UserCommissionData>;
    getMultiWalletTransactions(authorization: string, opts?: {
        from?: Date;
        to?: Date;
        type?: string;
        currency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<MultiWalletTransactionsViewModel>;
    getTransactionDetails(id: string, authorization: string): CancelablePromise<TransactionDetails>;
    getUserWithdrawalSummary(authorization: string): CancelablePromise<WithdrawalSummary>;
    getWalletExternalTransactions(authorization: string, opts?: {
        from?: Date;
        to?: Date;
        type?: string;
        currency?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<MultiWalletExternalTransactionsViewModel>;
    getWalletMultiAvailable(currency: string, authorization: string): CancelablePromise<WalletMultiAvailable>;
    getWalletMultiSummary(currency: string, authorization: string): CancelablePromise<WalletMultiSummary>;
    resendWithdrawalRequestEmail(txId: string, authorization: string): CancelablePromise<any>;
    switchPayFeeInGvtOff(authorization: string): CancelablePromise<any>;
    switchPayFeeInGvtOn(authorization: string): CancelablePromise<any>;
    transfer(authorization: string, opts?: {
        request?: InternalTransferRequest;
    }): CancelablePromise<any>;
    updateDepositWallets(authorization: string): CancelablePromise<WalletDepositSummary>;
}

export declare interface index {
    ApiClient: ApiClient;
    AmountWithCurrency: AmountWithCurrency;
    AndroidAppVersion: AndroidAppVersion;
    AndroidVersion: AndroidVersion;
    AssetDetails: AssetDetails;
    AssetFilterType: AssetFilterType;
    AssetInvestmentStatus: AssetInvestmentStatus;
    AssetType: AssetType;
    AssetsValue: AssetsValue;
    AttachToSignalProvider: AttachToSignalProvider;
    AttachToSignalProviderInfo: AttachToSignalProviderInfo;
    BalanceChartElementOld: BalanceChartElementOld;
    BrokerAccountTypeOld: BrokerAccountTypeOld;
    BrokerDetailsOld: BrokerDetailsOld;
    BrokerOld: BrokerOld;
    BrokerTradeServerType: BrokerTradeServerType;
    BrokersInfoOld: BrokersInfoOld;
    BrokersProgramInfoOld: BrokersProgramInfoOld;
    CaptchaCheckResult: CaptchaCheckResult;
    CaptchaDetails: CaptchaDetails;
    CaptchaType: CaptchaType;
    ChangeBrokerProgramRequestOld: ChangeBrokerProgramRequestOld;
    ChangePasswordViewModel: ChangePasswordViewModel;
    ChangeState: ChangeState;
    ChartSimple: ChartSimple;
    ConvertingDetails: ConvertingDetails;
    CopyTradingAccountInfo: CopyTradingAccountInfo;
    CopyTradingAccountsList: CopyTradingAccountsList;
    CreateWithdrawalRequestModel: CreateWithdrawalRequestModel;
    Currency: Currency;
    DashboardChartValue: DashboardChartValue;
    DashboardProgramDetailsOld: DashboardProgramDetailsOld;
    DashboardSummary: DashboardSummary;
    DetachFromSignalProvider: DetachFromSignalProvider;
    EnumsOld: EnumsOld;
    ErrorCodes: ErrorCodes;
    ErrorMessage: ErrorMessage;
    ErrorViewModel: ErrorViewModel;
    EventFiltersOld: EventFiltersOld;
    EventInvestorItemFiltersOld: EventInvestorItemFiltersOld;
    EventItemFiltersOld: EventItemFiltersOld;
    ExternalKeyAddViewModel: ExternalKeyAddViewModel;
    ExternalKeyViewModel: ExternalKeyViewModel;
    ExternalKeysViewModel: ExternalKeysViewModel;
    ExternalTransactionDetails: ExternalTransactionDetails;
    FacetSortType: FacetSortType;
    FcmTokenViewModel: FcmTokenViewModel;
    FeeDetails: FeeDetails;
    FeeType: FeeType;
    FilterModelOld: FilterModelOld;
    ForgotPasswordViewModel: ForgotPasswordViewModel;
    FundAssetInfo: FundAssetInfo;
    FundAssetPart: FundAssetPart;
    FundAssetPartWithIcon: FundAssetPartWithIcon;
    FundAssetPercent: FundAssetPercent;
    FundAssetsListInfo: FundAssetsListInfo;
    FundAssetsState: FundAssetsState;
    FundBalanceChartOld: FundBalanceChartOld;
    FundDetailsFullOld: FundDetailsFullOld;
    FundDetailsListStatistic: FundDetailsListStatistic;
    FundDetailsOld: FundDetailsOld;
    FundEquityChartElementOld: FundEquityChartElementOld;
    FundFacet: FundFacet;
    FundFiltersOld: FundFiltersOld;
    FundInvestInfo: FundInvestInfo;
    FundNotificationSettingList: FundNotificationSettingList;
    FundProfitChartOld: FundProfitChartOld;
    FundSets: FundSets;
    FundStatisticOld: FundStatisticOld;
    FundWithdrawInfoOld: FundWithdrawInfoOld;
    FundsFilterSorting: FundsFilterSorting;
    FundsListOld: FundsListOld;
    GeeTestDetails: GeeTestDetails;
    GeeTestResult: GeeTestResult;
    IOsAppVersion: IOsAppVersion;
    IdModel: IdModel;
    InternalTransferRequest: InternalTransferRequest;
    InvestmentEventItemViewModel: InvestmentEventItemViewModel;
    InvestmentEventLocation: InvestmentEventLocation;
    InvestmentEventType: InvestmentEventType;
    InvestmentEventViewModel: InvestmentEventViewModel;
    InvestmentEventViewModels: InvestmentEventViewModels;
    InvestmentProgramStatus: InvestmentProgramStatus;
    InvestmentProgramType: InvestmentProgramType;
    InvestmentRequestStatus: InvestmentRequestStatus;
    InvestmentRequestType: InvestmentRequestType;
    ItemsViewModelCopyTradingAccountInfo: ItemsViewModelCopyTradingAccountInfo;
    ItemsViewModelReferralFriend: ItemsViewModelReferralFriend;
    ItemsViewModelRewardDetails: ItemsViewModelRewardDetails;
    LevelInfo: LevelInfo;
    LevelsParamsInfo: LevelsParamsInfo;
    LoginViewModel: LoginViewModel;
    ManagerAssets: ManagerAssets;
    ManagerFinancialStatistic: ManagerFinancialStatistic;
    ManagerFundWithdrawInfoOld: ManagerFundWithdrawInfoOld;
    ManagerNotificationSettingList: ManagerNotificationSettingList;
    ManagerOverview: ManagerOverview;
    ManagerProfileDetails: ManagerProfileDetails;
    ManagerProgramWithdrawInfoOld: ManagerProgramWithdrawInfoOld;
    ManagerSimpleFund: ManagerSimpleFund;
    ManagerSimpleProgram: ManagerSimpleProgram;
    ManagersListOld: ManagersListOld;
    MigrationRequestOld: MigrationRequestOld;
    MultiWalletExternalTransaction: MultiWalletExternalTransaction;
    MultiWalletExternalTransactionType: MultiWalletExternalTransactionType;
    MultiWalletExternalTransactionsViewModel: MultiWalletExternalTransactionsViewModel;
    MultiWalletFiltersOld: MultiWalletFiltersOld;
    MultiWalletTransaction: MultiWalletTransaction;
    MultiWalletTransactionStatus: MultiWalletTransactionStatus;
    MultiWalletTransactionType: MultiWalletTransactionType;
    MultiWalletTransactionsViewModel: MultiWalletTransactionsViewModel;
    NewFundRequest: NewFundRequest;
    NewProgramRequest: NewProgramRequest;
    NotificationList: NotificationList;
    NotificationSettingConditionType: NotificationSettingConditionType;
    NotificationSettingList: NotificationSettingList;
    NotificationSettingViewModel: NotificationSettingViewModel;
    NotificationType: NotificationType;
    NotificationViewModel: NotificationViewModel;
    OrderModel: OrderModel;
    OrderModelSignalData: OrderModelSignalData;
    OrderProgramData: OrderProgramData;
    OrderSignalFee: OrderSignalFee;
    OrderSignalModel: OrderSignalModel;
    OrderSignalProgramInfo: OrderSignalProgramInfo;
    OtherAssetsValue: OtherAssetsValue;
    PartnershipDetails: PartnershipDetails;
    PasswordModel: PasswordModel;
    PeriodDate: PeriodDate;
    PeriodStatus: PeriodStatus;
    PersonalCopyTradingAccountInfo: PersonalCopyTradingAccountInfo;
    PersonalFundDetailsFullOld: PersonalFundDetailsFullOld;
    PersonalProgramDetailsFullOld: PersonalProgramDetailsFullOld;
    PersonalSignalDetailsFull: PersonalSignalDetailsFull;
    PlatformAsset: PlatformAsset;
    PlatformAssets: PlatformAssets;
    PlatformCurrencyOld: PlatformCurrencyOld;
    PlatformInfoOld: PlatformInfoOld;
    PlatformStatisticOld: PlatformStatisticOld;
    PowDetails: PowDetails;
    PowResult: PowResult;
    ProfileFullViewModel: ProfileFullViewModel;
    ProfileHeaderViewModel: ProfileHeaderViewModel;
    ProfilePublic: ProfilePublic;
    ProgramBalanceChartElementOld: ProgramBalanceChartElementOld;
    ProgramBalanceChartOld: ProgramBalanceChartOld;
    ProgramCreateResult: ProgramCreateResult;
    ProgramDetailsFullOld: ProgramDetailsFullOld;
    ProgramDetailsListStatistic: ProgramDetailsListStatistic;
    ProgramDetailsOld: ProgramDetailsOld;
    ProgramFacet: ProgramFacet;
    ProgramFiltersOld: ProgramFiltersOld;
    ProgramInvestInfoOld: ProgramInvestInfoOld;
    ProgramLevelInfo: ProgramLevelInfo;
    ProgramMinimumDepositOld: ProgramMinimumDepositOld;
    ProgramNotificationSettingList: ProgramNotificationSettingList;
    ProgramPeriodViewModel: ProgramPeriodViewModel;
    ProgramPeriodsViewModel: ProgramPeriodsViewModel;
    ProgramProfitChartOld: ProgramProfitChartOld;
    ProgramPwdUpdate: ProgramPwdUpdate;
    ProgramRequestOld: ProgramRequestOld;
    ProgramRequestsOld: ProgramRequestsOld;
    ProgramSets: ProgramSets;
    ProgramStatistic: ProgramStatistic;
    ProgramTag: ProgramTag;
    ProgramTransactionDetails: ProgramTransactionDetails;
    ProgramUpdate: ProgramUpdate;
    ProgramWithdrawInfoOld: ProgramWithdrawInfoOld;
    ProgramsFilterSorting: ProgramsFilterSorting;
    ProgramsInfoOld: ProgramsInfoOld;
    ProgramsLevelsInfo: ProgramsLevelsInfo;
    ProgramsListOld: ProgramsListOld;
    PublicProfile: PublicProfile;
    RateItem: RateItem;
    RatesModel: RatesModel;
    RatesModelRates: RatesModelRates;
    ReallocationModel: ReallocationModel;
    ReallocationsViewModel: ReallocationsViewModel;
    RecoveryCode: RecoveryCode;
    RecoveryCodesViewModel: RecoveryCodesViewModel;
    ReferralFriend: ReferralFriend;
    RegisterViewModel: RegisterViewModel;
    ResendConfirmationViewModel: ResendConfirmationViewModel;
    ResetPasswordViewModel: ResetPasswordViewModel;
    RewardDetails: RewardDetails;
    SearchViewModelOld: SearchViewModelOld;
    SecureAlgorithm: SecureAlgorithm;
    SignalDataMaster: SignalDataMaster;
    SignalDetachMode: SignalDetachMode;
    SignalDetails: SignalDetails;
    SignalFee: SignalFee;
    SignalProviderSubscribers: SignalProviderSubscribers;
    SignalSubscriber: SignalSubscriber;
    SignalSubscriberStatus: SignalSubscriberStatus;
    SignalSubscription: SignalSubscription;
    SignalTradingEvent: SignalTradingEvent;
    SignalTradingEvents: SignalTradingEvents;
    SignalsList: SignalsList;
    SocialLinkType: SocialLinkType;
    SocialLinkViewModel: SocialLinkViewModel;
    SocialLinksViewModel: SocialLinksViewModel;
    SubscriptionMode: SubscriptionMode;
    Timeframe: Timeframe;
    TradeDirectionType: TradeDirectionType;
    TradeEntryType: TradeEntryType;
    TradesDelay: TradesDelay;
    TradesSignalViewModel: TradesSignalViewModel;
    TradesViewModel: TradesViewModel;
    TransactionDetails: TransactionDetails;
    TransactionDetailsType: TransactionDetailsType;
    TransferRequestType: TransferRequestType;
    TwoFactorAuthenticator: TwoFactorAuthenticator;
    TwoFactorAuthenticatorConfirm: TwoFactorAuthenticatorConfirm;
    TwoFactorCodeWithPassword: TwoFactorCodeWithPassword;
    TwoFactorStatus: TwoFactorStatus;
    UpdatePersonalDetailViewModel: UpdatePersonalDetailViewModel;
    UpdateProfileViewModel: UpdateProfileViewModel;
    UpdateSocialLinkViewModel: UpdateSocialLinkViewModel;
    UploadResult: UploadResult;
    UserCommissionData: UserCommissionData;
    UserVerificationStatus: UserVerificationStatus;
    ValueChartBar: ValueChartBar;
    WalletBaseData: WalletBaseData;
    WalletData: WalletData;
    WalletDeposit: WalletDeposit;
    WalletDepositSummary: WalletDepositSummary;
    WalletMultiAvailable: WalletMultiAvailable;
    WalletMultiSummary: WalletMultiSummary;
    WalletWithdrawalInfo: WalletWithdrawalInfo;
    WalletsGrandTotal: WalletsGrandTotal;
    WithdrawalSummary: WithdrawalSummary;
    AuthApi: AuthApi;
    BrokersApi: BrokersApi;
    FileApi: FileApi;
    FundsApi: FundsApi;
    InvestorApi: InvestorApi;
    ManagerApi: ManagerApi;
    NotificationsApi: NotificationsApi;
    PartnershipApi: PartnershipApi;
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
    currency: Currency;
}

export declare interface AndroidAppVersion {
    minVersion: AndroidVersion;
    lastVersion: AndroidVersion;
}

export declare interface AndroidVersion {
    versionCode: string;
    versionName: string;
}

export declare interface AssetDetails {
    id: string;
    logo: string;
    color: string;
    title: string;
    url: string;
    assetType: AssetType;
    levelProgress: number;
}

export declare interface AssetEvent {
    programs: string[];
    funds: string[];
}

export declare interface AssetFilterType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface AssetInvestmentStatus {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare type AssetSelectionTypeEnum = "Program" | "Fund";

export declare interface AssetSelection {
    id: string;
    title: string;
    logo: string;
    type: AssetSelectionTypeEnum;
}

export declare interface AssetType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface AssetsValue {
    type: AssetFilterType;
    id: string;
    title: string;
    avatar: string;
    color: string;
    value: number;
    changePercent: number;
    changeValue: number;
}

export declare type AttachToExternalSignalProviderExtModeEnum = "ByBalance" | "Percent" | "Fixed";

export declare type AttachToExternalSignalProviderExtFixedCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface AttachToExternalSignalProviderExt {
    externalKeyId: string;
    mode: AttachToExternalSignalProviderExtModeEnum;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: AttachToExternalSignalProviderExtFixedCurrencyEnum;
}

export declare type AttachToSignalProviderInitialDepositCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type AttachToSignalProviderFixedCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface AttachToSignalProvider {
    initialDepositCurrency: AttachToSignalProviderInitialDepositCurrencyEnum;
    initialDepositAmount: number;
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: AttachToSignalProviderFixedCurrencyEnum;
}

export declare interface AttachToSignalProviderInfo {
    hasSignalAccount: boolean;
    hasActiveSubscription: boolean;
    volumeFee: number;
    minDeposit: number;
    minDepositCurrency: Currency;
}

export declare interface BalanceChartElement {
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

export declare interface BalanceChartElementOld {
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

export declare interface BinanceKey {
    id: string;
    appKey: string;
    title: string;
    isValid: boolean;
}

export declare type BlockchainInfoStatusEnum = "Undefined" | "New" | "Pending" | "ConfirmedByGate" | "ConfirmedAndValidated" | "PendingAddInWallet" | "Error" | "Cancelled";

export declare interface BlockchainInfo {
    hash: string;
    status: BlockchainInfoStatusEnum;
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
    tags: ProgramTag[];
}

export declare type BrokerAccountTypeTypeEnum = "Undefined" | "MetaTrader4" | "MetaTrader5" | "NinjaTrader" | "cTrader" | "Rumus" | "Metastock" | "IDEX" | "Huobi" | "Exante" | "BinanceExchange";

export declare interface BrokerAccountType {
    id: string;
    name: string;
    description: string;
    type: BrokerAccountTypeTypeEnum;
    leverages: number[];
    currencies: string[];
    minimumDepositsAmount: any;
    isForex: boolean;
    isSignalsAvailable: boolean;
}

export declare interface BrokerAccountTypeOld {
    id: string;
    name: string;
    description: string;
    type: BrokerTradeServerType;
    leverages: number[];
    currencies: string[];
    minimumDepositsAmount: any;
    isForex: boolean;
    isSignalsAvailable: boolean;
}

export declare interface BrokerDetails {
    logo: string;
    name: string;
    isForex: boolean;
    showSwaps: boolean;
    showTickets: boolean;
    showCommissionRebate: boolean;
    isForexSometime: boolean;
    showSwapsSometime: boolean;
    showTicketsSometime: boolean;
    showCommissionRebateSometime: boolean;
}

export declare interface BrokerDetailsOld {
    logo: string;
    name: string;
    isForex: boolean;
    showSwaps: boolean;
    showTickets: boolean;
    showCommissionRebate: boolean;
    isForexSometime: boolean;
    showSwapsSometime: boolean;
    showTicketsSometime: boolean;
    showCommissionRebateSometime: boolean;
}

export declare interface BrokerOld {
    name: string;
    description: string;
    logo: string;
    terms: string;
    assets: string;
    fee: number;
    leverageMin: number;
    leverageMax: number;
    accountTypes: BrokerAccountTypeOld[];
    isForex: boolean;
    isSignalsAvailable: boolean;
    tags: ProgramTag[];
}

export declare interface BrokerTradeServerType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface BrokersInfo {
    brokers: Broker[];
}

export declare interface BrokersInfoOld {
    brokers: BrokerOld[];
}

export declare interface BrokersProgramInfo {
    brokers: Broker[];
    currentAccountTypeId: string;
}

export declare interface BrokersProgramInfoOld {
    brokers: BrokerOld[];
    currentAccountTypeId: string;
}

export declare interface CaptchaCheckResult {
    id: string;
    pow: PowResult;
    geeTest: GeeTestResult;
}

export declare interface CaptchaDetails {
    captchaType: CaptchaType;
    id: string;
    route: string;
    pow: PowDetails;
    geeTest: GeeTestDetails;
}

export declare interface CaptchaType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface ChangeBrokerProgramRequest {
    programId: string;
    newBrokerAccountTypeId: string;
    newLeverage: number;
}

export declare interface ChangeBrokerProgramRequestOld {
    programId: string;
    newBrokerAccountTypeId: string;
    newLeverage: number;
}

export declare interface ChangePasswordViewModel {
    oldPassword: string;
    password: string;
    confirmPassword: string;
}

export declare interface ChangeState {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface ChartSimple {
    value: number;
    date: Date;
}

export declare interface ConvertingDetails {
    currencyTo: Currency;
    currencyToName: string;
    amountTo: number;
    rateValue: number;
    currencyToLogo: string;
}

export declare interface CopyTradingAccountInfo {
    id: string;
    currency: Currency;
    logo: string;
    title: string;
    balance: number;
    equity: number;
    freeMargin: number;
    marginLevel: number;
    available: number;
    personalInfo: PersonalCopyTradingAccountInfo;
}

export declare interface CopyTradingAccountsList {
    accounts: CopyTradingAccountInfo[];
    total: number;
}

export declare interface CreateWithdrawalRequestModel {
    amount: number;
    currency: Currency;
    address: string;
    twoFactorCode: string;
}

export declare interface Currency {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

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

export declare type DashboardPortfolioEventFeeSuccessManagerCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type DashboardPortfolioEventFeeSuccessPlatformCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type DashboardPortfolioEventCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type DashboardPortfolioEventTypeEnum = "All" | "Invest" | "Withdraw" | "Profit" | "Loss" | "Reinvest" | "Canceled" | "Ended" | "WithdrawByStopOut";

export declare type DashboardPortfolioEventAssetTypeEnum = "Program" | "Fund";

export declare interface DashboardPortfolioEvent {
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

export declare interface DashboardPortfolioEvents {
    events: DashboardPortfolioEvent[];
    total: number;
}

export declare interface DashboardProgramDetails {
    share: number;
}

export declare interface DashboardProgramDetailsOld {
    share: number;
}

export declare interface DashboardSummary {
    chart: DashboardChartValue;
    profileHeader: ProfileHeaderViewModel;
    programsCount: number;
    fundsCount: number;
    signalsCount: number;
    requests: ProgramRequestsOld;
}

export declare interface DetachFromSignalProvider {
    mode: SignalDetachMode;
}

export declare interface Enums {
    multiWallet: MultiWalletFilters;
    program: ProgramFilters;
    fund: FundFilters;
    event: EventFilters;
    assetTypes: string[];
}

export declare interface EnumsOld {
    multiWallet: MultiWalletFiltersOld;
    program: ProgramFiltersOld;
    fund: FundFiltersOld;
    event: EventFiltersOld;
    assetTypes: string[];
}

export declare interface ErrorCodes {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface ErrorMessage {
    message: string;
    property: string;
}

export declare interface ErrorViewModel {
    errors: ErrorMessage[];
    code: ErrorCodes;
}

export declare interface EventFilters {
    manager: EventItemFilters;
    investor: EventInvestorItemFilters;
}

export declare interface EventFiltersOld {
    manager: EventItemFiltersOld;
    investor: EventInvestorItemFiltersOld;
}

export declare interface EventInvestorItemFilters {
    signalProgramDetails: FilterModel[];
    programDetails: FilterModel[];
    fundDetails: FilterModel[];
    allAssets: FilterModel[];
}

export declare interface EventInvestorItemFiltersOld {
    signalProgramDetails: FilterModelOld[];
    programDetails: FilterModelOld[];
    fundDetails: FilterModelOld[];
    allAssets: FilterModelOld[];
}

export declare interface EventItemFilters {
    programDetails: FilterModel[];
    fundDetails: FilterModel[];
    allAssets: FilterModel[];
}

export declare interface EventItemFiltersOld {
    programDetails: FilterModelOld[];
    fundDetails: FilterModelOld[];
    allAssets: FilterModelOld[];
}

export declare interface ExternalKeyAddViewModel {
    title: string;
    exchangeId: string;
    key: string;
    secret: string;
}

export declare interface ExternalKeyViewModel {
    id: string;
    title: string;
    dateAdd: Date;
    exchangeName: string;
}

export declare interface ExternalKeysViewModel {
    keys: ExternalKeyViewModel[];
    total: number;
}

export declare interface ExternalTransactionDetails {
    description: string;
    descriptionUrl: string;
    fromAddress: string;
    isEnableActions: boolean;
}

export declare interface FacetSortType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface FcmTokenViewModel {
    token: string;
}

export declare interface FeeDetails {
    title: string;
    description: string;
    type: FeeType;
    amount: number;
    currency: Currency;
}

export declare interface FeeType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface FilterModel {
    key: string;
    title: string;
}

export declare interface FilterModelOld {
    key: string;
    title: string;
}

export declare interface FinancialStatistic {
    deposit: number;
    withdraw: number;
    commissionRebate: number;
    successFee: number;
    entryFee: number;
    profit: number;
    balance: number;
}

export declare interface ForgotPasswordViewModel {
    email: string;
    captchaCheckResult: CaptchaCheckResult;
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

export declare interface FundAssetPartDetails {
    name: string;
    asset: string;
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

export declare interface FundAssetsState {
    assets: FundAssetPartWithIcon[];
    otherPercent: number;
}

export declare interface FundBalanceChart {
    balance: number;
    balanceChart: BalanceChartElement[];
}

export declare interface FundBalanceChartOld {
    balance: number;
    balanceChart: BalanceChartElementOld[];
}

export declare type FundDetailsStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

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
    status: FundDetailsStatusEnum;
    creationDate: Date;
    manager: ProfilePublic;
    chart: ChartSimple[];
}

export declare type FundDetailsFullStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

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
    creationDate: Date;
    status: FundDetailsFullStatusEnum;
    manager: ProfilePublic;
}

export declare interface FundDetailsFullOld {
    entryFee: number;
    exitFee: number;
    managementFee: number;
    currentAssets: FundAssetPartWithIcon[];
    statistic: FundStatisticOld;
    personalFundDetails: PersonalFundDetailsFullOld;
    id: string;
    logo: string;
    url: string;
    color: string;
    description: string;
    title: string;
    ipfsHash: string;
    creationDate: Date;
    status: InvestmentProgramStatus;
    manager: ProfilePublic;
}

export declare interface FundDetailsListStatistic {
    balance: AmountWithCurrency;
    profitPercent: number;
    drawdownPercent: number;
    investorsCount: number;
}

export declare interface FundDetailsOld {
    totalAssetsCount: number;
    topFundAssets: FundAssetPercent[];
    statistic: FundDetailsListStatistic;
    personalDetails: PersonalFundDetailsFullOld;
    dashboardAssetsDetails: DashboardProgramDetailsOld;
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    status: InvestmentProgramStatus;
    creationDate: Date;
    manager: ProfilePublic;
    chart: ChartSimple[];
}

export declare interface FundEquityChartElement {
    assetsState: FundAssetsState;
    value: number;
    date: Date;
}

export declare interface FundEquityChartElementOld {
    assetsState: FundAssetsState;
    value: number;
    date: Date;
}

export declare interface FundFacet {
    sorting: FundsFilterSorting;
    id: string;
    title: string;
    description: string;
    logo: string;
    url: string;
    sortType: FacetSortType;
    timeframe: Timeframe;
}

export declare interface FundFilters {
    assets: PlatformAsset[];
}

export declare interface FundFiltersOld {
    assets: PlatformAsset[];
}

export declare interface FundInvestInfo {
    title: string;
    programCurrencyMinInvestment: number;
    entryFee: number;
    gvCommission: number;
    rate: number;
    isOwnProgram: boolean;
}

export declare interface FundMandatoryAsset {
    asset: PlatformAsset;
    mandatoryPart: number;
}

export declare interface FundMandatoryAssets {
    assets: FundMandatoryAsset[];
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
    creationDate: Date;
    profitPercent: number;
    equityChart: FundEquityChartElement[];
    balance: number;
    investors: number;
    profitChangePercent: number;
    sharpeRatio: number;
    sortinoRatio: number;
    calmarRatio: number;
    maxDrawdown: number;
    rate: number;
}

export declare interface FundProfitChartOld {
    creationDate: Date;
    profitPercent: number;
    equityChart: FundEquityChartElementOld[];
    balance: number;
    investors: number;
    profitChangePercent: number;
    sharpeRatio: number;
    sortinoRatio: number;
    calmarRatio: number;
    maxDrawdown: number;
    rate: number;
}

export declare interface FundSets {
    sets: FundFacet[];
    favoritesCount: number;
}

export declare interface FundStatistic {
    balance: AmountWithCurrency;
    profitPercent: number;
    drawdownPercent: number;
    investorsCount: number;
    startDate: Date;
    startBalance: number;
    investedAmount: number;
    rebalancingCount: number;
}

export declare interface FundStatisticOld {
    balance: AmountWithCurrency;
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

export declare interface FundWithdrawInfoOld {
    exitFee: number;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

export declare interface FundsFilterSorting {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface FundsList {
    funds: FundDetails[];
    total: number;
}

export declare interface FundsListOld {
    funds: FundDetailsOld[];
    total: number;
}

export declare interface GeeTestDetails {
}

export declare interface GeeTestResult {
}

export declare interface IOsAppVersion {
    minVersion: string;
    lastVersion: string;
}

export declare interface IdModel {
    id: string;
}

export declare interface InternalTransferRequest {
    sourceId: string;
    sourceType: TransferRequestType;
    destinationId: string;
    destinationType: TransferRequestType;
    amount: number;
    transferAll: boolean;
}

export declare interface InvestmentEventItemViewModel {
    title: string;
    amount: number;
    currency: Currency;
}

export declare interface InvestmentEventLocation {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface InvestmentEventType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare type InvestmentEventViewModelCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type InvestmentEventViewModelTotalFeesCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface InvestmentEventViewModel {
    title: string;
    icon: string;
    date: Date;
    assetDetails: AssetDetails;
    amount: number;
    currency: InvestmentEventViewModelCurrencyEnum;
    changeState: ChangeState;
    extendedInfo: InvestmentEventItemViewModel[];
    feesInfo: FeeDetails[];
    totalFeesAmount: number;
    totalFeesCurrency: InvestmentEventViewModelTotalFeesCurrencyEnum;
}

export declare interface InvestmentEventViewModels {
    events: InvestmentEventViewModel[];
    total: number;
}

export declare interface InvestmentProgramStatus {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface InvestmentProgramType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface InvestmentRequestStatus {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface InvestmentRequestType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface InvestorsFinancialStatistic {
    deposit: number;
    withdraw: number;
    profitWithdraw: number;
}

export declare interface ItemsViewModelCopyTradingAccountInfo {
    items: CopyTradingAccountInfo[];
    total: number;
}

export declare interface ItemsViewModelReferralFriend {
    items: ReferralFriend[];
    total: number;
}

export declare interface ItemsViewModelRewardDetails {
    items: RewardDetails[];
    total: number;
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

export declare interface LevelsParamsInfo {
    minAvailableToInvest: number;
    maxAvailableToInvest: number;
    unverifiedAvailableToInvest: number;
    genesisRatioMin: number;
    genesisRatioMax: number;
    genesisRatioHighRisk: number;
    volumeScaleMin: number;
    volumeScaleMax: number;
    programAgeMax: number;
    ageByVolumeMax: number;
    investmentScaleMin: number;
    investmentScaleMax: number;
    investmentScaleHighRisk: number;
}

export declare interface LoginViewModel {
    password: string;
    rememberMe: boolean;
    twoFactorCode: string;
    recoveryCode: string;
    client: string;
    email: string;
    captchaCheckResult: CaptchaCheckResult;
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

export declare interface ManagerEvent {
    programs: string[];
    funds: string[];
}

export declare interface ManagerFinancialStatistic {
    successFee: number;
    entryFee: number;
    profit: number;
    balance: number;
}

export declare interface ManagerFundWithdrawInfo {
    withheldInvestment: number;
    exitFee: number;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

export declare interface ManagerFundWithdrawInfoOld {
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

export declare type ManagerPortfolioEventCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type ManagerPortfolioEventTypeEnum = "All" | "AssetStarted" | "ProgramPeriodStarts" | "ProgramPeriodEnds" | "InvestorInvest" | "InvestorWithdraw" | "ManagerInvest" | "ManagerWithdraw" | "AssetFinished" | "EntranceFee" | "ExitFee" | "ProgramStopOut" | "ProgramManagerTradingFeeAccrual" | "ProgramSignalSubscribe" | "ProgramBrokerChanged";

export declare type ManagerPortfolioEventProgramTypeEnum = "Program" | "Fund";

export declare interface ManagerPortfolioEvent {
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
    socialLinks: SocialLinkViewModel[];
}

export declare interface ManagerProfileDetails {
    managerProfile: PublicProfile;
    overview: ManagerOverview;
    programsCount: number;
    fundsCount: number;
}

export declare interface ManagerProgramCreateResult {
    programId: string;
    twoFactorRequired: boolean;
    twoFactor: TwoFactorAuthenticator;
}

export declare interface ManagerProgramWithdrawInfo {
    withheldInvestment: number;
    periodEnds: Date;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

export declare interface ManagerProgramWithdrawInfoOld {
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
    levelProgress: number;
    id: string;
    title: string;
    color: string;
    logo: string;
    url: string;
}

export declare interface ManagersList {
    managers: PublicProfile[];
    total: number;
}

export declare interface ManagersListOld {
    managers: PublicProfile[];
    total: number;
}

export declare interface MigrationRequest {
    dateCreate: Date;
    newLeverage: number;
    newBroker: BrokerOld;
}

export declare interface MigrationRequestOld {
    dateCreate: Date;
    newLeverage: number;
    newBroker: BrokerOld;
}

export declare interface MultiWalletExternalTransaction {
    id: string;
    currency: Currency;
    logo: string;
    date: Date;
    amount: number;
    type: MultiWalletExternalTransactionType;
    status: string;
    isEnableActions: boolean;
    statusUrl: string;
}

export declare interface MultiWalletExternalTransactionType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface MultiWalletExternalTransactionsViewModel {
    transactions: MultiWalletExternalTransaction[];
    total: number;
}

export declare interface MultiWalletFilters {
    transactionType: string[];
    externalTransactionType: string[];
}

export declare interface MultiWalletFiltersOld {
    transactionType: string[];
    externalTransactionType: string[];
}

export declare type MultiWalletTransactionCurrencyToEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface MultiWalletTransaction {
    id: string;
    currencyFrom: Currency;
    currencyTo: MultiWalletTransactionCurrencyToEnum;
    type: MultiWalletTransactionType;
    date: Date;
    status: MultiWalletTransactionStatus;
    logoFrom: string;
    logoTo: string;
    description: string;
    amount: number;
    amountTo: number;
}

export declare interface MultiWalletTransactionStatus {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface MultiWalletTransactionType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface MultiWalletTransactionsViewModel {
    transactions: MultiWalletTransaction[];
    total: number;
}

export declare interface NewExternalSignalAccountRequest {
    externalKeyId: string;
    volumeFee: number;
    monthlySubscriptionFee: number;
    title: string;
    description: string;
    logo: string;
}

export declare interface NewFundRequest {
    exitFee: number;
    assets: FundAssetPart[];
    entryFee: number;
    depositAmount: number;
    depositWalletId: string;
    title: string;
    description: string;
    logo: string;
}

export declare type NewProgramRequestTradesDelayEnum = "None" | "FiveMinutes" | "FifteenMinutes" | "ThirtyMinutes" | "OneHour" | "SixHours";

export declare interface NewProgramRequest {
    currency: Currency;
    periodLength: number;
    successFee: number;
    stopOutLevel: number;
    leverage: number;
    brokerAccountTypeId: string;
    signalSuccessFee: number;
    signalVolumeFee: number;
    isSignalProgram: boolean;
    investmentLimit: number;
    tradesDelay: NewProgramRequestTradesDelayEnum;
    entryFee: number;
    depositAmount: number;
    depositWalletId: string;
    title: string;
    description: string;
    logo: string;
}

export declare interface NotificationList {
    notifications: NotificationViewModel[];
    total: number;
}

export declare interface NotificationSettingConditionType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

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
    type: NotificationType;
    conditionType: NotificationSettingConditionType;
    conditionAmount: number;
}

export declare interface NotificationType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface NotificationViewModel {
    id: string;
    text: string;
    date: Date;
    type: NotificationType;
    assetId: string;
    managerId: string;
    logo: string;
    url: string;
    color: string;
    isUnread: boolean;
    assetType: InvestmentProgramType;
}

export declare interface OrderModel {
    id: string;
    login: string;
    ticket: string;
    symbol: string;
    volume: number;
    profit: number;
    direction: TradeDirectionType;
    date: Date;
    price: number;
    priceCurrent: number;
    entry: TradeEntryType;
    baseVolume: number;
    originalCommission: number;
    originalCommissionCurrency: string;
    commission: number;
    swap: number;
    showOriginalCommission: boolean;
    signalData: OrderModelSignalData;
}

export declare interface OrderModelSignalData {
    masters: SignalDataMaster[];
}

export declare interface OrderProgramData {
    title: string;
    level: number;
    levelProgress: number;
    color: string;
    url: string;
    logo: string;
}

export declare interface OrderSignalFee {
    amount: number;
    currency: Currency;
    type: FeeType;
}

export declare interface OrderSignalModel {
    providers: OrderSignalProgramInfo[];
    totalCommission: number;
    totalCommissionByType: FeeDetails[];
    tradingAccountId: string;
    currency: Currency;
    id: string;
    login: string;
    ticket: string;
    symbol: string;
    volume: number;
    profit: number;
    direction: TradeDirectionType;
    date: Date;
    price: number;
    priceCurrent: number;
    entry: TradeEntryType;
    baseVolume: number;
    originalCommission: number;
    originalCommissionCurrency: string;
    commission: number;
    swap: number;
    showOriginalCommission: boolean;
    signalData: OrderModelSignalData;
}

export declare interface OrderSignalProgramInfo {
    manager: ProfilePublic;
    program: OrderProgramData;
    programId: string;
    volume: number;
    priceOpenAvg: number;
    profit: number;
    firstOrderDate: Date;
    fees: OrderSignalFee[];
}

export declare type OrderTradingFeeCurrencyEnum = "BTC" | "ETH" | "USDT" | "GVT" | "Undefined" | "ADA" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface OrderTradingFee {
    amount: number;
    currency: OrderTradingFeeCurrencyEnum;
}

export declare interface OtherAssetsValue {
    amount: number;
    value: number;
    changePercent: number;
    changeValue: number;
}

export declare interface PartnershipDetails {
    totalReferralsL1: number;
    totalReferralsL2: number;
    totalAmount: number;
}

export declare interface PasswordModel {
    password: string;
}

export declare interface PeriodDate {
    dateFrom: Date;
    dateTo: Date;
}

export declare interface PeriodStatus {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface PersonalCopyTradingAccountInfo {
    isOwnSignal: boolean;
    isFavorite: boolean;
}

export declare type PersonalFundDetailsFullStatusEnum = "Pending" | "Active" | "Investing" | "Withdrawing" | "Ended";

export declare interface PersonalFundDetailsFull {
    withdrawPercent: number;
    canReallocate: boolean;
    availableReallocationPercents: number;
    nextReallocationPercents: Date;
    exitFeePersonal: number;
    isFavorite: boolean;
    isInvested: boolean;
    isOwnProgram: boolean;
    canCloseAsset: boolean;
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
    pendingOutputIsWithdrawAll: boolean;
    status: PersonalFundDetailsFullStatusEnum;
}

export declare interface PersonalFundDetailsFullOld {
    withdrawPercent: number;
    canReallocate: boolean;
    availableReallocationPercents: number;
    nextReallocationPercents: Date;
    exitFeePersonal: number;
    isFavorite: boolean;
    isInvested: boolean;
    isOwnProgram: boolean;
    canCloseAsset: boolean;
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
    pendingOutputIsWithdrawAll: boolean;
    status: AssetInvestmentStatus;
}

export declare type PersonalProgramDetailsFullStatusEnum = "Pending" | "Active" | "Investing" | "Withdrawing" | "Ended";

export declare interface PersonalProgramDetailsFull {
    isReinvest: boolean;
    gvtValue: number;
    showTwoFactorButton: boolean;
    signalSubscription: SignalSubscription;
    login: string;
    notificationAvailableToInvestId: string;
    canMakeSignalProvider: boolean;
    canChangePassword: boolean;
    migration: MigrationRequest;
    successFeePersonal: number;
    isFavorite: boolean;
    isInvested: boolean;
    isOwnProgram: boolean;
    canCloseAsset: boolean;
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
    pendingOutputIsWithdrawAll: boolean;
    status: PersonalProgramDetailsFullStatusEnum;
}

export declare interface PersonalProgramDetailsFullOld {
    isReinvest: boolean;
    gvtValue: number;
    showTwoFactorButton: boolean;
    signalSubscription: SignalSubscription;
    login: string;
    notificationAvailableToInvestId: string;
    canMakeSignalProvider: boolean;
    canChangePassword: boolean;
    migration: MigrationRequestOld;
    successFeePersonal: number;
    isFavorite: boolean;
    isInvested: boolean;
    isOwnProgram: boolean;
    canCloseAsset: boolean;
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
    pendingOutputIsWithdrawAll: boolean;
    status: AssetInvestmentStatus;
}

export declare interface PersonalSignalDetailsFull {
    subscriptionDate: Date;
    tradesCount: number;
    signalSubscription: SignalSubscription;
    profit: number;
    volume: number;
    isFavorite: boolean;
    isInvested: boolean;
    status: SignalSubscriberStatus;
    signalSettingsId: string;
}

export declare interface PlatformAsset {
    id: string;
    name: string;
    asset: string;
    description: string;
    icon: string;
    color: string;
    mandatoryFundPercent: number;
}

export declare interface PlatformAssets {
    assets: PlatformAsset[];
}

export declare interface PlatformCurrency {
    name: string;
    rateToGvt: number;
    color: string;
}

export declare interface PlatformCurrencyOld {
    name: string;
    rateToGvt: number;
    color: string;
}

export declare interface PlatformInfo {
    iOSVersion: IOsAppVersion;
    androidVersion: AndroidAppVersion;
    programsFacets: ProgramFacet[];
    fundsFacets: FundFacet[];
    programsInfo: ProgramsInfo;
    currencies: string[];
    programCurrencies: string[];
    platformCurrencies: PlatformCurrency[];
    enums: Enums;
}

export declare interface PlatformInfoOld {
    iOSVersion: IOsAppVersion;
    androidVersion: AndroidAppVersion;
    programsFacets: ProgramFacet[];
    fundsFacets: FundFacet[];
    programsInfo: ProgramsInfoOld;
    currencies: string[];
    programCurrencies: string[];
    platformCurrencies: PlatformCurrencyOld[];
    enums: EnumsOld;
}

export declare interface PlatformStatistic {
    managers: number;
    investors: number;
    profitWeek: number;
    investmentAmount: number;
    totalInvestorsProfit: number;
    totalProfit: number;
}

export declare interface PlatformStatisticOld {
    managers: number;
    investors: number;
    profitWeek: number;
    investmentAmount: number;
    totalInvestorsProfit: number;
    totalProfit: number;
}

export declare interface PowDetails {
    secureAlgorithm: SecureAlgorithm;
    difficulty: number;
    nonce: string;
}

export declare interface PowResult {
    prefix: string;
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
    verificationStatus: UserVerificationStatus;
}

export declare interface ProfileHeaderViewModel {
    id: string;
    name: string;
    email: string;
    avatar: string;
    countryCode: string;
    notificationsCount: number;
    favoritesCount: number;
    kycConfirmed: boolean;
    allowForex: boolean;
    isTwoFactorEnabled: boolean;
    isNewUser: boolean;
}

export declare interface ProfilePublic {
    id: string;
    username: string;
    avatar: string;
    registrationDate: Date;
    url: string;
    socialLinks: SocialLinkViewModel[];
}

export declare type ProgramBalanceChartProgramCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface ProgramBalanceChart {
    balance: number;
    programCurrency: ProgramBalanceChartProgramCurrencyEnum;
    balanceChart: ProgramBalanceChartElement[];
}

export declare interface ProgramBalanceChartElement {
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

export declare interface ProgramBalanceChartElementOld {
    date: Date;
    managerFunds: number;
    investorsFunds: number;
}

export declare interface ProgramBalanceChartOld {
    balance: number;
    programCurrency: Currency;
    balanceChart: ProgramBalanceChartElementOld[];
}

export declare interface ProgramCreateResult {
    programId: string;
    twoFactorRequired: boolean;
    twoFactor: TwoFactorAuthenticator;
}

export declare type ProgramDetailsCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type ProgramDetailsStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

export declare interface ProgramDetails {
    currency: ProgramDetailsCurrencyEnum;
    level: number;
    levelProgress: number;
    periodDuration: number;
    stopOutLevel: number;
    periodStarts: Date;
    periodEnds: Date;
    availableInvestmentInCurrency: number;
    availableInvestmentLimit: number;
    dashboardAssetsDetails: DashboardProgramDetails;
    statistic: ProgramDetailsListStatistic;
    personalDetails: PersonalProgramDetailsFull;
    tags: ProgramTag[];
    rating: ProgramDetailsRating;
    availableInvestment: number;
    availableInvestmentBase: number;
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

export declare type ProgramDetailsFullCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type ProgramDetailsFullTradesDelayEnum = "None" | "FiveMinutes" | "FifteenMinutes" | "ThirtyMinutes" | "OneHour" | "SixHours";

export declare type ProgramDetailsFullStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

export declare interface ProgramDetailsFull {
    currency: ProgramDetailsFullCurrencyEnum;
    level: number;
    levelProgress: number;
    periodDuration: number;
    periodStarts: Date;
    periodEnds: Date;
    entryFee: number;
    entryFeeSelected: number;
    entryFeeCurrent: number;
    successFee: number;
    successFeeSelected: number;
    successFeeCurrent: number;
    stopOutLevel: number;
    stopOutLevelSelected: number;
    stopOutLevelCurrent: number;
    isReinvesting: boolean;
    isSignalProgram: boolean;
    signalSuccessFee: number;
    signalVolumeFee: number;
    leverageMin: number;
    leverageMax: number;
    ageDays: number;
    genesisRatio: number;
    investmentScale: number;
    volumeScale: number;
    tradesDelay: ProgramDetailsFullTradesDelayEnum;
    availableInvestment: number;
    availableInvestmentBase: number;
    availableInvestmentLimit: number;
    totalAvailableInvestment: number;
    brokerDetails: BrokerDetails;
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

export declare interface ProgramDetailsFullOld {
    currency: Currency;
    level: number;
    levelProgress: number;
    periodDuration: number;
    periodStarts: Date;
    periodEnds: Date;
    entryFeeSelected: number;
    entryFeeCurrent: number;
    successFeeSelected: number;
    successFeeCurrent: number;
    stopOutLevelSelected: number;
    stopOutLevelCurrent: number;
    isReinvesting: boolean;
    isSignalProgram: boolean;
    signalSuccessFee: number;
    signalVolumeFee: number;
    leverageMin: number;
    leverageMax: number;
    ageDays: number;
    genesisRatio: number;
    investmentScale: number;
    volumeScale: number;
    tradesDelay: TradesDelay;
    availableInvestmentBase: number;
    availableInvestmentLimit: number;
    totalAvailableInvestment: number;
    brokerDetails: BrokerDetailsOld;
    statistic: ProgramStatistic;
    personalProgramDetails: PersonalProgramDetailsFullOld;
    tags: ProgramTag[];
    id: string;
    logo: string;
    url: string;
    color: string;
    description: string;
    title: string;
    ipfsHash: string;
    creationDate: Date;
    status: InvestmentProgramStatus;
    manager: ProfilePublic;
}

export declare interface ProgramDetailsListStatistic {
    balance: AmountWithCurrency;
    currentValue: number;
    profitPercent: number;
    profitValue: number;
    drawdownPercent: number;
    investorsCount: number;
    tradesCount: number;
}

export declare interface ProgramDetailsOld {
    currency: Currency;
    level: number;
    levelProgress: number;
    periodDuration: number;
    stopOutLevel: number;
    periodStarts: Date;
    periodEnds: Date;
    availableInvestmentInCurrency: number;
    availableInvestmentLimit: number;
    dashboardAssetsDetails: DashboardProgramDetailsOld;
    statistic: ProgramDetailsListStatistic;
    personalDetails: PersonalProgramDetailsFullOld;
    tags: ProgramTag[];
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    status: InvestmentProgramStatus;
    creationDate: Date;
    manager: ProfilePublic;
    chart: ChartSimple[];
}

export declare interface ProgramDetailsRating {
    rating: number;
    profit: number;
    canLevelUp: boolean;
    topPercent: number;
}

export declare interface ProgramFacet {
    sorting: ProgramsFilterSorting;
    id: string;
    title: string;
    description: string;
    logo: string;
    url: string;
    sortType: FacetSortType;
    timeframe: Timeframe;
}

export declare interface ProgramFilters {
    programTags: ProgramTag[];
    actionType: string[];
    customNotificationType: string[];
}

export declare interface ProgramFiltersOld {
    programTags: ProgramTag[];
    actionType: string[];
    customNotificationType: string[];
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
    programCurrencyMinInvestment: number;
    entryFee: number;
    gvCommission: number;
    rate: number;
    isOwnProgram: boolean;
}

export declare interface ProgramInvestInfoOld {
    periodEnds: Date;
    availableToInvestBase: number;
    title: string;
    programCurrencyMinInvestment: number;
    entryFee: number;
    gvCommission: number;
    rate: number;
    isOwnProgram: boolean;
}

export declare interface ProgramLevelInfo {
    isKycPassed: boolean;
    level: number;
    levelProgressPercent: number;
    genesisRatio: number;
    programAge: number;
    weightedVolumeScale: number;
    managerBalance: number;
    investmentScale: number;
    totalAvailableToInvest: number;
}

export declare interface ProgramMinimumDeposit {
    minimumDepositsAmount: any;
}

export declare interface ProgramMinimumDepositOld {
    minimumDepositsAmount: any;
}

export declare interface ProgramNotificationSettingList {
    level: number;
    levelProgress: number;
    settingsCustom: NotificationSettingViewModel[];
    assetId: string;
    title: string;
    url: string;
    logo: string;
    color: string;
    settingsGeneral: NotificationSettingViewModel[];
}

export declare interface ProgramPeriodViewModel {
    dateFrom: Date;
    dateTo: Date;
    periodLength: number;
    status: PeriodStatus;
    number: number;
    profit: number;
    balance: number;
    investors: number;
    managerDeposit: number;
    managerWithdraw: number;
    managerCommissionRebate: number;
    investorsDeposit: number;
    investorsWithdraw: number;
    investorsProfitWithdraw: number;
    platformSuccessFee: number;
    managerStatistic: ManagerFinancialStatistic;
}

export declare interface ProgramPeriodsViewModel {
    periods: ProgramPeriodViewModel[];
    total: number;
}

export declare type ProgramProfitChartProgramCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface ProgramProfitChart {
    equityChart: ChartSimple[];
    totalProfit: number;
    timeframeProfit: number;
    programCurrency: ProgramProfitChartProgramCurrencyEnum;
    trades: number;
    successTradesPercent: number;
    profitFactor: number;
    periods: PeriodDate[];
    lastPeriodStarts: Date;
    lastPeriodEnds: Date;
    tradingVolume: number;
    balance: number;
    investors: number;
    profitChangePercent: number;
    sharpeRatio: number;
    sortinoRatio: number;
    calmarRatio: number;
    maxDrawdown: number;
    rate: number;
}

export declare interface ProgramProfitChartOld {
    equityChart: ChartSimple[];
    totalProfit: number;
    timeframeProfit: number;
    programCurrency: Currency;
    trades: number;
    successTradesPercent: number;
    profitFactor: number;
    periods: PeriodDate[];
    lastPeriodStarts: Date;
    lastPeriodEnds: Date;
    tradingVolume: number;
    balance: number;
    investors: number;
    profitChangePercent: number;
    sharpeRatio: number;
    sortinoRatio: number;
    calmarRatio: number;
    maxDrawdown: number;
    rate: number;
}

export declare interface ProgramPwdUpdate {
    password: string;
    twoFactorCode: string;
}

export declare type ProgramRequestCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type ProgramRequestTypeEnum = "Invest" | "Withdrawal";

export declare type ProgramRequestStatusEnum = "New" | "Executed" | "Cancelled";

export declare type ProgramRequestProgramTypeEnum = "Program" | "Fund";

export declare interface ProgramRequest {
    id: string;
    programId: string;
    date: Date;
    value: number;
    valueGvt: number;
    withdrawAll: boolean;
    entryFee: number;
    exitFee: number;
    successFee: number;
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

export declare interface ProgramRequestOld {
    id: string;
    programId: string;
    date: Date;
    value: number;
    valueGvt: number;
    withdrawAll: boolean;
    entryFee: number;
    exitFee: number;
    successFee: number;
    currency: Currency;
    fundWithdrawPercent: number;
    type: InvestmentRequestType;
    status: InvestmentRequestStatus;
    logo: string;
    title: string;
    color: string;
    canCancelRequest: boolean;
    programType: InvestmentProgramType;
}

export declare interface ProgramRequests {
    requests: ProgramRequest[];
    total: number;
    totalValue: number;
}

export declare interface ProgramRequestsOld {
    requests: ProgramRequestOld[];
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
    startCurrency: Currency;
    investedAmount: number;
    investedCurrency: Currency;
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
    programType: InvestmentProgramType;
    successFeeCurrency: Currency;
    logo: string;
    title: string;
    entryFee: number;
    entryFeePercent: number;
    successFee: number;
    successFeePercent: number;
    level: number;
    levelProgress: number;
    exitFee: number;
    exitFeePercent: number;
    color: string;
}

export declare type ProgramUpdateTradesDelayEnum = "None" | "FiveMinutes" | "FifteenMinutes" | "ThirtyMinutes" | "OneHour" | "SixHours";

export declare interface ProgramUpdate {
    title: string;
    description: string;
    logo: string;
    entryFee: number;
    exitFee: number;
    successFee: number;
    stopOutLevel: number;
    investmentLimit: number;
    tradesDelay: ProgramUpdateTradesDelayEnum;
}

export declare interface ProgramWithdrawInfo {
    periodEnds: Date;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

export declare interface ProgramWithdrawInfoOld {
    periodEnds: Date;
    title: string;
    availableToWithdraw: number;
    rate: number;
}

export declare interface ProgramsFilterSorting {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

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
    managerMaxSignalVolumeFee: number;
    managerMinSignalVolumeFee: number;
    managerMaxSignalSuccessFee: number;
    managerMinSignalSuccessFee: number;
    periods: number[];
}

export declare interface ProgramsInfoOld {
    managerProgramInvestment: number;
    managerProgramInvestmentUSD: number;
    managerProgramInvestmentUSDT: number;
    managerProgramInvestmentBTC: number;
    managerProgramInvestmentETH: number;
    managerMaxEntryFee: number;
    managerMaxSuccessFee: number;
    managerFundInvestment: number;
    managerMaxExitFee: number;
    managerMaxSignalVolumeFee: number;
    managerMinSignalVolumeFee: number;
    managerMaxSignalSuccessFee: number;
    managerMinSignalSuccessFee: number;
    periods: number[];
}

export declare interface ProgramsLevelsInfo {
    levels: LevelInfo[];
}

export declare interface ProgramsList {
    programs: ProgramDetails[];
    total: number;
}

export declare interface ProgramsListOld {
    programs: ProgramDetailsOld[];
    total: number;
}

export declare interface PublicProfile {
    id: string;
    username: string;
    about: string;
    avatar: string;
    regDate: Date;
    assets: string[];
    url: string;
    socialLinks: SocialLinkViewModel[];
}

export declare interface RateItem {
    currency: Currency;
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

export declare interface ReallocationModel {
    date: Date;
    parts: FundAssetPartWithIcon[];
}

export declare interface ReallocationsViewModel {
    reallocations: ReallocationModel[];
    total: number;
}

export declare interface RecoveryCode {
    code: string;
    isActive: boolean;
}

export declare interface RecoveryCodesViewModel {
    codes: RecoveryCode[];
    authToken: string;
}

export declare interface ReferralFriend {
    date: Date;
    emailMask: string;
}

export declare interface RegisterInvestorViewModel {
    password: string;
    confirmPassword: string;
    refCode: string;
    isAuto: boolean;
    email: string;
    captchaCheckResult: CaptchaCheckResult;
}

export declare interface RegisterManagerViewModel {
    userName: string;
    password: string;
    confirmPassword: string;
    refCode: string;
    isAuto: boolean;
    email: string;
    captchaCheckResult: CaptchaCheckResult;
}

export declare interface RegisterViewModel {
    password: string;
    confirmPassword: string;
    userName: string;
    refCode: string;
    isAuto: boolean;
    email: string;
    captchaCheckResult: CaptchaCheckResult;
}

export declare interface ResendConfirmationViewModel {
    email: string;
    captchaCheckResult: CaptchaCheckResult;
}

export declare interface ResetPasswordViewModel {
    userId: string;
    code: string;
    password: string;
    confirmPassword: string;
}

export declare interface RewardDetails {
    date: Date;
    currency: Currency;
    amount: number;
}

export declare interface RewardsHistoryViewModel {
    amountTotal: number;
    items: RewardDetails[];
    total: number;
}

export declare interface SearchViewModel {
    programs: ProgramsListOld;
    funds: FundsListOld;
    managers: ManagersList;
}

export declare interface SearchViewModelOld {
    programs: ProgramsListOld;
    funds: FundsListOld;
    managers: ManagersListOld;
}

export declare interface SecureAlgorithm {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare type SignalAccountDetailsStatusEnum = "None" | "Pending" | "ErrorCreating" | "Active" | "Closed" | "Archived" | "ClosedDueToInactivity";

export declare interface SignalAccountDetails {
    tags: ProgramTag[];
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    status: SignalAccountDetailsStatusEnum;
    creationDate: Date;
    manager: ProfilePublic;
    chart: ChartSimple[];
}

export declare interface SignalAccountsList {
    signalAccounts: SignalAccountDetails[];
    total: number;
}

export declare interface SignalDataMaster {
    login: string;
    share: number;
}

export declare interface SignalDetachMode {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface SignalDetails {
    personalDetails: PersonalSignalDetailsFull;
    currency: Currency;
    level: number;
    levelProgress: number;
    tags: ProgramTag[];
    subscribers: number;
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    status: InvestmentProgramStatus;
    creationDate: Date;
    manager: ProfilePublic;
    chart: ChartSimple[];
}

export declare interface SignalFee {
    title: string;
    type: FeeType;
    value: number;
    currency: Currency;
}

export declare interface SignalProviderSubscribers {
    subscribers: SignalSubscriber[];
    total: number;
}

export declare interface SignalSubscriber {
    number: number;
    trades: number;
    profit: number;
    volume: number;
    subscriptionDate: Date;
    unsubscriptionDate: Date;
    status: SignalSubscriberStatus;
    totalCommissionAmount: number;
    totalCommissionCurrency: Currency;
    totalSuccessFeeAmount: number;
    totalSuccessFeeCurrency: Currency;
    totalVolumeFeeAmount: number;
    totalVolumeFeeCurrency: Currency;
}

export declare interface SignalSubscriberStatus {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare type SignalSubscriptionFixedCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface SignalSubscription {
    hasSignalAccount: boolean;
    hasActiveSubscription: boolean;
    mode: SubscriptionMode;
    percent: number;
    openTolerancePercent: number;
    fixedVolume: number;
    fixedCurrency: SignalSubscriptionFixedCurrencyEnum;
    totalProfit: number;
    totalVolume: number;
}

export declare interface SignalTradingEvent {
    date: Date;
    message: string;
}

export declare interface SignalTradingEvents {
    events: SignalTradingEvent[];
    total: number;
}

export declare interface SignalsList {
    programs: SignalDetails[];
    total: number;
}

export declare interface SocialLinkType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface SocialLinkViewModel {
    url: string;
    logo: string;
    name: string;
    value: string;
    type: SocialLinkType;
}

export declare interface SocialLinksViewModel {
    socialLinks: SocialLinkViewModel[];
}

export declare interface SubscriptionMode {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface Timeframe {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare type TotalCommissionCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type TotalCommissionTypeEnum = "Undefined" | "GvProgramEntry" | "GvProgramSuccess" | "GvFundEntry" | "GvGmGvtHolderFee" | "ManagerProgramEntry" | "ManagerProgramSuccess" | "ManagerFundEntry" | "ManagerFundExit" | "GvWithdrawal" | "ManagerSignalMasterSuccessFee" | "ManagerSignalMasterVolumeFee" | "GvSignalSuccessFee";

export declare interface TotalCommission {
    amount: number;
    currency: TotalCommissionCurrencyEnum;
    type: TotalCommissionTypeEnum;
    title: string;
}

export declare interface TradeDirectionType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface TradeEntryType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface TradesDelay {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface TradesSignalViewModel {
    showSwaps: boolean;
    showTickets: boolean;
    trades: OrderSignalModel[];
    total: number;
}

export declare interface TradesViewModel {
    showSwaps: boolean;
    showTickets: boolean;
    trades: OrderModel[];
    tradesDelay: TradesDelay;
    total: number;
}

export declare type TransactionDetailsGvCommissionCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface TransactionDetails {
    type: TransactionDetailsType;
    programDetails: ProgramTransactionDetails;
    convertingDetails: ConvertingDetails;
    externalTransactionDetails: ExternalTransactionDetails;
    status: MultiWalletTransactionStatus;
    signalFees: SignalFee[];
    currency: Currency;
    currencyName: string;
    currencyLogo: string;
    gvCommission: number;
    gvCommissionCurrency: TransactionDetailsGvCommissionCurrencyEnum;
    gvCommissionPercent: number;
    amount: number;
}

export declare interface TransactionDetailsType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

export declare interface TransferRequestType {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

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

export declare interface TwoFactorCodeWithPassword {
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

export declare interface UpdateSocialLinkViewModel {
    type: SocialLinkType;
    value: string;
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

export declare interface UserVerificationStatus {
}

export declare function constructFromObject(data: any): module:model/AssetFilterType;

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
    currency: Currency;
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
    currency: Currency;
    available: number;
    invested: number;
    pending: number;
    total: number;
    currencyCcy: Currency;
    availableCcy: number;
    investedCcy: number;
    pendingCcy: number;
    totalCcy: number;
}

export declare interface WalletDeposit {
    currency: Currency;
    depositAddress: string;
}

export declare interface WalletDepositSummary {
    wallets: WalletDeposit[];
}

export declare type WalletInfoCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface WalletInfo {
    currency: WalletInfoCurrencyEnum;
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

export declare interface WalletSummary {
    totalBalanceGVT: number;
    totalBalanceCurrency: number;
    investedGVT: number;
    investedCurrency: number;
    availableGVT: number;
    availableCurrency: number;
}

export declare type WalletTransactionSourceTypeEnum = "Wallet" | "Program" | "Fund" | "ProgramRequest" | "FundRequest" | "WithdrawalRequest" | "PaymentTransaction" | "Blockchain" | "GenesisVisionPlatform" | "SignalMasterSetting" | "SignalTradingAccount";

export declare type WalletTransactionSourceCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare type WalletTransactionActionEnum = "Transfer" | "ProgramOpen" | "ProgramProfit" | "ProgramInvest" | "ProgramWithdrawal" | "ProgramRefundPartialExecution" | "ProgramRefundClose" | "ProgramRefundStopOut" | "ProgramRequestInvest" | "ProgramRequestWithdrawal" | "ProgramRequestCancel" | "PayingTradingFee" | "SignalSubscriberPayingFee" | "SignalProviderReceiveFee";

export declare type WalletTransactionDestinationTypeEnum = "Wallet" | "Program" | "Fund" | "ProgramRequest" | "FundRequest" | "WithdrawalRequest" | "PaymentTransaction" | "Blockchain" | "GenesisVisionPlatform" | "SignalMasterSetting" | "SignalTradingAccount";

export declare type WalletTransactionDestinationCurrencyEnum = "Undefined" | "GVT" | "ETH" | "BTC" | "ADA" | "USDT" | "XRP" | "BCH" | "LTC" | "DOGE" | "BNB" | "USD" | "EUR";

export declare interface WalletTransaction {
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

export declare interface WalletTransactionsViewModel {
    transactions: WalletTransaction[];
    total: number;
}

export declare interface WalletWithdrawalInfo {
    currency: Currency;
    description: string;
    logo: string;
    commission: number;
    rateToGvt: number;
    availableToWithdrawal: number;
}

export declare interface WalletsGrandTotal {
    currency: Currency;
    available: number;
    invested: number;
    pending: number;
    total: number;
    currencyCcy: Currency;
    availableCcy: number;
    investedCcy: number;
    pendingCcy: number;
    totalCcy: number;
}

export declare interface WalletsInfo {
    wallets: WalletInfo[];
}

export declare type WithdrawalInfoStatusEnum = "New" | "ReadyForWithdraw" | "InProcess" | "Done" | "Error" | "Rejected" | "Cancelled";

export declare interface WithdrawalInfo {
    wallet: string;
    status: WithdrawalInfoStatusEnum;
    canResendEmail: boolean;
    canCancelRequest: boolean;
}

export declare interface WithdrawalSummary {
    availableToWithdrawal: number;
    wallets: WalletWithdrawalInfo[];
}

