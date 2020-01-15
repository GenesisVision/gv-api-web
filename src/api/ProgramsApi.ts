import ApiClient from "../apiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelProgramDetailsListItem } from '../model/ItemsViewModelProgramDetailsListItem';
import { ProgramBalanceChart } from '../model/ProgramBalanceChart';
import { ProgramFollowDetailsFull } from '../model/ProgramFollowDetailsFull';
import { ProgramPeriodsViewModel } from '../model/ProgramPeriodsViewModel';
import { ProgramProfitPercentCharts } from '../model/ProgramProfitPercentCharts';
import { SignalProviderSubscribers } from '../model/SignalProviderSubscribers';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';
import { TradesViewModel } from '../model/TradesViewModel';

export default class ProgramsApi {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/favorite/add", {
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

    exportProgramPeriods = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            numberMin?: number,
            numberMax?: number,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
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

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    exportProgramPeriodsFinStatistic = (
        id: string,
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            numberMin?: number,
            numberMax?: number,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling exportProgramPeriodsFinStatistic.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling exportProgramPeriodsFinStatistic.');
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

    exportProgramTrades = (
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

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
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

    getProgramAbsoluteProfitChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
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

    getProgramBalanceChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
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

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<ProgramBalanceChart>((response: Response) => {
        return response.json();
    })
    }

    getProgramDetails = (
        id: string,
        options: {
            authorization?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramDetails.');
                }
        const {
            authorization
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}", {
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

    getProgramOpenTrades = (
        id: string,
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

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<TradesViewModel>((response: Response) => {
        return response.json();
    })
    }

    getProgramPeriods = (
        id: string,
        options: {
            authorization?: string,
            dateFrom?: Date,
            dateTo?: Date,
            numberMin?: number,
            numberMax?: number,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramPeriods.');
                }
        const {
            authorization,
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
    }).then(handleErrors).then<ProgramPeriodsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getProgramProfitPercentCharts = (
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
                throw new Error('Required parameter id was null or undefined when calling getProgramProfitPercentCharts.');
                }
        const {
            authorization,
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

    getProgramSubscribers = (
        id: string,
        authorization: string,
        options: {
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramSubscribers.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getProgramSubscribers.');
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
    }).then(handleErrors).then<SignalProviderSubscribers>((response: Response) => {
        return response.json();
    })
    }

    getPrograms = (        options: {
            authorization?: string,
            sorting?: string,
            showIn?: string,
            tags?: Array<string>,
            programCurrency?: string,
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
        init: RequestInit = {}) => {
        const {
            authorization,
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
    }).then(handleErrors).then<ItemsViewModelProgramDetailsListItem>((response: Response) => {
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/favorite/remove", {
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