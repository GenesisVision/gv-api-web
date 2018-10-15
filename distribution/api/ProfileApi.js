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

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _ProfileFullViewModel = require('../model/ProfileFullViewModel');

var _ProfileFullViewModel2 = _interopRequireDefault(_ProfileFullViewModel);

var _ProfileHeaderViewModel = require('../model/ProfileHeaderViewModel');

var _ProfileHeaderViewModel2 = _interopRequireDefault(_ProfileHeaderViewModel);

var _UpdatePersonalDetailViewModel = require('../model/UpdatePersonalDetailViewModel');

var _UpdatePersonalDetailViewModel2 = _interopRequireDefault(_UpdatePersonalDetailViewModel);

var _UpdateProfileViewModel = require('../model/UpdateProfileViewModel');

var _UpdateProfileViewModel2 = _interopRequireDefault(_UpdateProfileViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Profile service.
* @module api/ProfileApi
* @version v1.0
*/
var ProfileApi = function () {

  /**
  * Constructs a new ProfileApi. 
  * @alias module:api/ProfileApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProfileApi(apiClient) {
    _classCallCheck(this, ProfileApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Remove avatar
   * @param {String} authorization JWT access token
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(ProfileApi, [{
    key: 'v10ProfileAvatarRemovePostWithHttpInfo',
    value: function v10ProfileAvatarRemovePostWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProfileAvatarRemovePost");
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
      var returnType = null;

      return this.apiClient.callApi('/v1.0/profile/avatar/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove avatar
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ProfileAvatarRemovePost',
    value: function v10ProfileAvatarRemovePost(authorization) {
      return this.v10ProfileAvatarRemovePostWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update avatar
     * @param {String} fileId 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10ProfileAvatarUpdateByFileIdPostWithHttpInfo',
    value: function v10ProfileAvatarUpdateByFileIdPostWithHttpInfo(fileId, authorization) {
      var postBody = null;

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling v10ProfileAvatarUpdateByFileIdPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProfileAvatarUpdateByFileIdPost");
      }

      var pathParams = {
        'fileId': fileId
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/profile/avatar/update/{fileId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update avatar
     * @param {String} fileId 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ProfileAvatarUpdateByFileIdPost',
    value: function v10ProfileAvatarUpdateByFileIdPost(fileId, authorization) {
      return this.v10ProfileAvatarUpdateByFileIdPostWithHttpInfo(fileId, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get full profile
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProfileFullViewModel} and HTTP response
     */

  }, {
    key: 'v10ProfileGetWithHttpInfo',
    value: function v10ProfileGetWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProfileGet");
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
      var returnType = _ProfileFullViewModel2.default;

      return this.apiClient.callApi('/v1.0/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get full profile
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProfileFullViewModel}
     */

  }, {
    key: 'v10ProfileGet',
    value: function v10ProfileGet(authorization) {
      return this.v10ProfileGetWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get header profile
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProfileHeaderViewModel} and HTTP response
     */

  }, {
    key: 'v10ProfileHeaderGetWithHttpInfo',
    value: function v10ProfileHeaderGetWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProfileHeaderGet");
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
      var returnType = _ProfileHeaderViewModel2.default;

      return this.apiClient.callApi('/v1.0/profile/header', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get header profile
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProfileHeaderViewModel}
     */

  }, {
    key: 'v10ProfileHeaderGet',
    value: function v10ProfileHeaderGet(authorization) {
      return this.v10ProfileHeaderGetWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update user personal details
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdatePersonalDetailViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10ProfilePersonalUpdatePostWithHttpInfo',
    value: function v10ProfilePersonalUpdatePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProfilePersonalUpdatePost");
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

      return this.apiClient.callApi('/v1.0/profile/personal/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update user personal details
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdatePersonalDetailViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ProfilePersonalUpdatePost',
    value: function v10ProfilePersonalUpdatePost(authorization, opts) {
      return this.v10ProfilePersonalUpdatePostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update profile
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateProfileViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10ProfileUpdatePostWithHttpInfo',
    value: function v10ProfileUpdatePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProfileUpdatePost");
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

      return this.apiClient.callApi('/v1.0/profile/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update profile
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateProfileViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ProfileUpdatePost',
    value: function v10ProfileUpdatePost(authorization, opts) {
      return this.v10ProfileUpdatePostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ProfileApi;
}();

exports.default = ProfileApi;