import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AssetInvestmentRequestItemsViewModel } from '../model/AssetInvestmentRequestItemsViewModel';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundWithdrawInfo } from '../model/FundWithdrawInfo';
import { ProgramWithdrawInfo } from '../model/ProgramWithdrawInfo';

export default class InvestmentsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    cancelRequest = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "cancelRequest");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/requests/{id}/cancel", {
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

    getFundWithdrawInfo = (
        id: string,
        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<FundWithdrawInfo> => {
            checkRequiredParameter(id, "id", "getFundWithdrawInfo");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/funds/{id}/withdraw/info", {
        id
    },  {
        currency: options['currency']
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
    }).then(handleErrors).then<FundWithdrawInfo>((response: Response) => {
        return response.json();
    })
    }

    getProgramWithdrawInfo = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ProgramWithdrawInfo> => {
            checkRequiredParameter(id, "id", "getProgramWithdrawInfo");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/programs/{id}/withdraw/info", {
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
    }).then(handleErrors).then<ProgramWithdrawInfo>((response: Response) => {
        return response.json();
    })
    }

    getRequests = (
        skip: number,
        take: number,
        options: {
        } = {},
        init: RequestInit = {}): Promise<AssetInvestmentRequestItemsViewModel> => {
            checkRequiredParameter(skip, "skip", "getRequests");
            checkRequiredParameter(take, "take", "getRequests");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/requests/{skip}/{take}", {
        skip,
        take
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
    }).then(handleErrors).then<AssetInvestmentRequestItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getRequestsByProgram = (
        id: string,
        skip: number,
        take: number,
        options: {
        } = {},
        init: RequestInit = {}): Promise<AssetInvestmentRequestItemsViewModel> => {
            checkRequiredParameter(id, "id", "getRequestsByProgram");
            checkRequiredParameter(skip, "skip", "getRequestsByProgram");
            checkRequiredParameter(take, "take", "getRequestsByProgram");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/requests/{id}/{skip}/{take}", {
        id,
        skip,
        take
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
    }).then(handleErrors).then<AssetInvestmentRequestItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    investIntoFund = (
        id: string,
        options: {
            amount?: number,
            walletId?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "investIntoFund");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/funds/{id}/invest", {
        id
    },  {
        amount: options['amount'],
        walletId: options['walletId']
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

    investIntoProgram = (
        id: string,
        options: {
            amount?: number,
            walletId?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "investIntoProgram");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/programs/{id}/invest", {
        id
    },  {
        amount: options['amount'],
        walletId: options['walletId']
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

    switchAutoJoinOff = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "switchAutoJoinOff");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/programs/{id}/autojoin/off", {
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

    switchAutoJoinOn = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "switchAutoJoinOn");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/programs/{id}/autojoin/on", {
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

    switchReinvestOff = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "switchReinvestOff");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/programs/{id}/reinvest/off", {
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

    switchReinvestOn = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "switchReinvestOn");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/programs/{id}/reinvest/on", {
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

    withdrawFromFund = (
        id: string,
        options: {
            percent?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "withdrawFromFund");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/funds/{id}/withdraw", {
        id
    },  {
        percent: options['percent'],
        currency: options['currency']
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

    withdrawFromProgram = (
        id: string,
        options: {
            amount?: number,
            withdrawAll?: boolean
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "withdrawFromProgram");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/investments/programs/{id}/withdraw", {
        id
    },  {
        amount: options['amount'],
        withdrawAll: options['withdrawAll']
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
}
