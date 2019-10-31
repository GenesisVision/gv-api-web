import ApiClient from "../ApiClient";
import { SignalTradingEvents } from "../model/SignalTradingEvents";
import { TradesSignalViewModel } from "../model/TradesSignalViewModel";
export class SignalApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getOpenSignalTrades(authorization, opts) {
        return this.getOpenSignalTradesWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getOpenSignalTradesWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getOpenSignalTrades");
        }
        let pathParams = {};
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
        let returnType = TradesSignalViewModel;
        return this.apiClient.callApi('/v1.0/signal/trades/open', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getSignalTrades(authorization, opts) {
        return this.getSignalTradesWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSignalTradesWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getSignalTrades");
        }
        let pathParams = {};
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
        let returnType = TradesSignalViewModel;
        return this.apiClient.callApi('/v1.0/signal/trades', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getSignalTradingLog(authorization, opts) {
        return this.getSignalTradingLogWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSignalTradingLogWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getSignalTradingLog");
        }
        let pathParams = {};
        let queryParams = {
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
        let returnType = SignalTradingEvents;
        return this.apiClient.callApi('/v1.0/signal/trades/log', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
