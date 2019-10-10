# CoreApiV10.NotificationsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNotificationsSettings**](NotificationsApi.md#addNotificationsSettings) | **POST** /v1.0/notifications/settings/add | Add new setting
[**getNewNotificationsCount**](NotificationsApi.md#getNewNotificationsCount) | **GET** /v1.0/notifications/new | Unread notifications count
[**getNotifications**](NotificationsApi.md#getNotifications) | **GET** /v1.0/notifications | User notifications
[**getNotificationsFundSettings**](NotificationsApi.md#getNotificationsFundSettings) | **GET** /v1.0/notifications/settings/funds/{id} | User settings for fund
[**getNotificationsManagerSettings**](NotificationsApi.md#getNotificationsManagerSettings) | **GET** /v1.0/notifications/settings/managers/{id} | User settings for manager
[**getNotificationsProgramSettings**](NotificationsApi.md#getNotificationsProgramSettings) | **GET** /v1.0/notifications/settings/programs/{id} | User settings for program
[**getNotificationsSettings**](NotificationsApi.md#getNotificationsSettings) | **GET** /v1.0/notifications/settings | User settings
[**readNotification**](NotificationsApi.md#readNotification) | **POST** /v1.0/notifications/{id}/read | Read notification
[**removeNotificationsSettings**](NotificationsApi.md#removeNotificationsSettings) | **POST** /v1.0/notifications/settings/remove/{id} | Remove setting
[**toggleNotificationSettings**](NotificationsApi.md#toggleNotificationSettings) | **POST** /v1.0/notifications/settings/{id}/{enable} | Enable/disable setting


<a name="addNotificationsSettings"></a>
# **addNotificationsSettings**
> &#39;String&#39; addNotificationsSettings(authorization, opts)

Add new setting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'assetId': "assetId_example", // String | 
  'managerId': "managerId_example", // String | 
  'type': "type_example", // String | 
  'conditionType': "conditionType_example", // String | 
  'conditionAmount': 1.2 // Number | 
};
apiInstance.addNotificationsSettings(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **assetId** | [**String**](.md)|  | [optional] 
 **managerId** | [**String**](.md)|  | [optional] 
 **type** | **String**|  | [optional] 
 **conditionType** | **String**|  | [optional] 
 **conditionAmount** | **Number**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getNewNotificationsCount"></a>
# **getNewNotificationsCount**
> &#39;Number&#39; getNewNotificationsCount(authorization)

Unread notifications count

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getNewNotificationsCount(authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getNotifications"></a>
# **getNotifications**
> NotificationList getNotifications(authorization, opts)

User notifications

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getNotifications(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**NotificationList**](NotificationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getNotificationsFundSettings"></a>
# **getNotificationsFundSettings**
> FundNotificationSettingList getNotificationsFundSettings(id, authorization)

User settings for fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getNotificationsFundSettings(id, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**FundNotificationSettingList**](FundNotificationSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getNotificationsManagerSettings"></a>
# **getNotificationsManagerSettings**
> ManagerNotificationSettingList getNotificationsManagerSettings(id, authorization)

User settings for manager

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getNotificationsManagerSettings(id, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ManagerNotificationSettingList**](ManagerNotificationSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getNotificationsProgramSettings"></a>
# **getNotificationsProgramSettings**
> ProgramNotificationSettingList getNotificationsProgramSettings(id, authorization)

User settings for program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getNotificationsProgramSettings(id, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ProgramNotificationSettingList**](ProgramNotificationSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getNotificationsSettings"></a>
# **getNotificationsSettings**
> NotificationSettingList getNotificationsSettings(authorization)

User settings

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getNotificationsSettings(authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 

### Return type

[**NotificationSettingList**](NotificationSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="readNotification"></a>
# **readNotification**
> readNotification(id, authorization)

Read notification

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.readNotification(id, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="removeNotificationsSettings"></a>
# **removeNotificationsSettings**
> removeNotificationsSettings(id, authorization)

Remove setting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.removeNotificationsSettings(id, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="toggleNotificationSettings"></a>
# **toggleNotificationSettings**
> &#39;String&#39; toggleNotificationSettings(id, enable, authorization)

Enable/disable setting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let enable = true; // Boolean | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.toggleNotificationSettings(id, enable, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **enable** | **Boolean**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

