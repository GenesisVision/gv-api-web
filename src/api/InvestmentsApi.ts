import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundWithdrawInfo } from '../model/FundWithdrawInfo';
import { ItemsViewModelAssetInvestmentRequest } from '../model/ItemsViewModelAssetInvestmentRequest';
import { ProgramWithdrawInfo } from '../model/ProgramWithdrawInfo';

export default class InvestmentsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    cancelRequest = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling cancelRequest.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling cancelRequest.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/requests/{id}/cancel", {
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

    getFundWithdrawInfo = (
        id: string,
        authorization: string,
        options: {
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundWithdrawInfo.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getFundWithdrawInfo.');
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
    }).then(handleErrors).then<FundWithdrawInfo>((response: Response) => {
        return response.json();
    })
    }

    getProgramWithdrawInfo = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramWithdrawInfo.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getProgramWithdrawInfo.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/withdraw/info", {
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
    }).then(handleErrors).then<ProgramWithdrawInfo>((response: Response) => {
        return response.json();
    })
    }

    getRequests = (
        skip: number,
        take: number,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (skip === null || skip === undefined) {
                throw new Error('Required parameter skip was null or undefined when calling getRequests.');
                }
                if (take === null || take === undefined) {
                throw new Error('Required parameter take was null or undefined when calling getRequests.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getRequests.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/requests/{skip}/{take}", {
        skip,
        take
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
    }).then(handleErrors).then<ItemsViewModelAssetInvestmentRequest>((response: Response) => {
        return response.json();
    })
    }

    getRequestsByProgram = (
        id: string,
        skip: number,
        take: number,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getRequestsByProgram.');
                }
                if (skip === null || skip === undefined) {
                throw new Error('Required parameter skip was null or undefined when calling getRequestsByProgram.');
                }
                if (take === null || take === undefined) {
                throw new Error('Required parameter take was null or undefined when calling getRequestsByProgram.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getRequestsByProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/requests/{id}/{skip}/{take}", {
        id,
        skip,
        take
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
    }).then(handleErrors).then<ItemsViewModelAssetInvestmentRequest>((response: Response) => {
        return response.json();
    })
    }

    investIntoFund = (
        id: string,
        authorization: string,
        options: {
            amount?: number,
            walletId?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling investIntoFund.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling investIntoFund.');
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

    investIntoProgram = (
        id: string,
        authorization: string,
        options: {
            amount?: number,
            walletId?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling investIntoProgram.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling investIntoProgram.');
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

    switchReinvestOff = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling switchReinvestOff.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling switchReinvestOff.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/reinvest/off", {
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

    switchReinvestOn = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling switchReinvestOn.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling switchReinvestOn.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/investments/programs/{id}/reinvest/on", {
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

    withdrawFromFund = (
        id: string,
        authorization: string,
        options: {
            percent?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling withdrawFromFund.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling withdrawFromFund.');
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

    withdrawFromProgram = (
        id: string,
        authorization: string,
        options: {
            amount?: number,
            withdrawAll?: boolean
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling withdrawFromProgram.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling withdrawFromProgram.');
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
}