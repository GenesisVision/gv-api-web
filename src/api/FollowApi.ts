import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { AccountBalanceChart } from '../model/AccountBalanceChart';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelFollowDetailsListItem } from '../model/ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelSignalSubscription } from '../model/ItemsViewModelSignalSubscription';
import { ProgramFollowDetailsFull } from '../model/ProgramFollowDetailsFull';
import { ProgramProfitPercentCharts } from '../model/ProgramProfitPercentCharts';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';

export default class FollowApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    addToFavorites = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling addToFavorites.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling addToFavorites.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/favorite/add", {
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

    getAbsoluteProfitChart = (
        id: string,
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

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
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
            sorting?: string,
            accountId?: string,
            accountCurrency?: string,
            isFollow?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
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

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
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
            currency?: string
        } = {},
        init: RequestInit = {}) => {
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

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<AccountBalanceChart>((response: Response) => {
        return response.json();
    })
    }

    getFollowAssetDetails = (
        id: string,
        options: {
            authorization?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFollowAssetDetails.');
                }
        const {
            authorization
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}", {
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
    }).then(handleErrors).then<ProgramFollowDetailsFull>((response: Response) => {
        return response.json();
    })
    }

    getFollowAssets = (        options: {
            authorization?: string,
            sorting?: string,
            showIn?: string,
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
        init: RequestInit = {}) => {
        const {
            authorization,
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
    }).then(handleErrors).then<ItemsViewModelFollowDetailsListItem>((response: Response) => {
        return response.json();
    })
    }

    getFollowSubscriptionsForAsset = (
        id: string,
        authorization: string,
        options: {
            onlyActive?: boolean
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFollowSubscriptionsForAsset.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getFollowSubscriptionsForAsset.');
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
    }).then(handleErrors).then<ItemsViewModelSignalSubscription>((response: Response) => {
        return response.json();
    })
    }

    getFollowSubscriptionsForOwnAccount = (
        id: string,
        authorization: string,
        options: {
            onlyActive?: boolean
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFollowSubscriptionsForOwnAccount.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getFollowSubscriptionsForOwnAccount.');
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
    }).then(handleErrors).then<ItemsViewModelSignalSubscription>((response: Response) => {
        return response.json();
    })
    }

    getProfitPercentCharts = (
        id: string,
        options: {
            authorization?: string,
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
        const {
            authorization,
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
    }).then(handleErrors).then<ProgramProfitPercentCharts>((response: Response) => {
        return response.json();
    })
    }

    removeFromFavorites = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling removeFromFavorites.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling removeFromFavorites.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/favorite/remove", {
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
}