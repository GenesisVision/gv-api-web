import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ChangePasswordViewModel } from "../model/ChangePasswordViewModel";
import { ForgotPasswordViewModel } from "../model/ForgotPasswordViewModel";
import { LoginViewModel } from "../model/LoginViewModel";
import { PasswordModel } from "../model/PasswordModel";
import { RecoveryCodesViewModel } from "../model/RecoveryCodesViewModel";
import { RegisterViewModel } from "../model/RegisterViewModel";
import { ResendConfirmationViewModel } from "../model/ResendConfirmationViewModel";
import { ResetPasswordViewModel } from "../model/ResetPasswordViewModel";
import { TwoFactorAuthenticator } from "../model/TwoFactorAuthenticator";
import { TwoFactorAuthenticatorConfirm } from "../model/TwoFactorAuthenticatorConfirm";
import { TwoFactorCodeWithPassword } from "../model/TwoFactorCodeWithPassword";
import { TwoFactorStatus } from "../model/TwoFactorStatus";
export declare class AuthApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    authorize(opts?: {
        model?: LoginViewModel;
    }): CancelablePromise<string>;
    private authorizeWithHttpInfo;
    changePassword(authorization: string, opts?: {
        model?: ChangePasswordViewModel;
    }): CancelablePromise<string>;
    private changePasswordWithHttpInfo;
    confirmEmail(opts?: {
        userId?: string;
        code?: string;
    }): CancelablePromise<string>;
    private confirmEmailWithHttpInfo;
    confirmTwoStepAuth(authorization: string, opts?: {
        model?: TwoFactorAuthenticatorConfirm;
    }): CancelablePromise<RecoveryCodesViewModel>;
    private confirmTwoStepAuthWithHttpInfo;
    createTwoStepAuth(authorization: string): CancelablePromise<TwoFactorAuthenticator>;
    private createTwoStepAuthWithHttpInfo;
    createTwoStepAuthRecoveryCodes(authorization: string, opts?: {
        model?: PasswordModel;
    }): CancelablePromise<RecoveryCodesViewModel>;
    private createTwoStepAuthRecoveryCodesWithHttpInfo;
    disableTwoStepAuth(authorization: string, opts?: {
        model?: TwoFactorCodeWithPassword;
    }): CancelablePromise<null>;
    private disableTwoStepAuthWithHttpInfo;
    forgotPassword(opts?: {
        model?: ForgotPasswordViewModel;
    }): CancelablePromise<null>;
    private forgotPasswordWithHttpInfo;
    getTwoStepAuthRecoveryCodes(authorization: string, opts?: {
        model?: PasswordModel;
    }): CancelablePromise<RecoveryCodesViewModel>;
    private getTwoStepAuthRecoveryCodesWithHttpInfo;
    getTwoStepAuthStatus(authorization: string): CancelablePromise<TwoFactorStatus>;
    private getTwoStepAuthStatusWithHttpInfo;
    logoutFromAnotherDevices(authorization: string): CancelablePromise<string>;
    private logoutFromAnotherDevicesWithHttpInfo;
    register(opts?: {
        model?: RegisterViewModel;
    }): CancelablePromise<null>;
    private registerWithHttpInfo;
    requestPhoneNumberVerificationCode(authorization: string): CancelablePromise<number>;
    private requestPhoneNumberVerificationCodeWithHttpInfo;
    resendConfirmationLink(opts?: {
        model?: ResendConfirmationViewModel;
    }): CancelablePromise<null>;
    private resendConfirmationLinkWithHttpInfo;
    resetPassword(opts?: {
        model?: ResetPasswordViewModel;
    }): CancelablePromise<string>;
    private resetPasswordWithHttpInfo;
    updateAuthToken(authorization: string): CancelablePromise<string>;
    private updateAuthTokenWithHttpInfo;
    validatePhoneNumber(authorization: string, opts?: {
        code?: string;
    }): CancelablePromise<null>;
    private validatePhoneNumberWithHttpInfo;
}
