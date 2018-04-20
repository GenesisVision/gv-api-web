/**
 * Core API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorViewModel from '../model/ErrorViewModel';
import RateViewModel from '../model/RateViewModel';
import RequestRate from '../model/RequestRate';

/**
* Rate service.
* @module api/RateApi
* @version v1
*/
export default class RateApi {

    /**
    * Constructs a new RateApi. 
    * @alias module:api/RateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiRatePost operation.
     * @callback module:api/RateApi~apiRatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RateViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get rate
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestRate} opts.model 
     * @param {module:api/RateApi~apiRatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RateViewModel}
     */
    apiRatePost(opts, callback) {
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
      let returnType = RateViewModel;

      return this.apiClient.callApi(
        '/api/rate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
