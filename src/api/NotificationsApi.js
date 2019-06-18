/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorViewModel', 'model/FundNotificationSettingList', 'model/ManagerNotificationSettingList', 'model/NotificationList', 'model/NotificationSettingList', 'model/ProgramNotificationSettingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorViewModel'), require('../model/FundNotificationSettingList'), require('../model/ManagerNotificationSettingList'), require('../model/NotificationList'), require('../model/NotificationSettingList'), require('../model/ProgramNotificationSettingList'));
  } else {
    // Browser globals (root is window)
    if (!root.CoreApiV10) {
      root.CoreApiV10 = {};
    }
    root.CoreApiV10.NotificationsApi = factory(root.CoreApiV10.ApiClient, root.CoreApiV10.ErrorViewModel, root.CoreApiV10.FundNotificationSettingList, root.CoreApiV10.ManagerNotificationSettingList, root.CoreApiV10.NotificationList, root.CoreApiV10.NotificationSettingList, root.CoreApiV10.ProgramNotificationSettingList);
  }
}(this, function(ApiClient, ErrorViewModel, FundNotificationSettingList, ManagerNotificationSettingList, NotificationList, NotificationSettingList, ProgramNotificationSettingList) {
  'use strict';

  /**
   * Notifications service.
   * @module api/NotificationsApi
   * @version v1.0
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:api/NotificationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Read notification
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.v10NotificationsByIdReadPostWithHttpInfo = function(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsByIdReadPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsByIdReadPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1.0/notifications/{id}/read', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read notification
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.v10NotificationsByIdReadPost = function(id, authorization) {
      return this.v10NotificationsByIdReadPostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
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
    this.v10NotificationsGetWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = NotificationList;

      return this.apiClient.callApi(
        '/v1.0/notifications', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User notifications
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationList}
     */
    this.v10NotificationsGet = function(authorization, opts) {
      return this.v10NotificationsGetWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unread notifications count
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'Number'} and HTTP response
     */
    this.v10NotificationsNewGetWithHttpInfo = function(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsNewGet");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/v1.0/notifications/new', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unread notifications count
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'Number'}
     */
    this.v10NotificationsNewGet = function(authorization) {
      return this.v10NotificationsNewGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
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
    this.v10NotificationsSettingsAddPostWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsAddPost");
      }


      var pathParams = {
      };
      var queryParams = {
        'AssetId': opts['assetId'],
        'ManagerId': opts['managerId'],
        'Type': opts['type'],
        'ConditionType': opts['conditionType'],
        'ConditionAmount': opts['conditionAmount'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/add', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
    this.v10NotificationsSettingsAddPost = function(authorization, opts) {
      return this.v10NotificationsSettingsAddPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
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
    this.v10NotificationsSettingsByIdByEnablePostWithHttpInfo = function(id, enable, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsSettingsByIdByEnablePost");
      }

      // verify the required parameter 'enable' is set
      if (enable === undefined || enable === null) {
        throw new Error("Missing the required parameter 'enable' when calling v10NotificationsSettingsByIdByEnablePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsByIdByEnablePost");
      }


      var pathParams = {
        'id': id,
        'enable': enable
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/{id}/{enable}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Enable/disable setting
     * @param {String} id 
     * @param {Boolean} enable 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.v10NotificationsSettingsByIdByEnablePost = function(id, enable, authorization) {
      return this.v10NotificationsSettingsByIdByEnablePostWithHttpInfo(id, enable, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * User settings for fund
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FundNotificationSettingList} and HTTP response
     */
    this.v10NotificationsSettingsFundsByIdGetWithHttpInfo = function(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsSettingsFundsByIdGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsFundsByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = FundNotificationSettingList;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/funds/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User settings for fund
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FundNotificationSettingList}
     */
    this.v10NotificationsSettingsFundsByIdGet = function(id, authorization) {
      return this.v10NotificationsSettingsFundsByIdGetWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * User settings
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationSettingList} and HTTP response
     */
    this.v10NotificationsSettingsGetWithHttpInfo = function(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsGet");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = NotificationSettingList;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User settings
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationSettingList}
     */
    this.v10NotificationsSettingsGet = function(authorization) {
      return this.v10NotificationsSettingsGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * User settings for manager
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ManagerNotificationSettingList} and HTTP response
     */
    this.v10NotificationsSettingsManagersByIdGetWithHttpInfo = function(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsSettingsManagersByIdGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsManagersByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = ManagerNotificationSettingList;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/managers/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User settings for manager
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ManagerNotificationSettingList}
     */
    this.v10NotificationsSettingsManagersByIdGet = function(id, authorization) {
      return this.v10NotificationsSettingsManagersByIdGetWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * User settings for program
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramNotificationSettingList} and HTTP response
     */
    this.v10NotificationsSettingsProgramsByIdGetWithHttpInfo = function(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsSettingsProgramsByIdGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsProgramsByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = ProgramNotificationSettingList;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/programs/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User settings for program
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramNotificationSettingList}
     */
    this.v10NotificationsSettingsProgramsByIdGet = function(id, authorization) {
      return this.v10NotificationsSettingsProgramsByIdGetWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove setting
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.v10NotificationsSettingsRemoveByIdPostWithHttpInfo = function(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsSettingsRemoveByIdPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsRemoveByIdPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/remove/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove setting
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.v10NotificationsSettingsRemoveByIdPost = function(id, authorization) {
      return this.v10NotificationsSettingsRemoveByIdPostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
