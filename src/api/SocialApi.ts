import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { EditPost } from '../model/EditPost';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelPost } from '../model/ItemsViewModelPost';
import { NewPost } from '../model/NewPost';

export default class SocialApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    addPost = (
        authorization: string,
        options: {
            body?: NewPost
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling addPost.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/feed/add", {
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    deletePost = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deletePost.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling deletePost.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/feed/{id}/delete", {
        id
    })

    const query = buildQueryString(path, {
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
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    editPost = (
        id: string,
        authorization: string,
        options: {
            body?: EditPost
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling editPost.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling editPost.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/feed/{id}/edit", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    getFeed = (        options: {
            authorization?: string,
            userId?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ItemsViewModelPost> => {
        const {
            authorization,
            userId,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/feed", {
    })

    const query = buildQueryString(path, {
        UserId: userId,
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
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ItemsViewModelPost>((response: Response) => {
        return response.json();
    })
    }

    likePost = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling likePost.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling likePost.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/feed/{id}/like", {
        id
    })

    const query = buildQueryString(path, {
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
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    unlikePost = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling unlikePost.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling unlikePost.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/feed/{id}/unlike", {
        id
    })

    const query = buildQueryString(path, {
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
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}