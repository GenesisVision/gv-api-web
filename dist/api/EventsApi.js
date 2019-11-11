import ApiClient from "../ApiClient";
import { InvestmentEventViewModels } from "../model/InvestmentEventViewModels";
export class EventsApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getEvents(authorization, opts) {
        return this.getEventsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getEventsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getEvents");
        }
        let pathParams = {};
        let queryParams = {
            "EventLocation": opts["eventLocation"],
            "AssetId": opts["assetId"],
            "From": opts["from"],
            "To": opts["to"],
            "EventType": opts["eventType"],
            "AssetType": opts["assetType"],
            "AssetsIds": this.apiClient.buildCollectionParam(opts["assetsIds"], "multi"),
            "ForceFilterByIds": opts["forceFilterByIds"],
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
        let returnType = InvestmentEventViewModels;
        return this.apiClient.callApi('/v2.0/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
