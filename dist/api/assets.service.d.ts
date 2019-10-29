import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ChangeBrokerProgramRequest } from "../model/changeBrokerProgramRequest";
import { FundAssetPart } from "../model/fundAssetPart";
import { NewFundRequest } from "../model/newFundRequest";
import { ProgramCreateResult } from "../model/programCreateResult";
import { ProgramLevelInfo } from "../model/programLevelInfo";
import { ProgramPwdUpdate } from "../model/programPwdUpdate";
import { ProgramUpdate } from "../model/programUpdate";
import { TwoFactorAuthenticator } from "../model/twoFactorAuthenticator";
import { TwoFactorCodeModel } from "../model/twoFactorCodeModel";
export declare class AssetsService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    cancelChangeBroker(id: string, authorization: string): CancelablePromise<null>;
    private cancelChangeBrokerWithHttpInfo;
    changeBroker(id: string, authorization: string, opts?: {
        request?: ChangeBrokerProgramRequest;
    }): CancelablePromise<null>;
    private changeBrokerWithHttpInfo;
    changeProgramPassword(id: string, authorization: string, opts?: {
        model?: ProgramPwdUpdate;
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
    getLevelsCalculator(id: string, authorization: string): CancelablePromise<ProgramLevelInfo>;
    private getLevelsCalculatorWithHttpInfo;
    getProgram2FA(id: string, authorization: string): CancelablePromise<TwoFactorAuthenticator>;
    private getProgram2FAWithHttpInfo;
    makeAccountProgram(authorization: string): CancelablePromise<ProgramCreateResult>;
    private makeAccountProgramWithHttpInfo;
    updateAsset(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<null>;
    private updateAssetWithHttpInfo;
    updateAsset_1(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<null>;
    private updateAsset_1WithHttpInfo;
    updateFundAssets(id: string, authorization: string, opts?: {
        assets?: [FundAssetPart];
    }): CancelablePromise<null>;
    private updateFundAssetsWithHttpInfo;
    updateProgramSignalSettings(authorization: string, opts?: {
        programId?: string;
        volumeFee?: number;
        successFee?: number;
    }): CancelablePromise<null>;
    private updateProgramSignalSettingsWithHttpInfo;
    updateProgramSignalSettings_2(authorization: string, opts?: {
        programId?: string;
        volumeFee?: number;
        successFee?: number;
    }): CancelablePromise<null>;
    private updateProgramSignalSettings_2WithHttpInfo;
}
