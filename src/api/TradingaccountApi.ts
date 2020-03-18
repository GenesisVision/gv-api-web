import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { AccountBalanceChart } from '../model/AccountBalanceChart';
import { AccountProfitPercentCharts } from '../model/AccountProfitPercentCharts';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { PrivateTradingAccountFull } from '../model/PrivateTradingAccountFull';
import { TradeSorting } from '../model/TradeSorting';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';
import { TradesViewModel } from '../model/TradesViewModel';

export default class TradingaccountApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    closeAccountAssetTrade = (
        id: string,
        options: {
            symbol?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeAccountAssetTrade.');
                }
        const {
            symbol
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/trades/close", {
        id
    })

    const query = buildQueryString(path, {
        Symbol: symbol
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

    exportTrades = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            symbol?: string,
            sorting?: TradeSorting,
            accountId?: string,
            accountCurrency?: Currency,
            isFollow?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<string> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling exportTrades.');
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    getAbsoluteProfitChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<AbsoluteProfitChart> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getAbsoluteProfitChart.');
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
    }).then(handleErrors).then<AbsoluteProfitChart>((response: Response) => {
        return response.json();
    })
    }

    getBalanceChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<AccountBalanceChart> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getBalanceChart.');
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
    }).then(handleErrors).then<AccountBalanceChart>((response: Response) => {
        return response.json();
    })
    }

    getOpenTrades = (
        id: string,
        options: {
            sorting?: TradeSorting,
            symbol?: string,
            accountId?: string,
            accountCurrency?: Currency,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<TradesViewModel> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getOpenTrades.');
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
    }).then(handleErrors).then<TradesViewModel>((response: Response) => {
        return response.json();
    })
    }

    getProfitPercentCharts = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency,
            currencies?: Array<Currency>
        } = {},
        init: RequestInit = {}): Promise<AccountProfitPercentCharts> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProfitPercentCharts.');
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
    }).then(handleErrors).then<AccountProfitPercentCharts>((response: Response) => {
        return response.json();
    })
    }

    getTrades = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            symbol?: string,
            sorting?: TradeSorting,
            accountId?: string,
            accountCurrency?: Currency,
            isFollow?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<TradesSignalViewModel> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getTrades.');
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
    }).then(handleErrors).then<TradesSignalViewModel>((response: Response) => {
        return response.json();
    })
    }

    getTradingAccountDetails = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<PrivateTradingAccountFull> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getTradingAccountDetails.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}", {
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
    }).then(handleErrors).then<PrivateTradingAccountFull>((response: Response) => {
        return response.json();
    })
    }
}