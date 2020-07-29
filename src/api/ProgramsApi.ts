import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
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
            checkRequiredParameter(id, "id", "addToFavorites");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/favorite/add", {
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/trades/close", {
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
            checkRequiredParameter(id, "id", "exportProgramPeriods");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/periods/export", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        NumberMin: options['numberMin'],
        NumberMax: options['numberMax'],
        Status: options['status'],
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
            checkRequiredParameter(id, "id", "exportProgramPeriodsFinStatistic");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/periods/export/statistic", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        NumberMin: options['numberMin'],
        NumberMax: options['numberMax'],
        Status: options['status'],
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
            checkRequiredParameter(id, "id", "exportProgramTrades");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/trades/export", {
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
            checkRequiredParameter(id, "id", "getAssetTrades");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/trades", {
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

    getProgramAbsoluteProfitChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<AbsoluteProfitChart> => {
            checkRequiredParameter(id, "id", "getProgramAbsoluteProfitChart");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/charts/profit/absolute", {
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

    getProgramBalanceChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<ProgramBalanceChart> => {
            checkRequiredParameter(id, "id", "getProgramBalanceChart");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/charts/balance", {
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
            checkRequiredParameter(id, "id", "getProgramDetails");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}", {
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
            checkRequiredParameter(id, "id", "getProgramOpenTrades");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/trades/open", {
        id
    },  {
        Sorting: options['sorting'],
        Symbol: options['symbol'],
        AccountId: options['accountId'],
        AccountCurrency: options['accountCurrency'],
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
            checkRequiredParameter(id, "id", "getProgramPeriods");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/periods", {
        id
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        NumberMin: options['numberMin'],
        NumberMax: options['numberMax'],
        Status: options['status'],
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
            checkRequiredParameter(id, "id", "getProgramProfitPercentCharts");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/charts/profit/percent", {
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

    getProgramSubscribers = (
        id: string,
        options: {
            status?: DashboardActionStatus,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<SignalProviderSubscribers> => {
            checkRequiredParameter(id, "id", "getProgramSubscribers");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/subscribers", {
        id
    },  {
        Status: options['status'],
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
        init: RequestInit = {}): Promise<ProgramDetailsListItemItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs", {
    },  {
        Sorting: options['sorting'],
        ShowIn: options['showIn'],
        Tags: options['tags'],
        ProgramCurrency: options['programCurrency'],
        LevelMin: options['levelMin'],
        LevelMax: options['levelMax'],
        LevelsSet: options['levelsSet'],
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
    }).then(handleErrors).then<ProgramDetailsListItemItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    removeFromFavorites = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "removeFromFavorites");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/programs/{id}/favorite/remove", {
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
