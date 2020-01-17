import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundNotificationSettingList } from '../model/FundNotificationSettingList';
import { ManagerNotificationSettingList } from '../model/ManagerNotificationSettingList';
import { NotificationList } from '../model/NotificationList';
import { NotificationSettingList } from '../model/NotificationSettingList';
import { ProgramNotificationSettingList } from '../model/ProgramNotificationSettingList';

export default class NotificationsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    addNotificationsSettings = (
        authorization: string,
        options: {
            assetId?: string,
            managerId?: string,
            type?: string,
            conditionType?: string,
            conditionAmount?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling addNotificationsSettings.');
                }
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

    let contentType = "application/json";
    let body = null;


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

    getNewNotificationsCount = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getNewNotificationsCount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/new", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<number>((response: Response) => {
        return response.text() as unknown as number;
    })
    }

    getNotifications = (
        authorization: string,
        options: {
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getNotifications.');
                }
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

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<NotificationList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsFundSettings = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getNotificationsFundSettings.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getNotificationsFundSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/funds/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<FundNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsManagerSettings = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getNotificationsManagerSettings.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getNotificationsManagerSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/managers/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ManagerNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsProgramSettings = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getNotificationsProgramSettings.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getNotificationsProgramSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/programs/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ProgramNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    getNotificationsSettings = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getNotificationsSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<NotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

    readAllNotification = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling readAllNotification.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/all/read", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


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

    readNotification = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling readNotification.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling readNotification.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/{id}/read", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


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

    removeNotificationsSettings = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling removeNotificationsSettings.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling removeNotificationsSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/remove/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


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

    toggleNotificationSettings = (
        id: string,
        enable: boolean,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling toggleNotificationSettings.');
                }
                if (enable === null || enable === undefined) {
                throw new Error('Required parameter enable was null or undefined when calling toggleNotificationSettings.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling toggleNotificationSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/notifications/settings/{id}/{enable}", {
        id,
        enable
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


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
}