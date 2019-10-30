import ApiClient from "../ApiClient";
import { BrokersInfoOld } from "../model/brokersInfoOld";
import { BrokersProgramInfoOld } from "../model/brokersProgramInfoOld";
export class BrokersService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    getBrokers() {
        return this.getBrokersWithHttpInfo()
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getBrokersWithHttpInfo() {
        let postBody = null;
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = BrokersInfoOld;
        return this.apiClient.callApi('/v1.0/brokers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getBrokersForProgram(programId) {
        return this.getBrokersForProgramWithHttpInfo(programId)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getBrokersForProgramWithHttpInfo(programId) {
        let postBody = null;
        if (programId === undefined || programId === null) {
            throw new Error("Missing the required parameter \"programId\" when calling getBrokersForProgram");
        }
        let pathParams = {
            "programId": programId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = BrokersProgramInfoOld;
        return this.apiClient.callApi('/v1.0/brokers/{programId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
