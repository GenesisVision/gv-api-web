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
import BrokersInfo from '../model/BrokersInfo';
import ErrorViewModel from '../model/ErrorViewModel';

/**
* Brokers service.
* @class BrokersApi
* @version v1.0
*/
export default class BrokersApi {

    /**
    * Constructs a new BrokersApi. 
    * @function BrokersApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {BrokersApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      v10BrokersGetWithHttpInfo() {
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
      let returnType = BrokersInfo;

      return this.apiClient.callApi(
        '/v1.0/brokers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all trade servers
     * @function BrokersApi#v10BrokersGet
     * @return {CancelablePromise<BrokersInfo>} a Promise, with an object containing data of type BrokersInfo and HTTP response
     */
      v10BrokersGet() {
      return this.v10BrokersGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
