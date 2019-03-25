'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ChangePasswordViewModel = require('../model/ChangePasswordViewModel');

var _ChangePasswordViewModel2 = _interopRequireDefault(_ChangePasswordViewModel);

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _ForgotPasswordViewModel = require('../model/ForgotPasswordViewModel');

var _ForgotPasswordViewModel2 = _interopRequireDefault(_ForgotPasswordViewModel);

var _LoginViewModel = require('../model/LoginViewModel');

var _LoginViewModel2 = _interopRequireDefault(_LoginViewModel);

var _PasswordModel = require('../model/PasswordModel');

var _PasswordModel2 = _interopRequireDefault(_PasswordModel);

var _RecoveryCodesViewModel = require('../model/RecoveryCodesViewModel');

var _RecoveryCodesViewModel2 = _interopRequireDefault(_RecoveryCodesViewModel);

var _RegisterInvestorViewModel = require('../model/RegisterInvestorViewModel');

var _RegisterInvestorViewModel2 = _interopRequireDefault(_RegisterInvestorViewModel);

var _RegisterManagerViewModel = require('../model/RegisterManagerViewModel');

var _RegisterManagerViewModel2 = _interopRequireDefault(_RegisterManagerViewModel);

var _ResendConfirmationViewModel = require('../model/ResendConfirmationViewModel');

var _ResendConfirmationViewModel2 = _interopRequireDefault(_ResendConfirmationViewModel);

var _ResetPasswordViewModel = require('../model/ResetPasswordViewModel');

var _ResetPasswordViewModel2 = _interopRequireDefault(_ResetPasswordViewModel);

var _TwoFactorAuthenticator = require('../model/TwoFactorAuthenticator');

var _TwoFactorAuthenticator2 = _interopRequireDefault(_TwoFactorAuthenticator);

var _TwoFactorAuthenticatorConfirm = require('../model/TwoFactorAuthenticatorConfirm');

var _TwoFactorAuthenticatorConfirm2 = _interopRequireDefault(_TwoFactorAuthenticatorConfirm);

var _TwoFactorCodeModel = require('../model/TwoFactorCodeModel');

var _TwoFactorCodeModel2 = _interopRequireDefault(_TwoFactorCodeModel);

var _TwoFactorStatus = require('../model/TwoFactorStatus');

var _TwoFactorStatus2 = _interopRequireDefault(_TwoFactorStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Auth service.
* @class AuthApi
* @version v1.0
*/
var AuthApi = function () {

  /**
  * Constructs a new AuthApi. 
  * @function AuthApi#constructor
  * @param {ApiClient} apiClient Optional API client implementation to use,
  * @return {AuthApi}
  */
  function AuthApi(apiClient) {
    _classCallCheck(this, AuthApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  _createClass(AuthApi, [{
    key: 'v10Auth2faConfirmPostWithHttpInfo',
    value: function v10Auth2faConfirmPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10Auth2faConfirmPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _RecoveryCodesViewModel2.default;

      return this.apiClient.callApi('/v1.0/auth/2fa/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * 2FA confirm
     * @function AuthApi#v10Auth2faConfirmPost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {TwoFactorAuthenticatorConfirm} [opts.model] 
     * @return {CancelablePromise<RecoveryCodesViewModel>} a Promise, with an object containing data of type RecoveryCodesViewModel and HTTP response
     */

  }, {
    key: 'v10Auth2faConfirmPost',
    value: function v10Auth2faConfirmPost(authorization, opts) {
      return this.v10Auth2faConfirmPostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10Auth2faCreatePostWithHttpInfo',
    value: function v10Auth2faCreatePostWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10Auth2faCreatePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _TwoFactorAuthenticator2.default;

      return this.apiClient.callApi('/v1.0/auth/2fa/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * 2FA create
     * @function AuthApi#v10Auth2faCreatePost
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<TwoFactorAuthenticator>} a Promise, with an object containing data of type TwoFactorAuthenticator and HTTP response
     */

  }, {
    key: 'v10Auth2faCreatePost',
    value: function v10Auth2faCreatePost(authorization) {
      return this.v10Auth2faCreatePostWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10Auth2faDisablePostWithHttpInfo',
    value: function v10Auth2faDisablePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10Auth2faDisablePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/auth/2fa/disable', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * 2FA disable
     * @function AuthApi#v10Auth2faDisablePost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {TwoFactorCodeModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10Auth2faDisablePost',
    value: function v10Auth2faDisablePost(authorization, opts) {
      return this.v10Auth2faDisablePostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10Auth2faGetWithHttpInfo',
    value: function v10Auth2faGetWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10Auth2faGet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _TwoFactorStatus2.default;

      return this.apiClient.callApi('/v1.0/auth/2fa', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * 2FA status
     * @function AuthApi#v10Auth2faGet
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<TwoFactorStatus>} a Promise, with an object containing data of type TwoFactorStatus and HTTP response
     */

  }, {
    key: 'v10Auth2faGet',
    value: function v10Auth2faGet(authorization) {
      return this.v10Auth2faGetWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10Auth2faRecoverycodesNewPostWithHttpInfo',
    value: function v10Auth2faRecoverycodesNewPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10Auth2faRecoverycodesNewPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _RecoveryCodesViewModel2.default;

      return this.apiClient.callApi('/v1.0/auth/2fa/recoverycodes/new', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * 2FA generate new recovery codes
     * @function AuthApi#v10Auth2faRecoverycodesNewPost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {PasswordModel} [opts.model] 
     * @return {CancelablePromise<RecoveryCodesViewModel>} a Promise, with an object containing data of type RecoveryCodesViewModel and HTTP response
     */

  }, {
    key: 'v10Auth2faRecoverycodesNewPost',
    value: function v10Auth2faRecoverycodesNewPost(authorization, opts) {
      return this.v10Auth2faRecoverycodesNewPostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10Auth2faRecoverycodesPostWithHttpInfo',
    value: function v10Auth2faRecoverycodesPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10Auth2faRecoverycodesPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _RecoveryCodesViewModel2.default;

      return this.apiClient.callApi('/v1.0/auth/2fa/recoverycodes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * 2FA recovery codes
     * @function AuthApi#v10Auth2faRecoverycodesPost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {PasswordModel} [opts.model] 
     * @return {CancelablePromise<RecoveryCodesViewModel>} a Promise, with an object containing data of type RecoveryCodesViewModel and HTTP response
     */

  }, {
    key: 'v10Auth2faRecoverycodesPost',
    value: function v10Auth2faRecoverycodesPost(authorization, opts) {
      return this.v10Auth2faRecoverycodesPostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthPasswordChangePostWithHttpInfo',
    value: function v10AuthPasswordChangePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10AuthPasswordChangePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi('/v1.0/auth/password/change', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Change password
     * @function AuthApi#v10AuthPasswordChangePost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {ChangePasswordViewModel} [opts.model] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */

  }, {
    key: 'v10AuthPasswordChangePost',
    value: function v10AuthPasswordChangePost(authorization, opts) {
      return this.v10AuthPasswordChangePostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthPasswordForgotInvestorPostWithHttpInfo',
    value: function v10AuthPasswordForgotInvestorPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['model'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/auth/password/forgot/investor', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Forgot password for investor
     * @function AuthApi#v10AuthPasswordForgotInvestorPost
     * @param {Object} [opts] Optional parameters
     * @param {ForgotPasswordViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10AuthPasswordForgotInvestorPost',
    value: function v10AuthPasswordForgotInvestorPost(opts) {
      return this.v10AuthPasswordForgotInvestorPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthPasswordForgotManagerPostWithHttpInfo',
    value: function v10AuthPasswordForgotManagerPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['model'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/auth/password/forgot/manager', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Forgot password for manager
     * @function AuthApi#v10AuthPasswordForgotManagerPost
     * @param {Object} [opts] Optional parameters
     * @param {ForgotPasswordViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10AuthPasswordForgotManagerPost',
    value: function v10AuthPasswordForgotManagerPost(opts) {
      return this.v10AuthPasswordForgotManagerPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthPasswordResetPostWithHttpInfo',
    value: function v10AuthPasswordResetPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['model'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi('/v1.0/auth/password/reset', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Reset password
     * @function AuthApi#v10AuthPasswordResetPost
     * @param {Object} [opts] Optional parameters
     * @param {ResetPasswordViewModel} [opts.model] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */

  }, {
    key: 'v10AuthPasswordResetPost',
    value: function v10AuthPasswordResetPost(opts) {
      return this.v10AuthPasswordResetPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthPhoneCodePostWithHttpInfo',
    value: function v10AuthPhoneCodePostWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10AuthPhoneCodePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'Number';

      return this.apiClient.callApi('/v1.0/auth/phone/code', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get phone number verification code
     * @function AuthApi#v10AuthPhoneCodePost
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<'Number'>} a Promise, with an object containing data of type 'Number' and HTTP response
     */

  }, {
    key: 'v10AuthPhoneCodePost',
    value: function v10AuthPhoneCodePost(authorization) {
      return this.v10AuthPhoneCodePostWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthPhoneVerifyPostWithHttpInfo',
    value: function v10AuthPhoneVerifyPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10AuthPhoneVerifyPost");
      }

      var pathParams = {};
      var queryParams = {
        'code': opts['code']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/auth/phone/verify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Verify phone number
     * @function AuthApi#v10AuthPhoneVerifyPost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.code] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10AuthPhoneVerifyPost',
    value: function v10AuthPhoneVerifyPost(authorization, opts) {
      return this.v10AuthPhoneVerifyPostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthResendconfirmationlinkPostWithHttpInfo',
    value: function v10AuthResendconfirmationlinkPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['model'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/auth/resendconfirmationlink', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Resend Confirmation Link
     * @function AuthApi#v10AuthResendconfirmationlinkPost
     * @param {Object} [opts] Optional parameters
     * @param {ResendConfirmationViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10AuthResendconfirmationlinkPost',
    value: function v10AuthResendconfirmationlinkPost(opts) {
      return this.v10AuthResendconfirmationlinkPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthSigninInvestorPostWithHttpInfo',
    value: function v10AuthSigninInvestorPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['model'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi('/v1.0/auth/signin/investor', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Authorize
     * @function AuthApi#v10AuthSigninInvestorPost
     * @param {Object} [opts] Optional parameters
     * @param {LoginViewModel} [opts.model] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */

  }, {
    key: 'v10AuthSigninInvestorPost',
    value: function v10AuthSigninInvestorPost(opts) {
      return this.v10AuthSigninInvestorPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthSigninManagerPostWithHttpInfo',
    value: function v10AuthSigninManagerPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['model'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi('/v1.0/auth/signin/manager', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Authorize
     * @function AuthApi#v10AuthSigninManagerPost
     * @param {Object} [opts] Optional parameters
     * @param {LoginViewModel} [opts.model] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */

  }, {
    key: 'v10AuthSigninManagerPost',
    value: function v10AuthSigninManagerPost(opts) {
      return this.v10AuthSigninManagerPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthSignupConfirmPostWithHttpInfo',
    value: function v10AuthSignupConfirmPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'userId': opts['userId'],
        'code': opts['code']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi('/v1.0/auth/signup/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Confirm email after registration
     * @function AuthApi#v10AuthSignupConfirmPost
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.userId] 
     * @param {String} [opts.code] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */

  }, {
    key: 'v10AuthSignupConfirmPost',
    value: function v10AuthSignupConfirmPost(opts) {
      return this.v10AuthSignupConfirmPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthSignupInvestorPostWithHttpInfo',
    value: function v10AuthSignupInvestorPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['model'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/auth/signup/investor', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * New investor registration
     * @function AuthApi#v10AuthSignupInvestorPost
     * @param {Object} [opts] Optional parameters
     * @param {RegisterInvestorViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10AuthSignupInvestorPost',
    value: function v10AuthSignupInvestorPost(opts) {
      return this.v10AuthSignupInvestorPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthSignupManagerPostWithHttpInfo',
    value: function v10AuthSignupManagerPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['model'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/auth/signup/manager', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * New manager registration
     * @function AuthApi#v10AuthSignupManagerPost
     * @param {Object} [opts] Optional parameters
     * @param {RegisterManagerViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10AuthSignupManagerPost',
    value: function v10AuthSignupManagerPost(opts) {
      return this.v10AuthSignupManagerPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthTokenDevicesLogoutPostWithHttpInfo',
    value: function v10AuthTokenDevicesLogoutPostWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10AuthTokenDevicesLogoutPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi('/v1.0/auth/token/devices/logout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Logout from another devices
     * @function AuthApi#v10AuthTokenDevicesLogoutPost
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */

  }, {
    key: 'v10AuthTokenDevicesLogoutPost',
    value: function v10AuthTokenDevicesLogoutPost(authorization) {
      return this.v10AuthTokenDevicesLogoutPostWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10AuthTokenUpdatePostWithHttpInfo',
    value: function v10AuthTokenUpdatePostWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10AuthTokenUpdatePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi('/v1.0/auth/token/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update auth token
     * @function AuthApi#v10AuthTokenUpdatePost
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */

  }, {
    key: 'v10AuthTokenUpdatePost',
    value: function v10AuthTokenUpdatePost(authorization) {
      return this.v10AuthTokenUpdatePostWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AuthApi;
}();

exports.default = AuthApi;