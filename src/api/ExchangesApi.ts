import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/exchanges", {
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
    }).then(handleErrors).then<ExchangeInfoItemsViewModel>((response: Response) => {
        return response.json();
    })
    }
}