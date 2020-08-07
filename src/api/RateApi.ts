import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
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
            checkRequiredParameter(from, "from", "getRate");
            checkRequiredParameter(to, "to", "getRate");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/rate/{from}/{to}", {
        from,
        to
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
            checkRequiredParameter(exchange, "exchange", "getRateExchange");
            checkRequiredParameter(from, "from", "getRateExchange");
            checkRequiredParameter(to, "to", "getRateExchange");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/rate/{exchange}/{from}/{to}", {
        exchange,
        from,
        to
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
    }).then(handleErrors).then<RateModel>((response: Response) => {
        return response.json();
    })
    }

    getRates = (        options: {
            from?: Array<string>,
            to?: Array<string>
        } = {},
        init: RequestInit = {}): Promise<RatesModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/rate", {
    },  {
        from: options['from'],
        to: options['to']
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
    }).then(handleErrors).then<RatesModel>((response: Response) => {
        return response.json();
    })
    }
}
