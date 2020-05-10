import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { Currency } from '../model/Currency';
import { DashboardActionStatus } from '../model/DashboardActionStatus';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ImageQuality } from '../model/ImageQuality';
import { PeriodStatus } from '../model/PeriodStatus';
import { ProgramBalanceChart } from '../model/ProgramBalanceChart';
import { ProgramDetailsListItemItemsViewModel } from '../model/ProgramDetailsListItemItemsViewModel';
import { ProgramFollowDetailsFull } from '../model/ProgramFollowDetailsFull';
import { ProgramPeriodsViewModel } from '../model/ProgramPeriodsViewModel';
import { ProgramProfitPercentCharts } from '../model/ProgramProfitPercentCharts';
import { ProgramsFilterSorting } from '../model/ProgramsFilterSorting';
import { SignalProviderSubscribers } from '../model/SignalProviderSubscribers';
import { TradeSorting } from '../model/TradeSorting';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';
import { TradesViewModel } from '../model/TradesViewModel';

export default class ProgramsApi {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/favorite/add", {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/trades/close", {
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

    exportProgramPeriods = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            numberMin?: number,
            numberMax?: number,
            status?: PeriodStatus,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<string> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling exportProgramPeriods.');
                }
        const {
            dateFrom,
            dateTo,
            numberMin,
            numberMax,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/periods/export", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        NumberMin: numberMin,
        NumberMax: numberMax,
        Status: status,
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

    exportProgramPeriodsFinStatistic = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            numberMin?: number,
            numberMax?: number,
            status?: PeriodStatus,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<string> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling exportProgramPeriodsFinStatistic.');
                }
        const {
            dateFrom,
            dateTo,
            numberMin,
            numberMax,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/periods/export/statistic", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        NumberMin: numberMin,
        NumberMax: numberMax,
        Status: status,
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

    exportProgramTrades = (
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
                throw new Error('Required parameter id was null or undefined when calling exportProgramTrades.');
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/trades/export", {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/trades", {
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

    getProgramAbsoluteProfitChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<AbsoluteProfitChart> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramAbsoluteProfitChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/charts/profit/absolute", {
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

    getProgramBalanceChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<ProgramBalanceChart> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramBalanceChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/charts/balance", {
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
    }).then(handleErrors).then<ProgramBalanceChart>((response: Response) => {
        return response.json();
    })
    }

    getProgramDetails = (
        id: string,
        options: {
            logoQuality?: ImageQuality
        } = {},
        init: RequestInit = {}): Promise<ProgramFollowDetailsFull> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramDetails.');
                }
        const {
            logoQuality
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}", {
        id
    })

    const query = buildQueryString(path, {
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
    }).then(handleErrors).then<ProgramFollowDetailsFull>((response: Response) => {
        return response.json();
    })
    }

    getProgramOpenTrades = (
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
                throw new Error('Required parameter id was null or undefined when calling getProgramOpenTrades.');
                }
        const {
            sorting,
            symbol,
            accountId,
            accountCurrency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/trades/open", {
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

    getProgramPeriods = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            numberMin?: number,
            numberMax?: number,
            status?: PeriodStatus,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ProgramPeriodsViewModel> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramPeriods.');
                }
        const {
            dateFrom,
            dateTo,
            numberMin,
            numberMax,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/periods", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        NumberMin: numberMin,
        NumberMax: numberMax,
        Status: status,
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
    }).then(handleErrors).then<ProgramPeriodsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getProgramProfitPercentCharts = (
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
                throw new Error('Required parameter id was null or undefined when calling getProgramProfitPercentCharts.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency,
            currencies
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/charts/profit/percent", {
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

    getProgramSubscribers = (
        id: string,
        options: {
            status?: DashboardActionStatus,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<SignalProviderSubscribers> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramSubscribers.');
                }
        const {
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/subscribers", {
        id
    })

    const query = buildQueryString(path, {
        Status: status,
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
    }).then(handleErrors).then<SignalProviderSubscribers>((response: Response) => {
        return response.json();
    })
    }

    getPrograms = (        options: {
            sorting?: ProgramsFilterSorting,
            showIn?: Currency,
            tags?: Array<string>,
            programCurrency?: Currency,
            levelMin?: number,
            levelMax?: number,
            levelsSet?: Array<number>,
            includeWithInvestments?: boolean,
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
        init: RequestInit = {}): Promise<ProgramDetailsListItemItemsViewModel> => {
        const {
            sorting,
            showIn,
            tags,
            programCurrency,
            levelMin,
            levelMax,
            levelsSet,
            includeWithInvestments,
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Tags: tags,
        ProgramCurrency: programCurrency,
        LevelMin: levelMin,
        LevelMax: levelMax,
        LevelsSet: levelsSet,
        IncludeWithInvestments: includeWithInvestments,
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
    }).then(handleErrors).then<ProgramDetailsListItemItemsViewModel>((response: Response) => {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/favorite/remove", {
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