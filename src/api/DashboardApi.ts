import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { CommonPublicAssetsViewModel } from '../model/CommonPublicAssetsViewModel';
import { Currency } from '../model/Currency';
import { DashboardAssetStatus } from '../model/DashboardAssetStatus';
import { DashboardAssets } from '../model/DashboardAssets';
import { DashboardChart } from '../model/DashboardChart';
import { DashboardChartAssets } from '../model/DashboardChartAssets';
import { DashboardExchangeTradingAsset } from '../model/DashboardExchangeTradingAsset';
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
            showIn?: Currency,
            skipStatistic?: boolean
        } = {},
        init: RequestInit = {}): Promise<DashboardChart> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/chart", {
    },  {
        Assets: options['assets'],
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        ChartPointsCount: options['chartPointsCount'],
        ShowIn: options['showIn'],
        SkipStatistic: options['skipStatistic']
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
    }).then(handleErrors).then<DashboardChart>((response: Response) => {
        return response.json();
    })
    }

    getChartAssets = (        options: {
        } = {},
        init: RequestInit = {}): Promise<DashboardChartAssets> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/chart/assets", {
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
    }).then(handleErrors).then<DashboardChartAssets>((response: Response) => {
        return response.json();
    })
    }

    getDashboardSummary = (        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<DashboardSummary> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/summary", {
    },  {
        currency: options['currency']
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
    }).then(handleErrors).then<DashboardSummary>((response: Response) => {
        return response.json();
    })
    }

    getExchangeAccountCredentials = (        options: {
            exchangeAccountId?: string,
            brokerId?: string
        } = {},
        init: RequestInit = {}): Promise<DashboardExchangeTradingAsset> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/trading/exchange/credentials", {
    },  {
        exchangeAccountId: options['exchangeAccountId'],
        brokerId: options['brokerId']
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
    }).then(handleErrors).then<DashboardExchangeTradingAsset>((response: Response) => {
        return response.json();
    })
    }

    getHoldings = (        options: {
            topAssetsCount?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardAssets> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/holdings", {
    },  {
        topAssetsCount: options['topAssetsCount']
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
    }).then(handleErrors).then<DashboardAssets>((response: Response) => {
        return response.json();
    })
    }

    getInvestingDetails = (        options: {
            currency?: Currency,
            eventsTake?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardInvestingDetails> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/investing", {
    },  {
        currency: options['currency'],
        eventsTake: options['eventsTake']
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
            skipStatistic?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<FundInvestingDetailsListItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/investing/funds", {
    },  {
        Sorting: options['sorting'],
        ShowIn: options['showIn'],
        Status: options['status'],
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
            skipStatistic?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ProgramInvestingDetailsListItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/investing/programs", {
    },  {
        Sorting: options['sorting'],
        ShowIn: options['showIn'],
        Status: options['status'],
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
    }).then(handleErrors).then<ProgramInvestingDetailsListItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getMostProfitableAssets = (        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: Currency,
            skipStatistic?: boolean
        } = {},
        init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/trading/mostprofitable", {
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        ChartPointsCount: options['chartPointsCount'],
        ShowIn: options['showIn'],
        SkipStatistic: options['skipStatistic']
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
    }).then(handleErrors).then<DashboardTradingAssetItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getPortfolio = (        options: {
        } = {},
        init: RequestInit = {}): Promise<DashboardPortfolio> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/portfolio", {
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
            skipStatistic?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/trading/private", {
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        ChartPointsCount: options['chartPointsCount'],
        ShowIn: options['showIn'],
        Status: options['status'],
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
            skipStatistic?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/trading/public", {
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        ChartPointsCount: options['chartPointsCount'],
        ShowIn: options['showIn'],
        Status: options['status'],
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/recommendations", {
    },  {
        currency: options['currency'],
        take: options['take'],
        onlyFollows: options['onlyFollows']
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
    }).then(handleErrors).then<CommonPublicAssetsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getTradingDetails = (        options: {
            currency?: Currency,
            eventsTake?: number
        } = {},
        init: RequestInit = {}): Promise<DashboardTradingDetails> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/dashboard/trading", {
    },  {
        currency: options['currency'],
        eventsTake: options['eventsTake']
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
    }).then(handleErrors).then<DashboardTradingDetails>((response: Response) => {
        return response.json();
    })
    }
}
