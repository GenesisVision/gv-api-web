import ApiClient from "../ApiClient";
import { RatesModel } from "../model/ratesModel";
export class RateService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getRate(from, to) {
        return this.getRateWithHttpInfo(from, to)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getRateWithHttpInfo(from, to) {
        let postBody = null;
        if (from === undefined || from === null) {
            throw new Error("Missing the required parameter \"from\" when calling getRate");
        }
        if (to === undefined || to === null) {
            throw new Error("Missing the required parameter \"to\" when calling getRate");
        }
        let pathParams = {
            "from": from,
            "to": to
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'number';
        return this.apiClient.callApi('/v1.0/rate/{from}/{to}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getRateExchange(exchange, from, to) {
        return this.getRateExchangeWithHttpInfo(exchange, from, to)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getRateExchangeWithHttpInfo(exchange, from, to) {
        let postBody = null;
        if (exchange === undefined || exchange === null) {
            throw new Error("Missing the required parameter \"exchange\" when calling getRateExchange");
        }
        if (from === undefined || from === null) {
            throw new Error("Missing the required parameter \"from\" when calling getRateExchange");
        }
        if (to === undefined || to === null) {
            throw new Error("Missing the required parameter \"to\" when calling getRateExchange");
        }
        let pathParams = {
            "exchange": exchange,
            "from": from,
            "to": to
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'number';
        return this.apiClient.callApi('/v1.0/rate/{exchange}/{from}/{to}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getRates(opts) {
        return this.getRatesWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getRatesWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "from": this.apiClient.buildCollectionParam(opts["from"], "multi"),
            "to": this.apiClient.buildCollectionParam(opts["to"], "multi")
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = RatesModel;
        return this.apiClient.callApi('/v1.0/rate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
