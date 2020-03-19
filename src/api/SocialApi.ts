import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { EditPost } from '../model/EditPost';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FeedMode } from '../model/FeedMode';
import { NewPost } from '../model/NewPost';
import { PostItemsViewModel } from '../model/PostItemsViewModel';

export default class SocialApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    addPost = (        options: {
            body?: NewPost
        } = {},
        init: RequestInit = {}): Promise<Response> => {

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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    deletePost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deletePost.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    editPost = (
        id: string,
        options: {
            body?: EditPost
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling editPost.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    followUser = (
        userId: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling followUser.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/{userId}/follow", {
        userId
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    getFeed = (        options: {
            userId?: string,
            mode?: FeedMode,
            hashTags?: Array<string>,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<PostItemsViewModel> => {
        const {
            userId,
            mode,
            hashTags,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/feed", {
    })

    const query = buildQueryString(path, {
        UserId: userId,
        Mode: mode,
        HashTags: hashTags,
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
    }).then(handleErrors).then<PostItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    likePost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling likePost.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    pinPost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling pinPost.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/feed/{id}/pin", {
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    unfollowUser = (
        userId: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling unfollowUser.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/{userId}/unfollow", {
        userId
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    unlikePost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling unlikePost.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    unpinPost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling unpinPost.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/social/feed/{id}/unpin", {
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}