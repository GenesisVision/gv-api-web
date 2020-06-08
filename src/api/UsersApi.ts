import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ImageQuality } from '../model/ImageQuality';
import { PublicProfile } from '../model/PublicProfile';
import { PublicProfileFollow } from '../model/PublicProfileFollow';
import { UserDetailsListItemsViewModel } from '../model/UserDetailsListItemsViewModel';
import { UsersFilterSorting } from '../model/UsersFilterSorting';
import { UsersFilterTimeframe } from '../model/UsersFilterTimeframe';

export default class UsersApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getUserProfile = (
        id: string,
        options: {
            logoQuality?: ImageQuality
        } = {},
        init: RequestInit = {}): Promise<PublicProfile> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getUserProfile.');
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

    getUserProfileFollowDetails = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<PublicProfileFollow> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getUserProfileFollowDetails.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/users/{id}/follow", {
        id
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
    }).then(handleErrors).then<PublicProfileFollow>((response: Response) => {
        return response.json();
    })
    }

    getUsersList = (        options: {
            sorting?: UsersFilterSorting,
            timeframe?: UsersFilterTimeframe,
            tags?: Array<string>,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<UserDetailsListItemsViewModel> => {
        const {
            sorting,
            timeframe,
            tags,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/users", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        Timeframe: timeframe,
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