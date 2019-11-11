import ApiClient from "../ApiClient";
import { ItemsViewModelReferralFriend } from "../model/ItemsViewModelReferralFriend";
import { ItemsViewModelRewardDetails } from "../model/ItemsViewModelRewardDetails";
import { PartnershipDetails } from "../model/PartnershipDetails";
export class PartnershipApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    exportHistory(authorization, opts) {
        return this.exportHistoryWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    exportHistoryWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling exportHistory");
        }
        let pathParams = {};
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
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
        return this.apiClient.callApi('/v2.0/partnership/rewards/history/export', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getDetails(authorization, opts) {
        return this.getDetailsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getDetailsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getDetails");
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
        let returnType = PartnershipDetails;
        return this.apiClient.callApi('/v2.0/partnership/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getReferrals(authorization, opts) {
        return this.getReferralsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getReferralsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getReferrals");
        }
        let pathParams = {};
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
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
        let returnType = ItemsViewModelReferralFriend;
        return this.apiClient.callApi('/v2.0/partnership/referrals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getRewardsHistory(authorization, opts) {
        return this.getRewardsHistoryWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getRewardsHistoryWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getRewardsHistory");
        }
        let pathParams = {};
        let queryParams = {
            "DateFrom": opts["dateFrom"],
            "DateTo": opts["dateTo"],
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
        let returnType = ItemsViewModelRewardDetails;
        return this.apiClient.callApi('/v2.0/partnership/rewards/history', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
