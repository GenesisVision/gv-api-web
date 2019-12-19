import ApiClient from "../ApiClient";
import { CommonPublicAssetsViewModel } from "../model/CommonPublicAssetsViewModel";
import { DashboardAssets } from "../model/DashboardAssets";
import { DashboardChart } from "../model/DashboardChart";
import { DashboardChartAssets } from "../model/DashboardChartAssets";
import { DashboardInvestingDetails } from "../model/DashboardInvestingDetails";
import { DashboardPortfolio } from "../model/DashboardPortfolio";
import { DashboardSummary } from "../model/DashboardSummary";
import { DashboardTradingDetails } from "../model/DashboardTradingDetails";
import { ItemsViewModelDashboardTradingAsset } from "../model/ItemsViewModelDashboardTradingAsset";
import { ItemsViewModelFundInvestingDetailsList } from "../model/ItemsViewModelFundInvestingDetailsList";
import { ItemsViewModelProgramInvestingDetailsList } from "../model/ItemsViewModelProgramInvestingDetailsList";
export class DashboardApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getChart(authorization, opts) {
        return this.getChartWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getChartWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getChart");
        }
        let pathParams = {};
        let queryParams = {
            "Assets": this.apiClient.buildCollectionParam(opts["assets"], "multi"),
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "ChartPointsCount": opts["chartPointsCount"],
            "ShowIn": opts["showIn"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = DashboardChart;
        return this.apiClient.callApi('/v2.0/dashboard/chart', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getChartAssets(authorization) {
        return this.getChartAssetsWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getChartAssetsWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getChartAssets");
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
        let returnType = DashboardChartAssets;
        return this.apiClient.callApi('/v2.0/dashboard/chart/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getHoldings(authorization, opts) {
        return this.getHoldingsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getHoldingsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getHoldings");
        }
        let pathParams = {};
        let queryParams = {
            "topAssetsCount": opts["topAssetsCount"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = DashboardAssets;
        return this.apiClient.callApi('/v2.0/dashboard/holdings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getInvestingDetails(authorization, opts) {
        return this.getInvestingDetailsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getInvestingDetailsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getInvestingDetails");
        }
        let pathParams = {};
        let queryParams = {
            "currency": opts["currency"],
            "eventsTake": opts["eventsTake"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = DashboardInvestingDetails;
        return this.apiClient.callApi('/v2.0/dashboard/investing', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getInvestingFunds(authorization, opts) {
        return this.getInvestingFundsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getInvestingFundsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getInvestingFunds");
        }
        let pathParams = {};
        let queryParams = {
            "Sorting": opts["sorting"],
            "ShowIn": opts["showIn"],
            "Status": opts["status"],
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
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ItemsViewModelFundInvestingDetailsList;
        return this.apiClient.callApi('/v2.0/dashboard/investing/funds', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getInvestingPrograms(authorization, opts) {
        return this.getInvestingProgramsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getInvestingProgramsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getInvestingPrograms");
        }
        let pathParams = {};
        let queryParams = {
            "Sorting": opts["sorting"],
            "ShowIn": opts["showIn"],
            "Status": opts["status"],
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
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ItemsViewModelProgramInvestingDetailsList;
        return this.apiClient.callApi('/v2.0/dashboard/investing/programs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getMostProfitableAssets(authorization, opts) {
        return this.getMostProfitableAssetsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getMostProfitableAssetsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getMostProfitableAssets");
        }
        let pathParams = {};
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "ChartPointsCount": opts["chartPointsCount"],
            "ShowIn": opts["showIn"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ItemsViewModelDashboardTradingAsset;
        return this.apiClient.callApi('/v2.0/dashboard/trading/mostprofitable', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPortfolio(authorization) {
        return this.getPortfolioWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPortfolioWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getPortfolio");
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
        let returnType = DashboardPortfolio;
        return this.apiClient.callApi('/v2.0/dashboard/portfolio', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPrivateTradingAssets(authorization, opts) {
        return this.getPrivateTradingAssetsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPrivateTradingAssetsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getPrivateTradingAssets");
        }
        let pathParams = {};
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "ChartPointsCount": opts["chartPointsCount"],
            "ShowIn": opts["showIn"],
            "Status": opts["status"],
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
        let returnType = ItemsViewModelDashboardTradingAsset;
        return this.apiClient.callApi('/v2.0/dashboard/trading/private', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPublicTradingAssets(authorization, opts) {
        return this.getPublicTradingAssetsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPublicTradingAssetsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getPublicTradingAssets");
        }
        let pathParams = {};
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "ChartPointsCount": opts["chartPointsCount"],
            "ShowIn": opts["showIn"],
            "Status": opts["status"],
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
        let returnType = ItemsViewModelDashboardTradingAsset;
        return this.apiClient.callApi('/v2.0/dashboard/trading/public', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getRecommendations(authorization, opts) {
        return this.getRecommendationsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getRecommendationsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getRecommendations");
        }
        let pathParams = {};
        let queryParams = {
            "currency": opts["currency"],
            "take": opts["take"],
            "onlyFollows": opts["onlyFollows"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = CommonPublicAssetsViewModel;
        return this.apiClient.callApi('/v2.0/dashboard/recommendations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getSummary(authorization, opts) {
        return this.getSummaryWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSummaryWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getSummary");
        }
        let pathParams = {};
        let queryParams = {
            "currency": opts["currency"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = DashboardSummary;
        return this.apiClient.callApi('/v2.0/dashboard/summary', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getTradingDetails(authorization, opts) {
        return this.getTradingDetailsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getTradingDetailsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getTradingDetails");
        }
        let pathParams = {};
        let queryParams = {
            "currency": opts["currency"],
            "eventsTake": opts["eventsTake"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = DashboardTradingDetails;
        return this.apiClient.callApi('/v2.0/dashboard/trading', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
