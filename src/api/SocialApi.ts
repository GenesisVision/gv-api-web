import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { EditPost } from '../model/EditPost';
import { EditablePost } from '../model/EditablePost';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { MediaPostItemsViewModel } from '../model/MediaPostItemsViewModel';
import { NewPost } from '../model/NewPost';
import { Post } from '../model/Post';
import { PostItemsViewModel } from '../model/PostItemsViewModel';
import { ProfilePublicShortItemsViewModel } from '../model/ProfilePublicShortItemsViewModel';
import { RePost } from '../model/RePost';
import { SocialLinkType } from '../model/SocialLinkType';
import { SocialSummary } from '../model/SocialSummary';
import { UserFeedMode } from '../model/UserFeedMode';

export default class SocialApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    addPost = (        options: {
            body?: NewPost
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/add", {
    },  {
    });
    let body = JSON.stringify(options['body']);

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

    deletePost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "deletePost");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/delete", {
        id
    },  {
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

    editPost = (        options: {
            body?: EditPost
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/edit", {
    },  {
    });
    let body = JSON.stringify(options['body']);

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

    followUser = (
        userId: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(userId, "userId", "followUser");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/user/{userId}/follow", {
        userId
    },  {
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

    getFeed = (        options: {
            userId?: string,
            tagContentId?: string,
            tagContentIds?: Array<string>,
            userMode?: UserFeedMode,
            hashTags?: Array<string>,
            mask?: string,
            showTop?: boolean,
            showLiked?: boolean,
            showOnlyUserPosts?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<PostItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed", {
    },  {
        UserId: options['userId'],
        TagContentId: options['tagContentId'],
        TagContentIds: options['tagContentIds'],
        UserMode: options['userMode'],
        HashTags: options['hashTags'],
        Mask: options['mask'],
        ShowTop: options['showTop'],
        ShowLiked: options['showLiked'],
        ShowOnlyUserPosts: options['showOnlyUserPosts'],
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
    }).then(handleErrors).then<PostItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getOriginalPost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<EditablePost> => {
            checkRequiredParameter(id, "id", "getOriginalPost");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/original", {
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
    }).then(handleErrors).then<EditablePost>((response: Response) => {
        return response.json();
    })
    }

    getPost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Post> => {
            checkRequiredParameter(id, "id", "getPost");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}", {
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
    }).then(handleErrors).then<Post>((response: Response) => {
        return response.json();
    })
    }

    getPostLikesUsers = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ProfilePublicShortItemsViewModel> => {
            checkRequiredParameter(id, "id", "getPostLikesUsers");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/users/likes", {
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
    }).then(handleErrors).then<ProfilePublicShortItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getPostRepostsUsers = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ProfilePublicShortItemsViewModel> => {
            checkRequiredParameter(id, "id", "getPostRepostsUsers");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/users/reposts", {
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
    }).then(handleErrors).then<ProfilePublicShortItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getSocialMedia = (        options: {
            mask?: string,
            type?: SocialLinkType,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<MediaPostItemsViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/media", {
    },  {
        Mask: options['mask'],
        Type: options['type'],
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
    }).then(handleErrors).then<MediaPostItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getSocialSummary = (        options: {
        } = {},
        init: RequestInit = {}): Promise<SocialSummary> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/summary", {
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
    }).then(handleErrors).then<SocialSummary>((response: Response) => {
        return response.json();
    })
    }

    likePost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "likePost");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/like", {
        id
    },  {
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

    pinPost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "pinPost");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/pin", {
        id
    },  {
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

    rePost = (        options: {
            body?: RePost
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/repost", {
    },  {
    });
    let body = JSON.stringify(options['body']);

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

    revertDeletingPost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "revertDeletingPost");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/delete/revert", {
        id
    },  {
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

    spamReport = (
        id: string,
        options: {
            reason?: string,
            text?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "spamReport");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/report", {
        id
    },  {
        reason: options['reason'],
        text: options['text']
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

    unfollowUser = (
        userId: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(userId, "userId", "unfollowUser");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/user/{userId}/unfollow", {
        userId
    },  {
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

    unlikePost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "unlikePost");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/unlike", {
        id
    },  {
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

    unpinPost = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "unpinPost");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/social/feed/{id}/unpin", {
        id
    },  {
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
