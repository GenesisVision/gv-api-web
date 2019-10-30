import ApiClient from "../ApiClient";
import { CaptchaDetails } from "../model/CaptchaDetails";
import { LevelsParamsInfo } from "../model/LevelsParamsInfo";
import { PlatformInfoOld } from "../model/PlatformInfoOld";
import { PlatformStatisticOld } from "../model/PlatformStatisticOld";
import { ProgramsLevelsInfo } from "../model/ProgramsLevelsInfo";
export class PlatformApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getCaptchaModel(route, opts) {
        return this.getCaptchaModelWithHttpInfo(route, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getCaptchaModelWithHttpInfo(route, opts = {}) {
        let postBody = null;
        if (route === undefined || route === null) {
            throw new Error("Missing the required parameter \"route\" when calling getCaptchaModel");
        }
        let pathParams = {};
        let queryParams = {
            "Route": route,
            "Client": opts["client"],
            "Version": opts["version"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = CaptchaDetails;
        return this.apiClient.callApi('/v1.0/platform/riskcontrol', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getLevelsParams(opts) {
        return this.getLevelsParamsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getLevelsParamsWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "currency": opts["currency"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = LevelsParamsInfo;
        return this.apiClient.callApi('/v1.0/platform/levels/parameters', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPlatformDate() {
        return this.getPlatformDateWithHttpInfo()
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPlatformDateWithHttpInfo() {
        let postBody = null;
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v1.0/platform/date', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPlatformStatistic() {
        return this.getPlatformStatisticWithHttpInfo()
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPlatformStatisticWithHttpInfo() {
        let postBody = null;
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = PlatformStatisticOld;
        return this.apiClient.callApi('/v1.0/platform/statistic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPlatformStatus() {
        return this.getPlatformStatusWithHttpInfo()
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPlatformStatusWithHttpInfo() {
        let postBody = null;
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = PlatformInfoOld;
        return this.apiClient.callApi('/v1.0/platform/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramsLevels(opts) {
        return this.getProgramsLevelsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramsLevelsWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "currency": opts["currency"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProgramsLevelsInfo;
        return this.apiClient.callApi('/v1.0/platform/levels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
