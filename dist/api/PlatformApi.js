import ApiClient from "../ApiClient";
import { AssetInfo } from "../model/AssetInfo";
import { CaptchaDetails } from "../model/CaptchaDetails";
import { LandingInfo } from "../model/LandingInfo";
import { LevelsParamsInfo } from "../model/LevelsParamsInfo";
import { PlatformAssets } from "../model/PlatformAssets";
import { PlatformEvents } from "../model/PlatformEvents";
import { PlatformInfo } from "../model/PlatformInfo";
import { ProgramsLevelsInfo } from "../model/ProgramsLevelsInfo";
import { SiteMapInfo } from "../model/SiteMapInfo";
export class PlatformApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getAllPlatformAssets() {
        return this.getAllPlatformAssetsWithHttpInfo()
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getAllPlatformAssetsWithHttpInfo() {
        let postBody = null;
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = PlatformAssets;
        return this.apiClient.callApi('/v2.0/platform/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPlatformAssetInfo(asset) {
        return this.getPlatformAssetInfoWithHttpInfo(asset)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPlatformAssetInfoWithHttpInfo(asset) {
        let postBody = null;
        if (asset === undefined || asset === null) {
            throw new Error("Missing the required parameter \"asset\" when calling getPlatformAssetInfo");
        }
        let pathParams = {
            "asset": asset
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = AssetInfo;
        return this.apiClient.callApi('/v2.0/platform/asset/{asset}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/platform/date', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPlatformEvents(opts) {
        return this.getPlatformEventsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPlatformEventsWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "take": opts["take"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = PlatformEvents;
        return this.apiClient.callApi('/v2.0/platform/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPlatformInfo() {
        return this.getPlatformInfoWithHttpInfo()
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPlatformInfoWithHttpInfo() {
        let postBody = null;
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = PlatformInfo;
        return this.apiClient.callApi('/v2.0/platform/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPlatformLandingInfo(opts) {
        return this.getPlatformLandingInfoWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPlatformLandingInfoWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "eventsTake": opts["eventsTake"],
            "followTake": opts["followTake"],
            "programsTake": opts["programsTake"],
            "fundsTake": opts["fundsTake"],
            "newsTake": opts["newsTake"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = LandingInfo;
        return this.apiClient.callApi('/v2.0/platform/landing', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramLevels(opts) {
        return this.getProgramLevelsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramLevelsWithHttpInfo(opts = {}) {
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
        return this.apiClient.callApi('/v2.0/platform/levels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramLevelsParams(opts) {
        return this.getProgramLevelsParamsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramLevelsParamsWithHttpInfo(opts = {}) {
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
        return this.apiClient.callApi('/v2.0/platform/levels/parameters', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getRiskControlInfo(route, opts) {
        return this.getRiskControlInfoWithHttpInfo(route, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getRiskControlInfoWithHttpInfo(route, opts = {}) {
        let postBody = null;
        if (route === undefined || route === null) {
            throw new Error("Missing the required parameter \"route\" when calling getRiskControlInfo");
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
        return this.apiClient.callApi('/v2.0/platform/riskcontrol', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getSitemapInfo() {
        return this.getSitemapInfoWithHttpInfo()
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSitemapInfoWithHttpInfo() {
        let postBody = null;
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = SiteMapInfo;
        return this.apiClient.callApi('/v2.0/platform/sitemap', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
