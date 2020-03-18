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
        init: RequestInit = {}): Promise<string> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/signin", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    changePassword = (        options: {
            body?: ChangePasswordViewModel
        } = {},
        init: RequestInit = {}): Promise<string> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/password/change", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    confirmEmail = (        options: {
            userId?: string,
            code?: string
        } = {},
        init: RequestInit = {}): Promise<string> => {
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

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    confirmTwoStepAuth = (        options: {
            body?: TwoFactorAuthenticatorConfirm
        } = {},
        init: RequestInit = {}): Promise<RecoveryCodesViewModel> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/confirm", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<RecoveryCodesViewModel>((response: Response) => {
        return response.json();
    })
    }

    createTwoStepAuth = (        options: {
        } = {},
        init: RequestInit = {}): Promise<TwoFactorAuthenticator> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/create", {
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<TwoFactorAuthenticator>((response: Response) => {
        return response.json();
    })
    }

    createTwoStepAuthRecoveryCodes = (        options: {
            body?: PasswordModel
        } = {},
        init: RequestInit = {}): Promise<RecoveryCodesViewModel> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/recoverycodes/new", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<RecoveryCodesViewModel>((response: Response) => {
        return response.json();
    })
    }

    disableTwoStepAuth = (        options: {
            body?: TwoFactorCodeWithPassword
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/disable", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    forgotPassword = (        options: {
            body?: ForgotPasswordViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/password/forgot", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    getTwoStepAuthRecoveryCodes = (        options: {
            body?: PasswordModel
        } = {},
        init: RequestInit = {}): Promise<RecoveryCodesViewModel> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa/recoverycodes", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<RecoveryCodesViewModel>((response: Response) => {
        return response.json();
    })
    }

    getTwoStepAuthStatus = (        options: {
        } = {},
        init: RequestInit = {}): Promise<TwoFactorStatus> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/2fa", {
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<TwoFactorStatus>((response: Response) => {
        return response.json();
    })
    }

    logoutFromAnotherDevices = (        options: {
        } = {},
        init: RequestInit = {}): Promise<string> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/token/devices/logout", {
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    register = (        options: {
            body?: RegisterViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/signup", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    requestPhoneNumberVerificationCode = (        options: {
        } = {},
        init: RequestInit = {}): Promise<number> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/phone/code", {
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<number>((response: Response) => {
        return response.text() as unknown as number;
    })
    }

    resendConfirmationLink = (        options: {
            body?: ResendConfirmationViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/resendconfirmationlink", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    resetPassword = (        options: {
            body?: ResetPasswordViewModel
        } = {},
        init: RequestInit = {}): Promise<string> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/password/reset", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    updateAuthToken = (        options: {
        } = {},
        init: RequestInit = {}): Promise<string> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/token/update", {
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    validatePhoneNumber = (        options: {
            code?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
        const {
            code
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/auth/phone/verify", {
    })

    const query = buildQueryString(path, {
        code: code
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}