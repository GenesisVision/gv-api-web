import ApiClient from "../ApiClient";
import { RecoveryCodesViewModel } from "../model/recoveryCodesViewModel";
import { TwoFactorAuthenticator } from "../model/twoFactorAuthenticator";
import { TwoFactorStatus } from "../model/twoFactorStatus";
export class AuthService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    authorize(opts) {
        return this.authorizeWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    authorizeWithHttpInfo(opts = {}) {
        let postBody = opts["model"];
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v2.0/auth/signin', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    changePassword(authorization, opts) {
        return this.changePasswordWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    changePasswordWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling changePassword");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v2.0/auth/password/change', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    confirmEmail(opts) {
        return this.confirmEmailWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    confirmEmailWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "userId": opts["userId"],
            "code": opts["code"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v2.0/auth/signup/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    confirmTwoStepAuth(authorization, opts) {
        return this.confirmTwoStepAuthWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    confirmTwoStepAuthWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling confirmTwoStepAuth");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = RecoveryCodesViewModel;
        return this.apiClient.callApi('/v2.0/auth/2fa/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    createTwoStepAuth(authorization) {
        return this.createTwoStepAuthWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    createTwoStepAuthWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling createTwoStepAuth");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = TwoFactorAuthenticator;
        return this.apiClient.callApi('/v2.0/auth/2fa/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    createTwoStepAuthRecoveryCodes(authorization, opts) {
        return this.createTwoStepAuthRecoveryCodesWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    createTwoStepAuthRecoveryCodesWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling createTwoStepAuthRecoveryCodes");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = RecoveryCodesViewModel;
        return this.apiClient.callApi('/v2.0/auth/2fa/recoverycodes/new', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    disableTwoStepAuth(authorization, opts) {
        return this.disableTwoStepAuthWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    disableTwoStepAuthWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling disableTwoStepAuth");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/auth/2fa/disable', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    forgotPassword(opts) {
        return this.forgotPasswordWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    forgotPasswordWithHttpInfo(opts = {}) {
        let postBody = opts["model"];
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/auth/password/forgot', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getTwoStepAuthRecoveryCodes(authorization, opts) {
        return this.getTwoStepAuthRecoveryCodesWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getTwoStepAuthRecoveryCodesWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getTwoStepAuthRecoveryCodes");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = RecoveryCodesViewModel;
        return this.apiClient.callApi('/v2.0/auth/2fa/recoverycodes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getTwoStepAuthStatus(authorization) {
        return this.getTwoStepAuthStatusWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getTwoStepAuthStatusWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getTwoStepAuthStatus");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = TwoFactorStatus;
        return this.apiClient.callApi('/v2.0/auth/2fa', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    logoutFromAnotherDevices(authorization) {
        return this.logoutFromAnotherDevicesWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    logoutFromAnotherDevicesWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling logoutFromAnotherDevices");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v2.0/auth/token/devices/logout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    register(opts) {
        return this.registerWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    registerWithHttpInfo(opts = {}) {
        let postBody = opts["model"];
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/auth/signup', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    requestPhoneNumberVerificationCode(authorization) {
        return this.requestPhoneNumberVerificationCodeWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    requestPhoneNumberVerificationCodeWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling requestPhoneNumberVerificationCode");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'number';
        return this.apiClient.callApi('/v2.0/auth/phone/code', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    resendConfirmationLink(opts) {
        return this.resendConfirmationLinkWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    resendConfirmationLinkWithHttpInfo(opts = {}) {
        let postBody = opts["model"];
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/auth/resendconfirmationlink', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    resetPassword(opts) {
        return this.resetPasswordWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    resetPasswordWithHttpInfo(opts = {}) {
        let postBody = opts["model"];
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v2.0/auth/password/reset', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateAuthToken(authorization) {
        return this.updateAuthTokenWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateAuthTokenWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateAuthToken");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v2.0/auth/token/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    validatePhoneNumber(authorization, opts) {
        return this.validatePhoneNumberWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    validatePhoneNumberWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling validatePhoneNumber");
        }
        let pathParams = {};
        let queryParams = {
            "code": opts["code"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/auth/phone/verify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
