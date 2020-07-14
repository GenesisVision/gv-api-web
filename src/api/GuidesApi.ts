import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/guides", {
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
    }).then(handleErrors).then<GuidesCategoryItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    passGuide = (        options: {
            id?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
        const {
            id
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/guides/pass", {
    })

    const query = buildQueryString(path, {
        id: id
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}