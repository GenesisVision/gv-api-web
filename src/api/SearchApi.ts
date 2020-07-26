import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { CommonPublicAssetsViewModel } from '../model/CommonPublicAssetsViewModel';
import { ErrorViewModel } from '../model/ErrorViewModel';

export default class SearchApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    search = (        options: {
            mask?: string,
            take?: number,
            skipStatistic?: boolean
        } = {},
        init: RequestInit = {}): Promise<CommonPublicAssetsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/search", {
    },  {
        mask: options['mask'],
        take: options['take'],
        skipStatistic: options['skipStatistic']
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
}
