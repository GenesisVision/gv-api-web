import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ExchangeInfoItemsViewModel } from '../model/ExchangeInfoItemsViewModel';

export default class ExchangesApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getExchanges = (        options: {
        } = {},
        init: RequestInit = {}): Promise<ExchangeInfoItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/exchanges", {
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
    }).then(handleErrors).then<ExchangeInfoItemsViewModel>((response: Response) => {
        return response.json();
    })
    }
}
