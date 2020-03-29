import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ImageQuality } from '../model/ImageQuality';
import { PublicProfile } from '../model/PublicProfile';
import { UserDetailsListItemsViewModel } from '../model/UserDetailsListItemsViewModel';
import { UsersFilterSorting } from '../model/UsersFilterSorting';

export default class UsersApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getManagerProfile = (
        id: string,
        options: {
            logoQuality?: ImageQuality
        } = {},
        init: RequestInit = {}): Promise<PublicProfile> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getManagerProfile.');
                }
        const {
            logoQuality
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/users/{id}", {
        id
    })

    const query = buildQueryString(path, {
        logoQuality: logoQuality
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
    }).then(handleErrors).then<PublicProfile>((response: Response) => {
        return response.json();
    })
    }

    getUsersList = (        options: {
            facetId?: string,
            sorting?: UsersFilterSorting,
            tags?: Array<string>,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<UserDetailsListItemsViewModel> => {
        const {
            facetId,
            sorting,
            tags,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/users/list", {
    })

    const query = buildQueryString(path, {
        FacetId: facetId,
        Sorting: sorting,
        Tags: tags,
        Skip: skip,
        Take: take
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
    }).then(handleErrors).then<UserDetailsListItemsViewModel>((response: Response) => {
        return response.json();
    })
    }
}