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
import ErrorViewModel from '../model/ErrorViewModel';
import FundNotificationSettingList from '../model/FundNotificationSettingList';
import ManagerNotificationSettingList from '../model/ManagerNotificationSettingList';
import NotificationList from '../model/NotificationList';
import NotificationSettingList from '../model/NotificationSettingList';
import ProgramNotificationSettingList from '../model/ProgramNotificationSettingList';

/**
* Notifications service.
* @class NotificationsApi
* @version v1.0
*/
export default class NotificationsApi {

    /**
    * Constructs a new NotificationsApi. 
    * @function NotificationsApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {NotificationsApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      v10NotificationsByIdReadPostWithHttpInfo(id, authorization) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsByIdReadPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsByIdReadPost");
      }


      let pathParams = {
        'id': id
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
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/notifications/{id}/read', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read notification
     * @function NotificationsApi#v10NotificationsByIdReadPost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      v10NotificationsByIdReadPost(id, authorization) {
      return this.v10NotificationsByIdReadPostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10NotificationsGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsGet");
      }


      let pathParams = {
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = NotificationList;

      return this.apiClient.callApi(
        '/v1.0/notifications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User notifications
     * @function NotificationsApi#v10NotificationsGet
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<NotificationList>} a Promise, with an object containing data of type NotificationList and HTTP response
     */
      v10NotificationsGet(authorization, opts) {
      return this.v10NotificationsGetWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10NotificationsNewGetWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsNewGet");
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
        '/v1.0/notifications/new', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unread notifications count
     * @function NotificationsApi#v10NotificationsNewGet
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<'Number'>} a Promise, with an object containing data of type 'Number' and HTTP response
     */
      v10NotificationsNewGet(authorization) {
      return this.v10NotificationsNewGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10NotificationsSettingsAddPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsAddPost");
      }


      let pathParams = {
      };
      let queryParams = {
        'AssetId': opts['assetId'],
        'ManagerId': opts['managerId'],
        'Type': opts['type'],
        'ConditionType': opts['conditionType'],
        'ConditionAmount': opts['conditionAmount']
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
        '/v1.0/notifications/settings/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add new setting
     * @function NotificationsApi#v10NotificationsSettingsAddPost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.assetId] 
     * @param {String} [opts.managerId] 
     * @param {String} [opts.type] 
     * @param {String} [opts.conditionType] 
     * @param {Number} [opts.conditionAmount] 
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      v10NotificationsSettingsAddPost(authorization, opts) {
      return this.v10NotificationsSettingsAddPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10NotificationsSettingsByIdByEnablePostWithHttpInfo(id, enable, authorization) {
      let postBody = null;

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


      let pathParams = {
        'id': id,
        'enable': enable
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
        '/v1.0/notifications/settings/{id}/{enable}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Enable/disable setting
     * @function NotificationsApi#v10NotificationsSettingsByIdByEnablePost
     * @param {String} id 
     * @param {Boolean} enable 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      v10NotificationsSettingsByIdByEnablePost(id, enable, authorization) {
      return this.v10NotificationsSettingsByIdByEnablePostWithHttpInfo(id, enable, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10NotificationsSettingsFundsByIdGetWithHttpInfo(id, authorization) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsSettingsFundsByIdGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsFundsByIdGet");
      }


      let pathParams = {
        'id': id
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
      let returnType = FundNotificationSettingList;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/funds/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User settings for fund
     * @function NotificationsApi#v10NotificationsSettingsFundsByIdGet
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<FundNotificationSettingList>} a Promise, with an object containing data of type FundNotificationSettingList and HTTP response
     */
      v10NotificationsSettingsFundsByIdGet(id, authorization) {
      return this.v10NotificationsSettingsFundsByIdGetWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10NotificationsSettingsGetWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsGet");
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
      let returnType = NotificationSettingList;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User settings
     * @function NotificationsApi#v10NotificationsSettingsGet
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<NotificationSettingList>} a Promise, with an object containing data of type NotificationSettingList and HTTP response
     */
      v10NotificationsSettingsGet(authorization) {
      return this.v10NotificationsSettingsGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10NotificationsSettingsManagersByIdGetWithHttpInfo(id, authorization) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsSettingsManagersByIdGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsManagersByIdGet");
      }


      let pathParams = {
        'id': id
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
      let returnType = ManagerNotificationSettingList;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/managers/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User settings for manager
     * @function NotificationsApi#v10NotificationsSettingsManagersByIdGet
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<ManagerNotificationSettingList>} a Promise, with an object containing data of type ManagerNotificationSettingList and HTTP response
     */
      v10NotificationsSettingsManagersByIdGet(id, authorization) {
      return this.v10NotificationsSettingsManagersByIdGetWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10NotificationsSettingsProgramsByIdGetWithHttpInfo(id, authorization) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsSettingsProgramsByIdGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsProgramsByIdGet");
      }


      let pathParams = {
        'id': id
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
      let returnType = ProgramNotificationSettingList;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/programs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * User settings for program
     * @function NotificationsApi#v10NotificationsSettingsProgramsByIdGet
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<ProgramNotificationSettingList>} a Promise, with an object containing data of type ProgramNotificationSettingList and HTTP response
     */
      v10NotificationsSettingsProgramsByIdGet(id, authorization) {
      return this.v10NotificationsSettingsProgramsByIdGetWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10NotificationsSettingsRemoveByIdPostWithHttpInfo(id, authorization) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10NotificationsSettingsRemoveByIdPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10NotificationsSettingsRemoveByIdPost");
      }


      let pathParams = {
        'id': id
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
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/notifications/settings/remove/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove setting
     * @function NotificationsApi#v10NotificationsSettingsRemoveByIdPost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      v10NotificationsSettingsRemoveByIdPost(id, authorization) {
      return this.v10NotificationsSettingsRemoveByIdPostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
