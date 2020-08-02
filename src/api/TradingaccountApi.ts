import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
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
            checkRequiredParameter(id, "id", "closeAccountAssetTrade");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/tradingaccount/{id}/trades/close", {
        id
    },  {
        Symbol: options['symbol']
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
            checkRequiredParameter(id, "id", "exportTrades");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/tradingaccount/{id}/trades/export", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        Symbol: options['symbol'],
        Sorting: options['sorting'],
        AccountId: options['accountId'],
        AccountCurrency: options['accountCurrency'],
        IsFollow: options['isFollow'],
        Skip: options['skip'],
        Take: options['take']
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
            checkRequiredParameter(id, "id", "getAbsoluteProfitChart");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/tradingaccount/{id}/charts/profit/absolute", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        MaxPointCount: options['maxPointCount'],
        Currency: options['currency']
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
            checkRequiredParameter(id, "id", "getBalanceChart");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/tradingaccount/{id}/charts/balance", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        MaxPointCount: options['maxPointCount'],
        Currency: options['currency']
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
            checkRequiredParameter(id, "id", "getOpenTrades");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/tradingaccount/{id}/trades/open", {
        id
    },  {
        Sorting: options['sorting'],
        Symbol: options['symbol'],
        AccountId: options['accountId'],
        AccountCurrency: options['accountCurrency'],
        Skip: options['skip'],
        Take: options['take']
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
            checkRequiredParameter(id, "id", "getProfitPercentCharts");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/tradingaccount/{id}/charts/profit/percent", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        MaxPointCount: options['maxPointCount'],
        Currency: options['currency'],
        currencies: options['currencies']
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
            checkRequiredParameter(id, "id", "getTrades");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/tradingaccount/{id}/trades", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        Symbol: options['symbol'],
        Sorting: options['sorting'],
        AccountId: options['accountId'],
        AccountCurrency: options['accountCurrency'],
        IsFollow: options['isFollow'],
        Skip: options['skip'],
        Take: options['take']
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
    }).then(handleErrors).then<TradesSignalViewModel>((response: Response) => {
        return response.json();
    })
    }

    getTradingAccountDetails = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<PrivateTradingAccountFull> => {
            checkRequiredParameter(id, "id", "getTradingAccountDetails");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/tradingaccount/{id}", {
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
    }).then(handleErrors).then<PrivateTradingAccountFull>((response: Response) => {
        return response.json();
    })
    }
}
