import ApiClient from "../ApiClient";
import { ItemsViewModelSignalTradingEvent } from "../model/ItemsViewModelSignalTradingEvent";
import { ItemsViewModelTradingAccountDetails } from "../model/ItemsViewModelTradingAccountDetails";
import { TradesSignalViewModel } from "../model/TradesSignalViewModel";
export class SignalApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    attachSlaveToMasterExternalCommonAccount(id, authorization, opts) {
        return this.attachSlaveToMasterExternalCommonAccountWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    attachSlaveToMasterExternalCommonAccountWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling attachSlaveToMasterExternalCommonAccount");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling attachSlaveToMasterExternalCommonAccount");
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
        return this.apiClient.callApi('/v2.0/signal/external/attach/{id}/common', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    attachSlaveToMasterExternalPrivateAccount(id, authorization, opts) {
        return this.attachSlaveToMasterExternalPrivateAccountWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    attachSlaveToMasterExternalPrivateAccountWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling attachSlaveToMasterExternalPrivateAccount");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling attachSlaveToMasterExternalPrivateAccount");
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
        return this.apiClient.callApi('/v2.0/signal/external/attach/{id}/private', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    attachSlaveToMasterInternal(id, authorization, opts) {
        return this.attachSlaveToMasterInternalWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    attachSlaveToMasterInternalWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling attachSlaveToMasterInternal");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling attachSlaveToMasterInternal");
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
        return this.apiClient.callApi('/v2.0/signal/attach/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    closeTradeInternal(id, authorization, opts) {
        return this.closeTradeInternalWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    closeTradeInternalWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling closeTradeInternal");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling closeTradeInternal");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "assetId": opts["assetId"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/signal/trades/{id}/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    detachSlaveFromMasterExternal(id, authorization, opts) {
        return this.detachSlaveFromMasterExternalWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    detachSlaveFromMasterExternalWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling detachSlaveFromMasterExternal");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling detachSlaveFromMasterExternal");
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
        return this.apiClient.callApi('/v2.0/signal/external/detach/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    detachSlaveFromMasterInternal(id, authorization, opts) {
        return this.detachSlaveFromMasterInternalWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    detachSlaveFromMasterInternalWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling detachSlaveFromMasterInternal");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling detachSlaveFromMasterInternal");
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
        return this.apiClient.callApi('/v2.0/signal/detach/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/signal/trades/open', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        let returnType = ItemsViewModelSignalTradingEvent;
        return this.apiClient.callApi('/v2.0/signal/trades/log', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getSubscriberAccountsForAsset(id, authorization) {
        return this.getSubscriberAccountsForAssetWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSubscriberAccountsForAssetWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getSubscriberAccountsForAsset");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getSubscriberAccountsForAsset");
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
        let returnType = ItemsViewModelTradingAccountDetails;
        return this.apiClient.callApi('/v2.0/signal/attach/{id}/accounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateExternalSubscriptionSettings(id, authorization, opts) {
        return this.updateExternalSubscriptionSettingsWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateExternalSubscriptionSettingsWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling updateExternalSubscriptionSettings");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateExternalSubscriptionSettings");
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
        return this.apiClient.callApi('/v2.0/signal/external/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/signal/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
