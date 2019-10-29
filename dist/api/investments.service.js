import ApiClient from "../ApiClient";
import { FundWithdrawInfo } from "../model/fundWithdrawInfo";
import { ItemsViewModelAssetInvestmentRequest } from "../model/itemsViewModelAssetInvestmentRequest";
import { ProgramWithdrawInfo } from "../model/programWithdrawInfo";
export class InvestmentsService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    cancelRequest(id, authorization) {
        return this.cancelRequestWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    cancelRequestWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling cancelRequest");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling cancelRequest");
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
        let returnType = null;
        return this.apiClient.callApi('/v2.0/investments/requests/{id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundWithdrawInfo(id, authorization, opts) {
        return this.getFundWithdrawInfoWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundWithdrawInfoWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFundWithdrawInfo");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getFundWithdrawInfo");
        }
        let pathParams = {
            "id": id
        };
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
        let returnType = FundWithdrawInfo;
        return this.apiClient.callApi('/v2.0/investments/funds/{id}/withdraw/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramWithdrawInfo(id, authorization) {
        return this.getProgramWithdrawInfoWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramWithdrawInfoWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramWithdrawInfo");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgramWithdrawInfo");
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
        let returnType = ProgramWithdrawInfo;
        return this.apiClient.callApi('/v2.0/investments/programs/{id}/withdraw/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getRequests(skip, take, authorization) {
        return this.getRequestsWithHttpInfo(skip, take, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getRequestsWithHttpInfo(skip, take, authorization) {
        let postBody = null;
        if (skip === undefined || skip === null) {
            throw new Error("Missing the required parameter \"skip\" when calling getRequests");
        }
        if (take === undefined || take === null) {
            throw new Error("Missing the required parameter \"take\" when calling getRequests");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getRequests");
        }
        let pathParams = {
            "skip": skip,
            "take": take
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ItemsViewModelAssetInvestmentRequest;
        return this.apiClient.callApi('/v2.0/investments/requests/{skip}/{take}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getRequestsByProgram(id, skip, take, authorization) {
        return this.getRequestsByProgramWithHttpInfo(id, skip, take, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getRequestsByProgramWithHttpInfo(id, skip, take, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getRequestsByProgram");
        }
        if (skip === undefined || skip === null) {
            throw new Error("Missing the required parameter \"skip\" when calling getRequestsByProgram");
        }
        if (take === undefined || take === null) {
            throw new Error("Missing the required parameter \"take\" when calling getRequestsByProgram");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getRequestsByProgram");
        }
        let pathParams = {
            "id": id,
            "skip": skip,
            "take": take
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ItemsViewModelAssetInvestmentRequest;
        return this.apiClient.callApi('/v2.0/investments/requests/{id}/{skip}/{take}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    investIntoFund(id, authorization, opts) {
        return this.investIntoFundWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    investIntoFundWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling investIntoFund");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling investIntoFund");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "amount": opts["amount"],
            "walletId": opts["walletId"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/investments/funds/{id}/invest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    investIntoProgram(id, authorization, opts) {
        return this.investIntoProgramWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    investIntoProgramWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling investIntoProgram");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling investIntoProgram");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "amount": opts["amount"],
            "walletId": opts["walletId"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/investments/programs/{id}/invest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    switchReinvestOff(id, authorization) {
        return this.switchReinvestOffWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    switchReinvestOffWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling switchReinvestOff");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling switchReinvestOff");
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
        let returnType = null;
        return this.apiClient.callApi('/v2.0/investments/programs/{id}/reinvest/off', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    switchReinvestOn(id, authorization) {
        return this.switchReinvestOnWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    switchReinvestOnWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling switchReinvestOn");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling switchReinvestOn");
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
        let returnType = null;
        return this.apiClient.callApi('/v2.0/investments/programs/{id}/reinvest/on', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    withdrawFromFund(id, authorization, opts) {
        return this.withdrawFromFundWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    withdrawFromFundWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling withdrawFromFund");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling withdrawFromFund");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "percent": opts["percent"],
            "currency": opts["currency"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/investments/funds/{id}/withdraw', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    withdrawFromProgram(id, authorization, opts) {
        return this.withdrawFromProgramWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    withdrawFromProgramWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling withdrawFromProgram");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling withdrawFromProgram");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "amount": opts["amount"],
            "withdrawAll": opts["withdrawAll"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/investments/programs/{id}/withdraw', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
