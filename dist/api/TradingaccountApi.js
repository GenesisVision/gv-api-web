import ApiClient from "../ApiClient";
import { FollowDetailsFull } from "../model/FollowDetailsFull";
import { TradesViewModelOld } from "../model/TradesViewModelOld";
export class TradingaccountApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getProgramOpenTrades(id, authorization, opts) {
        return this.getProgramOpenTradesWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramOpenTradesWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramOpenTrades");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgramOpenTrades");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "Sorting": opts["sorting"],
            "Symbol": opts["symbol"],
            "AccountId": opts["accountId"],
            "AccountCurrency": opts["accountCurrency"],
            "Skip": opts["skip"],
            "Take": opts["take"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = TradesViewModelOld;
        return this.apiClient.callApi('/v2.0/tradingaccount/{id}/trades/open', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
    getTradingAccountTrades(id, authorization, opts) {
        return this.getTradingAccountTradesWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getTradingAccountTradesWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getTradingAccountTrades");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getTradingAccountTrades");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "Symbol": opts["symbol"],
            "Sorting": opts["sorting"],
            "AccountId": opts["accountId"],
            "AccountCurrency": opts["accountCurrency"],
            "Skip": opts["skip"],
            "Take": opts["take"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = TradesViewModelOld;
        return this.apiClient.callApi('/v2.0/tradingaccount/{id}/trades', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
