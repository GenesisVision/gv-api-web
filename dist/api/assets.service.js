import ApiClient from "../ApiClient";
import { ProgramCreateResult } from "../model/programCreateResult";
import { ProgramLevelInfo } from "../model/programLevelInfo";
import { TwoFactorAuthenticator } from "../model/twoFactorAuthenticator";
export class AssetsService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    cancelChangeBroker(id, authorization) {
        return this.cancelChangeBrokerWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    cancelChangeBrokerWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling cancelChangeBroker");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling cancelChangeBroker");
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
        return this.apiClient.callApi('/v2.0/assets/programs/{id}/broker/change/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    changeBroker(id, authorization, opts) {
        return this.changeBrokerWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    changeBrokerWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["request"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling changeBroker");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling changeBroker");
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
        return this.apiClient.callApi('/v2.0/assets/programs/{id}/broker/change', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/assets/programs/{id}/password/change', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/assets/programs/{id}/period/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    closeFund(id, authorization, opts) {
        return this.closeFundWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    closeFundWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling closeFund");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling closeFund");
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
        return this.apiClient.callApi('/v2.0/assets/funds/{id}/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    closeInvestmentProgram(id, authorization, opts) {
        return this.closeInvestmentProgramWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    closeInvestmentProgramWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling closeInvestmentProgram");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling closeInvestmentProgram");
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
        return this.apiClient.callApi('/v2.0/assets/programs/{id}/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    confirmProgram2FA(id, authorization, opts) {
        return this.confirmProgram2FAWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    confirmProgram2FAWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling confirmProgram2FA");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling confirmProgram2FA");
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
        return this.apiClient.callApi('/v2.0/assets/programs/{id}/2fa/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/assets/funds/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/assets/programs/{id}/levels/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProgram2FA(id, authorization) {
        return this.getProgram2FAWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProgram2FAWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getProgram2FA");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProgram2FA");
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
        let returnType = TwoFactorAuthenticator;
        return this.apiClient.callApi('/v2.0/assets/programs/{id}/2fa/get', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    makeAccountProgram(authorization) {
        return this.makeAccountProgramWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    makeAccountProgramWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling makeAccountProgram");
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
        let returnType = ProgramCreateResult;
        return this.apiClient.callApi('/v2.0/assets/programs/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateAsset(id, authorization, opts) {
        return this.updateAssetWithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateAssetWithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling updateAsset");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateAsset");
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
        return this.apiClient.callApi('/v2.0/assets/funds/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateAsset_1(id, authorization, opts) {
        return this.updateAsset_1WithHttpInfo(id, authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateAsset_1WithHttpInfo(id, authorization, opts = {}) {
        let postBody = opts["model"];
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling updateAsset_0");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateAsset_0");
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
        return this.apiClient.callApi('/v2.0/assets/programs/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/assets/funds/{id}/assets/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
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
        return this.apiClient.callApi('/v2.0/assets/signal/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateProgramSignalSettings_2(authorization, opts) {
        return this.updateProgramSignalSettings_2WithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateProgramSignalSettings_2WithHttpInfo(authorization, opts = {}) {
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
        return this.apiClient.callApi('/v2.0/assets/signal/edit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
