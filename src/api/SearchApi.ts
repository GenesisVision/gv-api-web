import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { CommonPublicAssetsViewModel } from '../model/CommonPublicAssetsViewModel';
import { ErrorViewModel } from '../model/ErrorViewModel';

export default class SearchApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    search = (        options: {
            authorization?: string,
            mask?: string,
            take?: number
        } = {},
        init: RequestInit = {}) => {
        const {
            authorization,
            mask,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/search", {
    })

    const query = buildQueryString(path, {
        mask: mask,
        take: take
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<CommonPublicAssetsViewModel>((response: Response) => {
        return response.json();
    })
    }
}