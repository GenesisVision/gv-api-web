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

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = AddNotificationsSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/notifications/settings/add
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), AssetId(string), ManagerId(string), Type(string), ConditionType(string), ConditionAmount(number)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel]
        Key: pathParams Value = []
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = string
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;&quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2c9e4a87]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = string
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [AssetId(string), ManagerId(string), Type(string), ConditionType(string), ConditionAmount(number)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = addNotificationsSettings
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = addnotificationssettings
        Key: operationId Value = addNotificationsSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = true
        Key: operationIdSnakeCase Value = add_notifications_settings
        Key: consumes Value = 
        Key: summary Value = Add new setting
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/notifications/settings/add
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetNewNotificationsCount
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/notifications/new
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel]
        Key: pathParams Value = []
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = number
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;0}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@1653bb32]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = number
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = getNewNotificationsCount
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getnewnotificationscount
        Key: operationId Value = getNewNotificationsCount
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = true
        Key: operationIdSnakeCase Value = get_new_notifications_count
        Key: consumes Value = 
        Key: summary Value = Unread notifications count
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/notifications/new
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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
    }).then(handleErrors).then<number>((response: Response) => {
        return response.text() as unknown as number;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetNotifications
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/notifications
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), skip(number), take(number)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, NotificationList]
        Key: pathParams Value = []
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = NotificationList
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 0,
  &quot;notifications&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;color&quot; : &quot;color&quot;,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;text&quot; : &quot;text&quot;,
    &quot;managerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;type&quot; : &quot;PlatformNewsAndUpdates&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;isUnread&quot; : true,
    &quot;assetType&quot; : &quot;Program&quot;
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;color&quot; : &quot;color&quot;,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;text&quot; : &quot;text&quot;,
    &quot;managerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;type&quot; : &quot;PlatformNewsAndUpdates&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;isUnread&quot; : true,
    &quot;assetType&quot; : &quot;Program&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@6c9f565b]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = NotificationList
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [skip(number), take(number)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = getNotifications
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getnotifications
        Key: operationId Value = getNotifications
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_notifications
        Key: consumes Value = 
        Key: summary Value = User notifications
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/notifications
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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
    }).then(handleErrors).then<NotificationList>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetNotificationsFundSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/notifications/settings/funds/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, FundNotificationSettingList]
        Key: pathParams Value = [id(string)]
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = FundNotificationSettingList
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;color&quot; : &quot;color&quot;,
  &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
  &quot;logo&quot; : &quot;logo&quot;,
  &quot;settingsGeneral&quot; : [ null, null ],
  &quot;title&quot; : &quot;title&quot;,
  &quot;url&quot; : &quot;url&quot;
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@6d4f12e5]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = FundNotificationSettingList
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getNotificationsFundSettings
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getnotificationsfundsettings
        Key: operationId Value = getNotificationsFundSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_notifications_fund_settings
        Key: consumes Value = 
        Key: summary Value = User settings for fund
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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
    }).then(handleErrors).then<FundNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetNotificationsManagerSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/notifications/settings/managers/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ManagerNotificationSettingList]
        Key: pathParams Value = [id(string)]
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ManagerNotificationSettingList
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;about&quot; : &quot;about&quot;,
  &quot;settingsGeneral&quot; : [ null, null ],
  &quot;managerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
  &quot;avatar&quot; : &quot;avatar&quot;,
  &quot;url&quot; : &quot;url&quot;,
  &quot;username&quot; : &quot;username&quot;
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@335bb7b9]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ManagerNotificationSettingList
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getNotificationsManagerSettings
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getnotificationsmanagersettings
        Key: operationId Value = getNotificationsManagerSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_notifications_manager_settings
        Key: consumes Value = 
        Key: summary Value = User settings for manager
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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
    }).then(handleErrors).then<ManagerNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetNotificationsProgramSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/notifications/settings/programs/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ProgramNotificationSettingList]
        Key: pathParams Value = [id(string)]
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ProgramNotificationSettingList
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;color&quot; : &quot;color&quot;,
  &quot;level&quot; : 6,
  &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
  &quot;logo&quot; : &quot;logo&quot;,
  &quot;settingsGeneral&quot; : [ null, null ],
  &quot;title&quot; : &quot;title&quot;,
  &quot;url&quot; : &quot;url&quot;,
  &quot;levelProgress&quot; : 1.4658129805029452,
  &quot;settingsCustom&quot; : [ null, null ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@38da10cb]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ProgramNotificationSettingList
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getNotificationsProgramSettings
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getnotificationsprogramsettings
        Key: operationId Value = getNotificationsProgramSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_notifications_program_settings
        Key: consumes Value = 
        Key: summary Value = User settings for program
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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
    }).then(handleErrors).then<ProgramNotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetNotificationsSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/notifications/settings
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, NotificationSettingList]
        Key: pathParams Value = []
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = NotificationSettingList
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;settingsProgram&quot; : [ {
    &quot;color&quot; : &quot;color&quot;,
    &quot;level&quot; : 6,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;settingsGeneral&quot; : [ null, null ],
    &quot;title&quot; : &quot;title&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;levelProgress&quot; : 1.4658129805029452,
    &quot;settingsCustom&quot; : [ null, null ]
  }, {
    &quot;color&quot; : &quot;color&quot;,
    &quot;level&quot; : 6,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;settingsGeneral&quot; : [ null, null ],
    &quot;title&quot; : &quot;title&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;levelProgress&quot; : 1.4658129805029452,
    &quot;settingsCustom&quot; : [ null, null ]
  } ],
  &quot;settingsFollow&quot; : [ {
    &quot;color&quot; : &quot;color&quot;,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;settingsGeneral&quot; : [ null, null ],
    &quot;title&quot; : &quot;title&quot;,
    &quot;url&quot; : &quot;url&quot;
  }, {
    &quot;color&quot; : &quot;color&quot;,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;settingsGeneral&quot; : [ null, null ],
    &quot;title&quot; : &quot;title&quot;,
    &quot;url&quot; : &quot;url&quot;
  } ],
  &quot;settingsManager&quot; : [ {
    &quot;about&quot; : &quot;about&quot;,
    &quot;settingsGeneral&quot; : [ null, null ],
    &quot;managerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;avatar&quot; : &quot;avatar&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;username&quot; : &quot;username&quot;
  }, {
    &quot;about&quot; : &quot;about&quot;,
    &quot;settingsGeneral&quot; : [ null, null ],
    &quot;managerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;avatar&quot; : &quot;avatar&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;username&quot; : &quot;username&quot;
  } ],
  &quot;settingsGeneral&quot; : [ {
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;isEnabled&quot; : true,
    &quot;conditionAmount&quot; : 0.8008281904610115,
    &quot;conditionType&quot; : &quot;Empty&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;managerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;type&quot; : &quot;PlatformNewsAndUpdates&quot;
  }, {
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;isEnabled&quot; : true,
    &quot;conditionAmount&quot; : 0.8008281904610115,
    &quot;conditionType&quot; : &quot;Empty&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;managerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;type&quot; : &quot;PlatformNewsAndUpdates&quot;
  } ],
  &quot;settingsFund&quot; : [ {
    &quot;color&quot; : &quot;color&quot;,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;settingsGeneral&quot; : [ null, null ],
    &quot;title&quot; : &quot;title&quot;,
    &quot;url&quot; : &quot;url&quot;
  }, {
    &quot;color&quot; : &quot;color&quot;,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;settingsGeneral&quot; : [ null, null ],
    &quot;title&quot; : &quot;title&quot;,
    &quot;url&quot; : &quot;url&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2e61b405]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = NotificationSettingList
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = getNotificationsSettings
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getnotificationssettings
        Key: operationId Value = getNotificationsSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_notifications_settings
        Key: consumes Value = 
        Key: summary Value = User settings
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/notifications/settings
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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
    }).then(handleErrors).then<NotificationSettingList>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = ReadAllNotification
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/notifications/all/read
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel]
        Key: pathParams Value = []
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = 
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = 
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@3b2c4316]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = readAllNotification
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = readallnotification
        Key: operationId Value = readAllNotification
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = read_all_notification
        Key: consumes Value = 
        Key: summary Value = Read all notification
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/notifications/all/read
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = ReadNotification
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/notifications/{id}/read
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel]
        Key: pathParams Value = [id(string)]
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = 
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = 
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@5524ddb5]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = readNotification
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = readnotification
        Key: operationId Value = readNotification
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = read_notification
        Key: consumes Value = 
        Key: summary Value = Read notification
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = RemoveNotificationsSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/notifications/settings/remove/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel]
        Key: pathParams Value = [id(string)]
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = 
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = 
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@3d90d392]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = removeNotificationsSettings
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = removenotificationssettings
        Key: operationId Value = removeNotificationsSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = remove_notifications_settings
        Key: consumes Value = 
        Key: summary Value = Remove setting
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = ToggleNotificationSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/notifications/settings/{id}/{enable}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), enable(boolean), Authorization(string)]
        Key: baseName Value = Notifications
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel]
        Key: pathParams Value = [id(string), enable(boolean)]
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: notifications
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = string
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;&quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@1ef289b9]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = string
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), enable(boolean), Authorization(string)]
        Key: nickname Value = toggleNotificationSettings
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = togglenotificationsettings
        Key: operationId Value = toggleNotificationSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = true
        Key: operationIdSnakeCase Value = toggle_notification_settings
        Key: consumes Value = 
        Key: summary Value = Enable/disable setting
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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
}