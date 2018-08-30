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
import InvestToProgram from '../model/InvestToProgram';
import NewProgramRequest from '../model/NewProgramRequest';
import WalletsViewModel from '../model/WalletsViewModel';

/**
* Program service.
* @module api/ProgramApi
* @version v1.0
*/
export default class ProgramApi {

    /**
    * Constructs a new ProgramApi. 
    * @alias module:api/ProgramApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancel investment request
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {String} opts.requestId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    v10ProgramCancelInvestmentRequestPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramCancelInvestmentRequestPost");
      }


      let pathParams = {
      };
      let queryParams = {
        'requestId': opts['requestId']
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
        '/v1.0/program/cancelInvestmentRequest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancel investment request
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {String} opts.requestId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    v10ProgramCancelInvestmentRequestPost(authorization, opts) {
      return this.v10ProgramCancelInvestmentRequestPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a investment program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/NewProgramRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    v10ProgramCreatePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['request'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramCreatePost");
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
        '/v1.0/program/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a investment program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/NewProgramRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    v10ProgramCreatePost(authorization, opts) {
      return this.v10ProgramCreatePostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Invest to program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/InvestToProgram} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletsViewModel} and HTTP response
     */
    v10ProgramInvestPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramInvestPost");
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
      let returnType = WalletsViewModel;

      return this.apiClient.callApi(
        '/v1.0/program/invest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Invest to program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/InvestToProgram} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletsViewModel}
     */
    v10ProgramInvestPost(authorization, opts) {
      return this.v10ProgramInvestPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
