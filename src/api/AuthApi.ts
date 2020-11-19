import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ChangePasswordViewModel } from '../model/ChangePasswordViewModel';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ForgotPasswordViewModel } from '../model/ForgotPasswordViewModel';
import { LoginViewModel } from '../model/LoginViewModel';
import { PasswordModel } from '../model/PasswordModel';
import { RecoveryCodesViewModel } from '../model/RecoveryCodesViewModel';
import { RegisterViewModel } from '../model/RegisterViewModel';
import { ResendConfirmationViewModel } from '../model/ResendConfirmationViewModel';
import { ResetPasswordViewModel } from '../model/ResetPasswordViewModel';
import { TwoFactorAuthenticator } from '../model/TwoFactorAuthenticator';
import { TwoFactorAuthenticatorConfirm } from '../model/TwoFactorAuthenticatorConfirm';
import { TwoFactorCodeWithPassword } from '../model/TwoFactorCodeWithPassword';
import { TwoFactorStatus } from '../model/TwoFactorStatus';

export default class AuthApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  authorize = (
    options: {
      body?: LoginViewModel
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/signin",
        body: JSON.stringify(options['body']),
        returnType: "primitive",
        method: "POST",
    })
  };

  changePassword = (
    options: {
      body?: ChangePasswordViewModel
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/password/change",
        body: JSON.stringify(options['body']),
        returnType: "primitive",
        method: "POST",
    })
  };

  confirmEmail = (
    options: {
      userId?: string,
      code?: string
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        queryParams: {  userId: options['userId'],   code: options['code']  },
        apiClient: this.apiClient,
        path: "/v2.0/auth/signup/confirm",
        
        returnType: "primitive",
        method: "POST",
    })
  };

  confirmTwoStepAuth = (
    options: {
      body?: TwoFactorAuthenticatorConfirm
      } = {},
    init: RequestInit = {}): Promise<RecoveryCodesViewModel> => {
    
    return generateMethod<Promise<RecoveryCodesViewModel>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/2fa/confirm",
        body: JSON.stringify(options['body']),
        returnType: "structure",
        method: "POST",
    })
  };

  createTwoStepAuth = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<TwoFactorAuthenticator> => {
    
    return generateMethod<Promise<TwoFactorAuthenticator>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/2fa/create",
        
        returnType: "structure",
        method: "POST",
    })
  };

  createTwoStepAuthRecoveryCodes = (
    options: {
      body?: PasswordModel
      } = {},
    init: RequestInit = {}): Promise<RecoveryCodesViewModel> => {
    
    return generateMethod<Promise<RecoveryCodesViewModel>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/2fa/recoverycodes/new",
        body: JSON.stringify(options['body']),
        returnType: "structure",
        method: "POST",
    })
  };

  disableTwoStepAuth = (
    options: {
      body?: TwoFactorCodeWithPassword
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/2fa/disable",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  forgotPassword = (
    options: {
      body?: ForgotPasswordViewModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/password/forgot",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  getTwoStepAuthRecoveryCodes = (
    options: {
      body?: PasswordModel
      } = {},
    init: RequestInit = {}): Promise<RecoveryCodesViewModel> => {
    
    return generateMethod<Promise<RecoveryCodesViewModel>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/2fa/recoverycodes",
        body: JSON.stringify(options['body']),
        returnType: "structure",
        method: "POST",
    })
  };

  getTwoStepAuthStatus = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<TwoFactorStatus> => {
    
    return generateMethod<Promise<TwoFactorStatus>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/2fa",
        
        returnType: "structure",
        method: "GET",
    })
  };

  logoutFromAnotherDevices = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/token/devices/logout",
        
        returnType: "primitive",
        method: "POST",
    })
  };

  register = (
    options: {
      body?: RegisterViewModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/signup",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  requestPhoneNumberVerificationCode = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<number> => {
    
    return generateMethod<Promise<number>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/phone/code",
        
        returnType: "primitive",
        method: "POST",
    })
  };

  resendConfirmationLink = (
    options: {
      body?: ResendConfirmationViewModel
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/resendconfirmationlink",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  resetPassword = (
    options: {
      body?: ResetPasswordViewModel
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/password/reset",
        body: JSON.stringify(options['body']),
        returnType: "primitive",
        method: "POST",
    })
  };

  updateAuthToken = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/auth/token/update",
        
        returnType: "primitive",
        method: "POST",
    })
  };

  validatePhoneNumber = (
    options: {
      code?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  code: options['code']  },
        apiClient: this.apiClient,
        path: "/v2.0/auth/phone/verify",
        
        
        method: "POST",
    })
  };
}
