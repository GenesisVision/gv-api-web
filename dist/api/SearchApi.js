import ApiClient from "../ApiClient";
import { SearchViewModelOld } from "../model/SearchViewModelOld";
export class SearchApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    search(opts) {
        return this.searchWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    searchWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "mask": opts["mask"],
            "take": opts["take"]
        };
        let headerParams = {
            "Authorization": opts["authorization"]
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = SearchViewModelOld;
        return this.apiClient.callApi('/v1.0/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
