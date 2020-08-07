import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { AccountBalanceChart } from '../model/AccountBalanceChart';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FollowDetailsListItemItemsViewModel } from '../model/FollowDetailsListItemItemsViewModel';
import { FollowFilterSorting } from '../model/FollowFilterSorting';
import { ImageQuality } from '../model/ImageQuality';
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
            checkRequiredParameter(id, "id", "addToFavorites");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/{id}/favorite/add", {
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

    closeAssetTrade = (
        id: string,
        options: {
            symbol?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "closeAssetTrade");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/{id}/trades/close", {
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/{id}/charts/profit/absolute", {
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
            checkRequiredParameter(id, "id", "getAssetTrades");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/{id}/trades", {
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/{id}/charts/balance", {
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

    getFollowAssetDetails = (
        id: string,
        options: {
            logoQuality?: ImageQuality
        } = {},
        init: RequestInit = {}): Promise<ProgramFollowDetailsFull> => {
            checkRequiredParameter(id, "id", "getFollowAssetDetails");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/{id}", {
        id
    },  {
        logoQuality: options['logoQuality']
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
    }).then(handleErrors).then<ProgramFollowDetailsFull>((response: Response) => {
        return response.json();
    })
    }

    getFollowAssets = (        options: {
            sorting?: FollowFilterSorting,
            showIn?: Currency,
            tags?: Array<string>,
            subscriberId?: string,
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            facetId?: string,
            mask?: string,
            ownerId?: string,
            showFavorites?: boolean,
            skipStatistic?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<FollowDetailsListItemItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow", {
    },  {
        Sorting: options['sorting'],
        ShowIn: options['showIn'],
        Tags: options['tags'],
        SubscriberId: options['subscriberId'],
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        ChartPointsCount: options['chartPointsCount'],
        FacetId: options['facetId'],
        Mask: options['mask'],
        OwnerId: options['ownerId'],
        ShowFavorites: options['showFavorites'],
        SkipStatistic: options['skipStatistic'],
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
            checkRequiredParameter(id, "id", "getFollowSubscriptionsForAsset");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/{id}/subscriptions", {
        id
    },  {
        onlyActive: options['onlyActive']
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
            checkRequiredParameter(id, "id", "getFollowSubscriptionsForOwnAccount");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/account/own/{id}/subscriptions", {
        id
    },  {
        onlyActive: options['onlyActive']
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
            checkRequiredParameter(id, "id", "getProfitPercentCharts");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/{id}/charts/profit/percent", {
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
    }).then(handleErrors).then<ProgramProfitPercentCharts>((response: Response) => {
        return response.json();
    })
    }

    removeFromFavorites = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "removeFromFavorites");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/follow/{id}/favorite/remove", {
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
}
