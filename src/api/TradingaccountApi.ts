import ApiClient from "../apiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { AccountBalanceChart } from '../model/AccountBalanceChart';
import { AccountProfitPercentCharts } from '../model/AccountProfitPercentCharts';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { PrivateTradingAccountFull } from '../model/PrivateTradingAccountFull';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';
import { TradesViewModel } from '../model/TradesViewModel';

export default class TradingaccountApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    exportTrades = (
        id: string,
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            symbol?: string,
            sorting?: string,
            accountId?: string,
            accountCurrency?: string,
            isFollow?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling exportTrades.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling exportTrades.');
                }
        const {
            dateFrom,
            dateTo,
            symbol,
            sorting,
            accountId,
            accountCurrency,
            isFollow,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/trades/export", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        Symbol: symbol,
        Sorting: sorting,
        AccountId: accountId,
        AccountCurrency: accountCurrency,
        IsFollow: isFollow,
        Skip: skip,
        Take: take
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    getAbsoluteProfitChart = (
        id: string,
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getAbsoluteProfitChart.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getAbsoluteProfitChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/charts/profit/absolute", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        MaxPointCount: maxPointCount,
        Currency: currency
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
    }).then(handleErrors).then<AbsoluteProfitChart>((response: Response) => {
        return response.json();
    })
    }

    getBalanceChart = (
        id: string,
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getBalanceChart.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getBalanceChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/charts/balance", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        MaxPointCount: maxPointCount,
        Currency: currency
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
    }).then(handleErrors).then<AccountBalanceChart>((response: Response) => {
        return response.json();
    })
    }

    getOpenTrades = (
        id: string,
        authorization: string,
        options: {
            sorting?: string,
            symbol?: string,
            accountId?: string,
            accountCurrency?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getOpenTrades.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getOpenTrades.');
                }
        const {
            sorting,
            symbol,
            accountId,
            accountCurrency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/trades/open", {
        id
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        Symbol: symbol,
        AccountId: accountId,
        AccountCurrency: accountCurrency,
        Skip: skip,
        Take: take
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
    }).then(handleErrors).then<TradesViewModel>((response: Response) => {
        return response.json();
    })
    }

    getProfitPercentCharts = (
        id: string,
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string,
            currencies?: Array<any>
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProfitPercentCharts.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getProfitPercentCharts.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency,
            currencies
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/charts/profit/percent", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        MaxPointCount: maxPointCount,
        Currency: currency,
        currencies: currencies
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
    }).then(handleErrors).then<AccountProfitPercentCharts>((response: Response) => {
        return response.json();
    })
    }

    getTrades = (
        id: string,
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            symbol?: string,
            sorting?: string,
            accountId?: string,
            accountCurrency?: string,
            isFollow?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getTrades.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTrades.');
                }
        const {
            dateFrom,
            dateTo,
            symbol,
            sorting,
            accountId,
            accountCurrency,
            isFollow,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/trades", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        Symbol: symbol,
        Sorting: sorting,
        AccountId: accountId,
        AccountCurrency: accountCurrency,
        IsFollow: isFollow,
        Skip: skip,
        Take: take
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
    }).then(handleErrors).then<TradesSignalViewModel>((response: Response) => {
        return response.json();
    })
    }

    getTradingAccountDetails = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getTradingAccountDetails.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTradingAccountDetails.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}", {
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
    }).then(handleErrors).then<PrivateTradingAccountFull>((response: Response) => {
        return response.json();
    })
    }
}