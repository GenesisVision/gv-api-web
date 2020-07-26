import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AssetInfo } from '../model/AssetInfo';
import { CaptchaDetails } from '../model/CaptchaDetails';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { LandingInfo } from '../model/LandingInfo';
import { LevelsParamsInfo } from '../model/LevelsParamsInfo';
import { PlatformAssets } from '../model/PlatformAssets';
import { PlatformEvents } from '../model/PlatformEvents';
import { PlatformInfo } from '../model/PlatformInfo';
import { ProgramsLevelsInfo } from '../model/ProgramsLevelsInfo';
import { SiteMapInfo } from '../model/SiteMapInfo';

export default class PlatformApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getAllPlatformTradingAssets = (        options: {
        } = {},
        init: RequestInit = {}): Promise<PlatformAssets> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/trading/assets", {
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
    }).then(handleErrors).then<PlatformAssets>((response: Response) => {
        return response.json();
    })
    }

    getPlatformAssetInfo = (
        asset: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<AssetInfo> => {
            checkRequiredParameter(asset, "asset", "getPlatformAssetInfo");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/asset/{asset}", {
        asset
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
    }).then(handleErrors).then<AssetInfo>((response: Response) => {
        return response.json();
    })
    }

    getPlatformDate = (        options: {
        } = {},
        init: RequestInit = {}): Promise<string> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/date", {
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    getPlatformEvents = (        options: {
            take?: number
        } = {},
        init: RequestInit = {}): Promise<PlatformEvents> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/events", {
    },  {
        take: options['take']
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
    }).then(handleErrors).then<PlatformEvents>((response: Response) => {
        return response.json();
    })
    }

    getPlatformInfo = (        options: {
        } = {},
        init: RequestInit = {}): Promise<PlatformInfo> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/info", {
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
    }).then(handleErrors).then<PlatformInfo>((response: Response) => {
        return response.json();
    })
    }

    getPlatformLandingInfo = (        options: {
            eventsTake?: number,
            followTake?: number,
            programsTake?: number,
            fundsTake?: number,
            newsTake?: number
        } = {},
        init: RequestInit = {}): Promise<LandingInfo> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/landing", {
    },  {
        eventsTake: options['eventsTake'],
        followTake: options['followTake'],
        programsTake: options['programsTake'],
        fundsTake: options['fundsTake'],
        newsTake: options['newsTake']
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
    }).then(handleErrors).then<LandingInfo>((response: Response) => {
        return response.json();
    })
    }

    getProgramLevels = (        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<ProgramsLevelsInfo> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/levels", {
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
    }).then(handleErrors).then<ProgramsLevelsInfo>((response: Response) => {
        return response.json();
    })
    }

    getProgramLevelsParams = (        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<LevelsParamsInfo> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/levels/parameters", {
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
    }).then(handleErrors).then<LevelsParamsInfo>((response: Response) => {
        return response.json();
    })
    }

    getRiskControlInfo = (
        route: string,
        options: {
            client?: string,
            version?: string
        } = {},
        init: RequestInit = {}): Promise<CaptchaDetails> => {
            checkRequiredParameter(route, "route", "getRiskControlInfo");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/riskcontrol", {
    },  {
        Route: route,
        Client: options['client'],
        Version: options['version']
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
    }).then(handleErrors).then<CaptchaDetails>((response: Response) => {
        return response.json();
    })
    }

    getSitemapInfo = (        options: {
        } = {},
        init: RequestInit = {}): Promise<SiteMapInfo> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/platform/sitemap", {
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
    }).then(handleErrors).then<SiteMapInfo>((response: Response) => {
        return response.json();
    })
    }
}
