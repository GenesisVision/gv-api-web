import ApiClient from "../ApiClient";
import { ItemsViewModelCopyTradingDetailsList } from "../model/ItemsViewModelCopyTradingDetailsList";
export class FollowApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getFollowAssets(opts) {
        return this.getFollowAssetsWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFollowAssetsWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "ShowIn": opts["showIn"],
            "Tags": this.apiClient.buildCollectionParam(opts["tags"], "multi"),
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
        let returnType = ItemsViewModelCopyTradingDetailsList;
        return this.apiClient.callApi('/v2.0/follow', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
