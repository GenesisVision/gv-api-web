import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { RateModel } from '../model/RateModel';
import { RatesModel } from '../model/RatesModel';

export default class RateApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getRate = (
        from: string,
        to: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<RateModel> => {
                if (from === null || from === undefined) {
                throw new Error('Required parameter from was null or undefined when calling getRate.');
                }
                if (to === null || to === undefined) {
                throw new Error('Required parameter to was null or undefined when calling getRate.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/rate/{from}/{to}", {
        from,
        to
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
    }).then(handleErrors).then<RateModel>((response: Response) => {
        return response.json();
    })
    }

    getRateExchange = (
        exchange: string,
        from: string,
        to: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<RateModel> => {
                if (exchange === null || exchange === undefined) {
                throw new Error('Required parameter exchange was null or undefined when calling getRateExchange.');
                }
                if (from === null || from === undefined) {
                throw new Error('Required parameter from was null or undefined when calling getRateExchange.');
                }
                if (to === null || to === undefined) {
                throw new Error('Required parameter to was null or undefined when calling getRateExchange.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/rate/{exchange}/{from}/{to}", {
        exchange,
        from,
        to
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
    }).then(handleErrors).then<RateModel>((response: Response) => {
        return response.json();
    })
    }

    getRates = (        options: {
            from?: Array<string>,
            to?: Array<string>
        } = {},
        init: RequestInit = {}): Promise<RatesModel> => {
        const {
            from,
            to
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/rate", {
    })

    const query = buildQueryString(path, {
        from: from,
        to: to
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
    }).then(handleErrors).then<RatesModel>((response: Response) => {
        return response.json();
    })
    }
}