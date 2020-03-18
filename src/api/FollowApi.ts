import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { AccountBalanceChart } from '../model/AccountBalanceChart';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FollowDetailsListItemItemsViewModel } from '../model/FollowDetailsListItemItemsViewModel';
import { FollowFilterSorting } from '../model/FollowFilterSorting';
import { ProgramFollowDetailsFull } from '../model/ProgramFollowDetailsFull';
import { ProgramProfitPercentCharts } from '../model/ProgramProfitPercentCharts';
import { SignalSubscriptionItemsViewModel } from '../model/SignalSubscriptionItemsViewModel';
import { TradeSorting } from '../model/TradeSorting';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';

export default class FollowApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    addToFavorites = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling addToFavorites.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/favorite/add", {
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

    closeAssetTrade = (
        id: string,
        options: {
            symbol?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeAssetTrade.');
                }
        const {
            symbol
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/trades/close", {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/charts/profit/absolute", {
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

    getAssetTrades = (
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
                throw new Error('Required parameter id was null or undefined when calling getAssetTrades.');
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/trades", {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/charts/balance", {
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

    getFollowAssetDetails = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ProgramFollowDetailsFull> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFollowAssetDetails.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}", {
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
    }).then(handleErrors).then<ProgramFollowDetailsFull>((response: Response) => {
        return response.json();
    })
    }

    getFollowAssets = (        options: {
            sorting?: FollowFilterSorting,
            showIn?: Currency,
            tags?: Array<string>,
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            facetId?: string,
            mask?: string,
            ownerId?: string,
            showFavorites?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<FollowDetailsListItemItemsViewModel> => {
        const {
            sorting,
            showIn,
            tags,
            dateFrom,
            dateTo,
            chartPointsCount,
            facetId,
            mask,
            ownerId,
            showFavorites,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Tags: tags,
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        FacetId: facetId,
        Mask: mask,
        OwnerId: ownerId,
        ShowFavorites: showFavorites,
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
    }).then(handleErrors).then<FollowDetailsListItemItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getFollowSubscriptionsForAsset = (
        id: string,
        options: {
            onlyActive?: boolean
        } = {},
        init: RequestInit = {}): Promise<SignalSubscriptionItemsViewModel> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFollowSubscriptionsForAsset.');
                }
        const {
            onlyActive
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/subscriptions", {
        id
    })

    const query = buildQueryString(path, {
        onlyActive: onlyActive
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
    }).then(handleErrors).then<SignalSubscriptionItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getFollowSubscriptionsForOwnAccount = (
        id: string,
        options: {
            onlyActive?: boolean
        } = {},
        init: RequestInit = {}): Promise<SignalSubscriptionItemsViewModel> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFollowSubscriptionsForOwnAccount.');
                }
        const {
            onlyActive
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/account/own/{id}/subscriptions", {
        id
    })

    const query = buildQueryString(path, {
        onlyActive: onlyActive
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
    }).then(handleErrors).then<SignalSubscriptionItemsViewModel>((response: Response) => {
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
        init: RequestInit = {}): Promise<ProgramProfitPercentCharts> => {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/charts/profit/percent", {
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
    }).then(handleErrors).then<ProgramProfitPercentCharts>((response: Response) => {
        return response.json();
    })
    }

    removeFromFavorites = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling removeFromFavorites.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/favorite/remove", {
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
}