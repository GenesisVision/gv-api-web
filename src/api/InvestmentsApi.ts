import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
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
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling cancelRequest.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/requests/{id}/cancel", {
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

    getFundWithdrawInfo = (
        id: string,
        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<FundWithdrawInfo> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundWithdrawInfo.');
                }
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/funds/{id}/withdraw/info", {
        id
    })

    const query = buildQueryString(path, {
        currency: currency
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
    }).then(handleErrors).then<FundWithdrawInfo>((response: Response) => {
        return response.json();
    })
    }

    getProgramWithdrawInfo = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ProgramWithdrawInfo> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramWithdrawInfo.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/withdraw/info", {
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
                if (skip === null || skip === undefined) {
                throw new Error('Required parameter skip was null or undefined when calling getRequests.');
                }
                if (take === null || take === undefined) {
                throw new Error('Required parameter take was null or undefined when calling getRequests.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/requests/{skip}/{take}", {
        skip,
        take
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
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getRequestsByProgram.');
                }
                if (skip === null || skip === undefined) {
                throw new Error('Required parameter skip was null or undefined when calling getRequestsByProgram.');
                }
                if (take === null || take === undefined) {
                throw new Error('Required parameter take was null or undefined when calling getRequestsByProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/requests/{id}/{skip}/{take}", {
        id,
        skip,
        take
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
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling investIntoFund.');
                }
        const {
            amount,
            walletId
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/funds/{id}/invest", {
        id
    })

    const query = buildQueryString(path, {
        amount: amount,
        walletId: walletId
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

    investIntoProgram = (
        id: string,
        options: {
            amount?: number,
            walletId?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling investIntoProgram.');
                }
        const {
            amount,
            walletId
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/invest", {
        id
    })

    const query = buildQueryString(path, {
        amount: amount,
        walletId: walletId
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

    switchAutoJoinOff = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling switchAutoJoinOff.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/autojoin/off", {
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

    switchAutoJoinOn = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling switchAutoJoinOn.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/autojoin/on", {
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

    switchReinvestOff = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling switchReinvestOff.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/reinvest/off", {
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

    switchReinvestOn = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling switchReinvestOn.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/reinvest/on", {
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

    withdrawFromFund = (
        id: string,
        options: {
            percent?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling withdrawFromFund.');
                }
        const {
            percent,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/funds/{id}/withdraw", {
        id
    })

    const query = buildQueryString(path, {
        percent: percent,
        currency: currency
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

    withdrawFromProgram = (
        id: string,
        options: {
            amount?: number,
            withdrawAll?: boolean
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling withdrawFromProgram.');
                }
        const {
            amount,
            withdrawAll
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/withdraw", {
        id
    })

    const query = buildQueryString(path, {
        amount: amount,
        withdrawAll: withdrawAll
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
}