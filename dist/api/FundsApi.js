import ApiClient from "../ApiClient";
import { AbsoluteProfitChart } from "../model/AbsoluteProfitChart";
import { FundBalanceChart } from "../model/FundBalanceChart";
import { FundDetailsFull } from "../model/FundDetailsFull";
import { FundProfitCharts } from "../model/FundProfitCharts";
import { ItemsViewModelFundDetailsList } from "../model/ItemsViewModelFundDetailsList";
import { ItemsViewModelReallocationModel } from "../model/ItemsViewModelReallocationModel";
export class FundsApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    addToFavorites(id, authorization) {
        return this.addToFavoritesWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    addToFavoritesWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling addToFavorites");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling addToFavorites");
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
        let returnType = null;
        return this.apiClient.callApi('/v2.0/funds/{id}/favorite/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundAbsoluteProfitChart(id, opts) {
        return this.getFundAbsoluteProfitChartWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundAbsoluteProfitChartWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFundAbsoluteProfitChart");
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
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = AbsoluteProfitChart;
        return this.apiClient.callApi('/v2.0/funds/{id}/charts/profit/absolute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundBalanceChart(id, opts) {
        return this.getFundBalanceChartWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundBalanceChartWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFundBalanceChart");
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
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = FundBalanceChart;
        return this.apiClient.callApi('/v2.0/funds/{id}/charts/balance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundDetails(id, opts) {
        return this.getFundDetailsWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundDetailsWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFundDetails");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "currency": opts["currency"]
        };
        let headerParams = {
            "Authorization": opts["authorization"]
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = FundDetailsFull;
        return this.apiClient.callApi('/v2.0/funds/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundProfitPercentCharts(id, opts) {
        return this.getFundProfitPercentChartsWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundProfitPercentChartsWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFundProfitPercentCharts");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "MaxPointCount": opts["maxPointCount"],
            "Currency": opts["currency"],
            "currencies": this.apiClient.buildCollectionParam(opts["currencies"], "multi"),
            "chartAssetsCount": opts["chartAssetsCount"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = FundProfitCharts;
        return this.apiClient.callApi('/v2.0/funds/{id}/charts/profit/percent', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFunds(opts) {
        return this.getFundsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundsWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "Sorting": opts["sorting"],
            "ShowIn": opts["showIn"],
            "Assets": this.apiClient.buildCollectionParam(opts["assets"], "multi"),
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "ChartPointsCount": opts["chartPointsCount"],
            "FacetId": opts["facetId"],
            "Mask": opts["mask"],
            "OwnerId": opts["ownerId"],
            "ShowFavorites": opts["showFavorites"],
            "Skip": opts["skip"],
            "Take": opts["take"]
        };
        let headerParams = {
            "Authorization": opts["authorization"]
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ItemsViewModelFundDetailsList;
        return this.apiClient.callApi('/v2.0/funds', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getReallocatingHistory(id, opts) {
        return this.getReallocatingHistoryWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getReallocatingHistoryWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getReallocatingHistory");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "Skip": opts["skip"],
            "Take": opts["take"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ItemsViewModelReallocationModel;
        return this.apiClient.callApi('/v2.0/funds/{id}/reallocations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    removeFromFavorites(id, authorization) {
        return this.removeFromFavoritesWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    removeFromFavoritesWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling removeFromFavorites");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling removeFromFavorites");
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
        let returnType = null;
        return this.apiClient.callApi('/v2.0/funds/{id}/favorite/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
