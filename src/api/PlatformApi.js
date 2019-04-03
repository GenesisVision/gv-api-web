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
import LoginCheckDetails from '../model/LoginCheckDetails';
import PlatformInfo from '../model/PlatformInfo';
import PlatformStatistic from '../model/PlatformStatistic';
import ProgramsLevelsInfo from '../model/ProgramsLevelsInfo';

/**
* Platform service.
* @class PlatformApi
* @version v1.0
*/
export default class PlatformApi {

    /**
    * Constructs a new PlatformApi. 
    * @function PlatformApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {PlatformApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      v10PlatformInfoGetWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = PlatformInfo;

      return this.apiClient.callApi(
        '/v1.0/platform/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Platform info
     * @function PlatformApi#v10PlatformInfoGet
     * @return {CancelablePromise<PlatformInfo>} a Promise, with an object containing data of type PlatformInfo and HTTP response
     */
      v10PlatformInfoGet() {
      return this.v10PlatformInfoGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10PlatformLevelsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProgramsLevelsInfo;

      return this.apiClient.callApi(
        '/v1.0/platform/levels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Investment programs levels
     * @function PlatformApi#v10PlatformLevelsGet
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.currency] 
     * @return {CancelablePromise<ProgramsLevelsInfo>} a Promise, with an object containing data of type ProgramsLevelsInfo and HTTP response
     */
      v10PlatformLevelsGet(opts) {
      return this.v10PlatformLevelsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10PlatformRiskcontrolGetWithHttpInfo(route, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'route' is set
      if (route === undefined || route === null) {
        throw new Error("Missing the required parameter 'route' when calling v10PlatformRiskcontrolGet");
      }


      let pathParams = {
      };
      let queryParams = {
        'Route': route,
        'Device': opts['device'],
        'Version': opts['version']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = LoginCheckDetails;

      return this.apiClient.callApi(
        '/v1.0/platform/riskcontrol', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Platform captcha details.
     * @function PlatformApi#v10PlatformRiskcontrolGet
     * @param {String} route 
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.device] 
     * @param {String} [opts.version] 
     * @return {CancelablePromise<LoginCheckDetails>} a Promise, with an object containing data of type LoginCheckDetails and HTTP response
     */
      v10PlatformRiskcontrolGet(route, opts) {
      return this.v10PlatformRiskcontrolGetWithHttpInfo(route, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10PlatformStatisticGetWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = PlatformStatistic;

      return this.apiClient.callApi(
        '/v1.0/platform/statistic', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Platform statistic
     * @function PlatformApi#v10PlatformStatisticGet
     * @return {CancelablePromise<PlatformStatistic>} a Promise, with an object containing data of type PlatformStatistic and HTTP response
     */
      v10PlatformStatisticGet() {
      return this.v10PlatformStatisticGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
