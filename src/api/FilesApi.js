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
import UploadResult from '../model/UploadResult';

/**
* Files service.
* @module api/FilesApi
* @version v1
*/
export default class FilesApi {

    /**
    * Constructs a new FilesApi. 
    * @alias module:api/FilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiFilesByIdGet operation.
     * @callback module:api/FilesApi~apiFilesByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download file
     * @param {String} id 
     * @param {module:api/FilesApi~apiFilesByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiFilesByIdGet(id, callback) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiFilesByIdGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/files/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiFilesGet operation.
     * @callback module:api/FilesApi~apiFilesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download file
     * @param {String} id 
     * @param {module:api/FilesApi~apiFilesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiFilesGet(id, callback) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiFilesGet");
      }


      let pathParams = {
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiFilesUploadPost operation.
     * @callback module:api/FilesApi~apiFilesUploadPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UploadResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload file
     * @param {File} uploadedFile Upload File
     * @param {module:api/FilesApi~apiFilesUploadPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UploadResult}
     */
    apiFilesUploadPost(uploadedFile, callback) {
      let postBody = null;

      // verify the required parameter 'uploadedFile' is set
      if (uploadedFile === undefined || uploadedFile === null) {
        throw new Error("Missing the required parameter 'uploadedFile' when calling apiFilesUploadPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'uploadedFile': uploadedFile
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UploadResult;

      return this.apiClient.callApi(
        '/api/files/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
