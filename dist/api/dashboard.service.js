import ApiClient from "../ApiClient";
import { DashboardAssets } from "../model/dashboardAssets";
import { DashboardInvestingDetails } from "../model/dashboardInvestingDetails";
import { DashboardPortfolio } from "../model/dashboardPortfolio";
import { DashboardRecommendations } from "../model/dashboardRecommendations";
import { DashboardSummary } from "../model/dashboardSummary";
import { DashboardTradingDetails } from "../model/dashboardTradingDetails";
export class DashboardService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getAssets(authorization, opts) {
        return this.getAssetsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getAssetsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getAssets");
        }
        let pathParams = {};
        let queryParams = {
            "count": opts["count"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = DashboardAssets;
        return this.apiClient.callApi('/v2.0/dashboard/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getChart(authorization) {
        return this.getChartWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getChartWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getChart");
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
        let returnType = null;
        return this.apiClient.callApi('/v2.0/dashboard/chart', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
            "currency": opts["currency"]
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
            "currency": opts["currency"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = DashboardRecommendations;
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
            "currency": opts["currency"]
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
