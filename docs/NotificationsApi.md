# CoreApiV10.NotificationsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10NotificationsGet**](NotificationsApi.md#v10NotificationsGet) | **GET** /v1.0/notifications | 
[**v10NotificationsNewGet**](NotificationsApi.md#v10NotificationsNewGet) | **GET** /v1.0/notifications/new | 
[**v10NotificationsSettingsAddPost**](NotificationsApi.md#v10NotificationsSettingsAddPost) | **POST** /v1.0/notifications/settings/add | 
[**v10NotificationsSettingsGet**](NotificationsApi.md#v10NotificationsSettingsGet) | **GET** /v1.0/notifications/settings | 
[**v10NotificationsSettingsRemoveByIdPost**](NotificationsApi.md#v10NotificationsSettingsRemoveByIdPost) | **POST** /v1.0/notifications/settings/remove/{id} | 


<a name="v10NotificationsGet"></a>
# **v10NotificationsGet**
> NotificationList v10NotificationsGet(authorization, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10NotificationsGet(authorization, opts).then((data) => {
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

<a name="v10NotificationsNewGet"></a>
# **v10NotificationsNewGet**
> &#39;Number&#39; v10NotificationsNewGet(authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsNewGet(authorization).then((data) => {
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

<a name="v10NotificationsSettingsAddPost"></a>
# **v10NotificationsSettingsAddPost**
> v10NotificationsSettingsAddPost(authorization, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'id': "id_example", // String | 
  'programId': "programId_example", // String | 
  'managerId': "managerId_example", // String | 
  'type': "type_example", // String | 
  'conditionType': "conditionType_example", // String | 
  'conditionAmount': 1.2 // Number | 
};
apiInstance.v10NotificationsSettingsAddPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **id** | [**String**](.md)|  | [optional] 
 **programId** | [**String**](.md)|  | [optional] 
 **managerId** | [**String**](.md)|  | [optional] 
 **type** | **String**|  | [optional] 
 **conditionType** | **String**|  | [optional] 
 **conditionAmount** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsSettingsGet"></a>
# **v10NotificationsSettingsGet**
> NotificationSettingList v10NotificationsSettingsGet(authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsSettingsGet(authorization).then((data) => {
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

<a name="v10NotificationsSettingsRemoveByIdPost"></a>
# **v10NotificationsSettingsRemoveByIdPost**
> v10NotificationsSettingsRemoveByIdPost(id, authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsSettingsRemoveByIdPost(id, authorization).then(() => {
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

