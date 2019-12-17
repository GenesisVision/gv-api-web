import ApiClient from "../ApiClient";
import { AbsoluteProfitChart } from "../model/AbsoluteProfitChart";
import { AccountBalanceChart } from "../model/AccountBalanceChart";
import { AccountProfitPercentCharts } from "../model/AccountProfitPercentCharts";
import { PrivateTradingAccountFull } from "../model/PrivateTradingAccountFull";
import { TradesViewModel } from "../model/TradesViewModel";
export class TradingaccountApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getAbsoluteProfitChart(id, authorization, opts) {
        return this.getAbsoluteProfitChartWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getAbsoluteProfitChartWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getAbsoluteProfitChart");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getAbsoluteProfitChart");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "MaxPointCount": opts["maxPointCount"],
            "Currency": opts["currency"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = AbsoluteProfitChart;
        return this.apiClient.callApi('/v2.0/tradingaccount/{id}/charts/profit/absolute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getBalanceChart(id, authorization, opts) {
        return this.getBalanceChartWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getBalanceChartWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getBalanceChart");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getBalanceChart");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "MaxPointCount": opts["maxPointCount"],
            "Currency": opts["currency"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = AccountBalanceChart;
        return this.apiClient.callApi('/v2.0/tradingaccount/{id}/charts/balance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getOpenTrades(id, authorization, opts) {
        return this.getOpenTradesWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getOpenTradesWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getOpenTrades");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getOpenTrades");
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
        let returnType = TradesViewModel;
        return this.apiClient.callApi('/v2.0/tradingaccount/{id}/trades/open', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProfitPercentCharts(id, authorization, opts) {
        return this.getProfitPercentChartsWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProfitPercentChartsWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProfitPercentCharts");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProfitPercentCharts");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "MaxPointCount": opts["maxPointCount"],
            "Currency": opts["currency"],
            "currencies": this.apiClient.buildCollectionParam(opts["currencies"], "multi")
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = AccountProfitPercentCharts;
        return this.apiClient.callApi('/v2.0/tradingaccount/{id}/charts/profit/percent', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getTrades(id, authorization, opts) {
        return this.getTradesWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getTradesWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getTrades");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getTrades");
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
        let returnType = TradesViewModel;
        return this.apiClient.callApi('/v2.0/tradingaccount/{id}/trades', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        let returnType = PrivateTradingAccountFull;
        return this.apiClient.callApi('/v2.0/tradingaccount/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
