import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
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
            checkRequiredParameter(id, "id", "getUserProfile");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/users/{id}", {
        id
    },  {
        logoQuality: options['logoQuality']
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
    }).then(handleErrors).then<PublicProfile>((response: Response) => {
        return response.json();
    })
    }

    getUserProfileFollowDetails = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<PublicProfileFollow> => {
            checkRequiredParameter(id, "id", "getUserProfileFollowDetails");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/users/{id}/follow", {
        id
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/users", {
    },  {
        Sorting: options['sorting'],
        Timeframe: options['timeframe'],
        Tags: options['tags'],
        Skip: options['skip'],
        Take: options['take']
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
    }).then(handleErrors).then<UserDetailsListItemsViewModel>((response: Response) => {
        return response.json();
    })
    }
}
