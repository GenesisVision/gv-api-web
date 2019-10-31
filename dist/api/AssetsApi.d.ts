import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ChangeBrokerProgramRequest } from "../model/ChangeBrokerProgramRequest";
import { CreateSignalProvider } from "../model/CreateSignalProvider";
import { FundAssetPart } from "../model/FundAssetPart";
import { MakeSignalProviderProgram } from "../model/MakeSignalProviderProgram";
import { MakeTradingAccountProgram } from "../model/MakeTradingAccountProgram";
import { MakeTradingAccountSignalProvider } from "../model/MakeTradingAccountSignalProvider";
import { NewFundRequest } from "../model/NewFundRequest";
import { NewTradingAccountRequest } from "../model/NewTradingAccountRequest";
import { ProgramLevelInfo } from "../model/ProgramLevelInfo";
import { ProgramUpdate } from "../model/ProgramUpdate";
import { TradingAccountCreateResult } from "../model/TradingAccountCreateResult";
import { TradingAccountPwdUpdate } from "../model/TradingAccountPwdUpdate";
import { TwoFactorAuthenticator } from "../model/TwoFactorAuthenticator";
import { TwoFactorCodeModel } from "../model/TwoFactorCodeModel";
export declare class AssetsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    cancelChangeBroker(id: string, authorization: string): CancelablePromise<null>;
    private cancelChangeBrokerWithHttpInfo;
    changeBroker(id: string, authorization: string, opts?: {
        request?: ChangeBrokerProgramRequest;
    }): CancelablePromise<null>;
    private changeBrokerWithHttpInfo;
    changeProgramPassword(id: string, authorization: string, opts?: {
        model?: TradingAccountPwdUpdate;
    }): CancelablePromise<null>;
    private changeProgramPasswordWithHttpInfo;
    closeCurrentPeriod(id: string, authorization: string): CancelablePromise<null>;
    private closeCurrentPeriodWithHttpInfo;
    closeFund(id: string, authorization: string, opts?: {
        model?: TwoFactorCodeModel;
    }): CancelablePromise<null>;
    private closeFundWithHttpInfo;
    closeInvestmentProgram(id: string, authorization: string, opts?: {
        model?: TwoFactorCodeModel;
    }): CancelablePromise<null>;
    private closeInvestmentProgramWithHttpInfo;
    confirmProgram2FA(id: string, authorization: string, opts?: {
        model?: TwoFactorCodeModel;
    }): CancelablePromise<null>;
    private confirmProgram2FAWithHttpInfo;
    createFund(authorization: string, opts?: {
        request?: NewFundRequest;
    }): CancelablePromise<null>;
    private createFundWithHttpInfo;
    createTradingAccount(authorization: string, opts?: {
        request?: NewTradingAccountRequest;
    }): CancelablePromise<TradingAccountCreateResult>;
    private createTradingAccountWithHttpInfo;
    getLevelsCalculator(id: string, authorization: string): CancelablePromise<ProgramLevelInfo>;
    private getLevelsCalculatorWithHttpInfo;
    getProgram2FA(id: string, authorization: string): CancelablePromise<TwoFactorAuthenticator>;
    private getProgram2FAWithHttpInfo;
    makeAccountProgram(authorization: string, opts?: {
        request?: MakeTradingAccountProgram;
    }): CancelablePromise<null>;
    private makeAccountProgramWithHttpInfo;
    makeAccountSignalProvider(authorization: string, opts?: {
        request?: MakeTradingAccountSignalProvider;
    }): CancelablePromise<null>;
    private makeAccountSignalProviderWithHttpInfo;
    makeSignalProviderProgram(authorization: string, opts?: {
        request?: MakeSignalProviderProgram;
    }): CancelablePromise<null>;
    private makeSignalProviderProgramWithHttpInfo;
    updateAsset(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<null>;
    private updateAssetWithHttpInfo;
    updateAsset_1(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<null>;
    private updateAsset_1WithHttpInfo;
    updateFundAssets(id: string, authorization: string, opts?: {
        assets?: Array<FundAssetPart>;
    }): CancelablePromise<null>;
    private updateFundAssetsWithHttpInfo;
    updateSignalProviderSettings(authorization: string, opts?: {
        request?: CreateSignalProvider;
    }): CancelablePromise<null>;
    private updateSignalProviderSettingsWithHttpInfo;
}
