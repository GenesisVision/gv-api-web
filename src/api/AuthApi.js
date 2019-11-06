/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ChangePasswordViewModel from '../model/ChangePasswordViewModel';
import ErrorViewModel from '../model/ErrorViewModel';
import ForgotPasswordViewModel from '../model/ForgotPasswordViewModel';
import LoginViewModel from '../model/LoginViewModel';
import PasswordModel from '../model/PasswordModel';
import RecoveryCodesViewModel from '../model/RecoveryCodesViewModel';
import RegisterViewModel from '../model/RegisterViewModel';
import ResendConfirmationViewModel from '../model/ResendConfirmationViewModel';
import ResetPasswordViewModel from '../model/ResetPasswordViewModel';
import TwoFactorAuthenticator from '../model/TwoFactorAuthenticator';
import TwoFactorAuthenticatorConfirm from '../model/TwoFactorAuthenticatorConfirm';
import TwoFactorCodeWithPassword from '../model/TwoFactorCodeWithPassword';
import TwoFactorStatus from '../model/TwoFactorStatus';

/**
* Auth service.
* @class AuthApi
* @version v1.0
*/
export default class AuthApi {

    /**
    * Constructs a new AuthApi. 
    * @function AuthApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {AuthApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      authorizeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/auth/signin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Authorize
     * @function AuthApi#authorize
     * @param {Object} [opts] Optional parameters
     * @param {LoginViewModel} [opts.model] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      authorize(opts) {
      return this.authorizeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      changePasswordWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling changePassword");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/auth/password/change', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Change password
     * @function AuthApi#changePassword
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {ChangePasswordViewModel} [opts.model] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      changePassword(authorization, opts) {
      return this.changePasswordWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      confirmEmailWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'userId': opts['userId'],
        'code': opts['code']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/auth/signup/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Confirm email after registration
     * @function AuthApi#confirmEmail
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.userId] 
     * @param {String} [opts.code] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      confirmEmail(opts) {
      return this.confirmEmailWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      confirmTwoStepAuthWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling confirmTwoStepAuth");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = RecoveryCodesViewModel;

      return this.apiClient.callApi(
        '/v1.0/auth/2fa/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA confirm
     * @function AuthApi#confirmTwoStepAuth
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {TwoFactorAuthenticatorConfirm} [opts.model] 
     * @return {CancelablePromise<RecoveryCodesViewModel>} a Promise, with an object containing data of type RecoveryCodesViewModel and HTTP response
     */
      confirmTwoStepAuth(authorization, opts) {
      return this.confirmTwoStepAuthWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      createTwoStepAuthWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createTwoStepAuth");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = TwoFactorAuthenticator;

      return this.apiClient.callApi(
        '/v1.0/auth/2fa/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA create
     * @function AuthApi#createTwoStepAuth
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<TwoFactorAuthenticator>} a Promise, with an object containing data of type TwoFactorAuthenticator and HTTP response
     */
      createTwoStepAuth(authorization) {
      return this.createTwoStepAuthWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      createTwoStepAuthRecoveryCodesWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createTwoStepAuthRecoveryCodes");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = RecoveryCodesViewModel;

      return this.apiClient.callApi(
        '/v1.0/auth/2fa/recoverycodes/new', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA generate new recovery codes
     * @function AuthApi#createTwoStepAuthRecoveryCodes
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {PasswordModel} [opts.model] 
     * @return {CancelablePromise<RecoveryCodesViewModel>} a Promise, with an object containing data of type RecoveryCodesViewModel and HTTP response
     */
      createTwoStepAuthRecoveryCodes(authorization, opts) {
      return this.createTwoStepAuthRecoveryCodesWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      disableTwoStepAuthWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling disableTwoStepAuth");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/auth/2fa/disable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA disable
     * @function AuthApi#disableTwoStepAuth
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {TwoFactorCodeWithPassword} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      disableTwoStepAuth(authorization, opts) {
      return this.disableTwoStepAuthWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      forgotPasswordWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/auth/password/forgot', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Forgot password for investor
     * @function AuthApi#forgotPassword
     * @param {Object} [opts] Optional parameters
     * @param {ForgotPasswordViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      forgotPassword(opts) {
      return this.forgotPasswordWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getTwoStepAuthRecoveryCodesWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getTwoStepAuthRecoveryCodes");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = RecoveryCodesViewModel;

      return this.apiClient.callApi(
        '/v1.0/auth/2fa/recoverycodes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA recovery codes
     * @function AuthApi#getTwoStepAuthRecoveryCodes
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {PasswordModel} [opts.model] 
     * @return {CancelablePromise<RecoveryCodesViewModel>} a Promise, with an object containing data of type RecoveryCodesViewModel and HTTP response
     */
      getTwoStepAuthRecoveryCodes(authorization, opts) {
      return this.getTwoStepAuthRecoveryCodesWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getTwoStepAuthStatusWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getTwoStepAuthStatus");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = TwoFactorStatus;

      return this.apiClient.callApi(
        '/v1.0/auth/2fa', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA status
     * @function AuthApi#getTwoStepAuthStatus
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<TwoFactorStatus>} a Promise, with an object containing data of type TwoFactorStatus and HTTP response
     */
      getTwoStepAuthStatus(authorization) {
      return this.getTwoStepAuthStatusWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      logoutFromAnotherDevicesWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling logoutFromAnotherDevices");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/auth/token/devices/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Logout from another devices
     * @function AuthApi#logoutFromAnotherDevices
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      logoutFromAnotherDevices(authorization) {
      return this.logoutFromAnotherDevicesWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      registerWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/auth/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * New registration
     * @function AuthApi#register
     * @param {Object} [opts] Optional parameters
     * @param {RegisterViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      register(opts) {
      return this.registerWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      requestPhoneNumberVerificationCodeWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling requestPhoneNumberVerificationCode");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'Number';

      return this.apiClient.callApi(
        '/v1.0/auth/phone/code', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get phone number verification code
     * @function AuthApi#requestPhoneNumberVerificationCode
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<'Number'>} a Promise, with an object containing data of type 'Number' and HTTP response
     */
      requestPhoneNumberVerificationCode(authorization) {
      return this.requestPhoneNumberVerificationCodeWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      resendConfirmationLinkWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/auth/resendconfirmationlink', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Resend Confirmation Link
     * @function AuthApi#resendConfirmationLink
     * @param {Object} [opts] Optional parameters
     * @param {ResendConfirmationViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      resendConfirmationLink(opts) {
      return this.resendConfirmationLinkWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      resetPasswordWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/auth/password/reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reset password
     * @function AuthApi#resetPassword
     * @param {Object} [opts] Optional parameters
     * @param {ResetPasswordViewModel} [opts.model] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      resetPassword(opts) {
      return this.resetPasswordWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      updateAuthTokenWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updateAuthToken");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/auth/token/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update auth token
     * @function AuthApi#updateAuthToken
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      updateAuthToken(authorization) {
      return this.updateAuthTokenWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      validatePhoneNumberWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling validatePhoneNumber");
      }


      let pathParams = {
      };
      let queryParams = {
        'code': opts['code']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/auth/phone/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Verify phone number
     * @function AuthApi#validatePhoneNumber
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.code] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      validatePhoneNumber(authorization, opts) {
      return this.validatePhoneNumberWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}