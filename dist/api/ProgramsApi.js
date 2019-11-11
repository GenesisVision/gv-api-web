import ApiClient from "../ApiClient";
import { ItemsViewModelProgramDetailsList } from "../model/ItemsViewModelProgramDetailsList";
import { ProgramBalanceChart } from "../model/ProgramBalanceChart";
import { ProgramDetailsFull } from "../model/ProgramDetailsFull";
import { ProgramPeriodsViewModel } from "../model/ProgramPeriodsViewModel";
import { ProgramProfitCharts } from "../model/ProgramProfitCharts";
import { SignalProviderSubscribers } from "../model/SignalProviderSubscribers";
import { TradesViewModel } from "../model/TradesViewModel";
export class ProgramsApi {
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
        return this.apiClient.callApi('/v2.0/programs/{id}/favorite/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    exportProgramPeriods(id, opts) {
        return this.exportProgramPeriodsWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    exportProgramPeriodsWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling exportProgramPeriods");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "NumberMin": opts["numberMin"],
            "NumberMax": opts["numberMax"],
            "Status": opts["status"],
            "Skip": opts["skip"],
            "Take": opts["take"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'Blob';
        return this.apiClient.callApi('/v2.0/programs/{id}/periods/export', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    exportProgramPeriodsFinStatistic(id, authorization, opts) {
        return this.exportProgramPeriodsFinStatisticWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    exportProgramPeriodsFinStatisticWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling exportProgramPeriodsFinStatistic");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling exportProgramPeriodsFinStatistic");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "NumberMin": opts["numberMin"],
            "NumberMax": opts["numberMax"],
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
        let returnType = 'Blob';
        return this.apiClient.callApi('/v2.0/programs/{id}/periods/export/statistic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    exportProgramTrades(id, opts) {
        return this.exportProgramTradesWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    exportProgramTradesWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling exportProgramTrades");
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
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'Blob';
        return this.apiClient.callApi('/v2.0/programs/{id}/trades/export', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramBalanceChart(id, opts) {
        return this.getProgramBalanceChartWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramBalanceChartWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramBalanceChart");
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
        let returnType = ProgramBalanceChart;
        return this.apiClient.callApi('/v2.0/programs/{id}/charts/balance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramDetails(id, opts) {
        return this.getProgramDetailsWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramDetailsWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramDetails");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": opts["authorization"]
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProgramDetailsFull;
        return this.apiClient.callApi('/v2.0/programs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramOpenTrades(id, opts) {
        return this.getProgramOpenTradesWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramOpenTradesWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramOpenTrades");
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
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = TradesViewModel;
        return this.apiClient.callApi('/v2.0/programs/{id}/trades/open', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramPeriods(id, opts) {
        return this.getProgramPeriodsWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramPeriodsWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramPeriods");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "NumberMin": opts["numberMin"],
            "NumberMax": opts["numberMax"],
            "Status": opts["status"],
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
        let returnType = ProgramPeriodsViewModel;
        return this.apiClient.callApi('/v2.0/programs/{id}/periods', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramProfitChart(id, opts) {
        return this.getProgramProfitChartWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramProfitChartWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramProfitChart");
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
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProgramProfitCharts;
        return this.apiClient.callApi('/v2.0/programs/{id}/charts/profit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramSubscribers(id, authorization, opts) {
        return this.getProgramSubscribersWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramSubscribersWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramSubscribers");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgramSubscribers");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
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
        let returnType = SignalProviderSubscribers;
        return this.apiClient.callApi('/v2.0/programs/{id}/subscribers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramTrades(id, opts) {
        return this.getProgramTradesWithHttpInfo(id, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramTradesWithHttpInfo(id, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramTrades");
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
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = TradesViewModel;
        return this.apiClient.callApi('/v2.0/programs/{id}/trades', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPrograms(opts) {
        return this.getProgramsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramsWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "ShowIn": opts["showIn"],
            "Tags": this.apiClient.buildCollectionParam(opts["tags"], "multi"),
            "ProgramCurrency": opts["programCurrency"],
            "LevelMin": opts["levelMin"],
            "LevelMax": opts["levelMax"],
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
            "ChartPointsCount": opts["chartPointsCount"],
            "FacetId": opts["facetId"],
            "Mask": opts["mask"],
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
        let returnType = ItemsViewModelProgramDetailsList;
        return this.apiClient.callApi('/v2.0/programs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/programs/{id}/favorite/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
