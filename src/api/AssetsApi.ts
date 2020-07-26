import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ChangeBrokerProgramRequest } from '../model/ChangeBrokerProgramRequest';
import { CreateSignalProvider } from '../model/CreateSignalProvider';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundAssetPart } from '../model/FundAssetPart';
import { MakeExchangeAccountProgram } from '../model/MakeExchangeAccountProgram';
import { MakeSignalProviderProgram } from '../model/MakeSignalProviderProgram';
import { MakeTradingAccountProgram } from '../model/MakeTradingAccountProgram';
import { MakeTradingAccountSignalProvider } from '../model/MakeTradingAccountSignalProvider';
import { NewExchangeAccountRequest } from '../model/NewExchangeAccountRequest';
import { NewExternalTradingAccountRequest } from '../model/NewExternalTradingAccountRequest';
import { NewFundRequest } from '../model/NewFundRequest';
import { NewTradingAccountRequest } from '../model/NewTradingAccountRequest';
import { ProgramLevelInfo } from '../model/ProgramLevelInfo';
import { ProgramUpdate } from '../model/ProgramUpdate';
import { StringItemsViewModel } from '../model/StringItemsViewModel';
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

    addFavoriteSymbol = (
        id: string,
        symbol: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "addFavoriteSymbol");
            checkRequiredParameter(symbol, "symbol", "addFavoriteSymbol");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/{id}/symbol/favorite/{symbol}/add", {
        id,
        symbol
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    cancelChangeBroker = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "cancelChangeBroker");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/{id}/broker/change/cancel", {
        id
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "changeBroker");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/{id}/broker/change", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "changeTradingAccountPassword");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/{id}/password/change", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "closeCurrentPeriod");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/{id}/period/close", {
        id
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "closeFund");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/funds/{id}/close", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "closeInvestmentProgram");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/{id}/close", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "closeTradingAccount");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/{id}/close", {
        id
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "confirmProgram2FA");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/{id}/2fa/confirm", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    createExchangeAccount = (        options: {
            body?: NewExchangeAccountRequest
        } = {},
        init: RequestInit = {}): Promise<TradingAccountCreateResult> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/exchange/create", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

    createExternalTradingAccount = (        options: {
            body?: NewExternalTradingAccountRequest
        } = {},
        init: RequestInit = {}): Promise<TradingAccountCreateResult> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/external/create", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

    createFund = (        options: {
            body?: NewFundRequest
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/funds/create", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    createTradingAccount = (        options: {
            body?: NewTradingAccountRequest
        } = {},
        init: RequestInit = {}): Promise<TradingAccountCreateResult> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/create", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

    getFavoriteSymbols = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<StringItemsViewModel> => {
            checkRequiredParameter(id, "id", "getFavoriteSymbols");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/{id}/symbol/favorite", {
        id
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<StringItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getLevelsCalculator = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ProgramLevelInfo> => {
            checkRequiredParameter(id, "id", "getLevelsCalculator");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/{id}/levels/info", {
        id
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "getProgram2FA");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/{id}/2fa/get", {
        id
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<TwoFactorAuthenticator>((response: Response) => {
        return response.json();
    })
    }

    makeAccountProgram = (        options: {
            body?: MakeTradingAccountProgram
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/fromaccount/create", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeAccountSignalProvider = (        options: {
            body?: MakeTradingAccountSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/signal/create", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "makeDemoTradingAccountDeposit");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/{id}/demo/deposit", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeExchangeAccountProgram = (        options: {
            body?: MakeExchangeAccountProgram
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/fromexchangeaccount/create", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeExternalAccountSignalProvider = (        options: {
            body?: MakeTradingAccountSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/external/fromaccount/create", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    makeSignalProviderProgram = (        options: {
            body?: MakeSignalProviderProgram
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/fromsignalprovider/create", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    removeFavoriteSymbol = (
        id: string,
        symbol: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "removeFavoriteSymbol");
            checkRequiredParameter(symbol, "symbol", "removeFavoriteSymbol");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/tradingaccounts/{id}/symbol/favorite/{symbol}/remove", {
        id,
        symbol
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "updateAsset");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/follow/{id}/update", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "updateAsset_1");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/funds/{id}/update", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "updateAsset_2");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/programs/{id}/update", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "updateFundAssets");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/funds/{id}/assets/update", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateSignalProviderSettings = (        options: {
            body?: CreateSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/assets/signal/edit", {
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}
