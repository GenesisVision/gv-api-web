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

var _FundNotificationSettingList = require('../model/FundNotificationSettingList');

var _FundNotificationSettingList2 = _interopRequireDefault(_FundNotificationSettingList);

var _ManagerNotificationSettingList = require('../model/ManagerNotificationSettingList');

var _ManagerNotificationSettingList2 = _interopRequireDefault(_ManagerNotificationSettingList);

var _NotificationList = require('../model/NotificationList');

var _NotificationList2 = _interopRequireDefault(_NotificationList);

var _NotificationSettingList = require('../model/NotificationSettingList');

var _NotificationSettingList2 = _interopRequireDefault(_NotificationSettingList);

var _ProgramNotificationSettingList = require('../model/ProgramNotificationSettingList');

var _ProgramNotificationSettingList2 = _interopRequireDefault(_ProgramNotificationSettingList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Notifications service.
* @module api/NotificationsApi
* @version v1.0
*/
var NotificationsApi = function () {

  /**
  * Constructs a new NotificationsApi. 
  * @alias module:api/NotificationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NotificationsApi(apiClient) {
    _classCallCheck(this, NotificationsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Add new setting
   * @param {String} authorization JWT access token
   * @param {Object} opts Optional parameters
   * @param {String} opts.assetId 
   * @param {String} opts.managerId 
   * @param {module:model/String} opts.type 
   * @param {module:model/String} opts.conditionType 
   * @param {Number} opts.conditionAmount 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
   */


  _createClass(NotificationsApi, [{
    key: 'addNotificationsSettingsWithHttpInfo',
    value: function addNotificationsSettingsWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling addNotificationsSettings");
      }

      var pathParams = {};
      var queryParams = {
        'AssetId': opts['assetId'],
        'ManagerId': opts['managerId'],
        'Type': opts['type'],
        'ConditionType': opts['conditionType'],
        'ConditionAmount': opts['conditionAmount']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi('/v1.0/notifications/settings/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Add new setting
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {String} opts.assetId 
     * @param {String} opts.managerId 
     * @param {module:model/String} opts.type 
     * @param {module:model/String} opts.conditionType 
     * @param {Number} opts.conditionAmount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */

  }, {
    key: 'addNotificationsSettings',
    value: function addNotificationsSettings(authorization, opts) {
      return this.addNotificationsSettingsWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Enable/disable setting
     * @param {String} id 
     * @param {Boolean} enable 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */

  }, {
    key: 'enableDisableSettingsWithHttpInfo',
    value: function enableDisableSettingsWithHttpInfo(id, enable, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling enableDisableSettings");
      }

      // verify the required parameter 'enable' is set
      if (enable === undefined || enable === null) {
        throw new Error("Missing the required parameter 'enable' when calling enableDisableSettings");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling enableDisableSettings");
      }

      var pathParams = {
        'id': id,
        'enable': enable
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi('/v1.0/notifications/settings/{id}/{enable}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Enable/disable setting
     * @param {String} id 
     * @param {Boolean} enable 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */

  }, {
    key: 'enableDisableSettings',
    value: function enableDisableSettings(id, enable, authorization) {
      return this.enableDisableSettingsWithHttpInfo(id, enable, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Unread notifications count
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'Number'} and HTTP response
     */

  }, {
    key: 'getNewNotificationsCountWithHttpInfo',
    value: function getNewNotificationsCountWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getNewNotificationsCount");
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

      return this.apiClient.callApi('/v1.0/notifications/new', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Unread notifications count
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'Number'}
     */

  }, {
    key: 'getNewNotificationsCount',
    value: function getNewNotificationsCount(authorization) {
      return this.getNewNotificationsCountWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * User notifications
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationList} and HTTP response
     */

  }, {
    key: 'getNotificationsWithHttpInfo',
    value: function getNotificationsWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getNotifications");
      }

      var pathParams = {};
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _NotificationList2.default;

      return this.apiClient.callApi('/v1.0/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * User notifications
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationList}
     */

  }, {
    key: 'getNotifications',
    value: function getNotifications(authorization, opts) {
      return this.getNotificationsWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * User settings for fund
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FundNotificationSettingList} and HTTP response
     */

  }, {
    key: 'getNotificationsFundSettingsWithHttpInfo',
    value: function getNotificationsFundSettingsWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNotificationsFundSettings");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getNotificationsFundSettings");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _FundNotificationSettingList2.default;

      return this.apiClient.callApi('/v1.0/notifications/settings/funds/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * User settings for fund
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FundNotificationSettingList}
     */

  }, {
    key: 'getNotificationsFundSettings',
    value: function getNotificationsFundSettings(id, authorization) {
      return this.getNotificationsFundSettingsWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * User settings for manager
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ManagerNotificationSettingList} and HTTP response
     */

  }, {
    key: 'getNotificationsManagerSettingsWithHttpInfo',
    value: function getNotificationsManagerSettingsWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNotificationsManagerSettings");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getNotificationsManagerSettings");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ManagerNotificationSettingList2.default;

      return this.apiClient.callApi('/v1.0/notifications/settings/managers/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * User settings for manager
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ManagerNotificationSettingList}
     */

  }, {
    key: 'getNotificationsManagerSettings',
    value: function getNotificationsManagerSettings(id, authorization) {
      return this.getNotificationsManagerSettingsWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * User settings for program
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramNotificationSettingList} and HTTP response
     */

  }, {
    key: 'getNotificationsProgramSettingsWithHttpInfo',
    value: function getNotificationsProgramSettingsWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNotificationsProgramSettings");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getNotificationsProgramSettings");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramNotificationSettingList2.default;

      return this.apiClient.callApi('/v1.0/notifications/settings/programs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * User settings for program
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramNotificationSettingList}
     */

  }, {
    key: 'getNotificationsProgramSettings',
    value: function getNotificationsProgramSettings(id, authorization) {
      return this.getNotificationsProgramSettingsWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * User settings
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationSettingList} and HTTP response
     */

  }, {
    key: 'getNotificationsSettingsWithHttpInfo',
    value: function getNotificationsSettingsWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getNotificationsSettings");
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
      var returnType = _NotificationSettingList2.default;

      return this.apiClient.callApi('/v1.0/notifications/settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * User settings
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationSettingList}
     */

  }, {
    key: 'getNotificationsSettings',
    value: function getNotificationsSettings(authorization) {
      return this.getNotificationsSettingsWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove setting
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'removeNotificationsSettingsWithHttpInfo',
    value: function removeNotificationsSettingsWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeNotificationsSettings");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling removeNotificationsSettings");
      }

      var pathParams = {
        'id': id
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

      return this.apiClient.callApi('/v1.0/notifications/settings/remove/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove setting
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'removeNotificationsSettings',
    value: function removeNotificationsSettings(id, authorization) {
      return this.removeNotificationsSettingsWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return NotificationsApi;
}();

exports.default = NotificationsApi;