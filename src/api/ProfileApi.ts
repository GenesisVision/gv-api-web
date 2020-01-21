import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
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

    getProfileFull = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getProfileFull.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ProfileFullViewModel>((response: Response) => {
        return response.json();
    })
    }

    getProfileHeader = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getProfileHeader.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ProfileHeaderViewModel>((response: Response) => {
        return response.json();
    })
    }

    getSocialLinks = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getSocialLinks.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<SocialLinksViewModel>((response: Response) => {
        return response.json();
    })
    }

    getVerificationToken = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getVerificationToken.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    removeAvatar = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling removeAvatar.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    removeFcmToken = (
        authorization: string,
        options: {
            body?: FcmTokenViewModel
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling removeFcmToken.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    switchPublicInvestorOff = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling switchPublicInvestorOff.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    switchPublicInvestorOn = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling switchPublicInvestorOn.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateAllSocialLinks = (
        authorization: string,
        options: {
            body?: UpdateSocialLinksViewModel
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateAllSocialLinks.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateAvatar = (
        fileId: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (fileId === null || fileId === undefined) {
                throw new Error('Required parameter fileId was null or undefined when calling updateAvatar.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateAvatar.');
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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateFcmToken = (
        authorization: string,
        options: {
            body?: FcmTokenViewModel
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateFcmToken.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updatePersonalDetails = (
        authorization: string,
        options: {
            body?: UpdatePersonalDetailViewModel
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updatePersonalDetails.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateProfile = (
        authorization: string,
        options: {
            body?: UpdateProfileViewModel
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateProfile.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateSocialLinks = (
        authorization: string,
        options: {
            body?: UpdateSocialLinkViewModel
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateSocialLinks.');
                }

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
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}