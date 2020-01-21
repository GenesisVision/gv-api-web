import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { CommonPublicAssetsViewModel } from '../model/CommonPublicAssetsViewModel';
import { DashboardAssets } from '../model/DashboardAssets';
import { DashboardChart } from '../model/DashboardChart';
import { DashboardChartAssets } from '../model/DashboardChartAssets';
import { DashboardInvestingDetails } from '../model/DashboardInvestingDetails';
import { DashboardPortfolio } from '../model/DashboardPortfolio';
import { DashboardSummary } from '../model/DashboardSummary';
import { DashboardTradingDetails } from '../model/DashboardTradingDetails';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelDashboardTradingAsset } from '../model/ItemsViewModelDashboardTradingAsset';
import { ItemsViewModelFundInvestingDetailsList } from '../model/ItemsViewModelFundInvestingDetailsList';
import { ItemsViewModelProgramInvestingDetailsList } from '../model/ItemsViewModelProgramInvestingDetailsList';

export default class DashboardApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getChart = (
        authorization: string,
        options: {
            assets?: Array<string>,
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: string
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getChart.');
                }
        const {
            assets,
            dateFrom,
            dateTo,
            chartPointsCount,
            showIn
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/chart", {
    })

    const query = buildQueryString(path, {
        Assets: assets,
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        ShowIn: showIn
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<DashboardChart>((response: Response) => {
        return response.json();
    })
    }

    getChartAssets = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getChartAssets.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/chart/assets", {
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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<DashboardChartAssets>((response: Response) => {
        return response.json();
    })
    }

    getHoldings = (
        authorization: string,
        options: {
            topAssetsCount?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getHoldings.');
                }
        const {
            topAssetsCount
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/holdings", {
    })

    const query = buildQueryString(path, {
        topAssetsCount: topAssetsCount
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<DashboardAssets>((response: Response) => {
        return response.json();
    })
    }

    getInvestingDetails = (
        authorization: string,
        options: {
            currency?: string,
            eventsTake?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getInvestingDetails.');
                }
        const {
            currency,
            eventsTake
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/investing", {
    })

    const query = buildQueryString(path, {
        currency: currency,
        eventsTake: eventsTake
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<DashboardInvestingDetails>((response: Response) => {
        return response.json();
    })
    }

    getInvestingFunds = (
        authorization: string,
        options: {
            sorting?: string,
            showIn?: string,
            status?: string,
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
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getInvestingFunds.');
                }
        const {
            sorting,
            showIn,
            status,
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/investing/funds", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Status: status,
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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ItemsViewModelFundInvestingDetailsList>((response: Response) => {
        return response.json();
    })
    }

    getInvestingPrograms = (
        authorization: string,
        options: {
            sorting?: string,
            showIn?: string,
            status?: string,
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
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getInvestingPrograms.');
                }
        const {
            sorting,
            showIn,
            status,
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/investing/programs", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Status: status,
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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ItemsViewModelProgramInvestingDetailsList>((response: Response) => {
        return response.json();
    })
    }

    getMostProfitableAssets = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: string
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getMostProfitableAssets.');
                }
        const {
            dateFrom,
            dateTo,
            chartPointsCount,
            showIn
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/trading/mostprofitable", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        ShowIn: showIn
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ItemsViewModelDashboardTradingAsset>((response: Response) => {
        return response.json();
    })
    }

    getPortfolio = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getPortfolio.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/portfolio", {
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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<DashboardPortfolio>((response: Response) => {
        return response.json();
    })
    }

    getPrivateTradingAssets = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: string,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getPrivateTradingAssets.');
                }
        const {
            dateFrom,
            dateTo,
            chartPointsCount,
            showIn,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/trading/private", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        ShowIn: showIn,
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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ItemsViewModelDashboardTradingAsset>((response: Response) => {
        return response.json();
    })
    }

    getPublicTradingAssets = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: string,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getPublicTradingAssets.');
                }
        const {
            dateFrom,
            dateTo,
            chartPointsCount,
            showIn,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/trading/public", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        ShowIn: showIn,
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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ItemsViewModelDashboardTradingAsset>((response: Response) => {
        return response.json();
    })
    }

    getRecommendations = (
        authorization: string,
        options: {
            currency?: string,
            take?: number,
            onlyFollows?: boolean
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getRecommendations.');
                }
        const {
            currency,
            take,
            onlyFollows
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/recommendations", {
    })

    const query = buildQueryString(path, {
        currency: currency,
        take: take,
        onlyFollows: onlyFollows
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<CommonPublicAssetsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getSummary = (
        authorization: string,
        options: {
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getSummary.');
                }
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/summary", {
    })

    const query = buildQueryString(path, {
        currency: currency
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<DashboardSummary>((response: Response) => {
        return response.json();
    })
    }

    getTradingDetails = (
        authorization: string,
        options: {
            currency?: string,
            eventsTake?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTradingDetails.');
                }
        const {
            currency,
            eventsTake
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/trading", {
    })

    const query = buildQueryString(path, {
        currency: currency,
        eventsTake: eventsTake
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<DashboardTradingDetails>((response: Response) => {
        return response.json();
    })
    }
}