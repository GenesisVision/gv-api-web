import ApiClient from "../ApiClient";
import { ItemsViewModelCopyTradingAccountInfo } from "../model/ItemsViewModelCopyTradingAccountInfo";
export class CopytradingApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getSignalAssets(opts) {
        return this.getSignalAssetsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSignalAssetsWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "Tags": this.apiClient.buildCollectionParam(opts["tags"], "multi"),
            "StatisticDateFrom": opts["statisticDateFrom"],
            "StatisticDateTo": opts["statisticDateTo"],
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
        let returnType = ItemsViewModelCopyTradingAccountInfo;
        return this.apiClient.callApi('/v2.0/copytrading', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
