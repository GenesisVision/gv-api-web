import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundBalanceChart } from '../model/FundBalanceChart';
import { FundDetailsFull } from '../model/FundDetailsFull';
import { FundDetailsListItem } from '../model/FundDetailsListItem';
import { FundDetailsListItemItemsViewModel } from '../model/FundDetailsListItemItemsViewModel';
import { FundHistoryEventType } from '../model/FundHistoryEventType';
import { FundHistoryEventViewModelItemsViewModel } from '../model/FundHistoryEventViewModelItemsViewModel';
import { FundProfitPercentCharts } from '../model/FundProfitPercentCharts';
import { FundsFilterSorting } from '../model/FundsFilterSorting';
import { ImageQuality } from '../model/ImageQuality';
import { ReallocationModelItemsViewModel } from '../model/ReallocationModelItemsViewModel';

export default class FundsApi {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/favorite/add", {
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

    getFundAbsoluteProfitChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<AbsoluteProfitChart> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundAbsoluteProfitChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/charts/profit/absolute", {
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

    getFundBalanceChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<FundBalanceChart> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundBalanceChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/charts/balance", {
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
    }).then(handleErrors).then<FundBalanceChart>((response: Response) => {
        return response.json();
    })
    }

    getFundDetails = (
        id: string,
        options: {
            currency?: Currency,
            logoQuality?: ImageQuality
        } = {},
        init: RequestInit = {}): Promise<FundDetailsFull> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundDetails.');
                }
        const {
            currency,
            logoQuality
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}", {
        id
    })

    const query = buildQueryString(path, {
        currency: currency,
        logoQuality: logoQuality
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
    }).then(handleErrors).then<FundDetailsFull>((response: Response) => {
        return response.json();
    })
    }

    getFundProfitPercentCharts = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency,
            currencies?: Array<Currency>,
            chartAssetsCount?: number
        } = {},
        init: RequestInit = {}): Promise<FundProfitPercentCharts> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundProfitPercentCharts.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency,
            currencies,
            chartAssetsCount
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/charts/profit/percent", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        MaxPointCount: maxPointCount,
        Currency: currency,
        currencies: currencies,
        chartAssetsCount: chartAssetsCount
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
    }).then(handleErrors).then<FundProfitPercentCharts>((response: Response) => {
        return response.json();
    })
    }

    getFunds = (        options: {
            sorting?: FundsFilterSorting,
            showIn?: Currency,
            assets?: Array<string>,
            investorId?: string,
            includeWithInvestments?: boolean,
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
        init: RequestInit = {}): Promise<FundDetailsListItemItemsViewModel> => {
        const {
            sorting,
            showIn,
            assets,
            investorId,
            includeWithInvestments,
            dateFrom,
            dateTo,
            chartPointsCount,
            facetId,
            mask,
            ownerId,
            showFavorites,
            skipStatistic,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Assets: assets,
        InvestorId: investorId,
        IncludeWithInvestments: includeWithInvestments,
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        FacetId: facetId,
        Mask: mask,
        OwnerId: ownerId,
        ShowFavorites: showFavorites,
        SkipStatistic: skipStatistic,
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
    }).then(handleErrors).then<FundDetailsListItemItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getFundsHistoryEvents = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            eventsType?: FundHistoryEventType,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<FundHistoryEventViewModelItemsViewModel> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundsHistoryEvents.');
                }
        const {
            dateFrom,
            dateTo,
            eventsType,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/events", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        EventsType: eventsType,
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
    }).then(handleErrors).then<FundHistoryEventViewModelItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getLastChallengeWinner = (        options: {
            chartPointsCount?: number
        } = {},
        init: RequestInit = {}): Promise<FundDetailsListItem> => {
        const {
            chartPointsCount
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/challenge/winner", {
    })

    const query = buildQueryString(path, {
        chartPointsCount: chartPointsCount
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
    }).then(handleErrors).then<FundDetailsListItem>((response: Response) => {
        return response.json();
    })
    }

    getReallocatingHistory = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ReallocationModelItemsViewModel> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getReallocatingHistory.');
                }
        const {
            dateFrom,
            dateTo,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/reallocations", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
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
    }).then(handleErrors).then<ReallocationModelItemsViewModel>((response: Response) => {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/favorite/remove", {
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