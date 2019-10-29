import ApiClient from "../ApiClient";
import { UserCommissionData } from "../model/userCommissionData";
import { WalletDepositSummary } from "../model/walletDepositSummary";
import { WalletMultiAvailable } from "../model/walletMultiAvailable";
import { WalletMultiSummary } from "../model/walletMultiSummary";
import { WithdrawalSummary } from "../model/withdrawalSummary";
export class WalletService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    cancelWithdrawalRequest(txId, authorization) {
        return this.cancelWithdrawalRequestWithHttpInfo(txId, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    cancelWithdrawalRequestWithHttpInfo(txId, authorization) {
        let postBody = null;
        if (txId === undefined || txId === null) {
            throw new Error("Missing the required parameter \"txId\" when calling cancelWithdrawalRequest");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling cancelWithdrawalRequest");
        }
        let pathParams = {
            "txId": txId
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
        return this.apiClient.callApi('/v2.0/wallet/withdraw/request/cancel/{txId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    confirmWithdrawalRequestByCode(opts) {
        return this.confirmWithdrawalRequestByCodeWithHttpInfo(opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    confirmWithdrawalRequestByCodeWithHttpInfo(opts = {}) {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            "requestId": opts["requestId"],
            "code": opts["code"]
        };
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v2.0/wallet/withdraw/request/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    createWithdrawalRequest(authorization, opts) {
        return this.createWithdrawalRequestWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    createWithdrawalRequestWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling createWithdrawalRequest");
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
        return this.apiClient.callApi('/v2.0/wallet/withdraw/request/new', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getGMCommissionData(authorization) {
        return this.getGMCommissionDataWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getGMCommissionDataWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getGMCommissionData");
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
        let returnType = UserCommissionData;
        return this.apiClient.callApi('/v2.0/wallet/fee/gvtholding', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getUserWithdrawalSummary(authorization) {
        return this.getUserWithdrawalSummaryWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getUserWithdrawalSummaryWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getUserWithdrawalSummary");
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
        let returnType = WithdrawalSummary;
        return this.apiClient.callApi('/v2.0/wallet/withdraw/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getWalletAvailable(currency, authorization) {
        return this.getWalletAvailableWithHttpInfo(currency, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getWalletAvailableWithHttpInfo(currency, authorization) {
        let postBody = null;
        if (currency === undefined || currency === null) {
            throw new Error("Missing the required parameter \"currency\" when calling getWalletAvailable");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getWalletAvailable");
        }
        let pathParams = {
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
        let returnType = WalletMultiAvailable;
        return this.apiClient.callApi('/v2.0/wallet/{currency}/available', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getWalletSummary(currency, authorization) {
        return this.getWalletSummaryWithHttpInfo(currency, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getWalletSummaryWithHttpInfo(currency, authorization) {
        let postBody = null;
        if (currency === undefined || currency === null) {
            throw new Error("Missing the required parameter \"currency\" when calling getWalletSummary");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getWalletSummary");
        }
        let pathParams = {
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
        let returnType = WalletMultiSummary;
        return this.apiClient.callApi('/v2.0/wallet/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    resendWithdrawalRequestEmail(txId, authorization) {
        return this.resendWithdrawalRequestEmailWithHttpInfo(txId, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    resendWithdrawalRequestEmailWithHttpInfo(txId, authorization) {
        let postBody = null;
        if (txId === undefined || txId === null) {
            throw new Error("Missing the required parameter \"txId\" when calling resendWithdrawalRequestEmail");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling resendWithdrawalRequestEmail");
        }
        let pathParams = {
            "txId": txId
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
        return this.apiClient.callApi('/v2.0/wallet/withdraw/request/resend/{txId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    switchPayFeeInGvtOff(authorization) {
        return this.switchPayFeeInGvtOffWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    switchPayFeeInGvtOffWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling switchPayFeeInGvtOff");
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
        let returnType = null;
        return this.apiClient.callApi('/v2.0/wallet/paygvtfee/off', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    switchPayFeeInGvtOn(authorization) {
        return this.switchPayFeeInGvtOnWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    switchPayFeeInGvtOnWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling switchPayFeeInGvtOn");
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
        let returnType = null;
        return this.apiClient.callApi('/v2.0/wallet/paygvtfee/on', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    transfer(authorization, opts) {
        return this.transferWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    transferWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["request"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling transfer");
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
        return this.apiClient.callApi('/v2.0/wallet/transfer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateDepositWallets(authorization) {
        return this.updateDepositWalletsWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateDepositWalletsWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateDepositWallets");
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
        let returnType = WalletDepositSummary;
        return this.apiClient.callApi('/v2.0/wallet/deposit/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
