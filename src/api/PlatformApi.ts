import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AssetInfo } from '../model/AssetInfo';
import { CaptchaDetails } from '../model/CaptchaDetails';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { LandingInfo } from '../model/LandingInfo';
import { LevelsParamsInfo } from '../model/LevelsParamsInfo';
import { PlatformAssets } from '../model/PlatformAssets';
import { PlatformEvents } from '../model/PlatformEvents';
import { PlatformInfo } from '../model/PlatformInfo';
import { ProgramsLevelsInfo } from '../model/ProgramsLevelsInfo';

export default class PlatformApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getAllPlatformAssets = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/assets", {
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
        }
    }).then(handleErrors).then<PlatformAssets>((response: Response) => {
        return response.json();
    })
    }

    getPlatformAssetInfo = (
        asset: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (asset === null || asset === undefined) {
                throw new Error('Required parameter asset was null or undefined when calling getPlatformAssetInfo.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/asset/{asset}", {
        asset
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
        }
    }).then(handleErrors).then<AssetInfo>((response: Response) => {
        return response.json();
    })
    }

    getPlatformDate = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/date", {
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
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    getPlatformEvents = (        options: {
            take?: number
        } = {},
        init: RequestInit = {}) => {
        const {
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/events", {
    })

    const query = buildQueryString(path, {
        take: take
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<PlatformEvents>((response: Response) => {
        return response.json();
    })
    }

    getPlatformInfo = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/info", {
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
        init: RequestInit = {}) => {
        const {
            eventsTake,
            followTake,
            programsTake,
            fundsTake,
            newsTake
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/landing", {
    })

    const query = buildQueryString(path, {
        eventsTake: eventsTake,
        followTake: followTake,
        programsTake: programsTake,
        fundsTake: fundsTake,
        newsTake: newsTake
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<LandingInfo>((response: Response) => {
        return response.json();
    })
    }

    getProgramLevels = (        options: {
            currency?: string
        } = {},
        init: RequestInit = {}) => {
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/levels", {
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
        }
    }).then(handleErrors).then<ProgramsLevelsInfo>((response: Response) => {
        return response.json();
    })
    }

    getProgramLevelsParams = (        options: {
            currency?: string
        } = {},
        init: RequestInit = {}) => {
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/levels/parameters", {
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
        init: RequestInit = {}) => {
                if (route === null || route === undefined) {
                throw new Error('Required parameter route was null or undefined when calling getRiskControlInfo.');
                }
        const {
            client,
            version
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/riskcontrol", {
    })

    const query = buildQueryString(path, {
        Route: route,
        Client: client,
        Version: version
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<CaptchaDetails>((response: Response) => {
        return response.json();
    })
    }
}