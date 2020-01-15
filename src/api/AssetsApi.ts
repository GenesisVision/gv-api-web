import ApiClient from "../apiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ChangeBrokerProgramRequest } from '../model/ChangeBrokerProgramRequest';
import { CreateSignalProvider } from '../model/CreateSignalProvider';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundAssetPart } from '../model/FundAssetPart';
import { MakeSignalProviderProgram } from '../model/MakeSignalProviderProgram';
import { MakeTradingAccountProgram } from '../model/MakeTradingAccountProgram';
import { MakeTradingAccountSignalProvider } from '../model/MakeTradingAccountSignalProvider';
import { NewExternalTradingAccountRequest } from '../model/NewExternalTradingAccountRequest';
import { NewFundRequest } from '../model/NewFundRequest';
import { NewTradingAccountRequest } from '../model/NewTradingAccountRequest';
import { ProgramLevelInfo } from '../model/ProgramLevelInfo';
import { ProgramUpdate } from '../model/ProgramUpdate';
import { TradingAccountCreateResult } from '../model/TradingAccountCreateResult';
import { TradingAccountDemoDeposit } from '../model/TradingAccountDemoDeposit';
import { TradingAccountPwdUpdate } from '../model/TradingAccountPwdUpdate';
import { TwoFactorAuthenticator } from '../model/TwoFactorAuthenticator';
import { TwoFactorCodeModel } from '../model/TwoFactorCodeModel';

export default class AssetsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    cancelChangeBroker = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling cancelChangeBroker.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling cancelChangeBroker.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/broker/change/cancel", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    changeBroker = (
        id: string,
        authorization: string,
        options: {
            body?: ChangeBrokerProgramRequest
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling changeBroker.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling changeBroker.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/broker/change", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    changeTradingAccountPassword = (
        id: string,
        authorization: string,
        options: {
            body?: TradingAccountPwdUpdate
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling changeTradingAccountPassword.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling changeTradingAccountPassword.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/{id}/password/change", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    closeCurrentPeriod = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeCurrentPeriod.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeCurrentPeriod.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/period/close", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    closeFund = (
        id: string,
        authorization: string,
        options: {
            body?: TwoFactorCodeModel
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeFund.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeFund.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/{id}/close", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    closeInvestmentProgram = (
        id: string,
        authorization: string,
        options: {
            body?: TwoFactorCodeModel
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeInvestmentProgram.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeInvestmentProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/close", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    closeTradingAccount = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeTradingAccount.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeTradingAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/{id}/close", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    confirmProgram2FA = (
        id: string,
        authorization: string,
        options: {
            body?: TwoFactorCodeModel
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling confirmProgram2FA.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling confirmProgram2FA.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/2fa/confirm", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    createExternalTradingAccount = (
        authorization: string,
        options: {
            body?: NewExternalTradingAccountRequest
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling createExternalTradingAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/external/create", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

    createFund = (
        authorization: string,
        options: {
            body?: NewFundRequest
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling createFund.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/create", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    createTradingAccount = (
        authorization: string,
        options: {
            body?: NewTradingAccountRequest
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling createTradingAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/create", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

    getLevelsCalculator = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getLevelsCalculator.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getLevelsCalculator.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/levels/info", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ProgramLevelInfo>((response: Response) => {
        return response.json();
    })
    }

    getProgram2FA = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgram2FA.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getProgram2FA.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/2fa/get", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<TwoFactorAuthenticator>((response: Response) => {
        return response.json();
    })
    }

    makeAccountProgram = (
        authorization: string,
        options: {
            body?: MakeTradingAccountProgram
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeAccountProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/fromaccount/create", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeAccountSignalProvider = (
        authorization: string,
        options: {
            body?: MakeTradingAccountSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeAccountSignalProvider.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/signal/create", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeDemoTradingAccountDeposit = (
        id: string,
        authorization: string,
        options: {
            body?: TradingAccountDemoDeposit
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling makeDemoTradingAccountDeposit.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeDemoTradingAccountDeposit.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/{id}/demo/deposit", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeExternalAccountSignalProvider = (
        authorization: string,
        options: {
            body?: MakeTradingAccountSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeExternalAccountSignalProvider.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/external/fromaccount/create", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeSignalProviderProgram = (
        authorization: string,
        options: {
            body?: MakeSignalProviderProgram
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeSignalProviderProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/fromsignalprovider/create", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateAsset = (
        id: string,
        authorization: string,
        options: {
            body?: ProgramUpdate
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAsset.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateAsset.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/follow/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateAsset_0 = (
        id: string,
        authorization: string,
        options: {
            body?: ProgramUpdate
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAsset_1.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateAsset_1.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateAsset_1 = (
        id: string,
        authorization: string,
        options: {
            body?: ProgramUpdate
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAsset_2.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateAsset_2.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateFundAssets = (
        id: string,
        authorization: string,
        options: {
            body?: Array<FundAssetPart>
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateFundAssets.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateFundAssets.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/{id}/assets/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateSignalProviderSettings = (
        authorization: string,
        options: {
            body?: CreateSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateSignalProviderSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/signal/edit", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = JSON.stringify(options['body']);


    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}