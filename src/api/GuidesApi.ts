import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { GuidesCategoryItemsViewModel } from '../model/GuidesCategoryItemsViewModel';

export default class GuidesApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getGuides = (        options: {
        } = {},
        init: RequestInit = {}): Promise<GuidesCategoryItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/guides", {
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
    }).then(handleErrors).then<GuidesCategoryItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    passGuide = (        options: {
            id?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/guides/pass", {
    },  {
        id: options['id']
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
