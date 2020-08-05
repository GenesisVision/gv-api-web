import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundBalanceChart } from '../model/FundBalanceChart';
import { FundDetailsFull } from '../model/FundDetailsFull';
import { FundDetailsListItem } from '../model/FundDetailsListItem';
import { FundDetailsListItemItemsViewModel } from '../model/FundDetailsListItemItemsViewModel';
import { FundHistoryEventFilterType } from '../model/FundHistoryEventFilterType';
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
            checkRequiredParameter(id, "id", "addToFavorites");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds/{id}/favorite/add", {
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

    getFundAbsoluteProfitChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<AbsoluteProfitChart> => {
            checkRequiredParameter(id, "id", "getFundAbsoluteProfitChart");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds/{id}/charts/profit/absolute", {
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

    getFundBalanceChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<FundBalanceChart> => {
            checkRequiredParameter(id, "id", "getFundBalanceChart");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds/{id}/charts/balance", {
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
            checkRequiredParameter(id, "id", "getFundDetails");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds/{id}", {
        id
    },  {
        currency: options['currency'],
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
            checkRequiredParameter(id, "id", "getFundProfitPercentCharts");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds/{id}/charts/profit/percent", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        MaxPointCount: options['maxPointCount'],
        Currency: options['currency'],
        currencies: options['currencies'],
        chartAssetsCount: options['chartAssetsCount']
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds", {
    },  {
        Sorting: options['sorting'],
        ShowIn: options['showIn'],
        Assets: options['assets'],
        InvestorId: options['investorId'],
        IncludeWithInvestments: options['includeWithInvestments'],
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
    }).then(handleErrors).then<FundDetailsListItemItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getFundsHistoryEvents = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            eventsType?: FundHistoryEventFilterType,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<FundHistoryEventViewModelItemsViewModel> => {
            checkRequiredParameter(id, "id", "getFundsHistoryEvents");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds/{id}/history", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        EventsType: options['eventsType'],
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
    }).then(handleErrors).then<FundHistoryEventViewModelItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getLastChallengeWinner = (        options: {
            chartPointsCount?: number
        } = {},
        init: RequestInit = {}): Promise<FundDetailsListItem> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds/challenge/winner", {
    },  {
        chartPointsCount: options['chartPointsCount']
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
            checkRequiredParameter(id, "id", "getReallocatingHistory");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds/{id}/reallocations", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
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
    }).then(handleErrors).then<ReallocationModelItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    removeFromFavorites = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "removeFromFavorites");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/funds/{id}/favorite/remove", {
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
