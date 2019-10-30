import ApiClient from "../ApiClient";
import { FundAssetsListInfo } from "../model/fundAssetsListInfo";
import { FundBalanceChartOld } from "../model/fundBalanceChartOld";
import { FundDetailsFullOld } from "../model/fundDetailsFullOld";
import { FundProfitChartOld } from "../model/fundProfitChartOld";
import { FundSets } from "../model/fundSets";
import { FundsListOld } from "../model/fundsListOld";
import { PlatformAssets } from "../model/platformAssets";
import { ReallocationsViewModel } from "../model/reallocationsViewModel";
export class FundsService {
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
        return this.apiClient.callApi('/v1.0/funds/{id}/favorite/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getAllAssets() {
        return this.getAllAssetsWithHttpInfo()
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getAllAssetsWithHttpInfo() {
        let postBody = null;
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = PlatformAssets;
        return this.apiClient.callApi('/v1.0/funds/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundAssets(id) {
        return this.getFundAssetsWithHttpInfo(id)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundAssetsWithHttpInfo(id) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFundAssets");
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
        let returnType = FundAssetsListInfo;
        return this.apiClient.callApi('/v1.0/funds/{id}/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        let returnType = FundBalanceChartOld;
        return this.apiClient.callApi('/v1.0/funds/{id}/charts/balance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        let returnType = FundDetailsFullOld;
        return this.apiClient.callApi('/v1.0/funds/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundProfitChart(id, opts) {
        return this.getFundProfitChartWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundProfitChartWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFundProfitChart");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "MaxPointCount": opts["maxPointCount"],
            "Currency": opts["currency"],
            "chartAssetsCount": opts["chartAssetsCount"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = FundProfitChartOld;
        return this.apiClient.callApi('/v1.0/funds/{id}/charts/profit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
            "CurrencySecondary": opts["currencySecondary"],
            "Currency": opts["currency"],
            "Assets": this.apiClient.buildCollectionParam(opts["assets"], "multi"),
            "StatisticDateFrom": opts["statisticDateFrom"],
            "StatisticDateTo": opts["statisticDateTo"],
            "ChartPointsCount": opts["chartPointsCount"],
            "Mask": opts["mask"],
            "FacetId": opts["facetId"],
            "IsFavorite": opts["isFavorite"],
            "IsEnabled": opts["isEnabled"],
            "HasInvestorsForAll": opts["hasInvestorsForAll"],
            "HasInvestorsForClosed": opts["hasInvestorsForClosed"],
            "Ids": this.apiClient.buildCollectionParam(opts["ids"], "multi"),
            "ForceUseIdsList": opts["forceUseIdsList"],
            "ManagerId": opts["managerId"],
            "ProgramManagerId": opts["programManagerId"],
            "Status": this.apiClient.buildCollectionParam(opts["status"], "multi"),
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
        let returnType = FundsListOld;
        return this.apiClient.callApi('/v1.0/funds', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramSets(authorization) {
        return this.getProgramSetsWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramSetsWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgramSets");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = FundSets;
        return this.apiClient.callApi('/v1.0/funds/sets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getReallocationsHistory(id, opts) {
        return this.getReallocationsHistoryWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getReallocationsHistoryWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getReallocationsHistory");
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
        let returnType = ReallocationsViewModel;
        return this.apiClient.callApi('/v1.0/funds/{id}/reallocations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/funds/{id}/favorite/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
