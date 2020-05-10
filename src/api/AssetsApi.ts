import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ChangeBrokerProgramRequest } from '../model/ChangeBrokerProgramRequest';
import { CreateSignalProvider } from '../model/CreateSignalProvider';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundAssetPart } from '../model/FundAssetPart';
import { MakeSignalProviderProgram } from '../model/MakeSignalProviderProgram';
import { MakeTradingAccountProgram } from '../model/MakeTradingAccountProgram';
import { MakeTradingAccountSignalProvider } from '../model/MakeTradingAccountSignalProvider';
import { NewExchangeAccountRequest } from '../model/NewExchangeAccountRequest';
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
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling cancelChangeBroker.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/broker/change/cancel", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    changeBroker = (
        id: string,
        options: {
            body?: ChangeBrokerProgramRequest
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling changeBroker.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/broker/change", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    changeTradingAccountPassword = (
        id: string,
        options: {
            body?: TradingAccountPwdUpdate
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling changeTradingAccountPassword.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/{id}/password/change", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    closeCurrentPeriod = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeCurrentPeriod.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/period/close", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    closeFund = (
        id: string,
        options: {
            body?: TwoFactorCodeModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeFund.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/{id}/close", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    closeInvestmentProgram = (
        id: string,
        options: {
            body?: TwoFactorCodeModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeInvestmentProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/close", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    closeTradingAccount = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeTradingAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/{id}/close", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    confirmProgram2FA = (
        id: string,
        options: {
            body?: TwoFactorCodeModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling confirmProgram2FA.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/2fa/confirm", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    createExchangeAccount = (        options: {
            body?: NewExchangeAccountRequest
        } = {},
        init: RequestInit = {}): Promise<TradingAccountCreateResult> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/exchange/create", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

    createExternalTradingAccount = (        options: {
            body?: NewExternalTradingAccountRequest
        } = {},
        init: RequestInit = {}): Promise<TradingAccountCreateResult> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/external/create", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

    createFund = (        options: {
            body?: NewFundRequest
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/create", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    createTradingAccount = (        options: {
            body?: NewTradingAccountRequest
        } = {},
        init: RequestInit = {}): Promise<TradingAccountCreateResult> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/create", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

    getLevelsCalculator = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ProgramLevelInfo> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getLevelsCalculator.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/levels/info", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<ProgramLevelInfo>((response: Response) => {
        return response.json();
    })
    }

    getProgram2FA = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<TwoFactorAuthenticator> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgram2FA.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/2fa/get", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<TwoFactorAuthenticator>((response: Response) => {
        return response.json();
    })
    }

    makeAccountProgram = (        options: {
            body?: MakeTradingAccountProgram
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/fromaccount/create", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeAccountSignalProvider = (        options: {
            body?: MakeTradingAccountSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/signal/create", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeDemoTradingAccountDeposit = (
        id: string,
        options: {
            body?: TradingAccountDemoDeposit
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling makeDemoTradingAccountDeposit.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/{id}/demo/deposit", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeExternalAccountSignalProvider = (        options: {
            body?: MakeTradingAccountSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/external/fromaccount/create", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeSignalProviderProgram = (        options: {
            body?: MakeSignalProviderProgram
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/fromsignalprovider/create", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateAsset = (
        id: string,
        options: {
            body?: ProgramUpdate
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAsset.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/follow/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateAsset_0 = (
        id: string,
        options: {
            body?: ProgramUpdate
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAsset_1.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateAsset_1 = (
        id: string,
        options: {
            body?: ProgramUpdate
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAsset_2.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateFundAssets = (
        id: string,
        options: {
            body?: Array<FundAssetPart>
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateFundAssets.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/{id}/assets/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateSignalProviderSettings = (        options: {
            body?: CreateSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/signal/edit", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}