export declare module ApiClient {
    var basePath: string;
    var authentications: string[];
    var defaultHeaders: string[];
    var timeout: number;
    var cache: boolean;
    var enableCookies: any;
    function paramToString(param: any): string;
    function buildUrl(path: string, pathParams: any): string;
    function isJsonMime(contentType: string): boolean;
    function jsonPreferredMime(contentTypes: string[]): string;
    function isFileParam(param: any): boolean;
    function normalizeParams(params: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
    enum CollectionFormatEnum {
        CSV,
        SSV,
        TSV,
        PIPES,
        MULTI
    }
    function buildCollectionParam(param: Array, collectionFormat: module:ApiClient.CollectionFormatEnum): string | Array;
    function applyAuthToRequest(request: any, authNames: string[]): void;
    function deserialize(response: any, returnType: string | string[] | {
        [key: string]: any;
    } | ((...params: any[]) => any)): any;
    function callApi(path: string, httpMethod: string, pathParams: {
        [key: string]: string;
    }, queryParams: {
        [key: string]: any;
    }, collectionQueryParams: {
        [key: string]: any;
    }, headerParams: {
        [key: string]: any;
    }, formParams: {
        [key: string]: any;
    }, bodyParam: any, authNames: string[], contentTypes: string[], accepts: string[], returnType: string | Array | ObjectFunction): Promise;
    function parseDate(str: string): Date;
    function convertToType(data: string | any, type: string | string[] | {
        [key: string]: any;
    } | ((...params: any[]) => any)): any;
    function constructFromObject(data: any | Array, obj: any | Array): void;
    var instance: module:ApiClient;
}

export declare module ApiClient {
    var basePath: string;
    var authentications: string[];
    var defaultHeaders: string[];
    var timeout: number;
    var cache: boolean;
    var enableCookies: any;
    function paramToString(param: any): string;
    function buildUrl(path: string, pathParams: any): string;
    function isJsonMime(contentType: string): boolean;
    function jsonPreferredMime(contentTypes: string[]): string;
    function isFileParam(param: any): boolean;
    function normalizeParams(params: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
    enum CollectionFormatEnum {
        CSV,
        SSV,
        TSV,
        PIPES,
        MULTI
    }
    function buildCollectionParam(param: Array, collectionFormat: module:ApiClient.CollectionFormatEnum): string | Array;
    function applyAuthToRequest(request: any, authNames: string[]): void;
    function deserialize(response: any, returnType: string | string[] | {
        [key: string]: any;
    } | ((...params: any[]) => any)): any;
    function callApi(path: string, httpMethod: string, pathParams: {
        [key: string]: string;
    }, queryParams: {
        [key: string]: any;
    }, collectionQueryParams: {
        [key: string]: any;
    }, headerParams: {
        [key: string]: any;
    }, formParams: {
        [key: string]: any;
    }, bodyParam: any, authNames: string[], contentTypes: string[], accepts: string[], returnType: string | Array | ObjectFunction): Promise;
    function parseDate(str: string): Date;
    function convertToType(data: string | any, type: string | string[] | {
        [key: string]: any;
    } | ((...params: any[]) => any)): any;
    function constructFromObject(data: any | Array, obj: any | Array): void;
    var instance: module:ApiClient;
}

export declare module api/AuthApi {
    function v10Auth2faConfirmPostWithHttpInfo(authorization: string, opts: {
        model: module:model/TwoFactorAuthenticatorConfirm;
    }): Promise;
    function v10Auth2faConfirmPost(authorization: string, opts: {
        model: module:model/TwoFactorAuthenticatorConfirm;
    }): Promise;
    function v10Auth2faCreatePostWithHttpInfo(authorization: string): Promise;
    function v10Auth2faCreatePost(authorization: string): Promise;
    function v10Auth2faDisablePostWithHttpInfo(authorization: string, opts: {
        model: module:model/TwoFactorCodeModel;
    }): Promise;
    function v10Auth2faDisablePost(authorization: string, opts: {
        model: module:model/TwoFactorCodeModel;
    }): Promise;
    function v10Auth2faGetWithHttpInfo(authorization: string): Promise;
    function v10Auth2faGet(authorization: string): Promise;
    function v10Auth2faRecoverycodesNewPostWithHttpInfo(authorization: string, opts: {
        model: module:model/PasswordModel;
    }): Promise;
    function v10Auth2faRecoverycodesNewPost(authorization: string, opts: {
        model: module:model/PasswordModel;
    }): Promise;
    function v10Auth2faRecoverycodesPostWithHttpInfo(authorization: string, opts: {
        model: module:model/PasswordModel;
    }): Promise;
    function v10Auth2faRecoverycodesPost(authorization: string, opts: {
        model: module:model/PasswordModel;
    }): Promise;
    function v10AuthPasswordChangePostWithHttpInfo(authorization: string, opts: {
        model: module:model/ChangePasswordViewModel;
    }): Promise;
    function v10AuthPasswordChangePost(authorization: string, opts: {
        model: module:model/ChangePasswordViewModel;
    }): Promise;
    function v10AuthPasswordForgotInvestorPostWithHttpInfo(opts: {
        model: module:model/ForgotPasswordViewModel;
    }): Promise;
    function v10AuthPasswordForgotInvestorPost(opts: {
        model: module:model/ForgotPasswordViewModel;
    }): Promise;
    function v10AuthPasswordForgotManagerPostWithHttpInfo(opts: {
        model: module:model/ForgotPasswordViewModel;
    }): Promise;
    function v10AuthPasswordForgotManagerPost(opts: {
        model: module:model/ForgotPasswordViewModel;
    }): Promise;
    function v10AuthPasswordResetPostWithHttpInfo(opts: {
        model: module:model/ResetPasswordViewModel;
    }): Promise;
    function v10AuthPasswordResetPost(opts: {
        model: module:model/ResetPasswordViewModel;
    }): Promise;
    function v10AuthPhoneCodePostWithHttpInfo(authorization: string): Promise;
    function v10AuthPhoneCodePost(authorization: string): Promise;
    function v10AuthPhoneVerifyPostWithHttpInfo(authorization: string, opts: {
        code: string;
    }): Promise;
    function v10AuthPhoneVerifyPost(authorization: string, opts: {
        code: string;
    }): Promise;
    function v10AuthResendconfirmationlinkPostWithHttpInfo(opts: {
        model: module:model/ResendConfirmationViewModel;
    }): Promise;
    function v10AuthResendconfirmationlinkPost(opts: {
        model: module:model/ResendConfirmationViewModel;
    }): Promise;
    function v10AuthSigninInvestorPostWithHttpInfo(opts: {
        model: module:model/LoginViewModel;
    }): Promise;
    function v10AuthSigninInvestorPost(opts: {
        model: module:model/LoginViewModel;
    }): Promise;
    function v10AuthSigninManagerPostWithHttpInfo(opts: {
        model: module:model/LoginViewModel;
    }): Promise;
    function v10AuthSigninManagerPost(opts: {
        model: module:model/LoginViewModel;
    }): Promise;
    function v10AuthSignupConfirmPostWithHttpInfo(opts: {
        userId: string;
        code: string;
    }): Promise;
    function v10AuthSignupConfirmPost(opts: {
        userId: string;
        code: string;
    }): Promise;
    function v10AuthSignupInvestorPostWithHttpInfo(opts: {
        model: module:model/RegisterInvestorViewModel;
    }): Promise;
    function v10AuthSignupInvestorPost(opts: {
        model: module:model/RegisterInvestorViewModel;
    }): Promise;
    function v10AuthSignupManagerPostWithHttpInfo(opts: {
        model: module:model/RegisterManagerViewModel;
    }): Promise;
    function v10AuthSignupManagerPost(opts: {
        model: module:model/RegisterManagerViewModel;
    }): Promise;
    function v10AuthTokenDevicesLogoutPostWithHttpInfo(authorization: string): Promise;
    function v10AuthTokenDevicesLogoutPost(authorization: string): Promise;
    function v10AuthTokenUpdatePostWithHttpInfo(authorization: string): Promise;
    function v10AuthTokenUpdatePost(authorization: string): Promise;
}

export declare module api/AuthApi {
    function v10Auth2faConfirmPostWithHttpInfo(authorization: string, opts: {
        model: module:model/TwoFactorAuthenticatorConfirm;
    }): Promise;
    function v10Auth2faConfirmPost(authorization: string, opts: {
        model: module:model/TwoFactorAuthenticatorConfirm;
    }): Promise;
    function v10Auth2faCreatePostWithHttpInfo(authorization: string): Promise;
    function v10Auth2faCreatePost(authorization: string): Promise;
    function v10Auth2faDisablePostWithHttpInfo(authorization: string, opts: {
        model: module:model/TwoFactorCodeModel;
    }): Promise;
    function v10Auth2faDisablePost(authorization: string, opts: {
        model: module:model/TwoFactorCodeModel;
    }): Promise;
    function v10Auth2faGetWithHttpInfo(authorization: string): Promise;
    function v10Auth2faGet(authorization: string): Promise;
    function v10Auth2faRecoverycodesNewPostWithHttpInfo(authorization: string, opts: {
        model: module:model/PasswordModel;
    }): Promise;
    function v10Auth2faRecoverycodesNewPost(authorization: string, opts: {
        model: module:model/PasswordModel;
    }): Promise;
    function v10Auth2faRecoverycodesPostWithHttpInfo(authorization: string, opts: {
        model: module:model/PasswordModel;
    }): Promise;
    function v10Auth2faRecoverycodesPost(authorization: string, opts: {
        model: module:model/PasswordModel;
    }): Promise;
    function v10AuthPasswordChangePostWithHttpInfo(authorization: string, opts: {
        model: module:model/ChangePasswordViewModel;
    }): Promise;
    function v10AuthPasswordChangePost(authorization: string, opts: {
        model: module:model/ChangePasswordViewModel;
    }): Promise;
    function v10AuthPasswordForgotInvestorPostWithHttpInfo(opts: {
        model: module:model/ForgotPasswordViewModel;
    }): Promise;
    function v10AuthPasswordForgotInvestorPost(opts: {
        model: module:model/ForgotPasswordViewModel;
    }): Promise;
    function v10AuthPasswordForgotManagerPostWithHttpInfo(opts: {
        model: module:model/ForgotPasswordViewModel;
    }): Promise;
    function v10AuthPasswordForgotManagerPost(opts: {
        model: module:model/ForgotPasswordViewModel;
    }): Promise;
    function v10AuthPasswordResetPostWithHttpInfo(opts: {
        model: module:model/ResetPasswordViewModel;
    }): Promise;
    function v10AuthPasswordResetPost(opts: {
        model: module:model/ResetPasswordViewModel;
    }): Promise;
    function v10AuthPhoneCodePostWithHttpInfo(authorization: string): Promise;
    function v10AuthPhoneCodePost(authorization: string): Promise;
    function v10AuthPhoneVerifyPostWithHttpInfo(authorization: string, opts: {
        code: string;
    }): Promise;
    function v10AuthPhoneVerifyPost(authorization: string, opts: {
        code: string;
    }): Promise;
    function v10AuthResendconfirmationlinkPostWithHttpInfo(opts: {
        model: module:model/ResendConfirmationViewModel;
    }): Promise;
    function v10AuthResendconfirmationlinkPost(opts: {
        model: module:model/ResendConfirmationViewModel;
    }): Promise;
    function v10AuthSigninInvestorPostWithHttpInfo(opts: {
        model: module:model/LoginViewModel;
    }): Promise;
    function v10AuthSigninInvestorPost(opts: {
        model: module:model/LoginViewModel;
    }): Promise;
    function v10AuthSigninManagerPostWithHttpInfo(opts: {
        model: module:model/LoginViewModel;
    }): Promise;
    function v10AuthSigninManagerPost(opts: {
        model: module:model/LoginViewModel;
    }): Promise;
    function v10AuthSignupConfirmPostWithHttpInfo(opts: {
        userId: string;
        code: string;
    }): Promise;
    function v10AuthSignupConfirmPost(opts: {
        userId: string;
        code: string;
    }): Promise;
    function v10AuthSignupInvestorPostWithHttpInfo(opts: {
        model: module:model/RegisterInvestorViewModel;
    }): Promise;
    function v10AuthSignupInvestorPost(opts: {
        model: module:model/RegisterInvestorViewModel;
    }): Promise;
    function v10AuthSignupManagerPostWithHttpInfo(opts: {
        model: module:model/RegisterManagerViewModel;
    }): Promise;
    function v10AuthSignupManagerPost(opts: {
        model: module:model/RegisterManagerViewModel;
    }): Promise;
    function v10AuthTokenDevicesLogoutPostWithHttpInfo(authorization: string): Promise;
    function v10AuthTokenDevicesLogoutPost(authorization: string): Promise;
    function v10AuthTokenUpdatePostWithHttpInfo(authorization: string): Promise;
    function v10AuthTokenUpdatePost(authorization: string): Promise;
}

export declare module api/BrokersApi {
    function v10BrokersGetWithHttpInfo(): Promise;
    function v10BrokersGet(): Promise;
}

export declare module api/BrokersApi {
    function v10BrokersGetWithHttpInfo(): Promise;
    function v10BrokersGet(): Promise;
}

export declare module api/FileApi {
    function v10FileByIdGetWithHttpInfo(id: string): Promise;
    function v10FileByIdGet(id: string): Promise;
    function v10FileDocumentUploadPostWithHttpInfo(authorization: string, uploadedFile: File): Promise;
    function v10FileDocumentUploadPost(authorization: string, uploadedFile: File): Promise;
    function v10FileUploadPostWithHttpInfo(uploadedFile: File, opts: {
        authorization: string;
    }): Promise;
    function v10FileUploadPost(uploadedFile: File, opts: {
        authorization: string;
    }): Promise;
}

export declare module api/FileApi {
    function v10FileByIdGetWithHttpInfo(id: string): Promise;
    function v10FileByIdGet(id: string): Promise;
    function v10FileDocumentUploadPostWithHttpInfo(authorization: string, uploadedFile: File): Promise;
    function v10FileDocumentUploadPost(authorization: string, uploadedFile: File): Promise;
    function v10FileUploadPostWithHttpInfo(uploadedFile: File, opts: {
        authorization: string;
    }): Promise;
    function v10FileUploadPost(uploadedFile: File, opts: {
        authorization: string;
    }): Promise;
}

export declare module api/FundsApi {
    function v10FundsAssetsGetWithHttpInfo(): Promise;
    function v10FundsAssetsGet(): Promise;
    function v10FundsByIdAssetsGetWithHttpInfo(id: string): Promise;
    function v10FundsByIdAssetsGet(id: string): Promise;
    function v10FundsByIdChartsBalanceGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10FundsByIdChartsBalanceGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10FundsByIdChartsProfitGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10FundsByIdChartsProfitGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10FundsByIdFavoriteAddPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10FundsByIdFavoriteAddPost(id: string, authorization: string): Promise;
    function v10FundsByIdFavoriteRemovePostWithHttpInfo(id: string, authorization: string): Promise;
    function v10FundsByIdFavoriteRemovePost(id: string, authorization: string): Promise;
    function v10FundsByIdGetWithHttpInfo(id: string, opts: {
        authorization: string;
        currencySecondary: module:model/String;
    }): Promise;
    function v10FundsByIdGet(id: string, opts: {
        authorization: string;
        currencySecondary: module:model/String;
    }): Promise;
    function v10FundsGetWithHttpInfo(opts: {
        authorization: string;
        sorting: module:model/String;
        currencySecondary: module:model/String;
        statisticDateFrom: Date;
        statisticDateTo: Date;
        chartPointsCount: number;
        mask: string;
        facetId: string;
        isFavorite: boolean;
        isEnabled: boolean;
        hasInvestorsForAll: boolean;
        hasInvestorsForClosed: boolean;
        ids: string[];
        managerId: string;
        programManagerId: string;
        status: module:model/String[];
        skip: number;
        take: number;
    }): Promise;
    function v10FundsGet(opts: {
        authorization: string;
        sorting: module:model/String;
        currencySecondary: module:model/String;
        statisticDateFrom: Date;
        statisticDateTo: Date;
        chartPointsCount: number;
        mask: string;
        facetId: string;
        isFavorite: boolean;
        isEnabled: boolean;
        hasInvestorsForAll: boolean;
        hasInvestorsForClosed: boolean;
        ids: string[];
        managerId: string;
        programManagerId: string;
        status: module:model/String[];
        skip: number;
        take: number;
    }): Promise;
    function v10FundsSetsGetWithHttpInfo(authorization: string): Promise;
    function v10FundsSetsGet(authorization: string): Promise;
}

export declare module api/FundsApi {
    function v10FundsAssetsGetWithHttpInfo(): Promise;
    function v10FundsAssetsGet(): Promise;
    function v10FundsByIdAssetsGetWithHttpInfo(id: string): Promise;
    function v10FundsByIdAssetsGet(id: string): Promise;
    function v10FundsByIdChartsBalanceGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10FundsByIdChartsBalanceGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10FundsByIdChartsProfitGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10FundsByIdChartsProfitGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10FundsByIdFavoriteAddPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10FundsByIdFavoriteAddPost(id: string, authorization: string): Promise;
    function v10FundsByIdFavoriteRemovePostWithHttpInfo(id: string, authorization: string): Promise;
    function v10FundsByIdFavoriteRemovePost(id: string, authorization: string): Promise;
    function v10FundsByIdGetWithHttpInfo(id: string, opts: {
        authorization: string;
        currencySecondary: module:model/String;
    }): Promise;
    function v10FundsByIdGet(id: string, opts: {
        authorization: string;
        currencySecondary: module:model/String;
    }): Promise;
    function v10FundsGetWithHttpInfo(opts: {
        authorization: string;
        sorting: module:model/String;
        currencySecondary: module:model/String;
        statisticDateFrom: Date;
        statisticDateTo: Date;
        chartPointsCount: number;
        mask: string;
        facetId: string;
        isFavorite: boolean;
        isEnabled: boolean;
        hasInvestorsForAll: boolean;
        hasInvestorsForClosed: boolean;
        ids: string[];
        managerId: string;
        programManagerId: string;
        status: module:model/String[];
        skip: number;
        take: number;
    }): Promise;
    function v10FundsGet(opts: {
        authorization: string;
        sorting: module:model/String;
        currencySecondary: module:model/String;
        statisticDateFrom: Date;
        statisticDateTo: Date;
        chartPointsCount: number;
        mask: string;
        facetId: string;
        isFavorite: boolean;
        isEnabled: boolean;
        hasInvestorsForAll: boolean;
        hasInvestorsForClosed: boolean;
        ids: string[];
        managerId: string;
        programManagerId: string;
        status: module:model/String[];
        skip: number;
        take: number;
    }): Promise;
    function v10FundsSetsGetWithHttpInfo(authorization: string): Promise;
    function v10FundsSetsGet(authorization: string): Promise;
}

export declare module api/InvestorApi {
    function v10InvestorFundsByIdInvestByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorFundsByIdInvestInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorFundsByIdInvestInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorFundsByIdRequestsBySkipByTakeGetWithHttpInfo(id: string, skip: number, take: number, authorization: string): Promise;
    function v10InvestorFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise;
    function v10InvestorFundsByIdWithdrawByPercentPostWithHttpInfo(id: string, percent: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorFundsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorFundsByIdWithdrawInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorFundsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorFundsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorGetWithHttpInfo(authorization: string, opts: {
        chartCurrency: module:model/String;
        from: Date;
        to: Date;
        balancePoints: number;
        programsPoints: number;
        eventsTake: number;
        requestsSkip: number;
        requestsTake: number;
    }): Promise;
    function v10InvestorGet(authorization: string, opts: {
        chartCurrency: module:model/String;
        from: Date;
        to: Date;
        balancePoints: number;
        programsPoints: number;
        eventsTake: number;
        requestsSkip: number;
        requestsTake: number;
    }): Promise;
    function v10InvestorPortfolioChartGetWithHttpInfo(authorization: string, opts: {
        currency: module:model/String;
        from: Date;
        to: Date;
        balancePoints: number;
        programsPoints: number;
    }): Promise;
    function v10InvestorPortfolioChartGet(authorization: string, opts: {
        currency: module:model/String;
        from: Date;
        to: Date;
        balancePoints: number;
        programsPoints: number;
    }): Promise;
    function v10InvestorPortfolioEventsGetWithHttpInfo(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorPortfolioEventsGet(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorProgramsByIdInvestByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorProgramsByIdInvestInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorProgramsByIdInvestInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorProgramsByIdReinvestOffPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10InvestorProgramsByIdReinvestOffPost(id: string, authorization: string): Promise;
    function v10InvestorProgramsByIdReinvestOnPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10InvestorProgramsByIdReinvestOnPost(id: string, authorization: string): Promise;
    function v10InvestorProgramsByIdRequestsBySkipByTakeGetWithHttpInfo(id: string, skip: number, take: number, authorization: string): Promise;
    function v10InvestorProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawByAmountPostWithHttpInfo(id: string, amount: number, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawMultiByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        withdrawAll: boolean;
    }): Promise;
    function v10InvestorProgramsByIdWithdrawMultiByAmountPost(id: string, amount: number, authorization: string, opts: {
        withdrawAll: boolean;
    }): Promise;
    function v10InvestorProgramsByIdWithdrawMultiPostWithHttpInfo(id: string, authorization: string, opts: {
        amount: number;
        withdrawAll: boolean;
    }): Promise;
    function v10InvestorProgramsByIdWithdrawMultiPost(id: string, authorization: string, opts: {
        amount: number;
        withdrawAll: boolean;
    }): Promise;
    function v10InvestorProgramsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorProgramsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorProgramsRequestsByIdCancelPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10InvestorProgramsRequestsByIdCancelPost(id: string, authorization: string): Promise;
    function v10InvestorRequestsBySkipByTakeGetWithHttpInfo(skip: number, take: number, authorization: string): Promise;
    function v10InvestorRequestsBySkipByTakeGet(skip: number, take: number, authorization: string): Promise;
    function v10InvestorSignalsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorSignalsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
}

export declare module api/InvestorApi {
    function v10InvestorFundsByIdInvestByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorFundsByIdInvestInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorFundsByIdInvestInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorFundsByIdRequestsBySkipByTakeGetWithHttpInfo(id: string, skip: number, take: number, authorization: string): Promise;
    function v10InvestorFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise;
    function v10InvestorFundsByIdWithdrawByPercentPostWithHttpInfo(id: string, percent: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorFundsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorFundsByIdWithdrawInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorFundsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorFundsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorGetWithHttpInfo(authorization: string, opts: {
        chartCurrency: module:model/String;
        from: Date;
        to: Date;
        balancePoints: number;
        programsPoints: number;
        eventsTake: number;
        requestsSkip: number;
        requestsTake: number;
    }): Promise;
    function v10InvestorGet(authorization: string, opts: {
        chartCurrency: module:model/String;
        from: Date;
        to: Date;
        balancePoints: number;
        programsPoints: number;
        eventsTake: number;
        requestsSkip: number;
        requestsTake: number;
    }): Promise;
    function v10InvestorPortfolioChartGetWithHttpInfo(authorization: string, opts: {
        currency: module:model/String;
        from: Date;
        to: Date;
        balancePoints: number;
        programsPoints: number;
    }): Promise;
    function v10InvestorPortfolioChartGet(authorization: string, opts: {
        currency: module:model/String;
        from: Date;
        to: Date;
        balancePoints: number;
        programsPoints: number;
    }): Promise;
    function v10InvestorPortfolioEventsGetWithHttpInfo(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorPortfolioEventsGet(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorProgramsByIdInvestByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10InvestorProgramsByIdInvestInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorProgramsByIdInvestInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorProgramsByIdReinvestOffPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10InvestorProgramsByIdReinvestOffPost(id: string, authorization: string): Promise;
    function v10InvestorProgramsByIdReinvestOnPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10InvestorProgramsByIdReinvestOnPost(id: string, authorization: string): Promise;
    function v10InvestorProgramsByIdRequestsBySkipByTakeGetWithHttpInfo(id: string, skip: number, take: number, authorization: string): Promise;
    function v10InvestorProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawByAmountPostWithHttpInfo(id: string, amount: number, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10InvestorProgramsByIdWithdrawMultiByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        withdrawAll: boolean;
    }): Promise;
    function v10InvestorProgramsByIdWithdrawMultiByAmountPost(id: string, amount: number, authorization: string, opts: {
        withdrawAll: boolean;
    }): Promise;
    function v10InvestorProgramsByIdWithdrawMultiPostWithHttpInfo(id: string, authorization: string, opts: {
        amount: number;
        withdrawAll: boolean;
    }): Promise;
    function v10InvestorProgramsByIdWithdrawMultiPost(id: string, authorization: string, opts: {
        amount: number;
        withdrawAll: boolean;
    }): Promise;
    function v10InvestorProgramsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorProgramsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorProgramsRequestsByIdCancelPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10InvestorProgramsRequestsByIdCancelPost(id: string, authorization: string): Promise;
    function v10InvestorRequestsBySkipByTakeGetWithHttpInfo(skip: number, take: number, authorization: string): Promise;
    function v10InvestorRequestsBySkipByTakeGet(skip: number, take: number, authorization: string): Promise;
    function v10InvestorSignalsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10InvestorSignalsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
}

export declare module api/ManagerApi {
    function v10ManagerAssetsGetWithHttpInfo(authorization: string): Promise;
    function v10ManagerAssetsGet(authorization: string): Promise;
    function v10ManagerByIdDetailsGetWithHttpInfo(id: string): Promise;
    function v10ManagerByIdDetailsGet(id: string): Promise;
    function v10ManagerByIdGetWithHttpInfo(id: string): Promise;
    function v10ManagerByIdGet(id: string): Promise;
    function v10ManagerEventsGetWithHttpInfo(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerEventsGet(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerFundsByIdAssetsUpdatePostWithHttpInfo(id: string, authorization: string, opts: {
        assets: module:model/FundAssetPart[];
    }): Promise;
    function v10ManagerFundsByIdAssetsUpdatePost(id: string, authorization: string, opts: {
        assets: module:model/FundAssetPart[];
    }): Promise;
    function v10ManagerFundsByIdClosePostWithHttpInfo(id: string, authorization: string, opts: {
        twoFactorCode: string;
    }): Promise;
    function v10ManagerFundsByIdClosePost(id: string, authorization: string, opts: {
        twoFactorCode: string;
    }): Promise;
    function v10ManagerFundsByIdInvestByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerFundsByIdInvestInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerFundsByIdInvestInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerFundsByIdRequestsBySkipByTakeGetWithHttpInfo(id: string, skip: number, take: number, authorization: string): Promise;
    function v10ManagerFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise;
    function v10ManagerFundsByIdUpdatePostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/ProgramUpdate;
    }): Promise;
    function v10ManagerFundsByIdUpdatePost(id: string, authorization: string, opts: {
        model: module:model/ProgramUpdate;
    }): Promise;
    function v10ManagerFundsByIdWithdrawByPercentPostWithHttpInfo(id: string, percent: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerFundsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerFundsByIdWithdrawInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerFundsCreatePostWithHttpInfo(authorization: string, opts: {
        request: module:model/NewFundRequest;
    }): Promise;
    function v10ManagerFundsCreatePost(authorization: string, opts: {
        request: module:model/NewFundRequest;
    }): Promise;
    function v10ManagerFundsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerFundsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerFundsInvestmentAmountGetWithHttpInfo(authorization: string): Promise;
    function v10ManagerFundsInvestmentAmountGet(authorization: string): Promise;
    function v10ManagerFundsRequestsByIdCancelPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ManagerFundsRequestsByIdCancelPost(id: string, authorization: string): Promise;
    function v10ManagerGetWithHttpInfo(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerGet(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerPrograms2faConfirmPostWithHttpInfo(authorization: string, opts: {
        programId: string;
        code: string;
    }): Promise;
    function v10ManagerPrograms2faConfirmPost(authorization: string, opts: {
        programId: string;
        code: string;
    }): Promise;
    function v10ManagerPrograms2faGetGetWithHttpInfo(authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10ManagerPrograms2faGetGet(authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10ManagerProgramsBrokerChangeCancelPostWithHttpInfo(authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10ManagerProgramsBrokerChangeCancelPost(authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10ManagerProgramsBrokerChangePostWithHttpInfo(authorization: string, opts: {
        request: module:model/ChangeBrokerProgramRequest;
    }): Promise;
    function v10ManagerProgramsBrokerChangePost(authorization: string, opts: {
        request: module:model/ChangeBrokerProgramRequest;
    }): Promise;
    function v10ManagerProgramsByIdClosePostWithHttpInfo(id: string, authorization: string, opts: {
        twoFactorCode: string;
    }): Promise;
    function v10ManagerProgramsByIdClosePost(id: string, authorization: string, opts: {
        twoFactorCode: string;
    }): Promise;
    function v10ManagerProgramsByIdInvestByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerProgramsByIdInvestInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerProgramsByIdInvestInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerProgramsByIdLevelsInfoGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10ManagerProgramsByIdLevelsInfoGet(id: string, authorization: string): Promise;
    function v10ManagerProgramsByIdPasswordChangePostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/ProgramPwdUpdate;
    }): Promise;
    function v10ManagerProgramsByIdPasswordChangePost(id: string, authorization: string, opts: {
        model: module:model/ProgramPwdUpdate;
    }): Promise;
    function v10ManagerProgramsByIdPeriodClosePostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ManagerProgramsByIdPeriodClosePost(id: string, authorization: string): Promise;
    function v10ManagerProgramsByIdRequestsBySkipByTakeGetWithHttpInfo(id: string, skip: number, take: number, authorization: string): Promise;
    function v10ManagerProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise;
    function v10ManagerProgramsByIdUpdatePostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/ProgramUpdate;
    }): Promise;
    function v10ManagerProgramsByIdUpdatePost(id: string, authorization: string, opts: {
        model: module:model/ProgramUpdate;
    }): Promise;
    function v10ManagerProgramsByIdWithdrawByAmountPostWithHttpInfo(id: string, amount: number, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawMultiByAmountPostWithHttpInfo(id: string, amount: number, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawMultiByAmountPost(id: string, amount: number, authorization: string): Promise;
    function v10ManagerProgramsCreatePostWithHttpInfo(authorization: string, opts: {
        request: module:model/NewProgramRequest;
    }): Promise;
    function v10ManagerProgramsCreatePost(authorization: string, opts: {
        request: module:model/NewProgramRequest;
    }): Promise;
    function v10ManagerProgramsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerProgramsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerProgramsInvestmentAmountGetWithHttpInfo(authorization: string, opts: {
        brokerTradingAccount: string;
    }): Promise;
    function v10ManagerProgramsInvestmentAmountGet(authorization: string, opts: {
        brokerTradingAccount: string;
    }): Promise;
    function v10ManagerProgramsRequestsByIdCancelPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ManagerProgramsRequestsByIdCancelPost(id: string, authorization: string): Promise;
    function v10ManagerRequestsBySkipByTakeGetWithHttpInfo(skip: number, take: number, authorization: string): Promise;
    function v10ManagerRequestsBySkipByTakeGet(skip: number, take: number, authorization: string): Promise;
    function v10ManagerSignalCreatePostWithHttpInfo(authorization: string, opts: {
        programId: string;
        volumeFee: number;
        successFee: number;
    }): Promise;
    function v10ManagerSignalCreatePost(authorization: string, opts: {
        programId: string;
        volumeFee: number;
        successFee: number;
    }): Promise;
    function v10ManagerSignalEditPostWithHttpInfo(authorization: string, opts: {
        programId: string;
        volumeFee: number;
        successFee: number;
    }): Promise;
    function v10ManagerSignalEditPost(authorization: string, opts: {
        programId: string;
        volumeFee: number;
        successFee: number;
    }): Promise;
}

export declare module api/ManagerApi {
    function v10ManagerAssetsGetWithHttpInfo(authorization: string): Promise;
    function v10ManagerAssetsGet(authorization: string): Promise;
    function v10ManagerByIdDetailsGetWithHttpInfo(id: string): Promise;
    function v10ManagerByIdDetailsGet(id: string): Promise;
    function v10ManagerByIdGetWithHttpInfo(id: string): Promise;
    function v10ManagerByIdGet(id: string): Promise;
    function v10ManagerEventsGetWithHttpInfo(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerEventsGet(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerFundsByIdAssetsUpdatePostWithHttpInfo(id: string, authorization: string, opts: {
        assets: module:model/FundAssetPart[];
    }): Promise;
    function v10ManagerFundsByIdAssetsUpdatePost(id: string, authorization: string, opts: {
        assets: module:model/FundAssetPart[];
    }): Promise;
    function v10ManagerFundsByIdClosePostWithHttpInfo(id: string, authorization: string, opts: {
        twoFactorCode: string;
    }): Promise;
    function v10ManagerFundsByIdClosePost(id: string, authorization: string, opts: {
        twoFactorCode: string;
    }): Promise;
    function v10ManagerFundsByIdInvestByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerFundsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerFundsByIdInvestInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerFundsByIdInvestInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerFundsByIdRequestsBySkipByTakeGetWithHttpInfo(id: string, skip: number, take: number, authorization: string): Promise;
    function v10ManagerFundsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise;
    function v10ManagerFundsByIdUpdatePostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/ProgramUpdate;
    }): Promise;
    function v10ManagerFundsByIdUpdatePost(id: string, authorization: string, opts: {
        model: module:model/ProgramUpdate;
    }): Promise;
    function v10ManagerFundsByIdWithdrawByPercentPostWithHttpInfo(id: string, percent: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerFundsByIdWithdrawByPercentPost(id: string, percent: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerFundsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerFundsByIdWithdrawInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerFundsCreatePostWithHttpInfo(authorization: string, opts: {
        request: module:model/NewFundRequest;
    }): Promise;
    function v10ManagerFundsCreatePost(authorization: string, opts: {
        request: module:model/NewFundRequest;
    }): Promise;
    function v10ManagerFundsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerFundsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerFundsInvestmentAmountGetWithHttpInfo(authorization: string): Promise;
    function v10ManagerFundsInvestmentAmountGet(authorization: string): Promise;
    function v10ManagerFundsRequestsByIdCancelPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ManagerFundsRequestsByIdCancelPost(id: string, authorization: string): Promise;
    function v10ManagerGetWithHttpInfo(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerGet(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        type: module:model/String;
        assetType: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerPrograms2faConfirmPostWithHttpInfo(authorization: string, opts: {
        programId: string;
        code: string;
    }): Promise;
    function v10ManagerPrograms2faConfirmPost(authorization: string, opts: {
        programId: string;
        code: string;
    }): Promise;
    function v10ManagerPrograms2faGetGetWithHttpInfo(authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10ManagerPrograms2faGetGet(authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10ManagerProgramsBrokerChangeCancelPostWithHttpInfo(authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10ManagerProgramsBrokerChangeCancelPost(authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10ManagerProgramsBrokerChangePostWithHttpInfo(authorization: string, opts: {
        request: module:model/ChangeBrokerProgramRequest;
    }): Promise;
    function v10ManagerProgramsBrokerChangePost(authorization: string, opts: {
        request: module:model/ChangeBrokerProgramRequest;
    }): Promise;
    function v10ManagerProgramsByIdClosePostWithHttpInfo(id: string, authorization: string, opts: {
        twoFactorCode: string;
    }): Promise;
    function v10ManagerProgramsByIdClosePost(id: string, authorization: string, opts: {
        twoFactorCode: string;
    }): Promise;
    function v10ManagerProgramsByIdInvestByAmountPostWithHttpInfo(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerProgramsByIdInvestByAmountPost(id: string, amount: number, authorization: string, opts: {
        currency: module:model/String;
    }): Promise;
    function v10ManagerProgramsByIdInvestInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerProgramsByIdInvestInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerProgramsByIdLevelsInfoGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10ManagerProgramsByIdLevelsInfoGet(id: string, authorization: string): Promise;
    function v10ManagerProgramsByIdPasswordChangePostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/ProgramPwdUpdate;
    }): Promise;
    function v10ManagerProgramsByIdPasswordChangePost(id: string, authorization: string, opts: {
        model: module:model/ProgramPwdUpdate;
    }): Promise;
    function v10ManagerProgramsByIdPeriodClosePostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ManagerProgramsByIdPeriodClosePost(id: string, authorization: string): Promise;
    function v10ManagerProgramsByIdRequestsBySkipByTakeGetWithHttpInfo(id: string, skip: number, take: number, authorization: string): Promise;
    function v10ManagerProgramsByIdRequestsBySkipByTakeGet(id: string, skip: number, take: number, authorization: string): Promise;
    function v10ManagerProgramsByIdUpdatePostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/ProgramUpdate;
    }): Promise;
    function v10ManagerProgramsByIdUpdatePost(id: string, authorization: string, opts: {
        model: module:model/ProgramUpdate;
    }): Promise;
    function v10ManagerProgramsByIdWithdrawByAmountPostWithHttpInfo(id: string, amount: number, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawByAmountPost(id: string, amount: number, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawInfoByCurrencyGet(id: string, currency: module:model/String, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawMultiByAmountPostWithHttpInfo(id: string, amount: number, authorization: string): Promise;
    function v10ManagerProgramsByIdWithdrawMultiByAmountPost(id: string, amount: number, authorization: string): Promise;
    function v10ManagerProgramsCreatePostWithHttpInfo(authorization: string, opts: {
        request: module:model/NewProgramRequest;
    }): Promise;
    function v10ManagerProgramsCreatePost(authorization: string, opts: {
        request: module:model/NewProgramRequest;
    }): Promise;
    function v10ManagerProgramsGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerProgramsGet(authorization: string, opts: {
        sorting: module:model/String;
        from: Date;
        to: Date;
        chartPointsCount: number;
        currencySecondary: module:model/String;
        actionStatus: module:model/String;
        dashboardActionStatus: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ManagerProgramsInvestmentAmountGetWithHttpInfo(authorization: string, opts: {
        brokerTradingAccount: string;
    }): Promise;
    function v10ManagerProgramsInvestmentAmountGet(authorization: string, opts: {
        brokerTradingAccount: string;
    }): Promise;
    function v10ManagerProgramsRequestsByIdCancelPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ManagerProgramsRequestsByIdCancelPost(id: string, authorization: string): Promise;
    function v10ManagerRequestsBySkipByTakeGetWithHttpInfo(skip: number, take: number, authorization: string): Promise;
    function v10ManagerRequestsBySkipByTakeGet(skip: number, take: number, authorization: string): Promise;
    function v10ManagerSignalCreatePostWithHttpInfo(authorization: string, opts: {
        programId: string;
        volumeFee: number;
        successFee: number;
    }): Promise;
    function v10ManagerSignalCreatePost(authorization: string, opts: {
        programId: string;
        volumeFee: number;
        successFee: number;
    }): Promise;
    function v10ManagerSignalEditPostWithHttpInfo(authorization: string, opts: {
        programId: string;
        volumeFee: number;
        successFee: number;
    }): Promise;
    function v10ManagerSignalEditPost(authorization: string, opts: {
        programId: string;
        volumeFee: number;
        successFee: number;
    }): Promise;
}

export declare module api/NotificationsApi {
    function v10NotificationsByIdReadPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsByIdReadPost(id: string, authorization: string): Promise;
    function v10NotificationsGetWithHttpInfo(authorization: string, opts: {
        skip: number;
        take: number;
    }): Promise;
    function v10NotificationsGet(authorization: string, opts: {
        skip: number;
        take: number;
    }): Promise;
    function v10NotificationsNewGetWithHttpInfo(authorization: string): Promise;
    function v10NotificationsNewGet(authorization: string): Promise;
    function v10NotificationsSettingsAddPostWithHttpInfo(authorization: string, opts: {
        assetId: string;
        managerId: string;
        type: module:model/String;
        conditionType: module:model/String;
        conditionAmount: number;
    }): Promise;
    function v10NotificationsSettingsAddPost(authorization: string, opts: {
        assetId: string;
        managerId: string;
        type: module:model/String;
        conditionType: module:model/String;
        conditionAmount: number;
    }): Promise;
    function v10NotificationsSettingsByIdByEnablePostWithHttpInfo(id: string, enable: boolean, authorization: string): Promise;
    function v10NotificationsSettingsByIdByEnablePost(id: string, enable: boolean, authorization: string): Promise;
    function v10NotificationsSettingsFundsByIdGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsSettingsFundsByIdGet(id: string, authorization: string): Promise;
    function v10NotificationsSettingsGetWithHttpInfo(authorization: string): Promise;
    function v10NotificationsSettingsGet(authorization: string): Promise;
    function v10NotificationsSettingsManagersByIdGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsSettingsManagersByIdGet(id: string, authorization: string): Promise;
    function v10NotificationsSettingsProgramsByIdGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsSettingsProgramsByIdGet(id: string, authorization: string): Promise;
    function v10NotificationsSettingsRemoveByIdPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsSettingsRemoveByIdPost(id: string, authorization: string): Promise;
}

export declare module api/NotificationsApi {
    function v10NotificationsByIdReadPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsByIdReadPost(id: string, authorization: string): Promise;
    function v10NotificationsGetWithHttpInfo(authorization: string, opts: {
        skip: number;
        take: number;
    }): Promise;
    function v10NotificationsGet(authorization: string, opts: {
        skip: number;
        take: number;
    }): Promise;
    function v10NotificationsNewGetWithHttpInfo(authorization: string): Promise;
    function v10NotificationsNewGet(authorization: string): Promise;
    function v10NotificationsSettingsAddPostWithHttpInfo(authorization: string, opts: {
        assetId: string;
        managerId: string;
        type: module:model/String;
        conditionType: module:model/String;
        conditionAmount: number;
    }): Promise;
    function v10NotificationsSettingsAddPost(authorization: string, opts: {
        assetId: string;
        managerId: string;
        type: module:model/String;
        conditionType: module:model/String;
        conditionAmount: number;
    }): Promise;
    function v10NotificationsSettingsByIdByEnablePostWithHttpInfo(id: string, enable: boolean, authorization: string): Promise;
    function v10NotificationsSettingsByIdByEnablePost(id: string, enable: boolean, authorization: string): Promise;
    function v10NotificationsSettingsFundsByIdGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsSettingsFundsByIdGet(id: string, authorization: string): Promise;
    function v10NotificationsSettingsGetWithHttpInfo(authorization: string): Promise;
    function v10NotificationsSettingsGet(authorization: string): Promise;
    function v10NotificationsSettingsManagersByIdGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsSettingsManagersByIdGet(id: string, authorization: string): Promise;
    function v10NotificationsSettingsProgramsByIdGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsSettingsProgramsByIdGet(id: string, authorization: string): Promise;
    function v10NotificationsSettingsRemoveByIdPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10NotificationsSettingsRemoveByIdPost(id: string, authorization: string): Promise;
}

export declare module api/PlatformApi {
    function v10PlatformDatePostWithHttpInfo(): Promise;
    function v10PlatformDatePost(): Promise;
    function v10PlatformInfoGetWithHttpInfo(): Promise;
    function v10PlatformInfoGet(): Promise;
    function v10PlatformLevelsGetWithHttpInfo(opts: {
        currency: module:model/String;
    }): Promise;
    function v10PlatformLevelsGet(opts: {
        currency: module:model/String;
    }): Promise;
    function v10PlatformLevelsParametersGetWithHttpInfo(opts: {
        currency: module:model/String;
    }): Promise;
    function v10PlatformLevelsParametersGet(opts: {
        currency: module:model/String;
    }): Promise;
    function v10PlatformRiskcontrolGetWithHttpInfo(route: string, opts: {
        client: string;
        version: string;
    }): Promise;
    function v10PlatformRiskcontrolGet(route: string, opts: {
        client: string;
        version: string;
    }): Promise;
    function v10PlatformStatisticGetWithHttpInfo(): Promise;
    function v10PlatformStatisticGet(): Promise;
}

export declare module api/PlatformApi {
    function v10PlatformDatePostWithHttpInfo(): Promise;
    function v10PlatformDatePost(): Promise;
    function v10PlatformInfoGetWithHttpInfo(): Promise;
    function v10PlatformInfoGet(): Promise;
    function v10PlatformLevelsGetWithHttpInfo(opts: {
        currency: module:model/String;
    }): Promise;
    function v10PlatformLevelsGet(opts: {
        currency: module:model/String;
    }): Promise;
    function v10PlatformLevelsParametersGetWithHttpInfo(opts: {
        currency: module:model/String;
    }): Promise;
    function v10PlatformLevelsParametersGet(opts: {
        currency: module:model/String;
    }): Promise;
    function v10PlatformRiskcontrolGetWithHttpInfo(route: string, opts: {
        client: string;
        version: string;
    }): Promise;
    function v10PlatformRiskcontrolGet(route: string, opts: {
        client: string;
        version: string;
    }): Promise;
    function v10PlatformStatisticGetWithHttpInfo(): Promise;
    function v10PlatformStatisticGet(): Promise;
}

export declare module api/ProfileApi {
    function v10ProfileAvatarRemovePostWithHttpInfo(authorization: string): Promise;
    function v10ProfileAvatarRemovePost(authorization: string): Promise;
    function v10ProfileAvatarUpdateByFileIdPostWithHttpInfo(fileId: string, authorization: string): Promise;
    function v10ProfileAvatarUpdateByFileIdPost(fileId: string, authorization: string): Promise;
    function v10ProfileGetWithHttpInfo(authorization: string): Promise;
    function v10ProfileGet(authorization: string): Promise;
    function v10ProfileHeaderGetWithHttpInfo(authorization: string): Promise;
    function v10ProfileHeaderGet(authorization: string): Promise;
    function v10ProfilePersonalUpdatePostWithHttpInfo(authorization: string, opts: {
        model: module:model/UpdatePersonalDetailViewModel;
    }): Promise;
    function v10ProfilePersonalUpdatePost(authorization: string, opts: {
        model: module:model/UpdatePersonalDetailViewModel;
    }): Promise;
    function v10ProfilePushTokenPostWithHttpInfo(authorization: string, opts: {
        token: module:model/FcmTokenViewModel;
    }): Promise;
    function v10ProfilePushTokenPost(authorization: string, opts: {
        token: module:model/FcmTokenViewModel;
    }): Promise;
    function v10ProfileSociallinksGetWithHttpInfo(authorization: string): Promise;
    function v10ProfileSociallinksGet(authorization: string): Promise;
    function v10ProfileSociallinksUpdatePostWithHttpInfo(authorization: string, opts: {
        model: module:model/UpdateSocialLinkViewModel;
    }): Promise;
    function v10ProfileSociallinksUpdatePost(authorization: string, opts: {
        model: module:model/UpdateSocialLinkViewModel;
    }): Promise;
    function v10ProfileUpdatePostWithHttpInfo(authorization: string, opts: {
        model: module:model/UpdateProfileViewModel;
    }): Promise;
    function v10ProfileUpdatePost(authorization: string, opts: {
        model: module:model/UpdateProfileViewModel;
    }): Promise;
    function v10ProfileVerificationTokenPostWithHttpInfo(authorization: string): Promise;
    function v10ProfileVerificationTokenPost(authorization: string): Promise;
}

export declare module api/ProfileApi {
    function v10ProfileAvatarRemovePostWithHttpInfo(authorization: string): Promise;
    function v10ProfileAvatarRemovePost(authorization: string): Promise;
    function v10ProfileAvatarUpdateByFileIdPostWithHttpInfo(fileId: string, authorization: string): Promise;
    function v10ProfileAvatarUpdateByFileIdPost(fileId: string, authorization: string): Promise;
    function v10ProfileGetWithHttpInfo(authorization: string): Promise;
    function v10ProfileGet(authorization: string): Promise;
    function v10ProfileHeaderGetWithHttpInfo(authorization: string): Promise;
    function v10ProfileHeaderGet(authorization: string): Promise;
    function v10ProfilePersonalUpdatePostWithHttpInfo(authorization: string, opts: {
        model: module:model/UpdatePersonalDetailViewModel;
    }): Promise;
    function v10ProfilePersonalUpdatePost(authorization: string, opts: {
        model: module:model/UpdatePersonalDetailViewModel;
    }): Promise;
    function v10ProfilePushTokenPostWithHttpInfo(authorization: string, opts: {
        token: module:model/FcmTokenViewModel;
    }): Promise;
    function v10ProfilePushTokenPost(authorization: string, opts: {
        token: module:model/FcmTokenViewModel;
    }): Promise;
    function v10ProfileSociallinksGetWithHttpInfo(authorization: string): Promise;
    function v10ProfileSociallinksGet(authorization: string): Promise;
    function v10ProfileSociallinksUpdatePostWithHttpInfo(authorization: string, opts: {
        model: module:model/UpdateSocialLinkViewModel;
    }): Promise;
    function v10ProfileSociallinksUpdatePost(authorization: string, opts: {
        model: module:model/UpdateSocialLinkViewModel;
    }): Promise;
    function v10ProfileUpdatePostWithHttpInfo(authorization: string, opts: {
        model: module:model/UpdateProfileViewModel;
    }): Promise;
    function v10ProfileUpdatePost(authorization: string, opts: {
        model: module:model/UpdateProfileViewModel;
    }): Promise;
    function v10ProfileVerificationTokenPostWithHttpInfo(authorization: string): Promise;
    function v10ProfileVerificationTokenPost(authorization: string): Promise;
}

export declare module api/ProgramsApi {
    function v10ProgramsByIdChartsBalanceGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10ProgramsByIdChartsBalanceGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10ProgramsByIdChartsProfitGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10ProgramsByIdChartsProfitGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10ProgramsByIdFavoriteAddPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ProgramsByIdFavoriteAddPost(id: string, authorization: string): Promise;
    function v10ProgramsByIdFavoriteRemovePostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ProgramsByIdFavoriteRemovePost(id: string, authorization: string): Promise;
    function v10ProgramsByIdGetWithHttpInfo(id: string, opts: {
        authorization: string;
        currencySecondary: module:model/String;
    }): Promise;
    function v10ProgramsByIdGet(id: string, opts: {
        authorization: string;
        currencySecondary: module:model/String;
    }): Promise;
    function v10ProgramsByIdPeriodsGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        numberMin: number;
        numberMax: number;
        status: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdPeriodsGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        numberMin: number;
        numberMax: number;
        status: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdSubscribersGetWithHttpInfo(id: string, authorization: string, opts: {
        status: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdSubscribersGet(id: string, authorization: string, opts: {
        status: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdTradesGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        symbol: string;
        sorting: module:model/String;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdTradesGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        symbol: string;
        sorting: module:model/String;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdTradesOpenGetWithHttpInfo(id: string, opts: {
        sorting: module:model/String;
        symbol: string;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdTradesOpenGet(id: string, opts: {
        sorting: module:model/String;
        symbol: string;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByProgramIdTradesExportGetWithHttpInfo(programId: string, opts: {
        start: Date;
        end: Date;
    }): Promise;
    function v10ProgramsByProgramIdTradesExportGet(programId: string, opts: {
        start: Date;
        end: Date;
    }): Promise;
    function v10ProgramsGetWithHttpInfo(opts: {
        authorization: string;
        levelMin: number;
        levelMax: number;
        levelsSet: number[];
        profitAvgMin: number;
        profitAvgMax: number;
        sorting: module:model/String;
        programCurrency: module:model/String;
        currencySecondary: module:model/String;
        levelUpFrom: number;
        tags: string[];
        isSignal: boolean;
        statisticDateFrom: Date;
        statisticDateTo: Date;
        chartPointsCount: number;
        mask: string;
        facetId: string;
        isFavorite: boolean;
        isEnabled: boolean;
        hasInvestorsForAll: boolean;
        hasInvestorsForClosed: boolean;
        ids: string[];
        managerId: string;
        programManagerId: string;
        status: module:model/String[];
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsGet(opts: {
        authorization: string;
        levelMin: number;
        levelMax: number;
        levelsSet: number[];
        profitAvgMin: number;
        profitAvgMax: number;
        sorting: module:model/String;
        programCurrency: module:model/String;
        currencySecondary: module:model/String;
        levelUpFrom: number;
        tags: string[];
        isSignal: boolean;
        statisticDateFrom: Date;
        statisticDateTo: Date;
        chartPointsCount: number;
        mask: string;
        facetId: string;
        isFavorite: boolean;
        isEnabled: boolean;
        hasInvestorsForAll: boolean;
        hasInvestorsForClosed: boolean;
        ids: string[];
        managerId: string;
        programManagerId: string;
        status: module:model/String[];
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsLevelupSummaryGetWithHttpInfo(opts: {
        authorization: string;
    }): Promise;
    function v10ProgramsLevelupSummaryGet(opts: {
        authorization: string;
    }): Promise;
    function v10ProgramsSetsGetWithHttpInfo(authorization: string): Promise;
    function v10ProgramsSetsGet(authorization: string): Promise;
}

export declare module api/ProgramsApi {
    function v10ProgramsByIdChartsBalanceGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10ProgramsByIdChartsBalanceGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10ProgramsByIdChartsProfitGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10ProgramsByIdChartsProfitGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        maxPointCount: number;
    }): Promise;
    function v10ProgramsByIdFavoriteAddPostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ProgramsByIdFavoriteAddPost(id: string, authorization: string): Promise;
    function v10ProgramsByIdFavoriteRemovePostWithHttpInfo(id: string, authorization: string): Promise;
    function v10ProgramsByIdFavoriteRemovePost(id: string, authorization: string): Promise;
    function v10ProgramsByIdGetWithHttpInfo(id: string, opts: {
        authorization: string;
        currencySecondary: module:model/String;
    }): Promise;
    function v10ProgramsByIdGet(id: string, opts: {
        authorization: string;
        currencySecondary: module:model/String;
    }): Promise;
    function v10ProgramsByIdPeriodsGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        numberMin: number;
        numberMax: number;
        status: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdPeriodsGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        numberMin: number;
        numberMax: number;
        status: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdSubscribersGetWithHttpInfo(id: string, authorization: string, opts: {
        status: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdSubscribersGet(id: string, authorization: string, opts: {
        status: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdTradesGetWithHttpInfo(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        symbol: string;
        sorting: module:model/String;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdTradesGet(id: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        symbol: string;
        sorting: module:model/String;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdTradesOpenGetWithHttpInfo(id: string, opts: {
        sorting: module:model/String;
        symbol: string;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByIdTradesOpenGet(id: string, opts: {
        sorting: module:model/String;
        symbol: string;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsByProgramIdTradesExportGetWithHttpInfo(programId: string, opts: {
        start: Date;
        end: Date;
    }): Promise;
    function v10ProgramsByProgramIdTradesExportGet(programId: string, opts: {
        start: Date;
        end: Date;
    }): Promise;
    function v10ProgramsGetWithHttpInfo(opts: {
        authorization: string;
        levelMin: number;
        levelMax: number;
        levelsSet: number[];
        profitAvgMin: number;
        profitAvgMax: number;
        sorting: module:model/String;
        programCurrency: module:model/String;
        currencySecondary: module:model/String;
        levelUpFrom: number;
        tags: string[];
        isSignal: boolean;
        statisticDateFrom: Date;
        statisticDateTo: Date;
        chartPointsCount: number;
        mask: string;
        facetId: string;
        isFavorite: boolean;
        isEnabled: boolean;
        hasInvestorsForAll: boolean;
        hasInvestorsForClosed: boolean;
        ids: string[];
        managerId: string;
        programManagerId: string;
        status: module:model/String[];
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsGet(opts: {
        authorization: string;
        levelMin: number;
        levelMax: number;
        levelsSet: number[];
        profitAvgMin: number;
        profitAvgMax: number;
        sorting: module:model/String;
        programCurrency: module:model/String;
        currencySecondary: module:model/String;
        levelUpFrom: number;
        tags: string[];
        isSignal: boolean;
        statisticDateFrom: Date;
        statisticDateTo: Date;
        chartPointsCount: number;
        mask: string;
        facetId: string;
        isFavorite: boolean;
        isEnabled: boolean;
        hasInvestorsForAll: boolean;
        hasInvestorsForClosed: boolean;
        ids: string[];
        managerId: string;
        programManagerId: string;
        status: module:model/String[];
        skip: number;
        take: number;
    }): Promise;
    function v10ProgramsLevelupSummaryGetWithHttpInfo(opts: {
        authorization: string;
    }): Promise;
    function v10ProgramsLevelupSummaryGet(opts: {
        authorization: string;
    }): Promise;
    function v10ProgramsSetsGetWithHttpInfo(authorization: string): Promise;
    function v10ProgramsSetsGet(authorization: string): Promise;
}

export declare module api/RateApi {
    function v10RateByExchangeByFromByToGetWithHttpInfo(exchange: string, from: string, to: string): Promise;
    function v10RateByExchangeByFromByToGet(exchange: string, from: string, to: string): Promise;
    function v10RateByFromByToGetWithHttpInfo(from: string, to: string): Promise;
    function v10RateByFromByToGet(from: string, to: string): Promise;
    function v10RateGetWithHttpInfo(opts: {
        from: string[];
        to: string[];
    }): Promise;
    function v10RateGet(opts: {
        from: string[];
        to: string[];
    }): Promise;
}

export declare module api/RateApi {
    function v10RateByExchangeByFromByToGetWithHttpInfo(exchange: string, from: string, to: string): Promise;
    function v10RateByExchangeByFromByToGet(exchange: string, from: string, to: string): Promise;
    function v10RateByFromByToGetWithHttpInfo(from: string, to: string): Promise;
    function v10RateByFromByToGet(from: string, to: string): Promise;
    function v10RateGetWithHttpInfo(opts: {
        from: string[];
        to: string[];
    }): Promise;
    function v10RateGet(opts: {
        from: string[];
        to: string[];
    }): Promise;
}

export declare module api/SearchApi {
    function v10SearchGetWithHttpInfo(opts: {
        authorization: string;
        mask: string;
        take: number;
    }): Promise;
    function v10SearchGet(opts: {
        authorization: string;
        mask: string;
        take: number;
    }): Promise;
}

export declare module api/SearchApi {
    function v10SearchGetWithHttpInfo(opts: {
        authorization: string;
        mask: string;
        take: number;
    }): Promise;
    function v10SearchGet(opts: {
        authorization: string;
        mask: string;
        take: number;
    }): Promise;
}

export declare module api/SignalApi {
    function v10SignalAccountsGetWithHttpInfo(authorization: string): Promise;
    function v10SignalAccountsGet(authorization: string): Promise;
    function v10SignalAttachByIdInfoGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10SignalAttachByIdInfoGet(id: string, authorization: string): Promise;
    function v10SignalAttachByIdPostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/AttachToSignalProvider;
    }): Promise;
    function v10SignalAttachByIdPost(id: string, authorization: string, opts: {
        model: module:model/AttachToSignalProvider;
    }): Promise;
    function v10SignalByIdUpdatePostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/AttachToSignalProvider;
    }): Promise;
    function v10SignalByIdUpdatePost(id: string, authorization: string, opts: {
        model: module:model/AttachToSignalProvider;
    }): Promise;
    function v10SignalDetachByIdPostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/DetachFromSignalProvider;
    }): Promise;
    function v10SignalDetachByIdPost(id: string, authorization: string, opts: {
        model: module:model/DetachFromSignalProvider;
    }): Promise;
    function v10SignalTradesByIdClosePostWithHttpInfo(id: string, authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10SignalTradesByIdClosePost(id: string, authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10SignalTradesGetWithHttpInfo(authorization: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        symbol: string;
        sorting: module:model/String;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10SignalTradesGet(authorization: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        symbol: string;
        sorting: module:model/String;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10SignalTradesOpenGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        symbol: string;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10SignalTradesOpenGet(authorization: string, opts: {
        sorting: module:model/String;
        symbol: string;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
}

export declare module api/SignalApi {
    function v10SignalAccountsGetWithHttpInfo(authorization: string): Promise;
    function v10SignalAccountsGet(authorization: string): Promise;
    function v10SignalAttachByIdInfoGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10SignalAttachByIdInfoGet(id: string, authorization: string): Promise;
    function v10SignalAttachByIdPostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/AttachToSignalProvider;
    }): Promise;
    function v10SignalAttachByIdPost(id: string, authorization: string, opts: {
        model: module:model/AttachToSignalProvider;
    }): Promise;
    function v10SignalByIdUpdatePostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/AttachToSignalProvider;
    }): Promise;
    function v10SignalByIdUpdatePost(id: string, authorization: string, opts: {
        model: module:model/AttachToSignalProvider;
    }): Promise;
    function v10SignalDetachByIdPostWithHttpInfo(id: string, authorization: string, opts: {
        model: module:model/DetachFromSignalProvider;
    }): Promise;
    function v10SignalDetachByIdPost(id: string, authorization: string, opts: {
        model: module:model/DetachFromSignalProvider;
    }): Promise;
    function v10SignalTradesByIdClosePostWithHttpInfo(id: string, authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10SignalTradesByIdClosePost(id: string, authorization: string, opts: {
        programId: string;
    }): Promise;
    function v10SignalTradesGetWithHttpInfo(authorization: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        symbol: string;
        sorting: module:model/String;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10SignalTradesGet(authorization: string, opts: {
        dateFrom: Date;
        dateTo: Date;
        symbol: string;
        sorting: module:model/String;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10SignalTradesOpenGetWithHttpInfo(authorization: string, opts: {
        sorting: module:model/String;
        symbol: string;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
    function v10SignalTradesOpenGet(authorization: string, opts: {
        sorting: module:model/String;
        symbol: string;
        accountId: string;
        skip: number;
        take: number;
    }): Promise;
}

export declare module api/WalletApi {
    function v10WalletAddressesByCurrencyGetWithHttpInfo(currency: module:model/String, authorization: string): Promise;
    function v10WalletAddressesByCurrencyGet(currency: module:model/String, authorization: string): Promise;
    function v10WalletAddressesGetWithHttpInfo(authorization: string): Promise;
    function v10WalletAddressesGet(authorization: string): Promise;
    function v10WalletByCurrencyGetWithHttpInfo(currency: module:model/String, authorization: string): Promise;
    function v10WalletByCurrencyGet(currency: module:model/String, authorization: string): Promise;
    function v10WalletFeeGvtholdingGetWithHttpInfo(authorization: string): Promise;
    function v10WalletFeeGvtholdingGet(authorization: string): Promise;
    function v10WalletMultiByCurrencyAvailableGetWithHttpInfo(currency: module:model/String, authorization: string): Promise;
    function v10WalletMultiByCurrencyAvailableGet(currency: module:model/String, authorization: string): Promise;
    function v10WalletMultiByCurrencyGetWithHttpInfo(currency: module:model/String, authorization: string): Promise;
    function v10WalletMultiByCurrencyGet(currency: module:model/String, authorization: string): Promise;
    function v10WalletMultiTransactionsExternalGetWithHttpInfo(authorization: string, opts: {
        from: Date;
        to: Date;
        type: module:model/String;
        currency: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletMultiTransactionsExternalGet(authorization: string, opts: {
        from: Date;
        to: Date;
        type: module:model/String;
        currency: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletMultiTransactionsGetWithHttpInfo(authorization: string, opts: {
        from: Date;
        to: Date;
        type: module:model/String;
        currency: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletMultiTransactionsGet(authorization: string, opts: {
        from: Date;
        to: Date;
        type: module:model/String;
        currency: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletPaygvtfeeOffPostWithHttpInfo(authorization: string): Promise;
    function v10WalletPaygvtfeeOffPost(authorization: string): Promise;
    function v10WalletPaygvtfeeOnPostWithHttpInfo(authorization: string): Promise;
    function v10WalletPaygvtfeeOnPost(authorization: string): Promise;
    function v10WalletTransactionByIdGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10WalletTransactionByIdGet(id: string, authorization: string): Promise;
    function v10WalletTransactionsGetWithHttpInfo(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        assetType: module:model/String;
        txAction: module:model/String;
        wallet: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletTransactionsGet(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        assetType: module:model/String;
        txAction: module:model/String;
        wallet: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletTransferPostWithHttpInfo(authorization: string, opts: {
        request: module:model/InternalTransferRequest;
    }): Promise;
    function v10WalletTransferPost(authorization: string, opts: {
        request: module:model/InternalTransferRequest;
    }): Promise;
    function v10WalletWithdrawInfoGetWithHttpInfo(authorization: string): Promise;
    function v10WalletWithdrawInfoGet(authorization: string): Promise;
    function v10WalletWithdrawRequestCancelByTxIdPostWithHttpInfo(txId: string, authorization: string): Promise;
    function v10WalletWithdrawRequestCancelByTxIdPost(txId: string, authorization: string): Promise;
    function v10WalletWithdrawRequestConfirmPostWithHttpInfo(opts: {
        requestId: string;
        code: string;
    }): Promise;
    function v10WalletWithdrawRequestConfirmPost(opts: {
        requestId: string;
        code: string;
    }): Promise;
    function v10WalletWithdrawRequestNewPostWithHttpInfo(authorization: string, opts: {
        model: module:model/CreateWithdrawalRequestModel;
    }): Promise;
    function v10WalletWithdrawRequestNewPost(authorization: string, opts: {
        model: module:model/CreateWithdrawalRequestModel;
    }): Promise;
    function v10WalletWithdrawRequestResendByTxIdPostWithHttpInfo(txId: string, authorization: string): Promise;
    function v10WalletWithdrawRequestResendByTxIdPost(txId: string, authorization: string): Promise;
}

export declare module api/WalletApi {
    function v10WalletAddressesByCurrencyGetWithHttpInfo(currency: module:model/String, authorization: string): Promise;
    function v10WalletAddressesByCurrencyGet(currency: module:model/String, authorization: string): Promise;
    function v10WalletAddressesGetWithHttpInfo(authorization: string): Promise;
    function v10WalletAddressesGet(authorization: string): Promise;
    function v10WalletByCurrencyGetWithHttpInfo(currency: module:model/String, authorization: string): Promise;
    function v10WalletByCurrencyGet(currency: module:model/String, authorization: string): Promise;
    function v10WalletFeeGvtholdingGetWithHttpInfo(authorization: string): Promise;
    function v10WalletFeeGvtholdingGet(authorization: string): Promise;
    function v10WalletMultiByCurrencyAvailableGetWithHttpInfo(currency: module:model/String, authorization: string): Promise;
    function v10WalletMultiByCurrencyAvailableGet(currency: module:model/String, authorization: string): Promise;
    function v10WalletMultiByCurrencyGetWithHttpInfo(currency: module:model/String, authorization: string): Promise;
    function v10WalletMultiByCurrencyGet(currency: module:model/String, authorization: string): Promise;
    function v10WalletMultiTransactionsExternalGetWithHttpInfo(authorization: string, opts: {
        from: Date;
        to: Date;
        type: module:model/String;
        currency: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletMultiTransactionsExternalGet(authorization: string, opts: {
        from: Date;
        to: Date;
        type: module:model/String;
        currency: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletMultiTransactionsGetWithHttpInfo(authorization: string, opts: {
        from: Date;
        to: Date;
        type: module:model/String;
        currency: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletMultiTransactionsGet(authorization: string, opts: {
        from: Date;
        to: Date;
        type: module:model/String;
        currency: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletPaygvtfeeOffPostWithHttpInfo(authorization: string): Promise;
    function v10WalletPaygvtfeeOffPost(authorization: string): Promise;
    function v10WalletPaygvtfeeOnPostWithHttpInfo(authorization: string): Promise;
    function v10WalletPaygvtfeeOnPost(authorization: string): Promise;
    function v10WalletTransactionByIdGetWithHttpInfo(id: string, authorization: string): Promise;
    function v10WalletTransactionByIdGet(id: string, authorization: string): Promise;
    function v10WalletTransactionsGetWithHttpInfo(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        assetType: module:model/String;
        txAction: module:model/String;
        wallet: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletTransactionsGet(authorization: string, opts: {
        assetId: string;
        from: Date;
        to: Date;
        assetType: module:model/String;
        txAction: module:model/String;
        wallet: module:model/String;
        skip: number;
        take: number;
    }): Promise;
    function v10WalletTransferPostWithHttpInfo(authorization: string, opts: {
        request: module:model/InternalTransferRequest;
    }): Promise;
    function v10WalletTransferPost(authorization: string, opts: {
        request: module:model/InternalTransferRequest;
    }): Promise;
    function v10WalletWithdrawInfoGetWithHttpInfo(authorization: string): Promise;
    function v10WalletWithdrawInfoGet(authorization: string): Promise;
    function v10WalletWithdrawRequestCancelByTxIdPostWithHttpInfo(txId: string, authorization: string): Promise;
    function v10WalletWithdrawRequestCancelByTxIdPost(txId: string, authorization: string): Promise;
    function v10WalletWithdrawRequestConfirmPostWithHttpInfo(opts: {
        requestId: string;
        code: string;
    }): Promise;
    function v10WalletWithdrawRequestConfirmPost(opts: {
        requestId: string;
        code: string;
    }): Promise;
    function v10WalletWithdrawRequestNewPostWithHttpInfo(authorization: string, opts: {
        model: module:model/CreateWithdrawalRequestModel;
    }): Promise;
    function v10WalletWithdrawRequestNewPost(authorization: string, opts: {
        model: module:model/CreateWithdrawalRequestModel;
    }): Promise;
    function v10WalletWithdrawRequestResendByTxIdPostWithHttpInfo(txId: string, authorization: string): Promise;
    function v10WalletWithdrawRequestResendByTxIdPost(txId: string, authorization: string): Promise;
}

export declare module index {
    var ApiClient: {};
    var AmountWithCurrency: {};
    var AndroidAppVersion: {};
    var AndroidVersion: {};
    var AssetEvent: {};
    var AssetSelection: {};
    var AssetsValue: {};
    var AttachToSignalProvider: {};
    var AttachToSignalProviderInfo: {};
    var BalanceChartElement: {};
    var BlockchainInfo: {};
    var Broker: {};
    var BrokerAccountType: {};
    var BrokersInfo: {};
    var CaptchaCheckResult: {};
    var CaptchaDetails: {};
    var ChangeBrokerProgramRequest: {};
    var ChangePasswordViewModel: {};
    var ChartSimple: {};
    var ConvertingDetails: {};
    var CopyTradingAccountInfo: {};
    var CopyTradingAccountsList: {};
    var CreateWithdrawalRequestModel: {};
    var DashboardChartValue: {};
    var DashboardPortfolioEvent: {};
    var DashboardPortfolioEvents: {};
    var DashboardProgramDetails: {};
    var DashboardSummary: {};
    var DetachFromSignalProvider: {};
    var Enums: {};
    var ErrorMessage: {};
    var ErrorViewModel: {};
    var ExternalTransactionDetails: {};
    var FcmTokenViewModel: {};
    var ForgotPasswordViewModel: {};
    var FundAssetInfo: {};
    var FundAssetPart: {};
    var FundAssetPartWithIcon: {};
    var FundAssetPercent: {};
    var FundAssetsListInfo: {};
    var FundBalanceChart: {};
    var FundDetails: {};
    var FundDetailsFull: {};
    var FundDetailsListStatistic: {};
    var FundFacet: {};
    var FundFilters: {};
    var FundInvestInfo: {};
    var FundNotificationSettingList: {};
    var FundProfitChart: {};
    var FundSets: {};
    var FundStatistic: {};
    var FundWithdrawInfo: {};
    var FundsList: {};
    var GeeTestDetails: {};
    var GeeTestResult: {};
    var IOsAppVersion: {};
    var InternalTransferRequest: {};
    var LevelInfo: {};
    var LevelUpData: {};
    var LevelUpSummary: {};
    var LevelsParamsInfo: {};
    var LoginViewModel: {};
    var ManagerAssets: {};
    var ManagerDashboard: {};
    var ManagerFundWithdrawInfo: {};
    var ManagerNotificationSettingList: {};
    var ManagerOverview: {};
    var ManagerPortfolioEvent: {};
    var ManagerPortfolioEvents: {};
    var ManagerProfile: {};
    var ManagerProfileDetails: {};
    var ManagerProgramCreateResult: {};
    var ManagerProgramWithdrawInfo: {};
    var ManagerSimpleFund: {};
    var ManagerSimpleProgram: {};
    var ManagersList: {};
    var MigrationRequest: {};
    var MultiWalletExternalTransaction: {};
    var MultiWalletExternalTransactionsViewModel: {};
    var MultiWalletFilters: {};
    var MultiWalletTransaction: {};
    var MultiWalletTransactionsViewModel: {};
    var NewFundRequest: {};
    var NewProgramRequest: {};
    var NotificationList: {};
    var NotificationSettingList: {};
    var NotificationSettingViewModel: {};
    var NotificationViewModel: {};
    var OrderModel: {};
    var OrderModelSignalData: {};
    var OrderProgramData: {};
    var OrderSignalFee: {};
    var OrderSignalModel: {};
    var OrderSignalProgramInfo: {};
    var OrderTradingFee: {};
    var OtherAssetsValue: {};
    var PasswordModel: {};
    var PeriodDate: {};
    var PersonalFundDetailsFull: {};
    var PersonalProgramDetailsFull: {};
    var PersonalSignalDetailsFull: {};
    var PlatformAsset: {};
    var PlatformAssets: {};
    var PlatformCurrency: {};
    var PlatformInfo: {};
    var PlatformStatistic: {};
    var PowDetails: {};
    var PowResult: {};
    var ProfileFullViewModel: {};
    var ProfileHeaderViewModel: {};
    var ProfilePublic: {};
    var ProgramBalanceChart: {};
    var ProgramBalanceChartElement: {};
    var ProgramDetails: {};
    var ProgramDetailsFull: {};
    var ProgramDetailsListStatistic: {};
    var ProgramDetailsRating: {};
    var ProgramFacet: {};
    var ProgramFilters: {};
    var ProgramInfo: {};
    var ProgramInvestInfo: {};
    var ProgramLevelInfo: {};
    var ProgramMinimumDeposit: {};
    var ProgramNotificationSettingList: {};
    var ProgramPeriodViewModel: {};
    var ProgramPeriodsViewModel: {};
    var ProgramProfitChart: {};
    var ProgramPwdUpdate: {};
    var ProgramRequest: {};
    var ProgramRequests: {};
    var ProgramSets: {};
    var ProgramStatistic: {};
    var ProgramTag: {};
    var ProgramTransactionDetails: {};
    var ProgramUpdate: {};
    var ProgramWithdrawInfo: {};
    var ProgramsInfo: {};
    var ProgramsLevelsInfo: {};
    var ProgramsList: {};
    var RateItem: {};
    var RatesModel: {};
    var RatesModelRates: {};
    var RecoveryCode: {};
    var RecoveryCodesViewModel: {};
    var RegisterInvestorViewModel: {};
    var RegisterManagerViewModel: {};
    var ResendConfirmationViewModel: {};
    var ResetPasswordViewModel: {};
    var SearchViewModel: {};
    var SignalDataMaster: {};
    var SignalDetails: {};
    var SignalProviderSubscribers: {};
    var SignalSubscriber: {};
    var SignalSubscription: {};
    var SignalsList: {};
    var SocialLinkViewModel: {};
    var SocialLinksViewModel: {};
    var TradesSignalViewModel: {};
    var TradesViewModel: {};
    var TransactionDetails: {};
    var TwoFactorAuthenticator: {};
    var TwoFactorAuthenticatorConfirm: {};
    var TwoFactorCodeModel: {};
    var TwoFactorStatus: {};
    var UpdatePersonalDetailViewModel: {};
    var UpdateProfileViewModel: {};
    var UpdateSocialLinkViewModel: {};
    var UploadResult: {};
    var UserCommissionData: {};
    var ValueChartBar: {};
    var WalletBaseData: {};
    var WalletData: {};
    var WalletInfo: {};
    var WalletMultiAvailable: {};
    var WalletMultiSummary: {};
    var WalletSummary: {};
    var WalletTransaction: {};
    var WalletTransactionsViewModel: {};
    var WalletWithdrawalInfo: {};
    var WalletsGrandTotal: {};
    var WalletsInfo: {};
    var WithdrawalInfo: {};
    var WithdrawalSummary: {};
    var AuthApi: {};
    var BrokersApi: {};
    var FileApi: {};
    var FundsApi: {};
    var InvestorApi: {};
    var ManagerApi: {};
    var NotificationsApi: {};
    var PlatformApi: {};
    var ProfileApi: {};
    var ProgramsApi: {};
    var RateApi: {};
    var SearchApi: {};
    var SignalApi: {};
    var WalletApi: {};
}

export declare module model/AmountWithCurrency {
    function constructFromObject(data: any, obj: module:model/AmountWithCurrency): module:model/AmountWithCurrency;
    var amount: number;
    var currency: module:model/AmountWithCurrency.CurrencyEnum;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/AmountWithCurrency {
    function constructFromObject(data: any, obj: module:model/AmountWithCurrency): module:model/AmountWithCurrency;
    var amount: number;
    var currency: module:model/AmountWithCurrency.CurrencyEnum;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/AndroidAppVersion {
    function constructFromObject(data: any, obj: module:model/AndroidAppVersion): module:model/AndroidAppVersion;
    var minVersion: module:model/AndroidVersion;
    var lastVersion: module:model/AndroidVersion;
}

export declare module model/AndroidAppVersion {
    function constructFromObject(data: any, obj: module:model/AndroidAppVersion): module:model/AndroidAppVersion;
    var minVersion: module:model/AndroidVersion;
    var lastVersion: module:model/AndroidVersion;
}

export declare module model/AndroidVersion {
    function constructFromObject(data: any, obj: module:model/AndroidVersion): module:model/AndroidVersion;
    var versionCode: string;
    var versionName: string;
}

export declare module model/AndroidVersion {
    function constructFromObject(data: any, obj: module:model/AndroidVersion): module:model/AndroidVersion;
    var versionCode: string;
    var versionName: string;
}

export declare module model/AssetEvent {
    function constructFromObject(data: any, obj: module:model/AssetEvent): module:model/AssetEvent;
    var programs: string[];
    var funds: string[];
}

export declare module model/AssetEvent {
    function constructFromObject(data: any, obj: module:model/AssetEvent): module:model/AssetEvent;
    var programs: string[];
    var funds: string[];
}

export declare module model/AssetSelection {
    function constructFromObject(data: any, obj: module:model/AssetSelection): module:model/AssetSelection;
    var id: string;
    var title: string;
    var logo: string;
    var type: module:model/AssetSelection.TypeEnum;
    enum TypeEnum {
        Program,
        Fund
    }
}

export declare module model/AssetSelection {
    function constructFromObject(data: any, obj: module:model/AssetSelection): module:model/AssetSelection;
    var id: string;
    var title: string;
    var logo: string;
    var type: module:model/AssetSelection.TypeEnum;
    enum TypeEnum {
        Program,
        Fund
    }
}

export declare module model/AssetsValue {
    function constructFromObject(data: any, obj: module:model/AssetsValue): module:model/AssetsValue;
    var type: module:model/AssetsValue.TypeEnum;
    var id: string;
    var title: string;
    var avatar: string;
    var color: string;
    var value: number;
    var changePercent: number;
    var changeValue: number;
    enum TypeEnum {
        All,
        Program,
        Fund
    }
}

export declare module model/AssetsValue {
    function constructFromObject(data: any, obj: module:model/AssetsValue): module:model/AssetsValue;
    var type: module:model/AssetsValue.TypeEnum;
    var id: string;
    var title: string;
    var avatar: string;
    var color: string;
    var value: number;
    var changePercent: number;
    var changeValue: number;
    enum TypeEnum {
        All,
        Program,
        Fund
    }
}

export declare module model/AttachToSignalProvider {
    function constructFromObject(data: any, obj: module:model/AttachToSignalProvider): module:model/AttachToSignalProvider;
    var mode: module:model/AttachToSignalProvider.ModeEnum;
    var percent: number;
    var openTolerancePercent: number;
    var fixedVolume: number;
    var fixedCurrency: module:model/AttachToSignalProvider.FixedCurrencyEnum;
    var initialDepositCurrency: module:model/AttachToSignalProvider.InitialDepositCurrencyEnum;
    var initialDepositAmount: number;
    enum ModeEnum {
        ByBalance,
        Percent,
        Fixed
    }
    enum FixedCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum InitialDepositCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/AttachToSignalProvider {
    function constructFromObject(data: any, obj: module:model/AttachToSignalProvider): module:model/AttachToSignalProvider;
    var mode: module:model/AttachToSignalProvider.ModeEnum;
    var percent: number;
    var openTolerancePercent: number;
    var fixedVolume: number;
    var fixedCurrency: module:model/AttachToSignalProvider.FixedCurrencyEnum;
    var initialDepositCurrency: module:model/AttachToSignalProvider.InitialDepositCurrencyEnum;
    var initialDepositAmount: number;
    enum ModeEnum {
        ByBalance,
        Percent,
        Fixed
    }
    enum FixedCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum InitialDepositCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/AttachToSignalProviderInfo {
    function constructFromObject(data: any, obj: module:model/AttachToSignalProviderInfo): module:model/AttachToSignalProviderInfo;
    var hasSignalAccount: boolean;
    var hasActiveSubscription: boolean;
    var volumeFee: number;
    var minDeposit: number;
    var minDepositCurrency: module:model/AttachToSignalProviderInfo.MinDepositCurrencyEnum;
    enum MinDepositCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/AttachToSignalProviderInfo {
    function constructFromObject(data: any, obj: module:model/AttachToSignalProviderInfo): module:model/AttachToSignalProviderInfo;
    var hasSignalAccount: boolean;
    var hasActiveSubscription: boolean;
    var volumeFee: number;
    var minDeposit: number;
    var minDepositCurrency: module:model/AttachToSignalProviderInfo.MinDepositCurrencyEnum;
    enum MinDepositCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/BalanceChartElement {
    function constructFromObject(data: any, obj: module:model/BalanceChartElement): module:model/BalanceChartElement;
    var date: Date;
    var managerFunds: number;
    var investorsFunds: number;
}

export declare module model/BalanceChartElement {
    function constructFromObject(data: any, obj: module:model/BalanceChartElement): module:model/BalanceChartElement;
    var date: Date;
    var managerFunds: number;
    var investorsFunds: number;
}

export declare module model/BlockchainInfo {
    function constructFromObject(data: any, obj: module:model/BlockchainInfo): module:model/BlockchainInfo;
    var hash: string;
    var status: module:model/BlockchainInfo.StatusEnum;
    enum StatusEnum {
        Undefined,
        New,
        Pending,
        ConfirmedByGate,
        ConfirmedAndValidated,
        Error,
        Cancelled
    }
}

export declare module model/BlockchainInfo {
    function constructFromObject(data: any, obj: module:model/BlockchainInfo): module:model/BlockchainInfo;
    var hash: string;
    var status: module:model/BlockchainInfo.StatusEnum;
    enum StatusEnum {
        Undefined,
        New,
        Pending,
        ConfirmedByGate,
        ConfirmedAndValidated,
        Error,
        Cancelled
    }
}

export declare module model/Broker {
    function constructFromObject(data: any, obj: module:model/Broker): module:model/Broker;
    var name: string;
    var description: string;
    var logo: string;
    var terms: string;
    var assets: string;
    var fee: number;
    var leverageMin: number;
    var leverageMax: number;
    var accountTypes: module:model/BrokerAccountType[];
    var isForex: boolean;
    var isSignalsAvailable: boolean;
    var tags: module:model/ProgramTag[];
}

export declare module model/Broker {
    function constructFromObject(data: any, obj: module:model/Broker): module:model/Broker;
    var name: string;
    var description: string;
    var logo: string;
    var terms: string;
    var assets: string;
    var fee: number;
    var leverageMin: number;
    var leverageMax: number;
    var accountTypes: module:model/BrokerAccountType[];
    var isForex: boolean;
    var isSignalsAvailable: boolean;
    var tags: module:model/ProgramTag[];
}

export declare module model/BrokerAccountType {
    function constructFromObject(data: any, obj: module:model/BrokerAccountType): module:model/BrokerAccountType;
    var id: string;
    var name: string;
    var description: string;
    var type: module:model/BrokerAccountType.TypeEnum;
    var leverages: number[];
    var currencies: string[];
    var minimumDepositsAmount: {
        [key: string]: number;
    };
    var isForex: boolean;
    var isSignalsAvailable: boolean;
    enum TypeEnum {
        Undefined,
        MetaTrader4,
        MetaTrader5,
        NinjaTrader,
        cTrader,
        Rumus,
        Metastock,
        Huobi
    }
}

export declare module model/BrokerAccountType {
    function constructFromObject(data: any, obj: module:model/BrokerAccountType): module:model/BrokerAccountType;
    var id: string;
    var name: string;
    var description: string;
    var type: module:model/BrokerAccountType.TypeEnum;
    var leverages: number[];
    var currencies: string[];
    var minimumDepositsAmount: {
        [key: string]: number;
    };
    var isForex: boolean;
    var isSignalsAvailable: boolean;
    enum TypeEnum {
        Undefined,
        MetaTrader4,
        MetaTrader5,
        NinjaTrader,
        cTrader,
        Rumus,
        Metastock,
        Huobi
    }
}

export declare module model/BrokersInfo {
    function constructFromObject(data: any, obj: module:model/BrokersInfo): module:model/BrokersInfo;
    var brokers: module:model/Broker[];
}

export declare module model/BrokersInfo {
    function constructFromObject(data: any, obj: module:model/BrokersInfo): module:model/BrokersInfo;
    var brokers: module:model/Broker[];
}

export declare module model/CaptchaCheckResult {
    function constructFromObject(data: any, obj: module:model/CaptchaCheckResult): module:model/CaptchaCheckResult;
    var id: string;
    var pow: module:model/PowResult;
    var geeTest: module:model/GeeTestResult;
}

export declare module model/CaptchaCheckResult {
    function constructFromObject(data: any, obj: module:model/CaptchaCheckResult): module:model/CaptchaCheckResult;
    var id: string;
    var pow: module:model/PowResult;
    var geeTest: module:model/GeeTestResult;
}

export declare module model/CaptchaDetails {
    function constructFromObject(data: any, obj: module:model/CaptchaDetails): module:model/CaptchaDetails;
    var captchaType: module:model/CaptchaDetails.CaptchaTypeEnum;
    var id: string;
    var route: string;
    var pow: module:model/PowDetails;
    var geeTest: module:model/GeeTestDetails;
    enum CaptchaTypeEnum {
        None,
        Pow,
        GeeTest
    }
}

export declare module model/CaptchaDetails {
    function constructFromObject(data: any, obj: module:model/CaptchaDetails): module:model/CaptchaDetails;
    var captchaType: module:model/CaptchaDetails.CaptchaTypeEnum;
    var id: string;
    var route: string;
    var pow: module:model/PowDetails;
    var geeTest: module:model/GeeTestDetails;
    enum CaptchaTypeEnum {
        None,
        Pow,
        GeeTest
    }
}

export declare module model/ChangeBrokerProgramRequest {
    function constructFromObject(data: any, obj: module:model/ChangeBrokerProgramRequest): module:model/ChangeBrokerProgramRequest;
    var programId: string;
    var newBrokerAccountTypeId: string;
    var newLeverage: number;
}

export declare module model/ChangeBrokerProgramRequest {
    function constructFromObject(data: any, obj: module:model/ChangeBrokerProgramRequest): module:model/ChangeBrokerProgramRequest;
    var programId: string;
    var newBrokerAccountTypeId: string;
    var newLeverage: number;
}

export declare module model/ChangePasswordViewModel {
    function constructFromObject(data: any, obj: module:model/ChangePasswordViewModel): module:model/ChangePasswordViewModel;
    var oldPassword: string;
    var password: string;
    var confirmPassword: string;
}

export declare module model/ChangePasswordViewModel {
    function constructFromObject(data: any, obj: module:model/ChangePasswordViewModel): module:model/ChangePasswordViewModel;
    var oldPassword: string;
    var password: string;
    var confirmPassword: string;
}

export declare module model/ChartSimple {
    function constructFromObject(data: any, obj: module:model/ChartSimple): module:model/ChartSimple;
    var value: number;
    var date: Date;
}

export declare module model/ChartSimple {
    function constructFromObject(data: any, obj: module:model/ChartSimple): module:model/ChartSimple;
    var value: number;
    var date: Date;
}

export declare module model/ConvertingDetails {
    function constructFromObject(data: any, obj: module:model/ConvertingDetails): module:model/ConvertingDetails;
    var currencyTo: module:model/ConvertingDetails.CurrencyToEnum;
    var currencyToName: string;
    var amountTo: number;
    var rateValue: number;
    var currencyToLogo: string;
    enum CurrencyToEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/ConvertingDetails {
    function constructFromObject(data: any, obj: module:model/ConvertingDetails): module:model/ConvertingDetails;
    var currencyTo: module:model/ConvertingDetails.CurrencyToEnum;
    var currencyToName: string;
    var amountTo: number;
    var rateValue: number;
    var currencyToLogo: string;
    enum CurrencyToEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/CopyTradingAccountInfo {
    function constructFromObject(data: any, obj: module:model/CopyTradingAccountInfo): module:model/CopyTradingAccountInfo;
    var id: string;
    var currency: module:model/CopyTradingAccountInfo.CurrencyEnum;
    var logo: string;
    var title: string;
    var balance: number;
    var equity: number;
    var freeMargin: number;
    var marginLevel: number;
    var available: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/CopyTradingAccountInfo {
    function constructFromObject(data: any, obj: module:model/CopyTradingAccountInfo): module:model/CopyTradingAccountInfo;
    var id: string;
    var currency: module:model/CopyTradingAccountInfo.CurrencyEnum;
    var logo: string;
    var title: string;
    var balance: number;
    var equity: number;
    var freeMargin: number;
    var marginLevel: number;
    var available: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/CopyTradingAccountsList {
    function constructFromObject(data: any, obj: module:model/CopyTradingAccountsList): module:model/CopyTradingAccountsList;
    var accounts: module:model/CopyTradingAccountInfo[];
    var total: number;
}

export declare module model/CopyTradingAccountsList {
    function constructFromObject(data: any, obj: module:model/CopyTradingAccountsList): module:model/CopyTradingAccountsList;
    var accounts: module:model/CopyTradingAccountInfo[];
    var total: number;
}

export declare module model/CreateWithdrawalRequestModel {
    function constructFromObject(data: any, obj: module:model/CreateWithdrawalRequestModel): module:model/CreateWithdrawalRequestModel;
    var amount: number;
    var currency: module:model/CreateWithdrawalRequestModel.CurrencyEnum;
    var address: string;
    var twoFactorCode: string;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/CreateWithdrawalRequestModel {
    function constructFromObject(data: any, obj: module:model/CreateWithdrawalRequestModel): module:model/CreateWithdrawalRequestModel;
    var amount: number;
    var currency: module:model/CreateWithdrawalRequestModel.CurrencyEnum;
    var address: string;
    var twoFactorCode: string;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/DashboardChartValue {
    function constructFromObject(data: any, obj: module:model/DashboardChartValue): module:model/DashboardChartValue;
    var investedProgramsInfo: module:model/ValueChartBar[];
    var balanceChart: module:model/ChartSimple[];
    var value: number;
    var valueCurrency: number;
    var changePercent: number;
    var changeValue: number;
    var changeValueCurrency: number;
    var rate: number;
}

export declare module model/DashboardChartValue {
    function constructFromObject(data: any, obj: module:model/DashboardChartValue): module:model/DashboardChartValue;
    var investedProgramsInfo: module:model/ValueChartBar[];
    var balanceChart: module:model/ChartSimple[];
    var value: number;
    var valueCurrency: number;
    var changePercent: number;
    var changeValue: number;
    var changeValueCurrency: number;
    var rate: number;
}

export declare module model/DashboardPortfolioEvent {
    function constructFromObject(data: any, obj: module:model/DashboardPortfolioEvent): module:model/DashboardPortfolioEvent;
    var assetId: string;
    var date: Date;
    var title: string;
    var url: string;
    var value: number;
    var valueTotal: number;
    var feeSuccessManager: number;
    var feeSuccessManagerCurrency: module:model/DashboardPortfolioEvent.FeeSuccessManagerCurrencyEnum;
    var feeSuccessPlatform: number;
    var feeSuccessPlatformCurrency: module:model/DashboardPortfolioEvent.FeeSuccessPlatformCurrencyEnum;
    var profitPercent: number;
    var currency: module:model/DashboardPortfolioEvent.CurrencyEnum;
    var type: module:model/DashboardPortfolioEvent.TypeEnum;
    var logo: string;
    var color: string;
    var description: string;
    var assetType: module:model/DashboardPortfolioEvent.AssetTypeEnum;
    enum FeeSuccessManagerCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum FeeSuccessPlatformCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        All,
        Invest,
        Withdraw,
        Profit,
        Loss,
        Reinvest,
        Canceled,
        Ended,
        WithdrawByStopOut
    }
    enum AssetTypeEnum {
        Program,
        Fund
    }
}

export declare module model/DashboardPortfolioEvent {
    function constructFromObject(data: any, obj: module:model/DashboardPortfolioEvent): module:model/DashboardPortfolioEvent;
    var assetId: string;
    var date: Date;
    var title: string;
    var url: string;
    var value: number;
    var valueTotal: number;
    var feeSuccessManager: number;
    var feeSuccessManagerCurrency: module:model/DashboardPortfolioEvent.FeeSuccessManagerCurrencyEnum;
    var feeSuccessPlatform: number;
    var feeSuccessPlatformCurrency: module:model/DashboardPortfolioEvent.FeeSuccessPlatformCurrencyEnum;
    var profitPercent: number;
    var currency: module:model/DashboardPortfolioEvent.CurrencyEnum;
    var type: module:model/DashboardPortfolioEvent.TypeEnum;
    var logo: string;
    var color: string;
    var description: string;
    var assetType: module:model/DashboardPortfolioEvent.AssetTypeEnum;
    enum FeeSuccessManagerCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum FeeSuccessPlatformCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        All,
        Invest,
        Withdraw,
        Profit,
        Loss,
        Reinvest,
        Canceled,
        Ended,
        WithdrawByStopOut
    }
    enum AssetTypeEnum {
        Program,
        Fund
    }
}

export declare module model/DashboardPortfolioEvents {
    function constructFromObject(data: any, obj: module:model/DashboardPortfolioEvents): module:model/DashboardPortfolioEvents;
    var events: module:model/DashboardPortfolioEvent[];
    var total: number;
}

export declare module model/DashboardPortfolioEvents {
    function constructFromObject(data: any, obj: module:model/DashboardPortfolioEvents): module:model/DashboardPortfolioEvents;
    var events: module:model/DashboardPortfolioEvent[];
    var total: number;
}

export declare module model/DashboardProgramDetails {
    function constructFromObject(data: any, obj: module:model/DashboardProgramDetails): module:model/DashboardProgramDetails;
    var share: number;
}

export declare module model/DashboardProgramDetails {
    function constructFromObject(data: any, obj: module:model/DashboardProgramDetails): module:model/DashboardProgramDetails;
    var share: number;
}

export declare module model/DashboardSummary {
    function constructFromObject(data: any, obj: module:model/DashboardSummary): module:model/DashboardSummary;
    var chart: module:model/DashboardChartValue;
    var events: module:model/DashboardPortfolioEvents;
    var profileHeader: module:model/ProfileHeaderViewModel;
    var programsCount: number;
    var fundsCount: number;
    var signalsCount: number;
    var requests: module:model/ProgramRequests;
}

export declare module model/DashboardSummary {
    function constructFromObject(data: any, obj: module:model/DashboardSummary): module:model/DashboardSummary;
    var chart: module:model/DashboardChartValue;
    var events: module:model/DashboardPortfolioEvents;
    var profileHeader: module:model/ProfileHeaderViewModel;
    var programsCount: number;
    var fundsCount: number;
    var signalsCount: number;
    var requests: module:model/ProgramRequests;
}

export declare module model/DetachFromSignalProvider {
    function constructFromObject(data: any, obj: module:model/DetachFromSignalProvider): module:model/DetachFromSignalProvider;
    var mode: module:model/DetachFromSignalProvider.ModeEnum;
    enum ModeEnum {
        None,
        ProviderCloseOnly,
        CloseAllImmediately
    }
}

export declare module model/DetachFromSignalProvider {
    function constructFromObject(data: any, obj: module:model/DetachFromSignalProvider): module:model/DetachFromSignalProvider;
    var mode: module:model/DetachFromSignalProvider.ModeEnum;
    enum ModeEnum {
        None,
        ProviderCloseOnly,
        CloseAllImmediately
    }
}

export declare module model/Enums {
    function constructFromObject(data: any, obj: module:model/Enums): module:model/Enums;
    var multiWallet: module:model/MultiWalletFilters;
    var program: module:model/ProgramFilters;
    var fund: module:model/FundFilters;
}

export declare module model/Enums {
    function constructFromObject(data: any, obj: module:model/Enums): module:model/Enums;
    var multiWallet: module:model/MultiWalletFilters;
    var program: module:model/ProgramFilters;
    var fund: module:model/FundFilters;
}

export declare module model/ErrorMessage {
    function constructFromObject(data: any, obj: module:model/ErrorMessage): module:model/ErrorMessage;
    var message: string;
    var property: string;
}

export declare module model/ErrorMessage {
    function constructFromObject(data: any, obj: module:model/ErrorMessage): module:model/ErrorMessage;
    var message: string;
    var property: string;
}

export declare module model/ErrorViewModel {
    function constructFromObject(data: any, obj: module:model/ErrorViewModel): module:model/ErrorViewModel;
    var errors: module:model/ErrorMessage[];
    var code: module:model/ErrorViewModel.CodeEnum;
    enum CodeEnum {
        InternalServerError,
        ValidationError,
        RequiresTwoFactor,
        WrongCaptcha
    }
}

export declare module model/ErrorViewModel {
    function constructFromObject(data: any, obj: module:model/ErrorViewModel): module:model/ErrorViewModel;
    var errors: module:model/ErrorMessage[];
    var code: module:model/ErrorViewModel.CodeEnum;
    enum CodeEnum {
        InternalServerError,
        ValidationError,
        RequiresTwoFactor,
        WrongCaptcha
    }
}

export declare module model/ExternalTransactionDetails {
    function constructFromObject(data: any, obj: module:model/ExternalTransactionDetails): module:model/ExternalTransactionDetails;
    var description: string;
    var descriptionUrl: string;
    var fromAddress: string;
    var isEnableActions: boolean;
}

export declare module model/ExternalTransactionDetails {
    function constructFromObject(data: any, obj: module:model/ExternalTransactionDetails): module:model/ExternalTransactionDetails;
    var description: string;
    var descriptionUrl: string;
    var fromAddress: string;
    var isEnableActions: boolean;
}

export declare module model/FcmTokenViewModel {
    function constructFromObject(data: any, obj: module:model/FcmTokenViewModel): module:model/FcmTokenViewModel;
    var token: string;
}

export declare module model/FcmTokenViewModel {
    function constructFromObject(data: any, obj: module:model/FcmTokenViewModel): module:model/FcmTokenViewModel;
    var token: string;
}

export declare module model/ForgotPasswordViewModel {
    function constructFromObject(data: any, obj: module:model/ForgotPasswordViewModel): module:model/ForgotPasswordViewModel;
    var email: string;
}

export declare module model/ForgotPasswordViewModel {
    function constructFromObject(data: any, obj: module:model/ForgotPasswordViewModel): module:model/ForgotPasswordViewModel;
    var email: string;
}

export declare module model/FundAssetInfo {
    function constructFromObject(data: any, obj: module:model/FundAssetInfo): module:model/FundAssetInfo;
    var asset: string;
    var symbol: string;
    var icon: string;
    var target: number;
    var current: number;
}

export declare module model/FundAssetInfo {
    function constructFromObject(data: any, obj: module:model/FundAssetInfo): module:model/FundAssetInfo;
    var asset: string;
    var symbol: string;
    var icon: string;
    var target: number;
    var current: number;
}

export declare module model/FundAssetPart {
    function constructFromObject(data: any, obj: module:model/FundAssetPart): module:model/FundAssetPart;
    var id: string;
    var percent: number;
}

export declare module model/FundAssetPart {
    function constructFromObject(data: any, obj: module:model/FundAssetPart): module:model/FundAssetPart;
    var id: string;
    var percent: number;
}

export declare module model/FundAssetPartWithIcon {
    function constructFromObject(data: any, obj: module:model/FundAssetPartWithIcon): module:model/FundAssetPartWithIcon;
    var icon: string;
    var color: string;
    var name: string;
    var asset: string;
    var percent: number;
}

export declare module model/FundAssetPartWithIcon {
    function constructFromObject(data: any, obj: module:model/FundAssetPartWithIcon): module:model/FundAssetPartWithIcon;
    var icon: string;
    var color: string;
    var name: string;
    var asset: string;
    var percent: number;
}

export declare module model/FundAssetPercent {
    function constructFromObject(data: any, obj: module:model/FundAssetPercent): module:model/FundAssetPercent;
    var asset: string;
    var name: string;
    var percent: number;
    var icon: string;
}

export declare module model/FundAssetPercent {
    function constructFromObject(data: any, obj: module:model/FundAssetPercent): module:model/FundAssetPercent;
    var asset: string;
    var name: string;
    var percent: number;
    var icon: string;
}

export declare module model/FundAssetsListInfo {
    function constructFromObject(data: any, obj: module:model/FundAssetsListInfo): module:model/FundAssetsListInfo;
    var assets: module:model/FundAssetInfo[];
}

export declare module model/FundAssetsListInfo {
    function constructFromObject(data: any, obj: module:model/FundAssetsListInfo): module:model/FundAssetsListInfo;
    var assets: module:model/FundAssetInfo[];
}

export declare module model/FundBalanceChart {
    function constructFromObject(data: any, obj: module:model/FundBalanceChart): module:model/FundBalanceChart;
    var usdBalance: number;
    var balanceChart: module:model/BalanceChartElement[];
    var gvtBalance: number;
}

export declare module model/FundBalanceChart {
    function constructFromObject(data: any, obj: module:model/FundBalanceChart): module:model/FundBalanceChart;
    var usdBalance: number;
    var balanceChart: module:model/BalanceChartElement[];
    var gvtBalance: number;
}

export declare module model/FundDetails {
    function constructFromObject(data: any, obj: module:model/FundDetails): module:model/FundDetails;
    var totalAssetsCount: number;
    var topFundAssets: module:model/FundAssetPercent[];
    var statistic: module:model/FundDetailsListStatistic;
    var personalDetails: module:model/PersonalFundDetailsFull;
    var dashboardAssetsDetails: module:model/DashboardProgramDetails;
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var title: string;
    var description: string;
    var status: module:model/FundDetails.StatusEnum;
    var creationDate: Date;
    var manager: module:model/ProfilePublic;
    var chart: module:model/ChartSimple[];
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/FundDetails {
    function constructFromObject(data: any, obj: module:model/FundDetails): module:model/FundDetails;
    var totalAssetsCount: number;
    var topFundAssets: module:model/FundAssetPercent[];
    var statistic: module:model/FundDetailsListStatistic;
    var personalDetails: module:model/PersonalFundDetailsFull;
    var dashboardAssetsDetails: module:model/DashboardProgramDetails;
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var title: string;
    var description: string;
    var status: module:model/FundDetails.StatusEnum;
    var creationDate: Date;
    var manager: module:model/ProfilePublic;
    var chart: module:model/ChartSimple[];
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/FundDetailsFull {
    function constructFromObject(data: any, obj: module:model/FundDetailsFull): module:model/FundDetailsFull;
    var entryFee: number;
    var exitFee: number;
    var managementFee: number;
    var currentAssets: module:model/FundAssetPartWithIcon[];
    var statistic: module:model/FundStatistic;
    var personalFundDetails: module:model/PersonalFundDetailsFull;
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var description: string;
    var title: string;
    var ipfsHash: string;
    var creationDate: Date;
    var status: module:model/FundDetailsFull.StatusEnum;
    var manager: module:model/ProfilePublic;
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/FundDetailsFull {
    function constructFromObject(data: any, obj: module:model/FundDetailsFull): module:model/FundDetailsFull;
    var entryFee: number;
    var exitFee: number;
    var managementFee: number;
    var currentAssets: module:model/FundAssetPartWithIcon[];
    var statistic: module:model/FundStatistic;
    var personalFundDetails: module:model/PersonalFundDetailsFull;
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var description: string;
    var title: string;
    var ipfsHash: string;
    var creationDate: Date;
    var status: module:model/FundDetailsFull.StatusEnum;
    var manager: module:model/ProfilePublic;
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/FundDetailsListStatistic {
    function constructFromObject(data: any, obj: module:model/FundDetailsListStatistic): module:model/FundDetailsListStatistic;
    var balanceGVT: module:model/AmountWithCurrency;
    var balanceSecondary: module:model/AmountWithCurrency;
    var profitPercent: number;
    var drawdownPercent: number;
    var investorsCount: number;
}

export declare module model/FundDetailsListStatistic {
    function constructFromObject(data: any, obj: module:model/FundDetailsListStatistic): module:model/FundDetailsListStatistic;
    var balanceGVT: module:model/AmountWithCurrency;
    var balanceSecondary: module:model/AmountWithCurrency;
    var profitPercent: number;
    var drawdownPercent: number;
    var investorsCount: number;
}

export declare module model/FundFacet {
    function constructFromObject(data: any, obj: module:model/FundFacet): module:model/FundFacet;
    var sorting: module:model/FundFacet.SortingEnum;
    var id: string;
    var title: string;
    var description: string;
    var logo: string;
    var url: string;
    var sortType: module:model/FundFacet.SortTypeEnum;
    var timeframe: module:model/FundFacet.TimeframeEnum;
    enum SortingEnum {
        ByProfitAsc,
        ByProfitDesc,
        ByDrawdownAsc,
        ByDrawdownDesc,
        ByInvestorsAsc,
        ByInvestorsDesc,
        ByNewAsc,
        ByNewDesc,
        ByTitleAsc,
        ByTitleDesc,
        ByBalanceAsc,
        ByBalanceDesc
    }
    enum SortTypeEnum {
        New,
        Top,
        WeeklyTop,
        Popular,
        ToLevelUp
    }
    enum TimeframeEnum {
        Day,
        Week,
        Month,
        ThreeMonths,
        Year,
        AllTime
    }
}

export declare module model/FundFacet {
    function constructFromObject(data: any, obj: module:model/FundFacet): module:model/FundFacet;
    var sorting: module:model/FundFacet.SortingEnum;
    var id: string;
    var title: string;
    var description: string;
    var logo: string;
    var url: string;
    var sortType: module:model/FundFacet.SortTypeEnum;
    var timeframe: module:model/FundFacet.TimeframeEnum;
    enum SortingEnum {
        ByProfitAsc,
        ByProfitDesc,
        ByDrawdownAsc,
        ByDrawdownDesc,
        ByInvestorsAsc,
        ByInvestorsDesc,
        ByNewAsc,
        ByNewDesc,
        ByTitleAsc,
        ByTitleDesc,
        ByBalanceAsc,
        ByBalanceDesc
    }
    enum SortTypeEnum {
        New,
        Top,
        WeeklyTop,
        Popular,
        ToLevelUp
    }
    enum TimeframeEnum {
        Day,
        Week,
        Month,
        ThreeMonths,
        Year,
        AllTime
    }
}

export declare module model/FundFilters {
    function constructFromObject(data: any, obj: module:model/FundFilters): module:model/FundFilters;
    var assets: module:model/PlatformAsset[];
}

export declare module model/FundFilters {
    function constructFromObject(data: any, obj: module:model/FundFilters): module:model/FundFilters;
    var assets: module:model/PlatformAsset[];
}

export declare module model/FundInvestInfo {
    function constructFromObject(data: any, obj: module:model/FundInvestInfo): module:model/FundInvestInfo;
    var title: string;
    var availableInWallet: number;
    var minInvestmentAmount: number;
    var entryFee: number;
    var gvCommission: number;
    var rate: number;
    var isOwnProgram: boolean;
}

export declare module model/FundInvestInfo {
    function constructFromObject(data: any, obj: module:model/FundInvestInfo): module:model/FundInvestInfo;
    var title: string;
    var availableInWallet: number;
    var minInvestmentAmount: number;
    var entryFee: number;
    var gvCommission: number;
    var rate: number;
    var isOwnProgram: boolean;
}

export declare module model/FundNotificationSettingList {
    function constructFromObject(data: any, obj: module:model/FundNotificationSettingList): module:model/FundNotificationSettingList;
    var assetId: string;
    var title: string;
    var url: string;
    var logo: string;
    var color: string;
    var settingsGeneral: module:model/NotificationSettingViewModel[];
}

export declare module model/FundNotificationSettingList {
    function constructFromObject(data: any, obj: module:model/FundNotificationSettingList): module:model/FundNotificationSettingList;
    var assetId: string;
    var title: string;
    var url: string;
    var logo: string;
    var color: string;
    var settingsGeneral: module:model/NotificationSettingViewModel[];
}

export declare module model/FundProfitChart {
    function constructFromObject(data: any, obj: module:model/FundProfitChart): module:model/FundProfitChart;
    var totalUsdProfit: number;
    var timeframeUsdProfit: number;
    var rebalances: number;
    var creationDate: Date;
    var profitPercent: number;
    var equityChart: module:model/ChartSimple[];
    var balance: number;
    var investors: number;
    var profitChangePercent: number;
    var sharpeRatio: number;
    var sortinoRatio: number;
    var calmarRatio: number;
    var maxDrawdown: number;
    var totalGvtProfit: number;
    var timeframeGvtProfit: number;
    var rate: number;
}

export declare module model/FundProfitChart {
    function constructFromObject(data: any, obj: module:model/FundProfitChart): module:model/FundProfitChart;
    var totalUsdProfit: number;
    var timeframeUsdProfit: number;
    var rebalances: number;
    var creationDate: Date;
    var profitPercent: number;
    var equityChart: module:model/ChartSimple[];
    var balance: number;
    var investors: number;
    var profitChangePercent: number;
    var sharpeRatio: number;
    var sortinoRatio: number;
    var calmarRatio: number;
    var maxDrawdown: number;
    var totalGvtProfit: number;
    var timeframeGvtProfit: number;
    var rate: number;
}

export declare module model/FundSets {
    function constructFromObject(data: any, obj: module:model/FundSets): module:model/FundSets;
    var sets: module:model/FundFacet[];
    var favoritesCount: number;
}

export declare module model/FundSets {
    function constructFromObject(data: any, obj: module:model/FundSets): module:model/FundSets;
    var sets: module:model/FundFacet[];
    var favoritesCount: number;
}

export declare module model/FundStatistic {
    function constructFromObject(data: any, obj: module:model/FundStatistic): module:model/FundStatistic;
    var balanceGVT: module:model/AmountWithCurrency;
    var balanceSecondary: module:model/AmountWithCurrency;
    var profitPercent: number;
    var drawdownPercent: number;
    var investorsCount: number;
    var startDate: Date;
    var startBalance: number;
    var investedAmount: number;
    var rebalancingCount: number;
}

export declare module model/FundStatistic {
    function constructFromObject(data: any, obj: module:model/FundStatistic): module:model/FundStatistic;
    var balanceGVT: module:model/AmountWithCurrency;
    var balanceSecondary: module:model/AmountWithCurrency;
    var profitPercent: number;
    var drawdownPercent: number;
    var investorsCount: number;
    var startDate: Date;
    var startBalance: number;
    var investedAmount: number;
    var rebalancingCount: number;
}

export declare module model/FundWithdrawInfo {
    function constructFromObject(data: any, obj: module:model/FundWithdrawInfo): module:model/FundWithdrawInfo;
    var exitFee: number;
    var title: string;
    var availableToWithdraw: number;
    var rate: number;
}

export declare module model/FundWithdrawInfo {
    function constructFromObject(data: any, obj: module:model/FundWithdrawInfo): module:model/FundWithdrawInfo;
    var exitFee: number;
    var title: string;
    var availableToWithdraw: number;
    var rate: number;
}

export declare module model/FundsList {
    function constructFromObject(data: any, obj: module:model/FundsList): module:model/FundsList;
    var funds: module:model/FundDetails[];
    var total: number;
}

export declare module model/FundsList {
    function constructFromObject(data: any, obj: module:model/FundsList): module:model/FundsList;
    var funds: module:model/FundDetails[];
    var total: number;
}

export declare module model/GeeTestDetails {
    function constructFromObject(data: any, obj: module:model/GeeTestDetails): module:model/GeeTestDetails;
}

export declare module model/GeeTestDetails {
    function constructFromObject(data: any, obj: module:model/GeeTestDetails): module:model/GeeTestDetails;
}

export declare module model/GeeTestResult {
    function constructFromObject(data: any, obj: module:model/GeeTestResult): module:model/GeeTestResult;
}

export declare module model/GeeTestResult {
    function constructFromObject(data: any, obj: module:model/GeeTestResult): module:model/GeeTestResult;
}

export declare module model/IOsAppVersion {
    function constructFromObject(data: any, obj: module:model/IOsAppVersion): module:model/IOsAppVersion;
    var minVersion: string;
    var lastVersion: string;
}

export declare module model/IOsAppVersion {
    function constructFromObject(data: any, obj: module:model/IOsAppVersion): module:model/IOsAppVersion;
    var minVersion: string;
    var lastVersion: string;
}

export declare module model/InternalTransferRequest {
    function constructFromObject(data: any, obj: module:model/InternalTransferRequest): module:model/InternalTransferRequest;
    var sourceId: string;
    var sourceType: module:model/InternalTransferRequest.SourceTypeEnum;
    var destinationId: string;
    var destinationType: module:model/InternalTransferRequest.DestinationTypeEnum;
    var amount: number;
    var transferAll: boolean;
    enum SourceTypeEnum {
        Undefined,
        Wallet,
        CopyTradingAccount,
        GenesisVisionPlatform,
        SignalProviderSettings
    }
    enum DestinationTypeEnum {
        Undefined,
        Wallet,
        CopyTradingAccount,
        GenesisVisionPlatform,
        SignalProviderSettings
    }
}

export declare module model/InternalTransferRequest {
    function constructFromObject(data: any, obj: module:model/InternalTransferRequest): module:model/InternalTransferRequest;
    var sourceId: string;
    var sourceType: module:model/InternalTransferRequest.SourceTypeEnum;
    var destinationId: string;
    var destinationType: module:model/InternalTransferRequest.DestinationTypeEnum;
    var amount: number;
    var transferAll: boolean;
    enum SourceTypeEnum {
        Undefined,
        Wallet,
        CopyTradingAccount,
        GenesisVisionPlatform,
        SignalProviderSettings
    }
    enum DestinationTypeEnum {
        Undefined,
        Wallet,
        CopyTradingAccount,
        GenesisVisionPlatform,
        SignalProviderSettings
    }
}

export declare module model/LevelInfo {
    function constructFromObject(data: any, obj: module:model/LevelInfo): module:model/LevelInfo;
    var level: number;
    var investmentLimit: number;
}

export declare module model/LevelInfo {
    function constructFromObject(data: any, obj: module:model/LevelInfo): module:model/LevelInfo;
    var level: number;
    var investmentLimit: number;
}

export declare module model/LevelUpData {
    function constructFromObject(data: any, obj: module:model/LevelUpData): module:model/LevelUpData;
    var level: number;
    var total: number;
    var totalOwn: number;
    var quota: number;
    var targetProfit: number;
}

export declare module model/LevelUpData {
    function constructFromObject(data: any, obj: module:model/LevelUpData): module:model/LevelUpData;
    var level: number;
    var total: number;
    var totalOwn: number;
    var quota: number;
    var targetProfit: number;
}

export declare module model/LevelUpSummary {
    function constructFromObject(data: any, obj: module:model/LevelUpSummary): module:model/LevelUpSummary;
    var levelData: module:model/LevelUpData[];
}

export declare module model/LevelUpSummary {
    function constructFromObject(data: any, obj: module:model/LevelUpSummary): module:model/LevelUpSummary;
    var levelData: module:model/LevelUpData[];
}

export declare module model/LevelsParamsInfo {
    function constructFromObject(data: any, obj: module:model/LevelsParamsInfo): module:model/LevelsParamsInfo;
    var minAvailableToInvest: number;
    var maxAvailableToInvest: number;
    var unverifiedAvailableToInvest: number;
    var genesisRatioMin: number;
    var genesisRatioMax: number;
    var genesisRatioHighRisk: number;
    var volumeScaleMin: number;
    var volumeScaleMax: number;
    var programAgeMax: number;
    var ageByVolumeMax: number;
    var investmentScaleMin: number;
    var investmentScaleMax: number;
    var investmentScaleHighRisk: number;
}

export declare module model/LevelsParamsInfo {
    function constructFromObject(data: any, obj: module:model/LevelsParamsInfo): module:model/LevelsParamsInfo;
    var minAvailableToInvest: number;
    var maxAvailableToInvest: number;
    var unverifiedAvailableToInvest: number;
    var genesisRatioMin: number;
    var genesisRatioMax: number;
    var genesisRatioHighRisk: number;
    var volumeScaleMin: number;
    var volumeScaleMax: number;
    var programAgeMax: number;
    var ageByVolumeMax: number;
    var investmentScaleMin: number;
    var investmentScaleMax: number;
    var investmentScaleHighRisk: number;
}

export declare module model/LoginViewModel {
    function constructFromObject(data: any, obj: module:model/LoginViewModel): module:model/LoginViewModel;
    var email: string;
    var password: string;
    var rememberMe: boolean;
    var twoFactorCode: string;
    var recoveryCode: string;
    var client: string;
    var captchaCheckResult: module:model/CaptchaCheckResult;
}

export declare module model/LoginViewModel {
    function constructFromObject(data: any, obj: module:model/LoginViewModel): module:model/LoginViewModel;
    var email: string;
    var password: string;
    var rememberMe: boolean;
    var twoFactorCode: string;
    var recoveryCode: string;
    var client: string;
    var captchaCheckResult: module:model/CaptchaCheckResult;
}

export declare module model/ManagerAssets {
    function constructFromObject(data: any, obj: module:model/ManagerAssets): module:model/ManagerAssets;
    var programs: module:model/ManagerSimpleProgram[];
    var funds: module:model/ManagerSimpleFund[];
}

export declare module model/ManagerAssets {
    function constructFromObject(data: any, obj: module:model/ManagerAssets): module:model/ManagerAssets;
    var programs: module:model/ManagerSimpleProgram[];
    var funds: module:model/ManagerSimpleFund[];
}

export declare module model/ManagerDashboard {
    function constructFromObject(data: any, obj: module:model/ManagerDashboard): module:model/ManagerDashboard;
    var profile: module:model/ManagerProfileDetails;
    var requests: module:model/ProgramRequest;
    var events: module:model/ManagerPortfolioEvents;
    var allAssets: module:model/AssetSelection[];
    var programChart: module:model/ProgramProfitChart;
    var fundChart: module:model/FundProfitChart;
}

export declare module model/ManagerDashboard {
    function constructFromObject(data: any, obj: module:model/ManagerDashboard): module:model/ManagerDashboard;
    var profile: module:model/ManagerProfileDetails;
    var requests: module:model/ProgramRequest;
    var events: module:model/ManagerPortfolioEvents;
    var allAssets: module:model/AssetSelection[];
    var programChart: module:model/ProgramProfitChart;
    var fundChart: module:model/FundProfitChart;
}

export declare module model/ManagerFundWithdrawInfo {
    function constructFromObject(data: any, obj: module:model/ManagerFundWithdrawInfo): module:model/ManagerFundWithdrawInfo;
    var withheldInvestment: number;
    var exitFee: number;
    var title: string;
    var availableToWithdraw: number;
    var rate: number;
}

export declare module model/ManagerFundWithdrawInfo {
    function constructFromObject(data: any, obj: module:model/ManagerFundWithdrawInfo): module:model/ManagerFundWithdrawInfo;
    var withheldInvestment: number;
    var exitFee: number;
    var title: string;
    var availableToWithdraw: number;
    var rate: number;
}

export declare module model/ManagerNotificationSettingList {
    function constructFromObject(data: any, obj: module:model/ManagerNotificationSettingList): module:model/ManagerNotificationSettingList;
    var managerId: string;
    var url: string;
    var username: string;
    var avatar: string;
    var about: string;
    var settingsGeneral: module:model/NotificationSettingViewModel[];
}

export declare module model/ManagerNotificationSettingList {
    function constructFromObject(data: any, obj: module:model/ManagerNotificationSettingList): module:model/ManagerNotificationSettingList;
    var managerId: string;
    var url: string;
    var username: string;
    var avatar: string;
    var about: string;
    var settingsGeneral: module:model/NotificationSettingViewModel[];
}

export declare module model/ManagerOverview {
    function constructFromObject(data: any, obj: module:model/ManagerOverview): module:model/ManagerOverview;
}

export declare module model/ManagerOverview {
    function constructFromObject(data: any, obj: module:model/ManagerOverview): module:model/ManagerOverview;
}

export declare module model/ManagerPortfolioEvent {
    function constructFromObject(data: any, obj: module:model/ManagerPortfolioEvent): module:model/ManagerPortfolioEvent;
    var assetId: string;
    var date: Date;
    var title: string;
    var value: number;
    var feeValue: number;
    var profitPercent: number;
    var currency: module:model/ManagerPortfolioEvent.CurrencyEnum;
    var type: module:model/ManagerPortfolioEvent.TypeEnum;
    var programType: module:model/ManagerPortfolioEvent.ProgramTypeEnum;
    var logo: string;
    var color: string;
    var description: string;
    var url: string;
    var periodNumber: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        All,
        AssetStarted,
        ProgramPeriodStarts,
        ProgramPeriodEnds,
        InvestorInvest,
        InvestorWithdraw,
        ManagerInvest,
        ManagerWithdraw,
        AssetFinished,
        EntranceFee,
        ExitFee,
        ProgramStopOut,
        ProgramManagerTradingFeeAccrual,
        ProgramSignalSubscribe,
        ProgramBrokerChanged
    }
    enum ProgramTypeEnum {
        Program,
        Fund
    }
}

export declare module model/ManagerPortfolioEvent {
    function constructFromObject(data: any, obj: module:model/ManagerPortfolioEvent): module:model/ManagerPortfolioEvent;
    var assetId: string;
    var date: Date;
    var title: string;
    var value: number;
    var feeValue: number;
    var profitPercent: number;
    var currency: module:model/ManagerPortfolioEvent.CurrencyEnum;
    var type: module:model/ManagerPortfolioEvent.TypeEnum;
    var programType: module:model/ManagerPortfolioEvent.ProgramTypeEnum;
    var logo: string;
    var color: string;
    var description: string;
    var url: string;
    var periodNumber: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        All,
        AssetStarted,
        ProgramPeriodStarts,
        ProgramPeriodEnds,
        InvestorInvest,
        InvestorWithdraw,
        ManagerInvest,
        ManagerWithdraw,
        AssetFinished,
        EntranceFee,
        ExitFee,
        ProgramStopOut,
        ProgramManagerTradingFeeAccrual,
        ProgramSignalSubscribe,
        ProgramBrokerChanged
    }
    enum ProgramTypeEnum {
        Program,
        Fund
    }
}

export declare module model/ManagerPortfolioEvents {
    function constructFromObject(data: any, obj: module:model/ManagerPortfolioEvents): module:model/ManagerPortfolioEvents;
    var events: module:model/ManagerPortfolioEvent[];
    var total: number;
}

export declare module model/ManagerPortfolioEvents {
    function constructFromObject(data: any, obj: module:model/ManagerPortfolioEvents): module:model/ManagerPortfolioEvents;
    var events: module:model/ManagerPortfolioEvent[];
    var total: number;
}

export declare module model/ManagerProfile {
    function constructFromObject(data: any, obj: module:model/ManagerProfile): module:model/ManagerProfile;
    var id: string;
    var username: string;
    var about: string;
    var avatar: string;
    var regDate: Date;
    var assets: string[];
    var url: string;
    var socialLinks: module:model/SocialLinkViewModel[];
}

export declare module model/ManagerProfile {
    function constructFromObject(data: any, obj: module:model/ManagerProfile): module:model/ManagerProfile;
    var id: string;
    var username: string;
    var about: string;
    var avatar: string;
    var regDate: Date;
    var assets: string[];
    var url: string;
    var socialLinks: module:model/SocialLinkViewModel[];
}

export declare module model/ManagerProfileDetails {
    function constructFromObject(data: any, obj: module:model/ManagerProfileDetails): module:model/ManagerProfileDetails;
    var managerProfile: module:model/ManagerProfile;
    var overview: module:model/ManagerOverview;
    var programsCount: number;
    var fundsCount: number;
}

export declare module model/ManagerProfileDetails {
    function constructFromObject(data: any, obj: module:model/ManagerProfileDetails): module:model/ManagerProfileDetails;
    var managerProfile: module:model/ManagerProfile;
    var overview: module:model/ManagerOverview;
    var programsCount: number;
    var fundsCount: number;
}

export declare module model/ManagerProgramCreateResult {
    function constructFromObject(data: any, obj: module:model/ManagerProgramCreateResult): module:model/ManagerProgramCreateResult;
    var programId: string;
    var twoFactorRequired: boolean;
    var twoFactor: module:model/TwoFactorAuthenticator;
}

export declare module model/ManagerProgramCreateResult {
    function constructFromObject(data: any, obj: module:model/ManagerProgramCreateResult): module:model/ManagerProgramCreateResult;
    var programId: string;
    var twoFactorRequired: boolean;
    var twoFactor: module:model/TwoFactorAuthenticator;
}

export declare module model/ManagerProgramWithdrawInfo {
    function constructFromObject(data: any, obj: module:model/ManagerProgramWithdrawInfo): module:model/ManagerProgramWithdrawInfo;
    var withheldInvestment: number;
    var periodEnds: Date;
    var title: string;
    var availableToWithdraw: number;
    var rate: number;
}

export declare module model/ManagerProgramWithdrawInfo {
    function constructFromObject(data: any, obj: module:model/ManagerProgramWithdrawInfo): module:model/ManagerProgramWithdrawInfo;
    var withheldInvestment: number;
    var periodEnds: Date;
    var title: string;
    var availableToWithdraw: number;
    var rate: number;
}

export declare module model/ManagerSimpleFund {
    function constructFromObject(data: any, obj: module:model/ManagerSimpleFund): module:model/ManagerSimpleFund;
    var id: string;
    var title: string;
    var color: string;
    var logo: string;
    var url: string;
}

export declare module model/ManagerSimpleFund {
    function constructFromObject(data: any, obj: module:model/ManagerSimpleFund): module:model/ManagerSimpleFund;
    var id: string;
    var title: string;
    var color: string;
    var logo: string;
    var url: string;
}

export declare module model/ManagerSimpleProgram {
    function constructFromObject(data: any, obj: module:model/ManagerSimpleProgram): module:model/ManagerSimpleProgram;
    var level: number;
    var levelProgress: number;
    var id: string;
    var title: string;
    var color: string;
    var logo: string;
    var url: string;
}

export declare module model/ManagerSimpleProgram {
    function constructFromObject(data: any, obj: module:model/ManagerSimpleProgram): module:model/ManagerSimpleProgram;
    var level: number;
    var levelProgress: number;
    var id: string;
    var title: string;
    var color: string;
    var logo: string;
    var url: string;
}

export declare module model/ManagersList {
    function constructFromObject(data: any, obj: module:model/ManagersList): module:model/ManagersList;
    var managers: module:model/ManagerProfile[];
    var total: number;
}

export declare module model/ManagersList {
    function constructFromObject(data: any, obj: module:model/ManagersList): module:model/ManagersList;
    var managers: module:model/ManagerProfile[];
    var total: number;
}

export declare module model/MigrationRequest {
    function constructFromObject(data: any, obj: module:model/MigrationRequest): module:model/MigrationRequest;
    var dateCreate: Date;
    var newLeverage: number;
    var brokerTradingAccountId: string;
    var brokerTradingAccountName: string;
    var brokerName: string;
}

export declare module model/MigrationRequest {
    function constructFromObject(data: any, obj: module:model/MigrationRequest): module:model/MigrationRequest;
    var dateCreate: Date;
    var newLeverage: number;
    var brokerTradingAccountId: string;
    var brokerTradingAccountName: string;
    var brokerName: string;
}

export declare module model/MultiWalletExternalTransaction {
    function constructFromObject(data: any, obj: module:model/MultiWalletExternalTransaction): module:model/MultiWalletExternalTransaction;
    var id: string;
    var currency: module:model/MultiWalletExternalTransaction.CurrencyEnum;
    var logo: string;
    var date: Date;
    var amount: number;
    var type: module:model/MultiWalletExternalTransaction.TypeEnum;
    var status: string;
    var isEnableActions: boolean;
    var statusUrl: string;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        All,
        Deposit,
        Withdrawal
    }
}

export declare module model/MultiWalletExternalTransaction {
    function constructFromObject(data: any, obj: module:model/MultiWalletExternalTransaction): module:model/MultiWalletExternalTransaction;
    var id: string;
    var currency: module:model/MultiWalletExternalTransaction.CurrencyEnum;
    var logo: string;
    var date: Date;
    var amount: number;
    var type: module:model/MultiWalletExternalTransaction.TypeEnum;
    var status: string;
    var isEnableActions: boolean;
    var statusUrl: string;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        All,
        Deposit,
        Withdrawal
    }
}

export declare module model/MultiWalletExternalTransactionsViewModel {
    function constructFromObject(data: any, obj: module:model/MultiWalletExternalTransactionsViewModel): module:model/MultiWalletExternalTransactionsViewModel;
    var transactions: module:model/MultiWalletExternalTransaction[];
    var total: number;
}

export declare module model/MultiWalletExternalTransactionsViewModel {
    function constructFromObject(data: any, obj: module:model/MultiWalletExternalTransactionsViewModel): module:model/MultiWalletExternalTransactionsViewModel;
    var transactions: module:model/MultiWalletExternalTransaction[];
    var total: number;
}

export declare module model/MultiWalletFilters {
    function constructFromObject(data: any, obj: module:model/MultiWalletFilters): module:model/MultiWalletFilters;
    var transactionType: string[];
    var externalTransactionType: string[];
}

export declare module model/MultiWalletFilters {
    function constructFromObject(data: any, obj: module:model/MultiWalletFilters): module:model/MultiWalletFilters;
    var transactionType: string[];
    var externalTransactionType: string[];
}

export declare module model/MultiWalletTransaction {
    function constructFromObject(data: any, obj: module:model/MultiWalletTransaction): module:model/MultiWalletTransaction;
    var id: string;
    var currencyFrom: module:model/MultiWalletTransaction.CurrencyFromEnum;
    var currencyTo: module:model/MultiWalletTransaction.CurrencyToEnum;
    var type: module:model/MultiWalletTransaction.TypeEnum;
    var date: Date;
    var status: module:model/MultiWalletTransaction.StatusEnum;
    var logoFrom: string;
    var logoTo: string;
    var description: string;
    var amount: number;
    var amountTo: number;
    enum CurrencyFromEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum CurrencyToEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        All,
        Investment,
        Converting,
        Withdrawal,
        Close,
        Open,
        Fee,
        Profits,
        SubscribeSignal,
        ReceiveSignal,
        DepositSignal,
        WithdrawalSignal,
        Platform
    }
    enum StatusEnum {
        Done,
        Pending,
        Canceled,
        Error
    }
}

export declare module model/MultiWalletTransaction {
    function constructFromObject(data: any, obj: module:model/MultiWalletTransaction): module:model/MultiWalletTransaction;
    var id: string;
    var currencyFrom: module:model/MultiWalletTransaction.CurrencyFromEnum;
    var currencyTo: module:model/MultiWalletTransaction.CurrencyToEnum;
    var type: module:model/MultiWalletTransaction.TypeEnum;
    var date: Date;
    var status: module:model/MultiWalletTransaction.StatusEnum;
    var logoFrom: string;
    var logoTo: string;
    var description: string;
    var amount: number;
    var amountTo: number;
    enum CurrencyFromEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum CurrencyToEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        All,
        Investment,
        Converting,
        Withdrawal,
        Close,
        Open,
        Fee,
        Profits,
        SubscribeSignal,
        ReceiveSignal,
        DepositSignal,
        WithdrawalSignal,
        Platform
    }
    enum StatusEnum {
        Done,
        Pending,
        Canceled,
        Error
    }
}

export declare module model/MultiWalletTransactionsViewModel {
    function constructFromObject(data: any, obj: module:model/MultiWalletTransactionsViewModel): module:model/MultiWalletTransactionsViewModel;
    var transactions: module:model/MultiWalletTransaction[];
    var total: number;
}

export declare module model/MultiWalletTransactionsViewModel {
    function constructFromObject(data: any, obj: module:model/MultiWalletTransactionsViewModel): module:model/MultiWalletTransactionsViewModel;
    var transactions: module:model/MultiWalletTransaction[];
    var total: number;
}

export declare module model/NewFundRequest {
    function constructFromObject(data: any, obj: module:model/NewFundRequest): module:model/NewFundRequest;
    var exitFee: number;
    var managementFee: number;
    var assets: module:model/FundAssetPart[];
    var title: string;
    var description: string;
    var logo: string;
    var entryFee: number;
    var depositAmount: number;
    var depositWalletId: string;
}

export declare module model/NewFundRequest {
    function constructFromObject(data: any, obj: module:model/NewFundRequest): module:model/NewFundRequest;
    var exitFee: number;
    var managementFee: number;
    var assets: module:model/FundAssetPart[];
    var title: string;
    var description: string;
    var logo: string;
    var entryFee: number;
    var depositAmount: number;
    var depositWalletId: string;
}

export declare module model/NewProgramRequest {
    function constructFromObject(data: any, obj: module:model/NewProgramRequest): module:model/NewProgramRequest;
    var currency: module:model/NewProgramRequest.CurrencyEnum;
    var periodLength: number;
    var successFee: number;
    var stopOutLevel: number;
    var leverage: number;
    var brokerAccountTypeId: string;
    var signalSuccessFee: number;
    var signalVolumeFee: number;
    var isSignalProgram: boolean;
    var investmentLimit: number;
    var title: string;
    var description: string;
    var logo: string;
    var entryFee: number;
    var depositAmount: number;
    var depositWalletId: string;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/NewProgramRequest {
    function constructFromObject(data: any, obj: module:model/NewProgramRequest): module:model/NewProgramRequest;
    var currency: module:model/NewProgramRequest.CurrencyEnum;
    var periodLength: number;
    var successFee: number;
    var stopOutLevel: number;
    var leverage: number;
    var brokerAccountTypeId: string;
    var signalSuccessFee: number;
    var signalVolumeFee: number;
    var isSignalProgram: boolean;
    var investmentLimit: number;
    var title: string;
    var description: string;
    var logo: string;
    var entryFee: number;
    var depositAmount: number;
    var depositWalletId: string;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/NotificationList {
    function constructFromObject(data: any, obj: module:model/NotificationList): module:model/NotificationList;
    var notifications: module:model/NotificationViewModel[];
    var total: number;
}

export declare module model/NotificationList {
    function constructFromObject(data: any, obj: module:model/NotificationList): module:model/NotificationList;
    var notifications: module:model/NotificationViewModel[];
    var total: number;
}

export declare module model/NotificationSettingList {
    function constructFromObject(data: any, obj: module:model/NotificationSettingList): module:model/NotificationSettingList;
    var settingsGeneral: module:model/NotificationSettingViewModel[];
    var settingsProgram: module:model/ProgramNotificationSettingList[];
    var settingsFund: module:model/FundNotificationSettingList[];
    var settingsManager: module:model/ManagerNotificationSettingList[];
}

export declare module model/NotificationSettingList {
    function constructFromObject(data: any, obj: module:model/NotificationSettingList): module:model/NotificationSettingList;
    var settingsGeneral: module:model/NotificationSettingViewModel[];
    var settingsProgram: module:model/ProgramNotificationSettingList[];
    var settingsFund: module:model/FundNotificationSettingList[];
    var settingsManager: module:model/ManagerNotificationSettingList[];
}

export declare module model/NotificationSettingViewModel {
    function constructFromObject(data: any, obj: module:model/NotificationSettingViewModel): module:model/NotificationSettingViewModel;
    var id: string;
    var isEnabled: boolean;
    var assetId: string;
    var managerId: string;
    var type: module:model/NotificationSettingViewModel.TypeEnum;
    var conditionType: module:model/NotificationSettingViewModel.ConditionTypeEnum;
    var conditionAmount: number;
    enum TypeEnum {
        PlatformNewsAndUpdates,
        PlatformEmergency,
        PlatformOther,
        ProfileUpdated,
        ProfilePwdUpdated,
        ProfileVerification,
        Profile2FA,
        ProfileSecurity,
        TradingAccountPwdUpdated,
        ProgramNewsAndUpdates,
        ProgramEndOfPeriod,
        ProgramCondition,
        ProgramExceedInvestmentLimit,
        FundNewsAndUpdates,
        FundEndOfPeriod,
        FundRebalancing,
        ManagerNewProgram,
        Signals
    }
    enum ConditionTypeEnum {
        Empty,
        Profit,
        Level,
        AvailableToInvest
    }
}

export declare module model/NotificationSettingViewModel {
    function constructFromObject(data: any, obj: module:model/NotificationSettingViewModel): module:model/NotificationSettingViewModel;
    var id: string;
    var isEnabled: boolean;
    var assetId: string;
    var managerId: string;
    var type: module:model/NotificationSettingViewModel.TypeEnum;
    var conditionType: module:model/NotificationSettingViewModel.ConditionTypeEnum;
    var conditionAmount: number;
    enum TypeEnum {
        PlatformNewsAndUpdates,
        PlatformEmergency,
        PlatformOther,
        ProfileUpdated,
        ProfilePwdUpdated,
        ProfileVerification,
        Profile2FA,
        ProfileSecurity,
        TradingAccountPwdUpdated,
        ProgramNewsAndUpdates,
        ProgramEndOfPeriod,
        ProgramCondition,
        ProgramExceedInvestmentLimit,
        FundNewsAndUpdates,
        FundEndOfPeriod,
        FundRebalancing,
        ManagerNewProgram,
        Signals
    }
    enum ConditionTypeEnum {
        Empty,
        Profit,
        Level,
        AvailableToInvest
    }
}

export declare module model/NotificationViewModel {
    function constructFromObject(data: any, obj: module:model/NotificationViewModel): module:model/NotificationViewModel;
    var id: string;
    var text: string;
    var date: Date;
    var type: module:model/NotificationViewModel.TypeEnum;
    var assetId: string;
    var managerId: string;
    var logo: string;
    var url: string;
    var color: string;
    var isUnread: boolean;
    var assetType: module:model/NotificationViewModel.AssetTypeEnum;
    enum TypeEnum {
        PlatformNewsAndUpdates,
        PlatformEmergency,
        PlatformOther,
        ProfileUpdated,
        ProfilePwdUpdated,
        ProfileVerification,
        Profile2FA,
        ProfileSecurity,
        TradingAccountPwdUpdated,
        ProgramNewsAndUpdates,
        ProgramEndOfPeriod,
        ProgramCondition,
        ProgramExceedInvestmentLimit,
        FundNewsAndUpdates,
        FundEndOfPeriod,
        FundRebalancing,
        ManagerNewProgram,
        Signals
    }
    enum AssetTypeEnum {
        Program,
        Fund
    }
}

export declare module model/NotificationViewModel {
    function constructFromObject(data: any, obj: module:model/NotificationViewModel): module:model/NotificationViewModel;
    var id: string;
    var text: string;
    var date: Date;
    var type: module:model/NotificationViewModel.TypeEnum;
    var assetId: string;
    var managerId: string;
    var logo: string;
    var url: string;
    var color: string;
    var isUnread: boolean;
    var assetType: module:model/NotificationViewModel.AssetTypeEnum;
    enum TypeEnum {
        PlatformNewsAndUpdates,
        PlatformEmergency,
        PlatformOther,
        ProfileUpdated,
        ProfilePwdUpdated,
        ProfileVerification,
        Profile2FA,
        ProfileSecurity,
        TradingAccountPwdUpdated,
        ProgramNewsAndUpdates,
        ProgramEndOfPeriod,
        ProgramCondition,
        ProgramExceedInvestmentLimit,
        FundNewsAndUpdates,
        FundEndOfPeriod,
        FundRebalancing,
        ManagerNewProgram,
        Signals
    }
    enum AssetTypeEnum {
        Program,
        Fund
    }
}

export declare module model/OrderModel {
    function constructFromObject(data: any, obj: module:model/OrderModel): module:model/OrderModel;
    var id: string;
    var login: string;
    var ticket: string;
    var symbol: string;
    var volume: number;
    var profit: number;
    var direction: module:model/OrderModel.DirectionEnum;
    var date: Date;
    var price: number;
    var priceCurrent: number;
    var entry: module:model/OrderModel.EntryEnum;
    var baseVolume: number;
    var originalCommission: number;
    var originalCommissionCurrency: string;
    var commission: number;
    var swap: number;
    var showOriginalCommission: boolean;
    var signalData: module:model/OrderModelSignalData;
    enum DirectionEnum {
        Buy,
        Sell,
        Balance,
        Credit,
        Undefined
    }
    enum EntryEnum {
        In,
        Out,
        InOut,
        OutBy
    }
}

export declare module model/OrderModel {
    function constructFromObject(data: any, obj: module:model/OrderModel): module:model/OrderModel;
    var id: string;
    var login: string;
    var ticket: string;
    var symbol: string;
    var volume: number;
    var profit: number;
    var direction: module:model/OrderModel.DirectionEnum;
    var date: Date;
    var price: number;
    var priceCurrent: number;
    var entry: module:model/OrderModel.EntryEnum;
    var baseVolume: number;
    var originalCommission: number;
    var originalCommissionCurrency: string;
    var commission: number;
    var swap: number;
    var showOriginalCommission: boolean;
    var signalData: module:model/OrderModelSignalData;
    enum DirectionEnum {
        Buy,
        Sell,
        Balance,
        Credit,
        Undefined
    }
    enum EntryEnum {
        In,
        Out,
        InOut,
        OutBy
    }
}

export declare module model/OrderModelSignalData {
    function constructFromObject(data: any, obj: module:model/OrderModelSignalData): module:model/OrderModelSignalData;
    var masters: module:model/SignalDataMaster[];
}

export declare module model/OrderModelSignalData {
    function constructFromObject(data: any, obj: module:model/OrderModelSignalData): module:model/OrderModelSignalData;
    var masters: module:model/SignalDataMaster[];
}

export declare module model/OrderProgramData {
    function constructFromObject(data: any, obj: module:model/OrderProgramData): module:model/OrderProgramData;
    var title: string;
    var level: number;
    var levelProgress: number;
    var color: string;
    var url: string;
    var logo: string;
}

export declare module model/OrderProgramData {
    function constructFromObject(data: any, obj: module:model/OrderProgramData): module:model/OrderProgramData;
    var title: string;
    var level: number;
    var levelProgress: number;
    var color: string;
    var url: string;
    var logo: string;
}

export declare module model/OrderSignalFee {
    function constructFromObject(data: any, obj: module:model/OrderSignalFee): module:model/OrderSignalFee;
    var amount: number;
    var currency: module:model/OrderSignalFee.CurrencyEnum;
    var type: module:model/OrderSignalFee.TypeEnum;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        Undefined,
        GvProgramEntry,
        GvProgramSuccess,
        GvFundEntry,
        GvGmGvtHolderFee,
        ManagerProgramEntry,
        ManagerProgramSuccess,
        ManagerFundEntry,
        ManagerFundExit,
        GvWithdrawal,
        ManagerSignalMasterSuccessFee,
        ManagerSignalMasterVolumeFee,
        GvSignalSuccessFee
    }
}

export declare module model/OrderSignalFee {
    function constructFromObject(data: any, obj: module:model/OrderSignalFee): module:model/OrderSignalFee;
    var amount: number;
    var currency: module:model/OrderSignalFee.CurrencyEnum;
    var type: module:model/OrderSignalFee.TypeEnum;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        Undefined,
        GvProgramEntry,
        GvProgramSuccess,
        GvFundEntry,
        GvGmGvtHolderFee,
        ManagerProgramEntry,
        ManagerProgramSuccess,
        ManagerFundEntry,
        ManagerFundExit,
        GvWithdrawal,
        ManagerSignalMasterSuccessFee,
        ManagerSignalMasterVolumeFee,
        GvSignalSuccessFee
    }
}

export declare module model/OrderSignalModel {
    function constructFromObject(data: any, obj: module:model/OrderSignalModel): module:model/OrderSignalModel;
    var tradingFee: module:model/OrderTradingFee;
    var providers: module:model/OrderSignalProgramInfo[];
    var id: string;
    var login: string;
    var ticket: string;
    var symbol: string;
    var volume: number;
    var profit: number;
    var direction: module:model/OrderSignalModel.DirectionEnum;
    var date: Date;
    var price: number;
    var priceCurrent: number;
    var entry: module:model/OrderSignalModel.EntryEnum;
    var baseVolume: number;
    var originalCommission: number;
    var originalCommissionCurrency: string;
    var commission: number;
    var swap: number;
    var showOriginalCommission: boolean;
    var signalData: module:model/OrderModelSignalData;
    enum DirectionEnum {
        Buy,
        Sell,
        Balance,
        Credit,
        Undefined
    }
    enum EntryEnum {
        In,
        Out,
        InOut,
        OutBy
    }
}

export declare module model/OrderSignalModel {
    function constructFromObject(data: any, obj: module:model/OrderSignalModel): module:model/OrderSignalModel;
    var tradingFee: module:model/OrderTradingFee;
    var providers: module:model/OrderSignalProgramInfo[];
    var id: string;
    var login: string;
    var ticket: string;
    var symbol: string;
    var volume: number;
    var profit: number;
    var direction: module:model/OrderSignalModel.DirectionEnum;
    var date: Date;
    var price: number;
    var priceCurrent: number;
    var entry: module:model/OrderSignalModel.EntryEnum;
    var baseVolume: number;
    var originalCommission: number;
    var originalCommissionCurrency: string;
    var commission: number;
    var swap: number;
    var showOriginalCommission: boolean;
    var signalData: module:model/OrderModelSignalData;
    enum DirectionEnum {
        Buy,
        Sell,
        Balance,
        Credit,
        Undefined
    }
    enum EntryEnum {
        In,
        Out,
        InOut,
        OutBy
    }
}

export declare module model/OrderSignalProgramInfo {
    function constructFromObject(data: any, obj: module:model/OrderSignalProgramInfo): module:model/OrderSignalProgramInfo;
    var manager: module:model/ProfilePublic;
    var program: module:model/OrderProgramData;
    var programId: string;
    var volume: number;
    var priceCurrent: number;
    var firstOrderDate: Date;
    var fees: module:model/OrderSignalFee[];
}

export declare module model/OrderSignalProgramInfo {
    function constructFromObject(data: any, obj: module:model/OrderSignalProgramInfo): module:model/OrderSignalProgramInfo;
    var manager: module:model/ProfilePublic;
    var program: module:model/OrderProgramData;
    var programId: string;
    var volume: number;
    var priceCurrent: number;
    var firstOrderDate: Date;
    var fees: module:model/OrderSignalFee[];
}

export declare module model/OrderTradingFee {
    function constructFromObject(data: any, obj: module:model/OrderTradingFee): module:model/OrderTradingFee;
    var amount: number;
    var currency: module:model/OrderTradingFee.CurrencyEnum;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/OrderTradingFee {
    function constructFromObject(data: any, obj: module:model/OrderTradingFee): module:model/OrderTradingFee;
    var amount: number;
    var currency: module:model/OrderTradingFee.CurrencyEnum;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/OtherAssetsValue {
    function constructFromObject(data: any, obj: module:model/OtherAssetsValue): module:model/OtherAssetsValue;
    var amount: number;
    var value: number;
    var changePercent: number;
    var changeValue: number;
}

export declare module model/OtherAssetsValue {
    function constructFromObject(data: any, obj: module:model/OtherAssetsValue): module:model/OtherAssetsValue;
    var amount: number;
    var value: number;
    var changePercent: number;
    var changeValue: number;
}

export declare module model/PasswordModel {
    function constructFromObject(data: any, obj: module:model/PasswordModel): module:model/PasswordModel;
    var password: string;
}

export declare module model/PasswordModel {
    function constructFromObject(data: any, obj: module:model/PasswordModel): module:model/PasswordModel;
    var password: string;
}

export declare module model/PeriodDate {
    function constructFromObject(data: any, obj: module:model/PeriodDate): module:model/PeriodDate;
    var dateFrom: Date;
    var dateTo: Date;
}

export declare module model/PeriodDate {
    function constructFromObject(data: any, obj: module:model/PeriodDate): module:model/PeriodDate;
    var dateFrom: Date;
    var dateTo: Date;
}

export declare module model/PersonalFundDetailsFull {
    function constructFromObject(data: any, obj: module:model/PersonalFundDetailsFull): module:model/PersonalFundDetailsFull;
    var withdrawPercent: number;
    var canReallocate: boolean;
    var possibleReallocationTime: Date;
    var isFavorite: boolean;
    var isInvested: boolean;
    var isOwnProgram: boolean;
    var canCloseProgram: boolean;
    var canCloseAsset: boolean;
    var isFinishing: boolean;
    var canInvest: boolean;
    var canWithdraw: boolean;
    var canClosePeriod: boolean;
    var hasNotifications: boolean;
    var value: number;
    var profit: number;
    var invested: number;
    var pendingInput: number;
    var pendingOutput: number;
    var pendingOutputIsWithdrawAll: boolean;
    var status: module:model/PersonalFundDetailsFull.StatusEnum;
    enum StatusEnum {
        Pending,
        Active,
        Investing,
        Withdrawing,
        Ended
    }
}

export declare module model/PersonalFundDetailsFull {
    function constructFromObject(data: any, obj: module:model/PersonalFundDetailsFull): module:model/PersonalFundDetailsFull;
    var withdrawPercent: number;
    var canReallocate: boolean;
    var possibleReallocationTime: Date;
    var isFavorite: boolean;
    var isInvested: boolean;
    var isOwnProgram: boolean;
    var canCloseProgram: boolean;
    var canCloseAsset: boolean;
    var isFinishing: boolean;
    var canInvest: boolean;
    var canWithdraw: boolean;
    var canClosePeriod: boolean;
    var hasNotifications: boolean;
    var value: number;
    var profit: number;
    var invested: number;
    var pendingInput: number;
    var pendingOutput: number;
    var pendingOutputIsWithdrawAll: boolean;
    var status: module:model/PersonalFundDetailsFull.StatusEnum;
    enum StatusEnum {
        Pending,
        Active,
        Investing,
        Withdrawing,
        Ended
    }
}

export declare module model/PersonalProgramDetailsFull {
    function constructFromObject(data: any, obj: module:model/PersonalProgramDetailsFull): module:model/PersonalProgramDetailsFull;
    var isReinvest: boolean;
    var gvtValue: number;
    var showTwoFactorButton: boolean;
    var signalSubscription: module:model/SignalSubscription;
    var login: string;
    var notificationAvailableToInvestId: string;
    var canMakeSignalProvider: boolean;
    var canChangePassword: boolean;
    var migration: module:model/MigrationRequest;
    var isFavorite: boolean;
    var isInvested: boolean;
    var isOwnProgram: boolean;
    var canCloseProgram: boolean;
    var canCloseAsset: boolean;
    var isFinishing: boolean;
    var canInvest: boolean;
    var canWithdraw: boolean;
    var canClosePeriod: boolean;
    var hasNotifications: boolean;
    var value: number;
    var profit: number;
    var invested: number;
    var pendingInput: number;
    var pendingOutput: number;
    var pendingOutputIsWithdrawAll: boolean;
    var status: module:model/PersonalProgramDetailsFull.StatusEnum;
    enum StatusEnum {
        Pending,
        Active,
        Investing,
        Withdrawing,
        Ended
    }
}

export declare module model/PersonalProgramDetailsFull {
    function constructFromObject(data: any, obj: module:model/PersonalProgramDetailsFull): module:model/PersonalProgramDetailsFull;
    var isReinvest: boolean;
    var gvtValue: number;
    var showTwoFactorButton: boolean;
    var signalSubscription: module:model/SignalSubscription;
    var login: string;
    var notificationAvailableToInvestId: string;
    var canMakeSignalProvider: boolean;
    var canChangePassword: boolean;
    var migration: module:model/MigrationRequest;
    var isFavorite: boolean;
    var isInvested: boolean;
    var isOwnProgram: boolean;
    var canCloseProgram: boolean;
    var canCloseAsset: boolean;
    var isFinishing: boolean;
    var canInvest: boolean;
    var canWithdraw: boolean;
    var canClosePeriod: boolean;
    var hasNotifications: boolean;
    var value: number;
    var profit: number;
    var invested: number;
    var pendingInput: number;
    var pendingOutput: number;
    var pendingOutputIsWithdrawAll: boolean;
    var status: module:model/PersonalProgramDetailsFull.StatusEnum;
    enum StatusEnum {
        Pending,
        Active,
        Investing,
        Withdrawing,
        Ended
    }
}

export declare module model/PersonalSignalDetailsFull {
    function constructFromObject(data: any, obj: module:model/PersonalSignalDetailsFull): module:model/PersonalSignalDetailsFull;
    var subscriptionDate: Date;
    var tradesCount: number;
    var signalSubscription: module:model/SignalSubscription;
    var profit: number;
    var volume: number;
    var isFavorite: boolean;
    var isInvested: boolean;
    var status: module:model/PersonalSignalDetailsFull.StatusEnum;
    enum StatusEnum {
        Active,
        Ended
    }
}

export declare module model/PersonalSignalDetailsFull {
    function constructFromObject(data: any, obj: module:model/PersonalSignalDetailsFull): module:model/PersonalSignalDetailsFull;
    var subscriptionDate: Date;
    var tradesCount: number;
    var signalSubscription: module:model/SignalSubscription;
    var profit: number;
    var volume: number;
    var isFavorite: boolean;
    var isInvested: boolean;
    var status: module:model/PersonalSignalDetailsFull.StatusEnum;
    enum StatusEnum {
        Active,
        Ended
    }
}

export declare module model/PlatformAsset {
    function constructFromObject(data: any, obj: module:model/PlatformAsset): module:model/PlatformAsset;
    var id: string;
    var name: string;
    var asset: string;
    var description: string;
    var icon: string;
    var color: string;
}

export declare module model/PlatformAsset {
    function constructFromObject(data: any, obj: module:model/PlatformAsset): module:model/PlatformAsset;
    var id: string;
    var name: string;
    var asset: string;
    var description: string;
    var icon: string;
    var color: string;
}

export declare module model/PlatformAssets {
    function constructFromObject(data: any, obj: module:model/PlatformAssets): module:model/PlatformAssets;
    var assets: module:model/PlatformAsset[];
}

export declare module model/PlatformAssets {
    function constructFromObject(data: any, obj: module:model/PlatformAssets): module:model/PlatformAssets;
    var assets: module:model/PlatformAsset[];
}

export declare module model/PlatformCurrency {
    function constructFromObject(data: any, obj: module:model/PlatformCurrency): module:model/PlatformCurrency;
    var name: string;
    var rateToGvt: number;
}

export declare module model/PlatformCurrency {
    function constructFromObject(data: any, obj: module:model/PlatformCurrency): module:model/PlatformCurrency;
    var name: string;
    var rateToGvt: number;
}

export declare module model/PlatformInfo {
    function constructFromObject(data: any, obj: module:model/PlatformInfo): module:model/PlatformInfo;
    var iOSVersion: module:model/IOsAppVersion;
    var androidVersion: module:model/AndroidAppVersion;
    var programsFacets: module:model/ProgramFacet[];
    var fundsFacets: module:model/FundFacet[];
    var programsInfo: module:model/ProgramsInfo;
    var currencies: string[];
    var platformCurrencies: module:model/PlatformCurrency[];
    var enums: module:model/Enums;
}

export declare module model/PlatformInfo {
    function constructFromObject(data: any, obj: module:model/PlatformInfo): module:model/PlatformInfo;
    var iOSVersion: module:model/IOsAppVersion;
    var androidVersion: module:model/AndroidAppVersion;
    var programsFacets: module:model/ProgramFacet[];
    var fundsFacets: module:model/FundFacet[];
    var programsInfo: module:model/ProgramsInfo;
    var currencies: string[];
    var platformCurrencies: module:model/PlatformCurrency[];
    var enums: module:model/Enums;
}

export declare module model/PlatformStatistic {
    function constructFromObject(data: any, obj: module:model/PlatformStatistic): module:model/PlatformStatistic;
    var managers: number;
    var investors: number;
    var profitWeek: number;
    var investmentAmount: number;
    var totalInvestorsProfit: number;
    var totalProfit: number;
}

export declare module model/PlatformStatistic {
    function constructFromObject(data: any, obj: module:model/PlatformStatistic): module:model/PlatformStatistic;
    var managers: number;
    var investors: number;
    var profitWeek: number;
    var investmentAmount: number;
    var totalInvestorsProfit: number;
    var totalProfit: number;
}

export declare module model/PowDetails {
    function constructFromObject(data: any, obj: module:model/PowDetails): module:model/PowDetails;
    var secureAlgorithm: module:model/PowDetails.SecureAlgorithmEnum;
    var difficulty: number;
    var nonce: string;
    enum SecureAlgorithmEnum {
        Sha256
    }
}

export declare module model/PowDetails {
    function constructFromObject(data: any, obj: module:model/PowDetails): module:model/PowDetails;
    var secureAlgorithm: module:model/PowDetails.SecureAlgorithmEnum;
    var difficulty: number;
    var nonce: string;
    enum SecureAlgorithmEnum {
        Sha256
    }
}

export declare module model/PowResult {
    function constructFromObject(data: any, obj: module:model/PowResult): module:model/PowResult;
    var prefix: string;
}

export declare module model/PowResult {
    function constructFromObject(data: any, obj: module:model/PowResult): module:model/PowResult;
    var prefix: string;
}

export declare module model/ProfileFullViewModel {
    function constructFromObject(data: any, obj: module:model/ProfileFullViewModel): module:model/ProfileFullViewModel;
    var id: string;
    var email: string;
    var firstName: string;
    var middleName: string;
    var lastName: string;
    var country: string;
    var city: string;
    var address: string;
    var phone: string;
    var phoneNumberConfirmed: boolean;
    var birthday: Date;
    var gender: boolean;
    var avatar: string;
    var about: string;
    var userName: string;
    var index: string;
    var citizenship: string;
    var refUrl: string;
    var verificationStatus: module:model/ProfileFullViewModel.VerificationStatusEnum;
    enum VerificationStatusEnum {
        NotVerified,
        Verified,
        UnderReview,
        Rejected
    }
}

export declare module model/ProfileFullViewModel {
    function constructFromObject(data: any, obj: module:model/ProfileFullViewModel): module:model/ProfileFullViewModel;
    var id: string;
    var email: string;
    var firstName: string;
    var middleName: string;
    var lastName: string;
    var country: string;
    var city: string;
    var address: string;
    var phone: string;
    var phoneNumberConfirmed: boolean;
    var birthday: Date;
    var gender: boolean;
    var avatar: string;
    var about: string;
    var userName: string;
    var index: string;
    var citizenship: string;
    var refUrl: string;
    var verificationStatus: module:model/ProfileFullViewModel.VerificationStatusEnum;
    enum VerificationStatusEnum {
        NotVerified,
        Verified,
        UnderReview,
        Rejected
    }
}

export declare module model/ProfileHeaderViewModel {
    function constructFromObject(data: any, obj: module:model/ProfileHeaderViewModel): module:model/ProfileHeaderViewModel;
    var id: string;
    var name: string;
    var email: string;
    var avatar: string;
    var userType: module:model/ProfileHeaderViewModel.UserTypeEnum;
    var notificationsCount: number;
    var favoritesCount: number;
    var kycConfirmed: boolean;
    var allowForex: boolean;
    var isTwoFactorEnabled: boolean;
    var isNewUser: boolean;
    var totalBalanceGvt: number;
    var investedGvt: number;
    var availableGvt: number;
    var totalBalance: number;
    var invested: number;
    var available: number;
    var pending: number;
    enum UserTypeEnum {
        Investor,
        Manager
    }
}

export declare module model/ProfileHeaderViewModel {
    function constructFromObject(data: any, obj: module:model/ProfileHeaderViewModel): module:model/ProfileHeaderViewModel;
    var id: string;
    var name: string;
    var email: string;
    var avatar: string;
    var userType: module:model/ProfileHeaderViewModel.UserTypeEnum;
    var notificationsCount: number;
    var favoritesCount: number;
    var kycConfirmed: boolean;
    var allowForex: boolean;
    var isTwoFactorEnabled: boolean;
    var isNewUser: boolean;
    var totalBalanceGvt: number;
    var investedGvt: number;
    var availableGvt: number;
    var totalBalance: number;
    var invested: number;
    var available: number;
    var pending: number;
    enum UserTypeEnum {
        Investor,
        Manager
    }
}

export declare module model/ProfilePublic {
    function constructFromObject(data: any, obj: module:model/ProfilePublic): module:model/ProfilePublic;
    var id: string;
    var username: string;
    var avatar: string;
    var registrationDate: Date;
    var url: string;
}

export declare module model/ProfilePublic {
    function constructFromObject(data: any, obj: module:model/ProfilePublic): module:model/ProfilePublic;
    var id: string;
    var username: string;
    var avatar: string;
    var registrationDate: Date;
    var url: string;
}

export declare module model/ProgramBalanceChart {
    function constructFromObject(data: any, obj: module:model/ProgramBalanceChart): module:model/ProgramBalanceChart;
    var programCurrencyBalance: number;
    var programCurrency: module:model/ProgramBalanceChart.ProgramCurrencyEnum;
    var balanceChart: module:model/ProgramBalanceChartElement[];
    var gvtBalance: number;
    enum ProgramCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/ProgramBalanceChart {
    function constructFromObject(data: any, obj: module:model/ProgramBalanceChart): module:model/ProgramBalanceChart;
    var programCurrencyBalance: number;
    var programCurrency: module:model/ProgramBalanceChart.ProgramCurrencyEnum;
    var balanceChart: module:model/ProgramBalanceChartElement[];
    var gvtBalance: number;
    enum ProgramCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/ProgramBalanceChartElement {
    function constructFromObject(data: any, obj: module:model/ProgramBalanceChartElement): module:model/ProgramBalanceChartElement;
    var profit: number;
    var date: Date;
    var managerFunds: number;
    var investorsFunds: number;
}

export declare module model/ProgramBalanceChartElement {
    function constructFromObject(data: any, obj: module:model/ProgramBalanceChartElement): module:model/ProgramBalanceChartElement;
    var profit: number;
    var date: Date;
    var managerFunds: number;
    var investorsFunds: number;
}

export declare module model/ProgramDetails {
    function constructFromObject(data: any, obj: module:model/ProgramDetails): module:model/ProgramDetails;
    var currency: module:model/ProgramDetails.CurrencyEnum;
    var level: number;
    var levelProgress: number;
    var periodDuration: number;
    var stopOutLevel: number;
    var periodStarts: Date;
    var periodEnds: Date;
    var availableInvestment: number;
    var availableInvestmentBase: number;
    var availableInvestmentLimit: number;
    var dashboardAssetsDetails: module:model/DashboardProgramDetails;
    var statistic: module:model/ProgramDetailsListStatistic;
    var rating: module:model/ProgramDetailsRating;
    var personalDetails: module:model/PersonalProgramDetailsFull;
    var tags: module:model/ProgramTag[];
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var title: string;
    var description: string;
    var status: module:model/ProgramDetails.StatusEnum;
    var creationDate: Date;
    var manager: module:model/ProfilePublic;
    var chart: module:model/ChartSimple[];
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/ProgramDetails {
    function constructFromObject(data: any, obj: module:model/ProgramDetails): module:model/ProgramDetails;
    var currency: module:model/ProgramDetails.CurrencyEnum;
    var level: number;
    var levelProgress: number;
    var periodDuration: number;
    var stopOutLevel: number;
    var periodStarts: Date;
    var periodEnds: Date;
    var availableInvestment: number;
    var availableInvestmentBase: number;
    var availableInvestmentLimit: number;
    var dashboardAssetsDetails: module:model/DashboardProgramDetails;
    var statistic: module:model/ProgramDetailsListStatistic;
    var rating: module:model/ProgramDetailsRating;
    var personalDetails: module:model/PersonalProgramDetailsFull;
    var tags: module:model/ProgramTag[];
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var title: string;
    var description: string;
    var status: module:model/ProgramDetails.StatusEnum;
    var creationDate: Date;
    var manager: module:model/ProfilePublic;
    var chart: module:model/ChartSimple[];
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/ProgramDetailsFull {
    function constructFromObject(data: any, obj: module:model/ProgramDetailsFull): module:model/ProgramDetailsFull;
    var currency: module:model/ProgramDetailsFull.CurrencyEnum;
    var level: number;
    var levelProgress: number;
    var periodDuration: number;
    var periodStarts: Date;
    var periodEnds: Date;
    var entryFee: number;
    var entryFeeSelected: number;
    var entryFeeCurrent: number;
    var successFee: number;
    var successFeeSelected: number;
    var successFeeCurrent: number;
    var stopOutLevel: number;
    var stopOutLevelSelected: number;
    var stopOutLevelCurrent: number;
    var isReinvesting: boolean;
    var isSignalProgram: boolean;
    var signalSuccessFee: number;
    var signalVolumeFee: number;
    var isForex: boolean;
    var availableInvestment: number;
    var availableInvestmentBase: number;
    var availableInvestmentLimit: number;
    var statistic: module:model/ProgramStatistic;
    var rating: module:model/ProgramDetailsRating;
    var personalProgramDetails: module:model/PersonalProgramDetailsFull;
    var tags: module:model/ProgramTag[];
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var description: string;
    var title: string;
    var ipfsHash: string;
    var creationDate: Date;
    var status: module:model/ProgramDetailsFull.StatusEnum;
    var manager: module:model/ProfilePublic;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/ProgramDetailsFull {
    function constructFromObject(data: any, obj: module:model/ProgramDetailsFull): module:model/ProgramDetailsFull;
    var currency: module:model/ProgramDetailsFull.CurrencyEnum;
    var level: number;
    var levelProgress: number;
    var periodDuration: number;
    var periodStarts: Date;
    var periodEnds: Date;
    var entryFee: number;
    var entryFeeSelected: number;
    var entryFeeCurrent: number;
    var successFee: number;
    var successFeeSelected: number;
    var successFeeCurrent: number;
    var stopOutLevel: number;
    var stopOutLevelSelected: number;
    var stopOutLevelCurrent: number;
    var isReinvesting: boolean;
    var isSignalProgram: boolean;
    var signalSuccessFee: number;
    var signalVolumeFee: number;
    var isForex: boolean;
    var availableInvestment: number;
    var availableInvestmentBase: number;
    var availableInvestmentLimit: number;
    var statistic: module:model/ProgramStatistic;
    var rating: module:model/ProgramDetailsRating;
    var personalProgramDetails: module:model/PersonalProgramDetailsFull;
    var tags: module:model/ProgramTag[];
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var description: string;
    var title: string;
    var ipfsHash: string;
    var creationDate: Date;
    var status: module:model/ProgramDetailsFull.StatusEnum;
    var manager: module:model/ProfilePublic;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/ProgramDetailsListStatistic {
    function constructFromObject(data: any, obj: module:model/ProgramDetailsListStatistic): module:model/ProgramDetailsListStatistic;
    var balanceBase: module:model/AmountWithCurrency;
    var balanceGVT: module:model/AmountWithCurrency;
    var balanceSecondary: module:model/AmountWithCurrency;
    var currentValue: number;
    var profitPercent: number;
    var profitValue: number;
    var drawdownPercent: number;
    var investorsCount: number;
    var tradesCount: number;
}

export declare module model/ProgramDetailsListStatistic {
    function constructFromObject(data: any, obj: module:model/ProgramDetailsListStatistic): module:model/ProgramDetailsListStatistic;
    var balanceBase: module:model/AmountWithCurrency;
    var balanceGVT: module:model/AmountWithCurrency;
    var balanceSecondary: module:model/AmountWithCurrency;
    var currentValue: number;
    var profitPercent: number;
    var profitValue: number;
    var drawdownPercent: number;
    var investorsCount: number;
    var tradesCount: number;
}

export declare module model/ProgramDetailsRating {
    function constructFromObject(data: any, obj: module:model/ProgramDetailsRating): module:model/ProgramDetailsRating;
    var rating: number;
    var profit: number;
    var canLevelUp: boolean;
    var topPercent: number;
}

export declare module model/ProgramDetailsRating {
    function constructFromObject(data: any, obj: module:model/ProgramDetailsRating): module:model/ProgramDetailsRating;
    var rating: number;
    var profit: number;
    var canLevelUp: boolean;
    var topPercent: number;
}

export declare module model/ProgramFacet {
    function constructFromObject(data: any, obj: module:model/ProgramFacet): module:model/ProgramFacet;
    var sorting: module:model/ProgramFacet.SortingEnum;
    var id: string;
    var title: string;
    var description: string;
    var logo: string;
    var url: string;
    var sortType: module:model/ProgramFacet.SortTypeEnum;
    var timeframe: module:model/ProgramFacet.TimeframeEnum;
    enum SortingEnum {
        ByLevelAsc,
        ByLevelDesc,
        ByProfitAsc,
        ByProfitDesc,
        ByDrawdownAsc,
        ByDrawdownDesc,
        ByTradesAsc,
        ByTradesDesc,
        ByInvestorsAsc,
        ByInvestorsDesc,
        ByNewDesc,
        ByNewAsc,
        ByEndOfPeriodAsc,
        ByEndOfPeriodDesc,
        ByTitleAsc,
        ByTitleDesc,
        ByBalanceAsc,
        ByBalanceDesc,
        ByCurrDesc,
        ByCurrAsc
    }
    enum SortTypeEnum {
        New,
        Top,
        WeeklyTop,
        Popular,
        ToLevelUp
    }
    enum TimeframeEnum {
        Day,
        Week,
        Month,
        ThreeMonths,
        Year,
        AllTime
    }
}

export declare module model/ProgramFacet {
    function constructFromObject(data: any, obj: module:model/ProgramFacet): module:model/ProgramFacet;
    var sorting: module:model/ProgramFacet.SortingEnum;
    var id: string;
    var title: string;
    var description: string;
    var logo: string;
    var url: string;
    var sortType: module:model/ProgramFacet.SortTypeEnum;
    var timeframe: module:model/ProgramFacet.TimeframeEnum;
    enum SortingEnum {
        ByLevelAsc,
        ByLevelDesc,
        ByProfitAsc,
        ByProfitDesc,
        ByDrawdownAsc,
        ByDrawdownDesc,
        ByTradesAsc,
        ByTradesDesc,
        ByInvestorsAsc,
        ByInvestorsDesc,
        ByNewDesc,
        ByNewAsc,
        ByEndOfPeriodAsc,
        ByEndOfPeriodDesc,
        ByTitleAsc,
        ByTitleDesc,
        ByBalanceAsc,
        ByBalanceDesc,
        ByCurrDesc,
        ByCurrAsc
    }
    enum SortTypeEnum {
        New,
        Top,
        WeeklyTop,
        Popular,
        ToLevelUp
    }
    enum TimeframeEnum {
        Day,
        Week,
        Month,
        ThreeMonths,
        Year,
        AllTime
    }
}

export declare module model/ProgramFilters {
    function constructFromObject(data: any, obj: module:model/ProgramFilters): module:model/ProgramFilters;
    var programTags: module:model/ProgramTag[];
    var actionType: string[];
    var customNotificationType: string[];
    var managerNotificationType: module:model/AssetEvent;
    var investorNotificationType: module:model/AssetEvent;
}

export declare module model/ProgramFilters {
    function constructFromObject(data: any, obj: module:model/ProgramFilters): module:model/ProgramFilters;
    var programTags: module:model/ProgramTag[];
    var actionType: string[];
    var customNotificationType: string[];
    var managerNotificationType: module:model/AssetEvent;
    var investorNotificationType: module:model/AssetEvent;
}

export declare module model/ProgramInfo {
    function constructFromObject(data: any, obj: module:model/ProgramInfo): module:model/ProgramInfo;
    var title: string;
}

export declare module model/ProgramInfo {
    function constructFromObject(data: any, obj: module:model/ProgramInfo): module:model/ProgramInfo;
    var title: string;
}

export declare module model/ProgramInvestInfo {
    function constructFromObject(data: any, obj: module:model/ProgramInvestInfo): module:model/ProgramInvestInfo;
    var periodEnds: Date;
    var availableToInvest: number;
    var availableToInvestBase: number;
    var title: string;
    var availableInWallet: number;
    var minInvestmentAmount: number;
    var entryFee: number;
    var gvCommission: number;
    var rate: number;
    var isOwnProgram: boolean;
}

export declare module model/ProgramInvestInfo {
    function constructFromObject(data: any, obj: module:model/ProgramInvestInfo): module:model/ProgramInvestInfo;
    var periodEnds: Date;
    var availableToInvest: number;
    var availableToInvestBase: number;
    var title: string;
    var availableInWallet: number;
    var minInvestmentAmount: number;
    var entryFee: number;
    var gvCommission: number;
    var rate: number;
    var isOwnProgram: boolean;
}

export declare module model/ProgramLevelInfo {
    function constructFromObject(data: any, obj: module:model/ProgramLevelInfo): module:model/ProgramLevelInfo;
    var isKycPassed: boolean;
    var level: number;
    var levelProgressPercent: number;
    var genesisRatio: number;
    var programAge: number;
    var weightedVolumeScale: number;
    var managerBalance: number;
    var investmentScale: number;
}

export declare module model/ProgramLevelInfo {
    function constructFromObject(data: any, obj: module:model/ProgramLevelInfo): module:model/ProgramLevelInfo;
    var isKycPassed: boolean;
    var level: number;
    var levelProgressPercent: number;
    var genesisRatio: number;
    var programAge: number;
    var weightedVolumeScale: number;
    var managerBalance: number;
    var investmentScale: number;
}

export declare module model/ProgramMinimumDeposit {
    function constructFromObject(data: any, obj: module:model/ProgramMinimumDeposit): module:model/ProgramMinimumDeposit;
    var minimumDepositsAmount: {
        [key: string]: number;
    };
}

export declare module model/ProgramMinimumDeposit {
    function constructFromObject(data: any, obj: module:model/ProgramMinimumDeposit): module:model/ProgramMinimumDeposit;
    var minimumDepositsAmount: {
        [key: string]: number;
    };
}

export declare module model/ProgramNotificationSettingList {
    function constructFromObject(data: any, obj: module:model/ProgramNotificationSettingList): module:model/ProgramNotificationSettingList;
    var level: number;
    var levelProgress: number;
    var settingsCustom: module:model/NotificationSettingViewModel[];
    var assetId: string;
    var title: string;
    var url: string;
    var logo: string;
    var color: string;
    var settingsGeneral: module:model/NotificationSettingViewModel[];
}

export declare module model/ProgramNotificationSettingList {
    function constructFromObject(data: any, obj: module:model/ProgramNotificationSettingList): module:model/ProgramNotificationSettingList;
    var level: number;
    var levelProgress: number;
    var settingsCustom: module:model/NotificationSettingViewModel[];
    var assetId: string;
    var title: string;
    var url: string;
    var logo: string;
    var color: string;
    var settingsGeneral: module:model/NotificationSettingViewModel[];
}

export declare module model/ProgramPeriodViewModel {
    function constructFromObject(data: any, obj: module:model/ProgramPeriodViewModel): module:model/ProgramPeriodViewModel;
    var dateFrom: Date;
    var dateTo: Date;
    var status: module:model/ProgramPeriodViewModel.StatusEnum;
    var number: number;
    var profit: number;
    enum StatusEnum {
        Planned,
        InProccess,
        Closed
    }
}

export declare module model/ProgramPeriodViewModel {
    function constructFromObject(data: any, obj: module:model/ProgramPeriodViewModel): module:model/ProgramPeriodViewModel;
    var dateFrom: Date;
    var dateTo: Date;
    var status: module:model/ProgramPeriodViewModel.StatusEnum;
    var number: number;
    var profit: number;
    enum StatusEnum {
        Planned,
        InProccess,
        Closed
    }
}

export declare module model/ProgramPeriodsViewModel {
    function constructFromObject(data: any, obj: module:model/ProgramPeriodsViewModel): module:model/ProgramPeriodsViewModel;
    var periods: module:model/ProgramPeriodViewModel[];
    var total: number;
}

export declare module model/ProgramPeriodsViewModel {
    function constructFromObject(data: any, obj: module:model/ProgramPeriodsViewModel): module:model/ProgramPeriodsViewModel;
    var periods: module:model/ProgramPeriodViewModel[];
    var total: number;
}

export declare module model/ProgramProfitChart {
    function constructFromObject(data: any, obj: module:model/ProgramProfitChart): module:model/ProgramProfitChart;
    var totalProgramCurrencyProfit: number;
    var timeframeProgramCurrencyProfit: number;
    var programCurrency: module:model/ProgramProfitChart.ProgramCurrencyEnum;
    var trades: number;
    var successTradesPercent: number;
    var profitFactor: number;
    var pnLChart: module:model/ChartSimple[];
    var periods: module:model/PeriodDate[];
    var lastPeriodStarts: Date;
    var lastPeriodEnds: Date;
    var tradingVolume: number;
    var equityChart: module:model/ChartSimple[];
    var balance: number;
    var investors: number;
    var profitChangePercent: number;
    var sharpeRatio: number;
    var sortinoRatio: number;
    var calmarRatio: number;
    var maxDrawdown: number;
    var totalGvtProfit: number;
    var timeframeGvtProfit: number;
    var rate: number;
    enum ProgramCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/ProgramProfitChart {
    function constructFromObject(data: any, obj: module:model/ProgramProfitChart): module:model/ProgramProfitChart;
    var totalProgramCurrencyProfit: number;
    var timeframeProgramCurrencyProfit: number;
    var programCurrency: module:model/ProgramProfitChart.ProgramCurrencyEnum;
    var trades: number;
    var successTradesPercent: number;
    var profitFactor: number;
    var pnLChart: module:model/ChartSimple[];
    var periods: module:model/PeriodDate[];
    var lastPeriodStarts: Date;
    var lastPeriodEnds: Date;
    var tradingVolume: number;
    var equityChart: module:model/ChartSimple[];
    var balance: number;
    var investors: number;
    var profitChangePercent: number;
    var sharpeRatio: number;
    var sortinoRatio: number;
    var calmarRatio: number;
    var maxDrawdown: number;
    var totalGvtProfit: number;
    var timeframeGvtProfit: number;
    var rate: number;
    enum ProgramCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/ProgramPwdUpdate {
    function constructFromObject(data: any, obj: module:model/ProgramPwdUpdate): module:model/ProgramPwdUpdate;
    var password: string;
    var twoFactorCode: string;
}

export declare module model/ProgramPwdUpdate {
    function constructFromObject(data: any, obj: module:model/ProgramPwdUpdate): module:model/ProgramPwdUpdate;
    var password: string;
    var twoFactorCode: string;
}

export declare module model/ProgramRequest {
    function constructFromObject(data: any, obj: module:model/ProgramRequest): module:model/ProgramRequest;
    var id: string;
    var programId: string;
    var date: Date;
    var value: number;
    var valueGvt: number;
    var withdrawAll: boolean;
    var feeEntry: number;
    var feeExit: number;
    var currency: module:model/ProgramRequest.CurrencyEnum;
    var fundWithdrawPercent: number;
    var type: module:model/ProgramRequest.TypeEnum;
    var status: module:model/ProgramRequest.StatusEnum;
    var logo: string;
    var title: string;
    var color: string;
    var canCancelRequest: boolean;
    var programType: module:model/ProgramRequest.ProgramTypeEnum;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        Invest,
        Withdrawal
    }
    enum StatusEnum {
        New,
        Executed,
        Cancelled
    }
    enum ProgramTypeEnum {
        Program,
        Fund
    }
}

export declare module model/ProgramRequest {
    function constructFromObject(data: any, obj: module:model/ProgramRequest): module:model/ProgramRequest;
    var id: string;
    var programId: string;
    var date: Date;
    var value: number;
    var valueGvt: number;
    var withdrawAll: boolean;
    var feeEntry: number;
    var feeExit: number;
    var currency: module:model/ProgramRequest.CurrencyEnum;
    var fundWithdrawPercent: number;
    var type: module:model/ProgramRequest.TypeEnum;
    var status: module:model/ProgramRequest.StatusEnum;
    var logo: string;
    var title: string;
    var color: string;
    var canCancelRequest: boolean;
    var programType: module:model/ProgramRequest.ProgramTypeEnum;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum TypeEnum {
        Invest,
        Withdrawal
    }
    enum StatusEnum {
        New,
        Executed,
        Cancelled
    }
    enum ProgramTypeEnum {
        Program,
        Fund
    }
}

export declare module model/ProgramRequests {
    function constructFromObject(data: any, obj: module:model/ProgramRequests): module:model/ProgramRequests;
    var requests: module:model/ProgramRequest[];
    var total: number;
    var totalValue: number;
}

export declare module model/ProgramRequests {
    function constructFromObject(data: any, obj: module:model/ProgramRequests): module:model/ProgramRequests;
    var requests: module:model/ProgramRequest[];
    var total: number;
    var totalValue: number;
}

export declare module model/ProgramSets {
    function constructFromObject(data: any, obj: module:model/ProgramSets): module:model/ProgramSets;
    var sets: module:model/ProgramFacet[];
    var favoritesCount: number;
}

export declare module model/ProgramSets {
    function constructFromObject(data: any, obj: module:model/ProgramSets): module:model/ProgramSets;
    var sets: module:model/ProgramFacet[];
    var favoritesCount: number;
}

export declare module model/ProgramStatistic {
    function constructFromObject(data: any, obj: module:model/ProgramStatistic): module:model/ProgramStatistic;
    var balanceBase: module:model/AmountWithCurrency;
    var balanceGVT: module:model/AmountWithCurrency;
    var balanceSecondary: module:model/AmountWithCurrency;
    var currentValue: number;
    var profitPercent: number;
    var profitValue: number;
    var drawdownPercent: number;
    var investorsCount: number;
    var hasNotifications: boolean;
    var startDate: Date;
    var startBalance: number;
    var startCurrency: module:model/ProgramStatistic.StartCurrencyEnum;
    var investedAmount: number;
    var investedCurrency: module:model/ProgramStatistic.InvestedCurrencyEnum;
    var tradesCount: number;
    var tradesSuccessCount: number;
    var profitFactorPercent: number;
    var sharpeRatioPercent: number;
    enum StartCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum InvestedCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/ProgramStatistic {
    function constructFromObject(data: any, obj: module:model/ProgramStatistic): module:model/ProgramStatistic;
    var balanceBase: module:model/AmountWithCurrency;
    var balanceGVT: module:model/AmountWithCurrency;
    var balanceSecondary: module:model/AmountWithCurrency;
    var currentValue: number;
    var profitPercent: number;
    var profitValue: number;
    var drawdownPercent: number;
    var investorsCount: number;
    var hasNotifications: boolean;
    var startDate: Date;
    var startBalance: number;
    var startCurrency: module:model/ProgramStatistic.StartCurrencyEnum;
    var investedAmount: number;
    var investedCurrency: module:model/ProgramStatistic.InvestedCurrencyEnum;
    var tradesCount: number;
    var tradesSuccessCount: number;
    var profitFactorPercent: number;
    var sharpeRatioPercent: number;
    enum StartCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum InvestedCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/ProgramTag {
    function constructFromObject(data: any, obj: module:model/ProgramTag): module:model/ProgramTag;
    var name: string;
    var color: string;
}

export declare module model/ProgramTag {
    function constructFromObject(data: any, obj: module:model/ProgramTag): module:model/ProgramTag;
    var name: string;
    var color: string;
}

export declare module model/ProgramTransactionDetails {
    function constructFromObject(data: any, obj: module:model/ProgramTransactionDetails): module:model/ProgramTransactionDetails;
    var id: string;
    var managerName: string;
    var programType: module:model/ProgramTransactionDetails.ProgramTypeEnum;
    var successFeeCurrency: module:model/ProgramTransactionDetails.SuccessFeeCurrencyEnum;
    var logo: string;
    var title: string;
    var entryFee: number;
    var entryFeePercent: number;
    var successFee: number;
    var successFeePercent: number;
    var level: number;
    var levelProgress: number;
    var exitFee: number;
    var exitFeePercent: number;
    var color: string;
    enum ProgramTypeEnum {
        Program,
        Fund
    }
    enum SuccessFeeCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/ProgramTransactionDetails {
    function constructFromObject(data: any, obj: module:model/ProgramTransactionDetails): module:model/ProgramTransactionDetails;
    var id: string;
    var managerName: string;
    var programType: module:model/ProgramTransactionDetails.ProgramTypeEnum;
    var successFeeCurrency: module:model/ProgramTransactionDetails.SuccessFeeCurrencyEnum;
    var logo: string;
    var title: string;
    var entryFee: number;
    var entryFeePercent: number;
    var successFee: number;
    var successFeePercent: number;
    var level: number;
    var levelProgress: number;
    var exitFee: number;
    var exitFeePercent: number;
    var color: string;
    enum ProgramTypeEnum {
        Program,
        Fund
    }
    enum SuccessFeeCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/ProgramUpdate {
    function constructFromObject(data: any, obj: module:model/ProgramUpdate): module:model/ProgramUpdate;
    var title: string;
    var description: string;
    var logo: string;
    var stopOutLevel: number;
    var investmentLimit: number;
}

export declare module model/ProgramUpdate {
    function constructFromObject(data: any, obj: module:model/ProgramUpdate): module:model/ProgramUpdate;
    var title: string;
    var description: string;
    var logo: string;
    var stopOutLevel: number;
    var investmentLimit: number;
}

export declare module model/ProgramWithdrawInfo {
    function constructFromObject(data: any, obj: module:model/ProgramWithdrawInfo): module:model/ProgramWithdrawInfo;
    var periodEnds: Date;
    var title: string;
    var availableToWithdraw: number;
    var rate: number;
}

export declare module model/ProgramWithdrawInfo {
    function constructFromObject(data: any, obj: module:model/ProgramWithdrawInfo): module:model/ProgramWithdrawInfo;
    var periodEnds: Date;
    var title: string;
    var availableToWithdraw: number;
    var rate: number;
}

export declare module model/ProgramsInfo {
    function constructFromObject(data: any, obj: module:model/ProgramsInfo): module:model/ProgramsInfo;
    var managerProgramInvestment: number;
    var managerProgramInvestmentUSD: number;
    var managerProgramInvestmentUSDT: number;
    var managerProgramInvestmentBTC: number;
    var managerProgramInvestmentETH: number;
    var managerMaxEntryFee: number;
    var managerMaxSuccessFee: number;
    var managerFundInvestment: number;
    var managerMaxExitFee: number;
    var managerMaxSignalVolumeFee: number;
    var managerMinSignalVolumeFee: number;
    var managerMaxSignalSuccessFee: number;
    var managerMinSignalSuccessFee: number;
    var periods: number[];
}

export declare module model/ProgramsInfo {
    function constructFromObject(data: any, obj: module:model/ProgramsInfo): module:model/ProgramsInfo;
    var managerProgramInvestment: number;
    var managerProgramInvestmentUSD: number;
    var managerProgramInvestmentUSDT: number;
    var managerProgramInvestmentBTC: number;
    var managerProgramInvestmentETH: number;
    var managerMaxEntryFee: number;
    var managerMaxSuccessFee: number;
    var managerFundInvestment: number;
    var managerMaxExitFee: number;
    var managerMaxSignalVolumeFee: number;
    var managerMinSignalVolumeFee: number;
    var managerMaxSignalSuccessFee: number;
    var managerMinSignalSuccessFee: number;
    var periods: number[];
}

export declare module model/ProgramsLevelsInfo {
    function constructFromObject(data: any, obj: module:model/ProgramsLevelsInfo): module:model/ProgramsLevelsInfo;
    var levels: module:model/LevelInfo[];
}

export declare module model/ProgramsLevelsInfo {
    function constructFromObject(data: any, obj: module:model/ProgramsLevelsInfo): module:model/ProgramsLevelsInfo;
    var levels: module:model/LevelInfo[];
}

export declare module model/ProgramsList {
    function constructFromObject(data: any, obj: module:model/ProgramsList): module:model/ProgramsList;
    var programs: module:model/ProgramDetails[];
    var total: number;
}

export declare module model/ProgramsList {
    function constructFromObject(data: any, obj: module:model/ProgramsList): module:model/ProgramsList;
    var programs: module:model/ProgramDetails[];
    var total: number;
}

export declare module model/RateItem {
    function constructFromObject(data: any, obj: module:model/RateItem): module:model/RateItem;
    var currency: module:model/RateItem.CurrencyEnum;
    var rate: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/RateItem {
    function constructFromObject(data: any, obj: module:model/RateItem): module:model/RateItem;
    var currency: module:model/RateItem.CurrencyEnum;
    var rate: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/RatesModel {
    function constructFromObject(data: any, obj: module:model/RatesModel): module:model/RatesModel;
    var rates: module:model/RatesModelRates;
}

export declare module model/RatesModel {
    function constructFromObject(data: any, obj: module:model/RatesModel): module:model/RatesModel;
    var rates: module:model/RatesModelRates;
}

export declare module model/RatesModelRates {
    function constructFromObject(data: any, obj: module:model/RatesModelRates): module:model/RatesModelRates;
    var Undefined: module:model/RateItem[];
    var GVT: module:model/RateItem[];
    var ETH: module:model/RateItem[];
    var BTC: module:model/RateItem[];
    var ADA: module:model/RateItem[];
    var USDT: module:model/RateItem[];
    var XRP: module:model/RateItem[];
    var BCH: module:model/RateItem[];
    var LTC: module:model/RateItem[];
    var DOGE: module:model/RateItem[];
    var BNB: module:model/RateItem[];
    var USD: module:model/RateItem[];
    var EUR: module:model/RateItem[];
}

export declare module model/RatesModelRates {
    function constructFromObject(data: any, obj: module:model/RatesModelRates): module:model/RatesModelRates;
    var Undefined: module:model/RateItem[];
    var GVT: module:model/RateItem[];
    var ETH: module:model/RateItem[];
    var BTC: module:model/RateItem[];
    var ADA: module:model/RateItem[];
    var USDT: module:model/RateItem[];
    var XRP: module:model/RateItem[];
    var BCH: module:model/RateItem[];
    var LTC: module:model/RateItem[];
    var DOGE: module:model/RateItem[];
    var BNB: module:model/RateItem[];
    var USD: module:model/RateItem[];
    var EUR: module:model/RateItem[];
}

export declare module model/RecoveryCode {
    function constructFromObject(data: any, obj: module:model/RecoveryCode): module:model/RecoveryCode;
    var code: string;
    var isActive: boolean;
}

export declare module model/RecoveryCode {
    function constructFromObject(data: any, obj: module:model/RecoveryCode): module:model/RecoveryCode;
    var code: string;
    var isActive: boolean;
}

export declare module model/RecoveryCodesViewModel {
    function constructFromObject(data: any, obj: module:model/RecoveryCodesViewModel): module:model/RecoveryCodesViewModel;
    var codes: module:model/RecoveryCode[];
    var authToken: string;
}

export declare module model/RecoveryCodesViewModel {
    function constructFromObject(data: any, obj: module:model/RecoveryCodesViewModel): module:model/RecoveryCodesViewModel;
    var codes: module:model/RecoveryCode[];
    var authToken: string;
}

export declare module model/RegisterInvestorViewModel {
    function constructFromObject(data: any, obj: module:model/RegisterInvestorViewModel): module:model/RegisterInvestorViewModel;
    var email: string;
    var password: string;
    var confirmPassword: string;
    var refCode: string;
    var isAuto: boolean;
}

export declare module model/RegisterInvestorViewModel {
    function constructFromObject(data: any, obj: module:model/RegisterInvestorViewModel): module:model/RegisterInvestorViewModel;
    var email: string;
    var password: string;
    var confirmPassword: string;
    var refCode: string;
    var isAuto: boolean;
}

export declare module model/RegisterManagerViewModel {
    function constructFromObject(data: any, obj: module:model/RegisterManagerViewModel): module:model/RegisterManagerViewModel;
    var userName: string;
    var email: string;
    var password: string;
    var confirmPassword: string;
    var refCode: string;
    var isAuto: boolean;
}

export declare module model/RegisterManagerViewModel {
    function constructFromObject(data: any, obj: module:model/RegisterManagerViewModel): module:model/RegisterManagerViewModel;
    var userName: string;
    var email: string;
    var password: string;
    var confirmPassword: string;
    var refCode: string;
    var isAuto: boolean;
}

export declare module model/ResendConfirmationViewModel {
    function constructFromObject(data: any, obj: module:model/ResendConfirmationViewModel): module:model/ResendConfirmationViewModel;
    var email: string;
}

export declare module model/ResendConfirmationViewModel {
    function constructFromObject(data: any, obj: module:model/ResendConfirmationViewModel): module:model/ResendConfirmationViewModel;
    var email: string;
}

export declare module model/ResetPasswordViewModel {
    function constructFromObject(data: any, obj: module:model/ResetPasswordViewModel): module:model/ResetPasswordViewModel;
    var userId: string;
    var code: string;
    var password: string;
    var confirmPassword: string;
}

export declare module model/ResetPasswordViewModel {
    function constructFromObject(data: any, obj: module:model/ResetPasswordViewModel): module:model/ResetPasswordViewModel;
    var userId: string;
    var code: string;
    var password: string;
    var confirmPassword: string;
}

export declare module model/SearchViewModel {
    function constructFromObject(data: any, obj: module:model/SearchViewModel): module:model/SearchViewModel;
    var programs: module:model/ProgramsList;
    var funds: module:model/FundsList;
    var managers: module:model/ManagersList;
}

export declare module model/SearchViewModel {
    function constructFromObject(data: any, obj: module:model/SearchViewModel): module:model/SearchViewModel;
    var programs: module:model/ProgramsList;
    var funds: module:model/FundsList;
    var managers: module:model/ManagersList;
}

export declare module model/SignalDataMaster {
    function constructFromObject(data: any, obj: module:model/SignalDataMaster): module:model/SignalDataMaster;
    var login: string;
    var share: number;
}

export declare module model/SignalDataMaster {
    function constructFromObject(data: any, obj: module:model/SignalDataMaster): module:model/SignalDataMaster;
    var login: string;
    var share: number;
}

export declare module model/SignalDetails {
    function constructFromObject(data: any, obj: module:model/SignalDetails): module:model/SignalDetails;
    var statistic: module:model/ProgramDetailsListStatistic;
    var personalDetails: module:model/PersonalSignalDetailsFull;
    var currency: module:model/SignalDetails.CurrencyEnum;
    var level: number;
    var levelProgress: number;
    var tags: module:model/ProgramTag[];
    var subscribers: number;
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var title: string;
    var description: string;
    var status: module:model/SignalDetails.StatusEnum;
    var creationDate: Date;
    var manager: module:model/ProfilePublic;
    var chart: module:model/ChartSimple[];
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/SignalDetails {
    function constructFromObject(data: any, obj: module:model/SignalDetails): module:model/SignalDetails;
    var statistic: module:model/ProgramDetailsListStatistic;
    var personalDetails: module:model/PersonalSignalDetailsFull;
    var currency: module:model/SignalDetails.CurrencyEnum;
    var level: number;
    var levelProgress: number;
    var tags: module:model/ProgramTag[];
    var subscribers: number;
    var id: string;
    var logo: string;
    var url: string;
    var color: string;
    var title: string;
    var description: string;
    var status: module:model/SignalDetails.StatusEnum;
    var creationDate: Date;
    var manager: module:model/ProfilePublic;
    var chart: module:model/ChartSimple[];
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum StatusEnum {
        None,
        Pending,
        ErrorCreating,
        Active,
        Closed,
        Archived,
        ClosedDueToInactivity
    }
}

export declare module model/SignalProviderSubscribers {
    function constructFromObject(data: any, obj: module:model/SignalProviderSubscribers): module:model/SignalProviderSubscribers;
    var subscribers: module:model/SignalSubscriber[];
    var total: number;
}

export declare module model/SignalProviderSubscribers {
    function constructFromObject(data: any, obj: module:model/SignalProviderSubscribers): module:model/SignalProviderSubscribers;
    var subscribers: module:model/SignalSubscriber[];
    var total: number;
}

export declare module model/SignalSubscriber {
    function constructFromObject(data: any, obj: module:model/SignalSubscriber): module:model/SignalSubscriber;
    var number: number;
    var trades: number;
    var profit: number;
    var volume: number;
    var subscriptionDate: Date;
    var unsubscriptionDate: Date;
    var status: module:model/SignalSubscriber.StatusEnum;
    enum StatusEnum {
        Active,
        Ended
    }
}

export declare module model/SignalSubscriber {
    function constructFromObject(data: any, obj: module:model/SignalSubscriber): module:model/SignalSubscriber;
    var number: number;
    var trades: number;
    var profit: number;
    var volume: number;
    var subscriptionDate: Date;
    var unsubscriptionDate: Date;
    var status: module:model/SignalSubscriber.StatusEnum;
    enum StatusEnum {
        Active,
        Ended
    }
}

export declare module model/SignalSubscription {
    function constructFromObject(data: any, obj: module:model/SignalSubscription): module:model/SignalSubscription;
    var hasSignalAccount: boolean;
    var hasActiveSubscription: boolean;
    var mode: module:model/SignalSubscription.ModeEnum;
    var percent: number;
    var openTolerancePercent: number;
    var fixedVolume: number;
    var fixedCurrency: module:model/SignalSubscription.FixedCurrencyEnum;
    enum ModeEnum {
        ByBalance,
        Percent,
        Fixed
    }
    enum FixedCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/SignalSubscription {
    function constructFromObject(data: any, obj: module:model/SignalSubscription): module:model/SignalSubscription;
    var hasSignalAccount: boolean;
    var hasActiveSubscription: boolean;
    var mode: module:model/SignalSubscription.ModeEnum;
    var percent: number;
    var openTolerancePercent: number;
    var fixedVolume: number;
    var fixedCurrency: module:model/SignalSubscription.FixedCurrencyEnum;
    enum ModeEnum {
        ByBalance,
        Percent,
        Fixed
    }
    enum FixedCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/SignalsList {
    function constructFromObject(data: any, obj: module:model/SignalsList): module:model/SignalsList;
    var programs: module:model/SignalDetails[];
    var total: number;
}

export declare module model/SignalsList {
    function constructFromObject(data: any, obj: module:model/SignalsList): module:model/SignalsList;
    var programs: module:model/SignalDetails[];
    var total: number;
}

export declare module model/SocialLinkViewModel {
    function constructFromObject(data: any, obj: module:model/SocialLinkViewModel): module:model/SocialLinkViewModel;
    var url: string;
    var logo: string;
    var name: string;
    var value: string;
    var type: module:model/SocialLinkViewModel.TypeEnum;
    enum TypeEnum {
        Undefined,
        Twitter,
        Telegram,
        Facebook,
        LinkedIn,
        Youtube,
        WeChat,
        Email
    }
}

export declare module model/SocialLinkViewModel {
    function constructFromObject(data: any, obj: module:model/SocialLinkViewModel): module:model/SocialLinkViewModel;
    var url: string;
    var logo: string;
    var name: string;
    var value: string;
    var type: module:model/SocialLinkViewModel.TypeEnum;
    enum TypeEnum {
        Undefined,
        Twitter,
        Telegram,
        Facebook,
        LinkedIn,
        Youtube,
        WeChat,
        Email
    }
}

export declare module model/SocialLinksViewModel {
    function constructFromObject(data: any, obj: module:model/SocialLinksViewModel): module:model/SocialLinksViewModel;
    var socialLinks: module:model/SocialLinkViewModel[];
}

export declare module model/SocialLinksViewModel {
    function constructFromObject(data: any, obj: module:model/SocialLinksViewModel): module:model/SocialLinksViewModel;
    var socialLinks: module:model/SocialLinkViewModel[];
}

export declare module model/TradesSignalViewModel {
    function constructFromObject(data: any, obj: module:model/TradesSignalViewModel): module:model/TradesSignalViewModel;
    var showSwaps: boolean;
    var showTickets: boolean;
    var trades: module:model/OrderSignalModel[];
    var total: number;
}

export declare module model/TradesSignalViewModel {
    function constructFromObject(data: any, obj: module:model/TradesSignalViewModel): module:model/TradesSignalViewModel;
    var showSwaps: boolean;
    var showTickets: boolean;
    var trades: module:model/OrderSignalModel[];
    var total: number;
}

export declare module model/TradesViewModel {
    function constructFromObject(data: any, obj: module:model/TradesViewModel): module:model/TradesViewModel;
    var showSwaps: boolean;
    var showTickets: boolean;
    var trades: module:model/OrderModel[];
    var total: number;
}

export declare module model/TradesViewModel {
    function constructFromObject(data: any, obj: module:model/TradesViewModel): module:model/TradesViewModel;
    var showSwaps: boolean;
    var showTickets: boolean;
    var trades: module:model/OrderModel[];
    var total: number;
}

export declare module model/TransactionDetails {
    function constructFromObject(data: any, obj: module:model/TransactionDetails): module:model/TransactionDetails;
    var type: module:model/TransactionDetails.TypeEnum;
    var programDetails: module:model/ProgramTransactionDetails;
    var convertingDetails: module:model/ConvertingDetails;
    var externalTransactionDetails: module:model/ExternalTransactionDetails;
    var status: module:model/TransactionDetails.StatusEnum;
    var currency: module:model/TransactionDetails.CurrencyEnum;
    var currencyName: string;
    var currencyLogo: string;
    var gvCommission: number;
    var gvCommissionCurrency: module:model/TransactionDetails.GvCommissionCurrencyEnum;
    var gvCommissionPercent: number;
    var amount: number;
    enum TypeEnum {
        Investing,
        Withdrawal,
        ExternalWithdrawal,
        ExternalDeposit,
        Converting,
        Open,
        Close,
        Profit,
        PlatformFee,
        SubscribeSignal,
        ReceiveSignal,
        DepositSignal,
        WithdrawalSignal,
        Platform
    }
    enum StatusEnum {
        Done,
        Pending,
        Canceled,
        Error
    }
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum GvCommissionCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/TransactionDetails {
    function constructFromObject(data: any, obj: module:model/TransactionDetails): module:model/TransactionDetails;
    var type: module:model/TransactionDetails.TypeEnum;
    var programDetails: module:model/ProgramTransactionDetails;
    var convertingDetails: module:model/ConvertingDetails;
    var externalTransactionDetails: module:model/ExternalTransactionDetails;
    var status: module:model/TransactionDetails.StatusEnum;
    var currency: module:model/TransactionDetails.CurrencyEnum;
    var currencyName: string;
    var currencyLogo: string;
    var gvCommission: number;
    var gvCommissionCurrency: module:model/TransactionDetails.GvCommissionCurrencyEnum;
    var gvCommissionPercent: number;
    var amount: number;
    enum TypeEnum {
        Investing,
        Withdrawal,
        ExternalWithdrawal,
        ExternalDeposit,
        Converting,
        Open,
        Close,
        Profit,
        PlatformFee,
        SubscribeSignal,
        ReceiveSignal,
        DepositSignal,
        WithdrawalSignal,
        Platform
    }
    enum StatusEnum {
        Done,
        Pending,
        Canceled,
        Error
    }
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum GvCommissionCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/TwoFactorAuthenticator {
    function constructFromObject(data: any, obj: module:model/TwoFactorAuthenticator): module:model/TwoFactorAuthenticator;
    var sharedKey: string;
    var authenticatorUri: string;
}

export declare module model/TwoFactorAuthenticator {
    function constructFromObject(data: any, obj: module:model/TwoFactorAuthenticator): module:model/TwoFactorAuthenticator;
    var sharedKey: string;
    var authenticatorUri: string;
}

export declare module model/TwoFactorAuthenticatorConfirm {
    function constructFromObject(data: any, obj: module:model/TwoFactorAuthenticatorConfirm): module:model/TwoFactorAuthenticatorConfirm;
    var code: string;
    var sharedKey: string;
    var password: string;
}

export declare module model/TwoFactorAuthenticatorConfirm {
    function constructFromObject(data: any, obj: module:model/TwoFactorAuthenticatorConfirm): module:model/TwoFactorAuthenticatorConfirm;
    var code: string;
    var sharedKey: string;
    var password: string;
}

export declare module model/TwoFactorCodeModel {
    function constructFromObject(data: any, obj: module:model/TwoFactorCodeModel): module:model/TwoFactorCodeModel;
    var twoFactorCode: string;
    var password: string;
}

export declare module model/TwoFactorCodeModel {
    function constructFromObject(data: any, obj: module:model/TwoFactorCodeModel): module:model/TwoFactorCodeModel;
    var twoFactorCode: string;
    var password: string;
}

export declare module model/TwoFactorStatus {
    function constructFromObject(data: any, obj: module:model/TwoFactorStatus): module:model/TwoFactorStatus;
    var twoFactorEnabled: boolean;
}

export declare module model/TwoFactorStatus {
    function constructFromObject(data: any, obj: module:model/TwoFactorStatus): module:model/TwoFactorStatus;
    var twoFactorEnabled: boolean;
}

export declare module model/UpdatePersonalDetailViewModel {
    function constructFromObject(data: any, obj: module:model/UpdatePersonalDetailViewModel): module:model/UpdatePersonalDetailViewModel;
    var firstName: string;
    var middleName: string;
    var lastName: string;
    var birthday: Date;
    var citizenship: string;
    var gender: boolean;
    var documentId: string;
    var phoneNumber: string;
    var country: string;
    var city: string;
    var address: string;
    var index: string;
}

export declare module model/UpdatePersonalDetailViewModel {
    function constructFromObject(data: any, obj: module:model/UpdatePersonalDetailViewModel): module:model/UpdatePersonalDetailViewModel;
    var firstName: string;
    var middleName: string;
    var lastName: string;
    var birthday: Date;
    var citizenship: string;
    var gender: boolean;
    var documentId: string;
    var phoneNumber: string;
    var country: string;
    var city: string;
    var address: string;
    var index: string;
}

export declare module model/UpdateProfileViewModel {
    function constructFromObject(data: any, obj: module:model/UpdateProfileViewModel): module:model/UpdateProfileViewModel;
    var userName: string;
    var about: string;
}

export declare module model/UpdateProfileViewModel {
    function constructFromObject(data: any, obj: module:model/UpdateProfileViewModel): module:model/UpdateProfileViewModel;
    var userName: string;
    var about: string;
}

export declare module model/UpdateSocialLinkViewModel {
    function constructFromObject(data: any, obj: module:model/UpdateSocialLinkViewModel): module:model/UpdateSocialLinkViewModel;
    var type: module:model/UpdateSocialLinkViewModel.TypeEnum;
    var value: string;
    enum TypeEnum {
        Undefined,
        Twitter,
        Telegram,
        Facebook,
        LinkedIn,
        Youtube,
        WeChat,
        Email
    }
}

export declare module model/UpdateSocialLinkViewModel {
    function constructFromObject(data: any, obj: module:model/UpdateSocialLinkViewModel): module:model/UpdateSocialLinkViewModel;
    var type: module:model/UpdateSocialLinkViewModel.TypeEnum;
    var value: string;
    enum TypeEnum {
        Undefined,
        Twitter,
        Telegram,
        Facebook,
        LinkedIn,
        Youtube,
        WeChat,
        Email
    }
}

export declare module model/UploadResult {
    function constructFromObject(data: any, obj: module:model/UploadResult): module:model/UploadResult;
    var id: string;
}

export declare module model/UploadResult {
    function constructFromObject(data: any, obj: module:model/UploadResult): module:model/UploadResult;
    var id: string;
}

export declare module model/UserCommissionData {
    function constructFromObject(data: any, obj: module:model/UserCommissionData): module:model/UserCommissionData;
    var isPayingCommissionInGvt: boolean;
    var gvtHolderTradingFee: number;
    var gvtHolderDiscount: number;
    var regularTradingFee: number;
    var regularDiscount: number;
}

export declare module model/UserCommissionData {
    function constructFromObject(data: any, obj: module:model/UserCommissionData): module:model/UserCommissionData;
    var isPayingCommissionInGvt: boolean;
    var gvtHolderTradingFee: number;
    var gvtHolderDiscount: number;
    var regularTradingFee: number;
    var regularDiscount: number;
}

export declare module model/ValueChartBar {
    function constructFromObject(data: any, obj: module:model/ValueChartBar): module:model/ValueChartBar;
    var value: number;
    var date: Date;
    var topAssets: module:model/AssetsValue[];
    var otherAssetsValue: module:model/OtherAssetsValue;
}

export declare module model/ValueChartBar {
    function constructFromObject(data: any, obj: module:model/ValueChartBar): module:model/ValueChartBar;
    var value: number;
    var date: Date;
    var topAssets: module:model/AssetsValue[];
    var otherAssetsValue: module:model/OtherAssetsValue;
}

export declare module model/WalletBaseData {
    function constructFromObject(data: any, obj: module:model/WalletBaseData): module:model/WalletBaseData;
    var id: string;
    var title: string;
    var logo: string;
    var currency: module:model/WalletBaseData.CurrencyEnum;
    var available: number;
    var rate: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletBaseData {
    function constructFromObject(data: any, obj: module:model/WalletBaseData): module:model/WalletBaseData;
    var id: string;
    var title: string;
    var logo: string;
    var currency: module:model/WalletBaseData.CurrencyEnum;
    var available: number;
    var rate: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletData {
    function constructFromObject(data: any, obj: module:model/WalletData): module:model/WalletData;
    var id: string;
    var title: string;
    var logo: string;
    var rateToGVT: number;
    var isDepositEnabled: boolean;
    var isWithdrawalEnabled: boolean;
    var withdrawalCommission: number;
    var depositAddress: string;
    var currency: module:model/WalletData.CurrencyEnum;
    var available: number;
    var invested: number;
    var pending: number;
    var total: number;
    var currencyCcy: module:model/WalletData.CurrencyCcyEnum;
    var availableCcy: number;
    var investedCcy: number;
    var pendingCcy: number;
    var totalCcy: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum CurrencyCcyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletData {
    function constructFromObject(data: any, obj: module:model/WalletData): module:model/WalletData;
    var id: string;
    var title: string;
    var logo: string;
    var rateToGVT: number;
    var isDepositEnabled: boolean;
    var isWithdrawalEnabled: boolean;
    var withdrawalCommission: number;
    var depositAddress: string;
    var currency: module:model/WalletData.CurrencyEnum;
    var available: number;
    var invested: number;
    var pending: number;
    var total: number;
    var currencyCcy: module:model/WalletData.CurrencyCcyEnum;
    var availableCcy: number;
    var investedCcy: number;
    var pendingCcy: number;
    var totalCcy: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum CurrencyCcyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletInfo {
    function constructFromObject(data: any, obj: module:model/WalletInfo): module:model/WalletInfo;
    var currency: module:model/WalletInfo.CurrencyEnum;
    var address: string;
    var rateToGVT: number;
    var description: string;
    var logo: string;
    var isDepositEnabled: boolean;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletInfo {
    function constructFromObject(data: any, obj: module:model/WalletInfo): module:model/WalletInfo;
    var currency: module:model/WalletInfo.CurrencyEnum;
    var address: string;
    var rateToGVT: number;
    var description: string;
    var logo: string;
    var isDepositEnabled: boolean;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletMultiAvailable {
    function constructFromObject(data: any, obj: module:model/WalletMultiAvailable): module:model/WalletMultiAvailable;
    var wallets: module:model/WalletBaseData[];
}

export declare module model/WalletMultiAvailable {
    function constructFromObject(data: any, obj: module:model/WalletMultiAvailable): module:model/WalletMultiAvailable;
    var wallets: module:model/WalletBaseData[];
}

export declare module model/WalletMultiSummary {
    function constructFromObject(data: any, obj: module:model/WalletMultiSummary): module:model/WalletMultiSummary;
    var grandTotal: module:model/WalletsGrandTotal;
    var wallets: module:model/WalletData[];
    var payFeesWithGvt: boolean;
}

export declare module model/WalletMultiSummary {
    function constructFromObject(data: any, obj: module:model/WalletMultiSummary): module:model/WalletMultiSummary;
    var grandTotal: module:model/WalletsGrandTotal;
    var wallets: module:model/WalletData[];
    var payFeesWithGvt: boolean;
}

export declare module model/WalletSummary {
    function constructFromObject(data: any, obj: module:model/WalletSummary): module:model/WalletSummary;
    var totalBalanceGVT: number;
    var totalBalanceCurrency: number;
    var investedGVT: number;
    var investedCurrency: number;
    var availableGVT: number;
    var availableCurrency: number;
}

export declare module model/WalletSummary {
    function constructFromObject(data: any, obj: module:model/WalletSummary): module:model/WalletSummary;
    var totalBalanceGVT: number;
    var totalBalanceCurrency: number;
    var investedGVT: number;
    var investedCurrency: number;
    var availableGVT: number;
    var availableCurrency: number;
}

export declare module model/WalletTransaction {
    function constructFromObject(data: any, obj: module:model/WalletTransaction): module:model/WalletTransaction;
    var id: string;
    var amount: number;
    var amountConverted: number;
    var date: Date;
    var number: number;
    var sourceId: string;
    var sourceType: module:model/WalletTransaction.SourceTypeEnum;
    var sourceCurrency: module:model/WalletTransaction.SourceCurrencyEnum;
    var sourceProgramInfo: module:model/ProgramInfo;
    var sourceBlockchainInfo: module:model/BlockchainInfo;
    var sourceWithdrawalInfo: module:model/WithdrawalInfo;
    var action: module:model/WalletTransaction.ActionEnum;
    var information: string;
    var destinationId: string;
    var destinationType: module:model/WalletTransaction.DestinationTypeEnum;
    var destinationCurrency: module:model/WalletTransaction.DestinationCurrencyEnum;
    var destinationProgramInfo: module:model/ProgramInfo;
    var destinationBlockchainInfo: module:model/BlockchainInfo;
    var destinationWithdrawalInfo: module:model/WithdrawalInfo;
    enum SourceTypeEnum {
        Wallet,
        Program,
        Fund,
        ProgramRequest,
        FundRequest,
        WithdrawalRequest,
        PaymentTransaction,
        Blockchain,
        GenesisVisionPlatform,
        SignalMasterSetting,
        SignalTradingAccount
    }
    enum SourceCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum ActionEnum {
        Transfer,
        ProgramOpen,
        ProgramProfit,
        ProgramInvest,
        ProgramWithdrawal,
        ProgramRefundPartialExecution,
        ProgramRefundClose,
        ProgramRefundStopOut,
        ProgramRequestInvest,
        ProgramRequestWithdrawal,
        ProgramRequestCancel,
        PayingTradingFee,
        SignalSubscriberPayingFee,
        SignalProviderReceiveFee
    }
    enum DestinationTypeEnum {
        Wallet,
        Program,
        Fund,
        ProgramRequest,
        FundRequest,
        WithdrawalRequest,
        PaymentTransaction,
        Blockchain,
        GenesisVisionPlatform,
        SignalMasterSetting,
        SignalTradingAccount
    }
    enum DestinationCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletTransaction {
    function constructFromObject(data: any, obj: module:model/WalletTransaction): module:model/WalletTransaction;
    var id: string;
    var amount: number;
    var amountConverted: number;
    var date: Date;
    var number: number;
    var sourceId: string;
    var sourceType: module:model/WalletTransaction.SourceTypeEnum;
    var sourceCurrency: module:model/WalletTransaction.SourceCurrencyEnum;
    var sourceProgramInfo: module:model/ProgramInfo;
    var sourceBlockchainInfo: module:model/BlockchainInfo;
    var sourceWithdrawalInfo: module:model/WithdrawalInfo;
    var action: module:model/WalletTransaction.ActionEnum;
    var information: string;
    var destinationId: string;
    var destinationType: module:model/WalletTransaction.DestinationTypeEnum;
    var destinationCurrency: module:model/WalletTransaction.DestinationCurrencyEnum;
    var destinationProgramInfo: module:model/ProgramInfo;
    var destinationBlockchainInfo: module:model/BlockchainInfo;
    var destinationWithdrawalInfo: module:model/WithdrawalInfo;
    enum SourceTypeEnum {
        Wallet,
        Program,
        Fund,
        ProgramRequest,
        FundRequest,
        WithdrawalRequest,
        PaymentTransaction,
        Blockchain,
        GenesisVisionPlatform,
        SignalMasterSetting,
        SignalTradingAccount
    }
    enum SourceCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum ActionEnum {
        Transfer,
        ProgramOpen,
        ProgramProfit,
        ProgramInvest,
        ProgramWithdrawal,
        ProgramRefundPartialExecution,
        ProgramRefundClose,
        ProgramRefundStopOut,
        ProgramRequestInvest,
        ProgramRequestWithdrawal,
        ProgramRequestCancel,
        PayingTradingFee,
        SignalSubscriberPayingFee,
        SignalProviderReceiveFee
    }
    enum DestinationTypeEnum {
        Wallet,
        Program,
        Fund,
        ProgramRequest,
        FundRequest,
        WithdrawalRequest,
        PaymentTransaction,
        Blockchain,
        GenesisVisionPlatform,
        SignalMasterSetting,
        SignalTradingAccount
    }
    enum DestinationCurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletTransactionsViewModel {
    function constructFromObject(data: any, obj: module:model/WalletTransactionsViewModel): module:model/WalletTransactionsViewModel;
    var transactions: module:model/WalletTransaction[];
    var total: number;
}

export declare module model/WalletTransactionsViewModel {
    function constructFromObject(data: any, obj: module:model/WalletTransactionsViewModel): module:model/WalletTransactionsViewModel;
    var transactions: module:model/WalletTransaction[];
    var total: number;
}

export declare module model/WalletWithdrawalInfo {
    function constructFromObject(data: any, obj: module:model/WalletWithdrawalInfo): module:model/WalletWithdrawalInfo;
    var currency: module:model/WalletWithdrawalInfo.CurrencyEnum;
    var description: string;
    var logo: string;
    var commission: number;
    var rateToGvt: number;
    var availableToWithdrawal: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletWithdrawalInfo {
    function constructFromObject(data: any, obj: module:model/WalletWithdrawalInfo): module:model/WalletWithdrawalInfo;
    var currency: module:model/WalletWithdrawalInfo.CurrencyEnum;
    var description: string;
    var logo: string;
    var commission: number;
    var rateToGvt: number;
    var availableToWithdrawal: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletsGrandTotal {
    function constructFromObject(data: any, obj: module:model/WalletsGrandTotal): module:model/WalletsGrandTotal;
    var currency: module:model/WalletsGrandTotal.CurrencyEnum;
    var available: number;
    var invested: number;
    var pending: number;
    var total: number;
    var currencyCcy: module:model/WalletsGrandTotal.CurrencyCcyEnum;
    var availableCcy: number;
    var investedCcy: number;
    var pendingCcy: number;
    var totalCcy: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum CurrencyCcyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletsGrandTotal {
    function constructFromObject(data: any, obj: module:model/WalletsGrandTotal): module:model/WalletsGrandTotal;
    var currency: module:model/WalletsGrandTotal.CurrencyEnum;
    var available: number;
    var invested: number;
    var pending: number;
    var total: number;
    var currencyCcy: module:model/WalletsGrandTotal.CurrencyCcyEnum;
    var availableCcy: number;
    var investedCcy: number;
    var pendingCcy: number;
    var totalCcy: number;
    enum CurrencyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
    enum CurrencyCcyEnum {
        BTC,
        ETH,
        USDT,
        GVT,
        Undefined,
        ADA,
        XRP,
        BCH,
        LTC,
        DOGE,
        BNB,
        USD,
        EUR
    }
}

export declare module model/WalletsInfo {
    function constructFromObject(data: any, obj: module:model/WalletsInfo): module:model/WalletsInfo;
    var wallets: module:model/WalletInfo[];
}

export declare module model/WalletsInfo {
    function constructFromObject(data: any, obj: module:model/WalletsInfo): module:model/WalletsInfo;
    var wallets: module:model/WalletInfo[];
}

export declare module model/WithdrawalInfo {
    function constructFromObject(data: any, obj: module:model/WithdrawalInfo): module:model/WithdrawalInfo;
    var wallet: string;
    var status: module:model/WithdrawalInfo.StatusEnum;
    var canResendEmail: boolean;
    var canCancelRequest: boolean;
    enum StatusEnum {
        New,
        InProcess,
        Done,
        Error,
        Rejected,
        Cancelled
    }
}

export declare module model/WithdrawalInfo {
    function constructFromObject(data: any, obj: module:model/WithdrawalInfo): module:model/WithdrawalInfo;
    var wallet: string;
    var status: module:model/WithdrawalInfo.StatusEnum;
    var canResendEmail: boolean;
    var canCancelRequest: boolean;
    enum StatusEnum {
        New,
        InProcess,
        Done,
        Error,
        Rejected,
        Cancelled
    }
}

export declare module model/WithdrawalSummary {
    function constructFromObject(data: any, obj: module:model/WithdrawalSummary): module:model/WithdrawalSummary;
    var availableToWithdrawal: number;
    var wallets: module:model/WalletWithdrawalInfo[];
}

export declare module model/WithdrawalSummary {
    function constructFromObject(data: any, obj: module:model/WithdrawalSummary): module:model/WithdrawalSummary;
    var availableToWithdrawal: number;
    var wallets: module:model/WalletWithdrawalInfo[];
}

