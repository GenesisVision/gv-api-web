import ApiClient from "../ApiClient";
import { FollowDetailsFull } from "../model/FollowDetailsFull";
export class TradingaccountApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getTradingAccountDetails(id, authorization) {
        return this.getTradingAccountDetailsWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getTradingAccountDetailsWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getTradingAccountDetails");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getTradingAccountDetails");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = FollowDetailsFull;
        return this.apiClient.callApi('/v2.0/tradingaccount/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
