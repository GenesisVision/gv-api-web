import ApiClient from "../ApiClient";
import { ItemsViewModelUserDetailsList } from "../model/ItemsViewModelUserDetailsList";
import { PublicProfile } from "../model/PublicProfile";
export class UsersApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getManagerProfile(id) {
        return this.getManagerProfileWithHttpInfo(id)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getManagerProfileWithHttpInfo(id) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getManagerProfile");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = PublicProfile;
        return this.apiClient.callApi('/v2.0/users/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getUsersList(opts) {
        return this.getUsersListWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getUsersListWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "FacetId": opts["facetId"],
            "Sorting": opts["sorting"],
            "Tags": this.apiClient.buildCollectionParam(opts["tags"], "multi"),
            "Skip": opts["skip"],
            "Take": opts["take"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ItemsViewModelUserDetailsList;
        return this.apiClient.callApi('/v2.0/users/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
