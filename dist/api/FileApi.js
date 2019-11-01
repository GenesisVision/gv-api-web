import ApiClient from "../ApiClient";
import { UploadResult } from "../model/UploadResult";
export class FileApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getFile(id) {
        return this.getFileWithHttpInfo(id)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFileWithHttpInfo(id) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFile");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = [];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/file/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    uploadFile(uploadedFile, opts) {
        return this.uploadFileWithHttpInfo(uploadedFile, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    uploadFileWithHttpInfo(uploadedFile, opts = {}) {
        let postBody = null;
        if (uploadedFile === undefined || uploadedFile === null) {
            throw new Error("Missing the required parameter \"uploadedFile\" when calling uploadFile");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": opts["authorization"]
        };
        let formParams = {
            "uploadedFile": uploadedFile
        };
        let authNames = [];
        let contentTypes = ["multipart/form-data"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = UploadResult;
        return this.apiClient.callApi('/v1.0/file/upload', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
