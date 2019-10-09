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
import CaptchaDetails from '../model/CaptchaDetails';
import ErrorViewModel from '../model/ErrorViewModel';
import LevelsParamsInfo from '../model/LevelsParamsInfo';
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


      getCaptchaModelWithHttpInfo(route, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'route' is set
      if (route === undefined || route === null) {
        throw new Error("Missing the required parameter 'route' when calling getCaptchaModel");
      }


      let pathParams = {
      };
      let queryParams = {
        'Route': route,
        'Client': opts['client'],
        'Version': opts['version']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = CaptchaDetails;

      return this.apiClient.callApi(
        '/v1.0/platform/riskcontrol', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Platform captcha details
     * @function PlatformApi#getCaptchaModel
     * @param {String} route 
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.client] 
     * @param {String} [opts.version] 
     * @return {CancelablePromise<CaptchaDetails>} a Promise, with an object containing data of type CaptchaDetails and HTTP response
     */
      getCaptchaModel(route, opts) {
      return this.getCaptchaModelWithHttpInfo(route, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getLevelsParamsWithHttpInfo(opts) {
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
      let returnType = LevelsParamsInfo;

      return this.apiClient.callApi(
        '/v1.0/platform/levels/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Investment programs levels parameters
     * @function PlatformApi#getLevelsParams
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.currency]  (default to 104)
     * @return {CancelablePromise<LevelsParamsInfo>} a Promise, with an object containing data of type LevelsParamsInfo and HTTP response
     */
      getLevelsParams(opts) {
      return this.getLevelsParamsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getPlatformStatisticWithHttpInfo() {
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
     * @function PlatformApi#getPlatformStatistic
     * @return {CancelablePromise<PlatformStatistic>} a Promise, with an object containing data of type PlatformStatistic and HTTP response
     */
      getPlatformStatistic() {
      return this.getPlatformStatisticWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getPlatformStatusWithHttpInfo() {
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
     * @function PlatformApi#getPlatformStatus
     * @return {CancelablePromise<PlatformInfo>} a Promise, with an object containing data of type PlatformInfo and HTTP response
     */
      getPlatformStatus() {
      return this.getPlatformStatusWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getProgramsLevelsWithHttpInfo(opts) {
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
     * @function PlatformApi#getProgramsLevels
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.currency]  (default to 100)
     * @return {CancelablePromise<ProgramsLevelsInfo>} a Promise, with an object containing data of type ProgramsLevelsInfo and HTTP response
     */
      getProgramsLevels(opts) {
      return this.getProgramsLevelsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      platformDateWithHttpInfo() {
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
      let returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/platform/date', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Server date
     * @function PlatformApi#platformDate
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      platformDate() {
      return this.platformDateWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
