import ApiClient from "../ApiClient";
import { FundInvestInfo } from "../model/fundInvestInfo";
import { FundsListOld } from "../model/fundsListOld";
import { InvestmentEventViewModels } from "../model/investmentEventViewModels";
import { ManagerAssets } from "../model/managerAssets";
import { ManagerFundWithdrawInfoOld } from "../model/managerFundWithdrawInfoOld";
import { ManagerProfileDetails } from "../model/managerProfileDetails";
import { ManagerProgramWithdrawInfoOld } from "../model/managerProgramWithdrawInfoOld";
import { ProgramCreateResult } from "../model/programCreateResult";
import { ProgramInvestInfoOld } from "../model/programInvestInfoOld";
import { ProgramLevelInfo } from "../model/programLevelInfo";
import { ProgramMinimumDepositOld } from "../model/programMinimumDepositOld";
import { ProgramRequestsOld } from "../model/programRequestsOld";
import { ProgramsListOld } from "../model/programsListOld";
import { PublicProfile } from "../model/publicProfile";
import { TwoFactorAuthenticator } from "../model/twoFactorAuthenticator";
export class ManagerService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    cancelChangeBroker(authorization, opts) {
        return this.cancelChangeBrokerWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    cancelChangeBrokerWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling cancelChangeBroker");
        }
        let pathParams = {};
        let queryParams = {
            "programId": opts["programId"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/programs/broker/change/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/manager/funds/requests/{id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    cancelRequest_1(id, authorization) {
        return this.cancelRequest_1WithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    cancelRequest_1WithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling cancelRequest_0");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling cancelRequest_0");
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
        return this.apiClient.callApi('/v1.0/manager/programs/requests/{id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    changeBroker(authorization, opts) {
        return this.changeBrokerWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    changeBrokerWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["request"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling changeBroker");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/programs/broker/change', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    changeProgramPassword(id, authorization, opts) {
        return this.changeProgramPasswordWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    changeProgramPasswordWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling changeProgramPassword");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling changeProgramPassword");
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
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/password/change', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    closeCurrentPeriod(id, authorization) {
        return this.closeCurrentPeriodWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    closeCurrentPeriodWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling closeCurrentPeriod");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling closeCurrentPeriod");
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
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/period/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    closeFund(id, authorization, opts) {
        return this.closeFundWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    closeFundWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling closeFund");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling closeFund");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "twoFactorCode": opts["twoFactorCode"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/funds/{id}/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    closeInvestmentProgram(id, authorization, opts) {
        return this.closeInvestmentProgramWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    closeInvestmentProgramWithHttpInfo(id, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling closeInvestmentProgram");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling closeInvestmentProgram");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {
            "twoFactorCode": opts["twoFactorCode"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    confirmProgram2FA(authorization, opts) {
        return this.confirmProgram2FAWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    confirmProgram2FAWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling confirmProgram2FA");
        }
        let pathParams = {};
        let queryParams = {
            "programId": opts["programId"],
            "code": opts["code"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/programs/2fa/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    createFund(authorization, opts) {
        return this.createFundWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    createFundWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["request"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling createFund");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/funds/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    createProgram(authorization, opts) {
        return this.createProgramWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    createProgramWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["request"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling createProgram");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProgramCreateResult;
        return this.apiClient.callApi('/v1.0/manager/programs/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/manager/investments/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundInvestInfo(id, currency, authorization) {
        return this.getFundInvestInfoWithHttpInfo(id, currency, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundInvestInfoWithHttpInfo(id, currency, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFundInvestInfo");
        }
        if (currency === undefined || currency === null) {
            throw new Error("Missing the required parameter \"currency\" when calling getFundInvestInfo");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getFundInvestInfo");
        }
        let pathParams = {
            "id": id,
            "currency": currency
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = FundInvestInfo;
        return this.apiClient.callApi('/v1.0/manager/funds/{id}/invest/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundInvestment(authorization) {
        return this.getFundInvestmentWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundInvestmentWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getFundInvestment");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'number';
        return this.apiClient.callApi('/v1.0/manager/funds/investment/amount', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFundWithdrawInfo(id, currency, authorization) {
        return this.getFundWithdrawInfoWithHttpInfo(id, currency, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundWithdrawInfoWithHttpInfo(id, currency, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getFundWithdrawInfo");
        }
        if (currency === undefined || currency === null) {
            throw new Error("Missing the required parameter \"currency\" when calling getFundWithdrawInfo");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getFundWithdrawInfo");
        }
        let pathParams = {
            "id": id,
            "currency": currency
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ManagerFundWithdrawInfoOld;
        return this.apiClient.callApi('/v1.0/manager/funds/{id}/withdraw/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getLevelsCalculator(id, authorization) {
        return this.getLevelsCalculatorWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getLevelsCalculatorWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getLevelsCalculator");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getLevelsCalculator");
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
        let returnType = ProgramLevelInfo;
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/levels/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getManagerAssets(authorization) {
        return this.getManagerAssetsWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getManagerAssetsWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getManagerAssets");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ManagerAssets;
        return this.apiClient.callApi('/v1.0/manager/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getManagerDetails(id) {
        return this.getManagerDetailsWithHttpInfo(id)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getManagerDetailsWithHttpInfo(id) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getManagerDetails");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ManagerProfileDetails;
        return this.apiClient.callApi('/v1.0/manager/{id}/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getManagerFunds(authorization, opts) {
        return this.getManagerFundsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getManagerFundsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getManagerFunds");
        }
        let pathParams = {};
        let queryParams = {
            "Sorting": opts["sorting"],
            "Currency": opts["currency"],
            "From": opts["from"],
            "To": opts["to"],
            "ChartPointsCount": opts["chartPointsCount"],
            "CurrencySecondary": opts["currencySecondary"],
            "ActionStatus": opts["actionStatus"],
            "DashboardActionStatus": opts["dashboardActionStatus"],
            "IsHideInList": opts["isHideInList"],
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
        let returnType = FundsListOld;
        return this.apiClient.callApi('/v1.0/manager/funds', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getManagerProfile(id) {
        return this.getManagerProfileWithHttpInfo(id)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getManagerProfileWithHttpInfo(id) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getManagerProfile");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = PublicProfile;
        return this.apiClient.callApi('/v1.0/manager/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getManagerPrograms(authorization, opts) {
        return this.getManagerProgramsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getManagerProgramsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getManagerPrograms");
        }
        let pathParams = {};
        let queryParams = {
            "Sorting": opts["sorting"],
            "Currency": opts["currency"],
            "From": opts["from"],
            "To": opts["to"],
            "ChartPointsCount": opts["chartPointsCount"],
            "CurrencySecondary": opts["currencySecondary"],
            "ActionStatus": opts["actionStatus"],
            "DashboardActionStatus": opts["dashboardActionStatus"],
            "IsHideInList": opts["isHideInList"],
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
        let returnType = ProgramsListOld;
        return this.apiClient.callApi('/v1.0/manager/programs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgram2FA(authorization, opts) {
        return this.getProgram2FAWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgram2FAWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgram2FA");
        }
        let pathParams = {};
        let queryParams = {
            "programId": opts["programId"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = TwoFactorAuthenticator;
        return this.apiClient.callApi('/v1.0/manager/programs/2fa/get', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramInvestInfo(id, currency, authorization) {
        return this.getProgramInvestInfoWithHttpInfo(id, currency, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramInvestInfoWithHttpInfo(id, currency, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramInvestInfo");
        }
        if (currency === undefined || currency === null) {
            throw new Error("Missing the required parameter \"currency\" when calling getProgramInvestInfo");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgramInvestInfo");
        }
        let pathParams = {
            "id": id,
            "currency": currency
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProgramInvestInfoOld;
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/invest/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramInvestment(authorization, opts) {
        return this.getProgramInvestmentWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramInvestmentWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgramInvestment");
        }
        let pathParams = {};
        let queryParams = {
            "brokerTradingAccount": opts["brokerTradingAccount"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProgramMinimumDepositOld;
        return this.apiClient.callApi('/v1.0/manager/programs/investment/amount', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramRequests(id, skip, take, authorization) {
        return this.getProgramRequestsWithHttpInfo(id, skip, take, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramRequestsWithHttpInfo(id, skip, take, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramRequests");
        }
        if (skip === undefined || skip === null) {
            throw new Error("Missing the required parameter \"skip\" when calling getProgramRequests");
        }
        if (take === undefined || take === null) {
            throw new Error("Missing the required parameter \"take\" when calling getProgramRequests");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgramRequests");
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
        let returnType = ProgramRequestsOld;
        return this.apiClient.callApi('/v1.0/manager/funds/{id}/requests/{skip}/{take}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramRequests_2(id, skip, take, authorization) {
        return this.getProgramRequests_2WithHttpInfo(id, skip, take, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramRequests_2WithHttpInfo(id, skip, take, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramRequests_0");
        }
        if (skip === undefined || skip === null) {
            throw new Error("Missing the required parameter \"skip\" when calling getProgramRequests_0");
        }
        if (take === undefined || take === null) {
            throw new Error("Missing the required parameter \"take\" when calling getProgramRequests_0");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgramRequests_0");
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
        let returnType = ProgramRequestsOld;
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/requests/{skip}/{take}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramWithdrawInfo(id, currency, authorization) {
        return this.getProgramWithdrawInfoWithHttpInfo(id, currency, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramWithdrawInfoWithHttpInfo(id, currency, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgramWithdrawInfo");
        }
        if (currency === undefined || currency === null) {
            throw new Error("Missing the required parameter \"currency\" when calling getProgramWithdrawInfo");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgramWithdrawInfo");
        }
        let pathParams = {
            "id": id,
            "currency": currency
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ManagerProgramWithdrawInfoOld;
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/withdraw/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getRequests(skip, take, authorization, opts) {
        return this.getRequestsWithHttpInfo(skip, take, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getRequestsWithHttpInfo(skip, take, authorization, opts = {}) {
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
        let queryParams = {
            "assetType": opts["assetType"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProgramRequestsOld;
        return this.apiClient.callApi('/v1.0/manager/requests/{skip}/{take}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    investIntoFund(id, amount, authorization, opts) {
        return this.investIntoFundWithHttpInfo(id, amount, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    investIntoFundWithHttpInfo(id, amount, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling investIntoFund");
        }
        if (amount === undefined || amount === null) {
            throw new Error("Missing the required parameter \"amount\" when calling investIntoFund");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling investIntoFund");
        }
        let pathParams = {
            "id": id,
            "amount": amount
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
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/funds/{id}/invest/{amount}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    investIntoProgram(id, amount, authorization, opts) {
        return this.investIntoProgramWithHttpInfo(id, amount, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    investIntoProgramWithHttpInfo(id, amount, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling investIntoProgram");
        }
        if (amount === undefined || amount === null) {
            throw new Error("Missing the required parameter \"amount\" when calling investIntoProgram");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling investIntoProgram");
        }
        let pathParams = {
            "id": id,
            "amount": amount
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
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/invest/{amount}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateFundAssets(id, authorization, opts) {
        return this.updateFundAssetsWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateFundAssetsWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["assets"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling updateFundAssets");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateFundAssets");
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
        return this.apiClient.callApi('/v1.0/manager/funds/{id}/assets/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateInvestmentProgram(id, authorization, opts) {
        return this.updateInvestmentProgramWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateInvestmentProgramWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling updateInvestmentProgram");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateInvestmentProgram");
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
        return this.apiClient.callApi('/v1.0/manager/funds/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateInvestmentProgram_3(id, authorization, opts) {
        return this.updateInvestmentProgram_3WithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateInvestmentProgram_3WithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling updateInvestmentProgram_0");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateInvestmentProgram_0");
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
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateProgramSignalSettings(authorization, opts) {
        return this.updateProgramSignalSettingsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateProgramSignalSettingsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateProgramSignalSettings");
        }
        let pathParams = {};
        let queryParams = {
            "ProgramId": opts["programId"],
            "VolumeFee": opts["volumeFee"],
            "SuccessFee": opts["successFee"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/signal/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateProgramSignalSettings_4(authorization, opts) {
        return this.updateProgramSignalSettings_4WithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateProgramSignalSettings_4WithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateProgramSignalSettings_0");
        }
        let pathParams = {};
        let queryParams = {
            "ProgramId": opts["programId"],
            "VolumeFee": opts["volumeFee"],
            "SuccessFee": opts["successFee"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/signal/edit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    withdrawFromFund(id, percent, authorization, opts) {
        return this.withdrawFromFundWithHttpInfo(id, percent, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    withdrawFromFundWithHttpInfo(id, percent, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling withdrawFromFund");
        }
        if (percent === undefined || percent === null) {
            throw new Error("Missing the required parameter \"percent\" when calling withdrawFromFund");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling withdrawFromFund");
        }
        let pathParams = {
            "id": id,
            "percent": percent
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
        let returnType = null;
        return this.apiClient.callApi('/v1.0/manager/funds/{id}/withdraw/{percent}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    withdrawFromProgram(id, amount, authorization) {
        return this.withdrawFromProgramWithHttpInfo(id, amount, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    withdrawFromProgramWithHttpInfo(id, amount, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling withdrawFromProgram");
        }
        if (amount === undefined || amount === null) {
            throw new Error("Missing the required parameter \"amount\" when calling withdrawFromProgram");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling withdrawFromProgram");
        }
        let pathParams = {
            "id": id,
            "amount": amount
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
        return this.apiClient.callApi('/v1.0/manager/programs/{id}/withdraw/multi/{amount}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
