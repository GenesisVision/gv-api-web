import ApiClient from "../ApiClient";
import { AttachToSignalProviderInfo } from "../model/attachToSignalProviderInfo";
import { CopyTradingAccountsList } from "../model/copyTradingAccountsList";
import { ItemsViewModelCopyTradingAccountInfo } from "../model/itemsViewModelCopyTradingAccountInfo";
import { SignalTradingEvents } from "../model/signalTradingEvents";
import { TradesSignalViewModel } from "../model/tradesSignalViewModel";
export class SignalService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    attachSlaveToMaster(id, authorization, opts) {
        return this.attachSlaveToMasterWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    attachSlaveToMasterWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling attachSlaveToMaster");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling attachSlaveToMaster");
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
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/signal/attach/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    closeTrade(id, authorization, opts) {
        return this.closeTradeWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    closeTradeWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling closeTrade");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling closeTrade");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "programId": opts["programId"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/signal/trades/{id}/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    detachSlaveFromMaster(id, authorization, opts) {
        return this.detachSlaveFromMasterWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    detachSlaveFromMasterWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling detachSlaveFromMaster");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling detachSlaveFromMaster");
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
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/signal/detach/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getCopytradingAccounts(authorization) {
        return this.getCopytradingAccountsWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getCopytradingAccountsWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getCopytradingAccounts");
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
        let returnType = CopyTradingAccountsList;
        return this.apiClient.callApi('/v1.0/signal/accounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
    getSignals(opts) {
        return this.getSignalsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSignalsWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "Tags": this.apiClient.buildCollectionParam(opts["tags"], "multi"),
            "StatisticDateFrom": opts["statisticDateFrom"],
            "StatisticDateTo": opts["statisticDateTo"],
            "ChartPointsCount": opts["chartPointsCount"],
            "ChartCurrency": opts["chartCurrency"],
            "FacetId": opts["facetId"],
            "Mask": opts["mask"],
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
        let returnType = ItemsViewModelCopyTradingAccountInfo;
        return this.apiClient.callApi('/v1.0/signal', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getSlaveAttachInfo(id, authorization) {
        return this.getSlaveAttachInfoWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSlaveAttachInfoWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getSlaveAttachInfo");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getSlaveAttachInfo");
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
        let returnType = AttachToSignalProviderInfo;
        return this.apiClient.callApi('/v1.0/signal/attach/{id}/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateSubscriptionSettings(id, authorization, opts) {
        return this.updateSubscriptionSettingsWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateSubscriptionSettingsWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling updateSubscriptionSettings");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateSubscriptionSettings");
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
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/signal/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
