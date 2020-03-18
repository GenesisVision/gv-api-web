import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { CommonPublicAssetsViewModel } from '../model/CommonPublicAssetsViewModel';
import { Currency } from '../model/Currency';
import { DashboardAssetStatus } from '../model/DashboardAssetStatus';
import { DashboardAssets } from '../model/DashboardAssets';
import { DashboardChart } from '../model/DashboardChart';
import { DashboardChartAssets } from '../model/DashboardChartAssets';
import { DashboardInvestingDetails } from '../model/DashboardInvestingDetails';
import { DashboardPortfolio } from '../model/DashboardPortfolio';
import { DashboardSummary } from '../model/DashboardSummary';
import { DashboardTradingAssetItemsViewModel } from '../model/DashboardTradingAssetItemsViewModel';
import { DashboardTradingDetails } from '../model/DashboardTradingDetails';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundInvestingDetailsListItemsViewModel } from '../model/FundInvestingDetailsListItemsViewModel';
import { FundsFilterSorting } from '../model/FundsFilterSorting';
import { ProgramInvestingDetailsListItemsViewModel } from '../model/ProgramInvestingDetailsListItemsViewModel';
import { ProgramsFilterSorting } from '../model/ProgramsFilterSorting';

export default class DashboardApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getChart = (        options: {
            assets?: Array<string>,
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: Currency
        } = {},
        init: RequestInit = {}): Promise<DashboardChart> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardChart>((response: Response) => {
        return response.json();
    })
    }

    getChartAssets = (        options: {
        } = {},
        init: RequestInit = {}): Promise<DashboardChartAssets> => {

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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardChartAssets>((response: Response) => {
        return response.json();
    })
    }

    getDashboardSummary = (        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<DashboardSummary> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardSummary>((response: Response) => {
        return response.json();
    })
    }

    getHoldings = (        options: {
            topAssetsCount?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardAssets> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardAssets>((response: Response) => {
        return response.json();
    })
    }

    getInvestingDetails = (        options: {
            currency?: Currency,
            eventsTake?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardInvestingDetails> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardInvestingDetails>((response: Response) => {
        return response.json();
    })
    }

    getInvestingFunds = (        options: {
            sorting?: FundsFilterSorting,
            showIn?: Currency,
            status?: DashboardAssetStatus,
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
        init: RequestInit = {}): Promise<FundInvestingDetailsListItemsViewModel> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<FundInvestingDetailsListItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getInvestingPrograms = (        options: {
            sorting?: ProgramsFilterSorting,
            showIn?: Currency,
            status?: DashboardAssetStatus,
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
        init: RequestInit = {}): Promise<ProgramInvestingDetailsListItemsViewModel> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<ProgramInvestingDetailsListItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getMostProfitableAssets = (        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: Currency
        } = {},
        init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardTradingAssetItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getPortfolio = (        options: {
        } = {},
        init: RequestInit = {}): Promise<DashboardPortfolio> => {

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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardPortfolio>((response: Response) => {
        return response.json();
    })
    }

    getPrivateTradingAssets = (        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: Currency,
            status?: DashboardAssetStatus,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardTradingAssetItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getPublicTradingAssets = (        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: Currency,
            status?: DashboardAssetStatus,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardTradingAssetItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getRecommendations = (        options: {
            currency?: Currency,
            take?: number,
            onlyFollows?: boolean
        } = {},
        init: RequestInit = {}): Promise<CommonPublicAssetsViewModel> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<CommonPublicAssetsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getTradingDetails = (        options: {
            currency?: Currency,
            eventsTake?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardTradingDetails> => {
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
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<DashboardTradingDetails>((response: Response) => {
        return response.json();
    })
    }
}