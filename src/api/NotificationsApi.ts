import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FollowNotificationSettingList } from '../model/FollowNotificationSettingList';
import { FundNotificationSettingList } from '../model/FundNotificationSettingList';
import { ManagerNotificationSettingList } from '../model/ManagerNotificationSettingList';
import { NotificationList } from '../model/NotificationList';
import { NotificationSettingConditionType } from '../model/NotificationSettingConditionType';
import { NotificationSettingList } from '../model/NotificationSettingList';
import { NotificationType } from '../model/NotificationType';
import { ProgramNotificationSettingList } from '../model/ProgramNotificationSettingList';

export default class NotificationsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    addNotificationsSettings = (        options: {
            assetId?: string,
            managerId?: string,
            type?: NotificationType,
            conditionType?: NotificationSettingConditionType,
            conditionAmount?: number
        } = {},
        init: RequestInit = {}): Promise<string> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/settings/add", {
    },  {
        AssetId: options['assetId'],
        ManagerId: options['managerId'],
        Type: options['type'],
        ConditionType: options['conditionType'],
        ConditionAmount: options['conditionAmount']
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

    getNewNotificationsCount = (        options: {
        } = {},
        init: RequestInit = {}): Promise<number> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/new", {
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
    }).then(handleErrors).then<number>((response: Response) => {
        return response.text() as unknown as number;
    })
    }

    getNotifications = (        options: {
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<NotificationList> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications", {
    },  {
        skip: options['skip'],
        take: options['take']
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
    }).then(handleErrors).then<NotificationList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsFollowSettings = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<FollowNotificationSettingList> => {
            checkRequiredParameter(id, "id", "getNotificationsFollowSettings");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/settings/follow/{id}", {
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
    }).then(handleErrors).then<FollowNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsFundSettings = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<FundNotificationSettingList> => {
            checkRequiredParameter(id, "id", "getNotificationsFundSettings");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/settings/funds/{id}", {
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
    }).then(handleErrors).then<FundNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsManagerSettings = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ManagerNotificationSettingList> => {
            checkRequiredParameter(id, "id", "getNotificationsManagerSettings");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/settings/managers/{id}", {
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
    }).then(handleErrors).then<ManagerNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsProgramSettings = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ProgramNotificationSettingList> => {
            checkRequiredParameter(id, "id", "getNotificationsProgramSettings");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/settings/programs/{id}", {
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
    }).then(handleErrors).then<ProgramNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsSettings = (        options: {
        } = {},
        init: RequestInit = {}): Promise<NotificationSettingList> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/settings", {
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
    }).then(handleErrors).then<NotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    readAllNotification = (        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/all/read", {
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

    readNotification = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "readNotification");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/{id}/read", {
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

    removeNotificationsSettings = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(id, "id", "removeNotificationsSettings");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/settings/remove/{id}", {
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

    toggleNotificationSettings = (
        id: string,
        enable: boolean,
        options: {
        } = {},
        init: RequestInit = {}): Promise<string> => {
            checkRequiredParameter(id, "id", "toggleNotificationSettings");
            checkRequiredParameter(enable, "enable", "toggleNotificationSettings");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/notifications/settings/{id}/{enable}", {
        id,
        enable
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
}
