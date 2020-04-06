import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FcmTokenViewModel } from '../model/FcmTokenViewModel';
import { ProfileFullViewModel } from '../model/ProfileFullViewModel';
import { ProfileHeaderViewModel } from '../model/ProfileHeaderViewModel';
import { SocialLinksViewModel } from '../model/SocialLinksViewModel';
import { UpdatePersonalDetailViewModel } from '../model/UpdatePersonalDetailViewModel';
import { UpdateProfileViewModel } from '../model/UpdateProfileViewModel';
import { UpdateSocialLinkViewModel } from '../model/UpdateSocialLinkViewModel';
import { UpdateSocialLinksViewModel } from '../model/UpdateSocialLinksViewModel';

export default class ProfileApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getProfileFull = (        options: {
        } = {},
        init: RequestInit = {}): Promise<ProfileFullViewModel> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile", {
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
    }).then(handleErrors).then<ProfileFullViewModel>((response: Response) => {
        return response.json();
    })
    }

    getProfileHeader = (        options: {
        } = {},
        init: RequestInit = {}): Promise<ProfileHeaderViewModel> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/header", {
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
    }).then(handleErrors).then<ProfileHeaderViewModel>((response: Response) => {
        return response.json();
    })
    }

    getSocialLinks = (        options: {
        } = {},
        init: RequestInit = {}): Promise<SocialLinksViewModel> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/sociallinks", {
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
    }).then(handleErrors).then<SocialLinksViewModel>((response: Response) => {
        return response.json();
    })
    }

    getVerificationToken = (        options: {
        } = {},
        init: RequestInit = {}): Promise<string> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/verification/token", {
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    removeAvatar = (        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/avatar/remove", {
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

    removeFcmToken = (        options: {
            body?: FcmTokenViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/push/token/remove", {
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

    switchPublicInvestorOff = (        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/investor/public/off", {
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

    switchPublicInvestorOn = (        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/investor/public/on", {
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

    updateAllSocialLinks = (        options: {
            body?: UpdateSocialLinksViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/sociallinks/all/update", {
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

    updateAvatar = (
        fileId: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (fileId === null || fileId === undefined) {
                throw new Error('Required parameter fileId was null or undefined when calling updateAvatar.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/avatar/update/{fileId}", {
        fileId
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

    updateFcmToken = (        options: {
            body?: FcmTokenViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/push/token", {
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

    updatePersonalDetails = (        options: {
            body?: UpdatePersonalDetailViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/personal/update", {
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

    updateProfile = (        options: {
            body?: UpdateProfileViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/update", {
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

    updateSocialLinks = (        options: {
            body?: UpdateSocialLinkViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/sociallinks/update", {
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

    updateUserPlatformCurrency = (        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<Response> => {
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/currency/update", {
    })

    const query = buildQueryString(path, {
        currency: currency
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

    updateUserSocialSettings = (        options: {
            allowWriteToUserWall?: boolean,
            allowCommentUserPosts?: boolean
        } = {},
        init: RequestInit = {}): Promise<Response> => {
        const {
            allowWriteToUserWall,
            allowCommentUserPosts
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/profile/social/settings/update", {
    })

    const query = buildQueryString(path, {
        AllowWriteToUserWall: allowWriteToUserWall,
        AllowCommentUserPosts: allowCommentUserPosts
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