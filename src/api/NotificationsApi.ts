import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
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
        const {
            assetId,
            managerId,
            type,
            conditionType,
            conditionAmount
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/add", {
    })

    const query = buildQueryString(path, {
        AssetId: assetId,
        ManagerId: managerId,
        Type: type,
        ConditionType: conditionType,
        ConditionAmount: conditionAmount
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

    getNewNotificationsCount = (        options: {
        } = {},
        init: RequestInit = {}): Promise<number> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/new", {
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
    }).then(handleErrors).then<number>((response: Response) => {
        return response.text() as unknown as number;
    })
    }

    getNotifications = (        options: {
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<NotificationList> => {
        const {
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications", {
    })

    const query = buildQueryString(path, {
        skip: skip,
        take: take
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
    }).then(handleErrors).then<NotificationList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsFundSettings = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<FundNotificationSettingList> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getNotificationsFundSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/funds/{id}", {
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
    }).then(handleErrors).then<FundNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsManagerSettings = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ManagerNotificationSettingList> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getNotificationsManagerSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/managers/{id}", {
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
    }).then(handleErrors).then<ManagerNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsProgramSettings = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ProgramNotificationSettingList> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getNotificationsProgramSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/programs/{id}", {
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
    }).then(handleErrors).then<ProgramNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsSettings = (        options: {
        } = {},
        init: RequestInit = {}): Promise<NotificationSettingList> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings", {
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
    }).then(handleErrors).then<NotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    readAllNotification = (        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/all/read", {
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

    readNotification = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling readNotification.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/{id}/read", {
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

    removeNotificationsSettings = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling removeNotificationsSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/remove/{id}", {
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

    toggleNotificationSettings = (
        id: string,
        enable: boolean,
        options: {
        } = {},
        init: RequestInit = {}): Promise<string> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling toggleNotificationSettings.');
                }
                if (enable === null || enable === undefined) {
                throw new Error('Required parameter enable was null or undefined when calling toggleNotificationSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/{id}/{enable}", {
        id,
        enable
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
}