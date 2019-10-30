import ApiClient from "../ApiClient";
import { DashboardChartValue } from "../model/DashboardChartValue";
import { DashboardSummary } from "../model/DashboardSummary";
import { FundInvestInfo } from "../model/FundInvestInfo";
import { FundWithdrawInfoOld } from "../model/FundWithdrawInfoOld";
import { FundsListOld } from "../model/FundsListOld";
import { InvestmentEventViewModels } from "../model/InvestmentEventViewModels";
import { ProgramInvestInfoOld } from "../model/ProgramInvestInfoOld";
import { ProgramRequestsOld } from "../model/ProgramRequestsOld";
import { ProgramWithdrawInfoOld } from "../model/ProgramWithdrawInfoOld";
import { ProgramsListOld } from "../model/ProgramsListOld";
import { SignalsList } from "../model/SignalsList";
export class InvestorApi {
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
        return this.apiClient.callApi('/v1.0/investor/programs/requests/{id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getDashboard(authorization, opts) {
        return this.getDashboardWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getDashboardWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getDashboard");
        }
        let pathParams = {};
        let queryParams = {
            "chartCurrency": opts["chartCurrency"],
            "From": opts["from"],
            "To": opts["to"],
            "BalancePoints": opts["balancePoints"],
            "ProgramsPoints": opts["programsPoints"],
            "eventsTake": opts["eventsTake"],
            "requestsSkip": opts["requestsSkip"],
            "requestsTake": opts["requestsTake"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = DashboardSummary;
        return this.apiClient.callApi('/v1.0/investor', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/investments/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/funds/{id}/invest/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        let returnType = FundWithdrawInfoOld;
        return this.apiClient.callApi('/v1.0/investor/funds/{id}/withdraw/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getFunds(authorization, opts) {
        return this.getFundsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getFundsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getFunds");
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
        return this.apiClient.callApi('/v1.0/investor/funds', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPortfolioChart(authorization, opts) {
        return this.getPortfolioChartWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getPortfolioChartWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getPortfolioChart");
        }
        let pathParams = {};
        let queryParams = {
            "currency": opts["currency"],
            "From": opts["from"],
            "To": opts["to"],
            "BalancePoints": opts["balancePoints"],
            "ProgramsPoints": opts["programsPoints"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = DashboardChartValue;
        return this.apiClient.callApi('/v1.0/investor/portfolio/chart', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/programs/{id}/invest/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/funds/{id}/requests/{skip}/{take}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgramRequests_1(id, skip, take, authorization) {
        return this.getProgramRequests_1WithHttpInfo(id, skip, take, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramRequests_1WithHttpInfo(id, skip, take, authorization) {
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
        return this.apiClient.callApi('/v1.0/investor/programs/{id}/requests/{skip}/{take}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        let returnType = ProgramWithdrawInfoOld;
        return this.apiClient.callApi('/v1.0/investor/programs/{id}/withdraw/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getPrograms(authorization, opts) {
        return this.getProgramsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgramsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getPrograms");
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
        return this.apiClient.callApi('/v1.0/investor/programs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        let returnType = ProgramRequestsOld;
        return this.apiClient.callApi('/v1.0/investor/requests/{skip}/{take}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getSignalPrograms(authorization, opts) {
        return this.getSignalProgramsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSignalProgramsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getSignalPrograms");
        }
        let pathParams = {};
        let queryParams = {
            "Sorting": opts["sorting"],
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
        let returnType = SignalsList;
        return this.apiClient.callApi('/v1.0/investor/signals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/funds/{id}/invest/{amount}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/programs/{id}/invest/{amount}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/programs/{id}/reinvest/off', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/programs/{id}/reinvest/on', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/funds/{id}/withdraw/{percent}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/investor/programs/{id}/withdraw/multi', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    withdrawFromProgram_2(id, amount, authorization, opts) {
        return this.withdrawFromProgram_2WithHttpInfo(id, amount, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    withdrawFromProgram_2WithHttpInfo(id, amount, authorization, opts = {}) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling withdrawFromProgram_0");
        }
        if (amount === undefined || amount === null) {
            throw new Error("Missing the required parameter \"amount\" when calling withdrawFromProgram_0");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling withdrawFromProgram_0");
        }
        let pathParams = {
            "id": id,
            "amount": amount
        };
        let queryParams = {
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
        return this.apiClient.callApi('/v1.0/investor/programs/{id}/withdraw/multi/{amount}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
