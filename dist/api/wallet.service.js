import ApiClient from "../ApiClient";
import { MultiWalletExternalTransactionsViewModel } from "../model/multiWalletExternalTransactionsViewModel";
import { MultiWalletTransactionsViewModel } from "../model/multiWalletTransactionsViewModel";
import { TransactionDetails } from "../model/transactionDetails";
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
        return this.apiClient.callApi('/v1.0/wallet/withdraw/request/cancel/{txId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/wallet/withdraw/request/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/wallet/withdraw/request/new', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/wallet/fee/gvtholding', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getMultiWalletTransactions(authorization, opts) {
        return this.getMultiWalletTransactionsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getMultiWalletTransactionsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getMultiWalletTransactions");
        }
        let pathParams = {};
        let queryParams = {
            "From": opts["from"],
            "To": opts["to"],
            "Type": opts["type"],
            "Currency": opts["currency"],
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
        let returnType = MultiWalletTransactionsViewModel;
        return this.apiClient.callApi('/v1.0/wallet/multi/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getTransactionDetails(id, authorization) {
        return this.getTransactionDetailsWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getTransactionDetailsWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getTransactionDetails");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getTransactionDetails");
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
        let returnType = TransactionDetails;
        return this.apiClient.callApi('/v1.0/wallet/transaction/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/wallet/withdraw/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getWalletExternalTransactions(authorization, opts) {
        return this.getWalletExternalTransactionsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getWalletExternalTransactionsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getWalletExternalTransactions");
        }
        let pathParams = {};
        let queryParams = {
            "From": opts["from"],
            "To": opts["to"],
            "Type": opts["type"],
            "Currency": opts["currency"],
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
        let returnType = MultiWalletExternalTransactionsViewModel;
        return this.apiClient.callApi('/v1.0/wallet/multi/transactions/external', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getWalletMultiAvailable(currency, authorization) {
        return this.getWalletMultiAvailableWithHttpInfo(currency, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getWalletMultiAvailableWithHttpInfo(currency, authorization) {
        let postBody = null;
        if (currency === undefined || currency === null) {
            throw new Error("Missing the required parameter \"currency\" when calling getWalletMultiAvailable");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getWalletMultiAvailable");
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
        return this.apiClient.callApi('/v1.0/wallet/multi/{currency}/available', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getWalletMultiSummary(currency, authorization) {
        return this.getWalletMultiSummaryWithHttpInfo(currency, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getWalletMultiSummaryWithHttpInfo(currency, authorization) {
        let postBody = null;
        if (currency === undefined || currency === null) {
            throw new Error("Missing the required parameter \"currency\" when calling getWalletMultiSummary");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getWalletMultiSummary");
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
        return this.apiClient.callApi('/v1.0/wallet/multi/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/wallet/withdraw/request/resend/{txId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/wallet/paygvtfee/off', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/wallet/paygvtfee/on', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/wallet/transfer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v1.0/wallet/deposit/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
