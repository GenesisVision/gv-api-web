import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { BetaTestingType } from '../model/BetaTestingType';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FcmTokenViewModel } from '../model/FcmTokenViewModel';
import { ProfileFullViewModel } from '../model/ProfileFullViewModel';
import { ProfileHeaderViewModel } from '../model/ProfileHeaderViewModel';
import { SocialLinksViewModel } from '../model/SocialLinksViewModel';
import { SocialViewMode } from '../model/SocialViewMode';
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile", {
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
    }).then(handleErrors).then<ProfileFullViewModel>((response: Response) => {
        return response.json();
    })
    }

    getProfileHeader = (        options: {
        } = {},
        init: RequestInit = {}): Promise<ProfileHeaderViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/header", {
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
    }).then(handleErrors).then<ProfileHeaderViewModel>((response: Response) => {
        return response.json();
    })
    }

    getSocialLinks = (        options: {
        } = {},
        init: RequestInit = {}): Promise<SocialLinksViewModel> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/sociallinks", {
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
    }).then(handleErrors).then<SocialLinksViewModel>((response: Response) => {
        return response.json();
    })
    }

    getVerificationToken = (        options: {
        } = {},
        init: RequestInit = {}): Promise<string> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/verification/token", {
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    removeAvatar = (        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/avatar/remove", {
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

    removeFcmToken = (        options: {
            body?: FcmTokenViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/push/token/remove", {
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

    switchBetaFeatureOff = (        options: {
            feature?: BetaTestingType
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/beta/off", {
    },  {
        feature: options['feature']
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

    switchBetaFeatureOn = (        options: {
            feature?: BetaTestingType
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/beta/on", {
    },  {
        feature: options['feature']
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

    switchPublicInvestorOff = (        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/investor/public/off", {
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

    switchPublicInvestorOn = (        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/investor/public/on", {
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

    updateAllSocialLinks = (        options: {
            body?: UpdateSocialLinksViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/sociallinks/all/update", {
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

    updateAvatar = (
        fileId: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(fileId, "fileId", "updateAvatar");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/avatar/update/{fileId}", {
        fileId
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

    updateFcmToken = (        options: {
            body?: FcmTokenViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/push/token", {
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

    updatePersonalDetails = (        options: {
            body?: UpdatePersonalDetailViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/personal/update", {
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

    updateProfile = (        options: {
            body?: UpdateProfileViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/update", {
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

    updateSocialLinks = (        options: {
            body?: UpdateSocialLinkViewModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/sociallinks/update", {
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

    updateUserPlatformCurrency = (        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/currency/update", {
    },  {
        currency: options['currency']
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

    updateUserSocialSettings = (        options: {
            whoCanPostToMayWall?: SocialViewMode,
            whoCanViewCommentsOnMyPosts?: SocialViewMode,
            whoCanCommentOnMyPosts?: SocialViewMode
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/profile/social/settings/update", {
    },  {
        WhoCanPostToMayWall: options['whoCanPostToMayWall'],
        WhoCanViewCommentsOnMyPosts: options['whoCanViewCommentsOnMyPosts'],
        WhoCanCommentOnMyPosts: options['whoCanCommentOnMyPosts']
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
