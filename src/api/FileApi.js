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
import UploadResult from '../model/UploadResult';

/**
* File service.
* @class FileApi
* @version v1.0
*/
export default class FileApi {

    /**
    * Constructs a new FileApi. 
    * @function FileApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {FileApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      v10FileByIdGetWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FileByIdGet");
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
        '/v1.0/file/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Download file
     * @function FileApi#v10FileByIdGet
     * @param {String} id 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      v10FileByIdGet(id) {
      return this.v10FileByIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FileDocumentUploadPostWithHttpInfo(authorization, uploadedFile) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10FileDocumentUploadPost");
      }

      // verify the required parameter 'uploadedFile' is set
      if (uploadedFile === undefined || uploadedFile === null) {
        throw new Error("Missing the required parameter 'uploadedFile' when calling v10FileDocumentUploadPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
        'uploadedFile': uploadedFile
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UploadResult;

      return this.apiClient.callApi(
        '/v1.0/file/document/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload document
     * @function FileApi#v10FileDocumentUploadPost
     * @param {String} authorization JWT access token
     * @param {File} uploadedFile Upload File
     * @return {CancelablePromise<UploadResult>} a Promise, with an object containing data of type UploadResult and HTTP response
     */
      v10FileDocumentUploadPost(authorization, uploadedFile) {
      return this.v10FileDocumentUploadPostWithHttpInfo(authorization, uploadedFile)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FileUploadPostWithHttpInfo(uploadedFile, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'uploadedFile' is set
      if (uploadedFile === undefined || uploadedFile === null) {
        throw new Error("Missing the required parameter 'uploadedFile' when calling v10FileUploadPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
        'uploadedFile': uploadedFile
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UploadResult;

      return this.apiClient.callApi(
        '/v1.0/file/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload file
     * @function FileApi#v10FileUploadPost
     * @param {File} uploadedFile Upload File
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.authorization] 
     * @return {CancelablePromise<UploadResult>} a Promise, with an object containing data of type UploadResult and HTTP response
     */
      v10FileUploadPost(uploadedFile, opts) {
      return this.v10FileUploadPostWithHttpInfo(uploadedFile, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
