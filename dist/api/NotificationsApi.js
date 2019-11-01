import ApiClient from "../ApiClient";
import { FundNotificationSettingList } from "../model/FundNotificationSettingList";
import { ManagerNotificationSettingList } from "../model/ManagerNotificationSettingList";
import { NotificationList } from "../model/NotificationList";
import { NotificationSettingList } from "../model/NotificationSettingList";
import { ProgramNotificationSettingList } from "../model/ProgramNotificationSettingList";
export class NotificationsApi {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    addNotificationsSettings(authorization, opts) {
        return this.addNotificationsSettingsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    addNotificationsSettingsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling addNotificationsSettings");
        }
        let pathParams = {};
        let queryParams = {
            "AssetId": opts["assetId"],
            "ManagerId": opts["managerId"],
            "Type": opts["type"],
            "ConditionType": opts["conditionType"],
            "ConditionAmount": opts["conditionAmount"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v1.0/notifications/settings/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getNewNotificationsCount(authorization) {
        return this.getNewNotificationsCountWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getNewNotificationsCountWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getNewNotificationsCount");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'number';
        return this.apiClient.callApi('/v1.0/notifications/new', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getNotifications(authorization, opts) {
        return this.getNotificationsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getNotificationsWithHttpInfo(authorization, opts = {}) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getNotifications");
        }
        let pathParams = {};
        let queryParams = {
            "skip": opts["skip"],
            "take": opts["take"]
        };
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = NotificationList;
        return this.apiClient.callApi('/v1.0/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getNotificationsFundSettings(id, authorization) {
        return this.getNotificationsFundSettingsWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getNotificationsFundSettingsWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getNotificationsFundSettings");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getNotificationsFundSettings");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = FundNotificationSettingList;
        return this.apiClient.callApi('/v1.0/notifications/settings/funds/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getNotificationsManagerSettings(id, authorization) {
        return this.getNotificationsManagerSettingsWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getNotificationsManagerSettingsWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getNotificationsManagerSettings");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getNotificationsManagerSettings");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ManagerNotificationSettingList;
        return this.apiClient.callApi('/v1.0/notifications/settings/managers/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getNotificationsProgramSettings(id, authorization) {
        return this.getNotificationsProgramSettingsWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getNotificationsProgramSettingsWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getNotificationsProgramSettings");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getNotificationsProgramSettings");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProgramNotificationSettingList;
        return this.apiClient.callApi('/v1.0/notifications/settings/programs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getNotificationsSettings(authorization) {
        return this.getNotificationsSettingsWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getNotificationsSettingsWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getNotificationsSettings");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = NotificationSettingList;
        return this.apiClient.callApi('/v1.0/notifications/settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    readNotification(id, authorization) {
        return this.readNotificationWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    readNotificationWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling readNotification");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling readNotification");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/notifications/{id}/read', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    removeNotificationsSettings(id, authorization) {
        return this.removeNotificationsSettingsWithHttpInfo(id, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    removeNotificationsSettingsWithHttpInfo(id, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling removeNotificationsSettings");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling removeNotificationsSettings");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/notifications/settings/remove/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    toggleNotificationSettings(id, enable, authorization) {
        return this.toggleNotificationSettingsWithHttpInfo(id, enable, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    toggleNotificationSettingsWithHttpInfo(id, enable, authorization) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling toggleNotificationSettings");
        }
        if (enable === undefined || enable === null) {
            throw new Error("Missing the required parameter \"enable\" when calling toggleNotificationSettings");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling toggleNotificationSettings");
        }
        let pathParams = {
            "id": id,
            "enable": enable
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v1.0/notifications/settings/{id}/{enable}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}
