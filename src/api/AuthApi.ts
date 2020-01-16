import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
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

    authorize = (        options: {
            body?: LoginViewModel
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/signin", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    changePassword = (
        authorization: string,
        options: {
            body?: ChangePasswordViewModel
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling changePassword.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/password/change", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    confirmEmail = (        options: {
            userId?: string,
            code?: string
        } = {},
        init: RequestInit = {}) => {
        const {
            userId,
            code
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/signup/confirm", {
    })

    const query = buildQueryString(path, {
        userId: userId,
        code: code
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    confirmTwoStepAuth = (
        authorization: string,
        options: {
            body?: TwoFactorAuthenticatorConfirm
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling confirmTwoStepAuth.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/confirm", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<RecoveryCodesViewModel>((response: Response) => {
        return response.json();
    })
    }

    createTwoStepAuth = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling createTwoStepAuth.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/create", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<TwoFactorAuthenticator>((response: Response) => {
        return response.json();
    })
    }

    createTwoStepAuthRecoveryCodes = (
        authorization: string,
        options: {
            body?: PasswordModel
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling createTwoStepAuthRecoveryCodes.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/recoverycodes/new", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<RecoveryCodesViewModel>((response: Response) => {
        return response.json();
    })
    }

    disableTwoStepAuth = (
        authorization: string,
        options: {
            body?: TwoFactorCodeWithPassword
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling disableTwoStepAuth.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/disable", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    forgotPassword = (        options: {
            body?: ForgotPasswordViewModel
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/password/forgot", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    getTwoStepAuthRecoveryCodes = (
        authorization: string,
        options: {
            body?: PasswordModel
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTwoStepAuthRecoveryCodes.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/recoverycodes", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<RecoveryCodesViewModel>((response: Response) => {
        return response.json();
    })
    }

    getTwoStepAuthStatus = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTwoStepAuthStatus.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<TwoFactorStatus>((response: Response) => {
        return response.json();
    })
    }

    logoutFromAnotherDevices = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling logoutFromAnotherDevices.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/token/devices/logout", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    register = (        options: {
            body?: RegisterViewModel
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/signup", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    requestPhoneNumberVerificationCode = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling requestPhoneNumberVerificationCode.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/phone/code", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<number>((response: Response) => {
        return response.text() as unknown as number;
    })
    }

    resendConfirmationLink = (        options: {
            body?: ResendConfirmationViewModel
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/resendconfirmationlink", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    resetPassword = (        options: {
            body?: ResetPasswordViewModel
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/password/reset", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    updateAuthToken = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateAuthToken.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/token/update", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    validatePhoneNumber = (
        authorization: string,
        options: {
            code?: string
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling validatePhoneNumber.');
                }
        const {
            code
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/phone/verify", {
    })

    const query = buildQueryString(path, {
        code: code
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}