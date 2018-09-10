# CoreApiV10.ManagersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ManagersByIdGet**](ManagersApi.md#v10ManagersByIdGet) | **GET** /v1.0/managers/{id} | Manager profile
[**v10ManagersProgramsByIdClosePost**](ManagersApi.md#v10ManagersProgramsByIdClosePost) | **POST** /v1.0/managers/programs/{id}/close | Close existing investment program
[**v10ManagersProgramsByIdPeriodClosePost**](ManagersApi.md#v10ManagersProgramsByIdPeriodClosePost) | **POST** /v1.0/managers/programs/{id}/period/close | Close current period
[**v10ManagersProgramsByIdRequestsBySkipByTakeGet**](ManagersApi.md#v10ManagersProgramsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/managers/programs/{id}/requests/{skip}/{take} | Get requests
[**v10ManagersProgramsByIdUpdatePost**](ManagersApi.md#v10ManagersProgramsByIdUpdatePost) | **POST** /v1.0/managers/programs/{id}/update | Update investment program details
[**v10ManagersProgramsCreatePost**](ManagersApi.md#v10ManagersProgramsCreatePost) | **POST** /v1.0/managers/programs/create | Create an investment program
[**v10ManagersProgramsRequestsByIdCancelPost**](ManagersApi.md#v10ManagersProgramsRequestsByIdCancelPost) | **POST** /v1.0/managers/programs/requests/{id}/cancel | Cancel request


<a name="v10ManagersByIdGet"></a>
# **v10ManagersByIdGet**
> ManagerProfile v10ManagersByIdGet(id)

Manager profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

apiInstance.v10ManagersByIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**ManagerProfile**](ManagerProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsByIdClosePost"></a>
# **v10ManagersProgramsByIdClosePost**
> v10ManagersProgramsByIdClosePost(id, authorization)

Close existing investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsByIdClosePost(id, authorization).then(() => {
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

<a name="v10ManagersProgramsByIdPeriodClosePost"></a>
# **v10ManagersProgramsByIdPeriodClosePost**
> v10ManagersProgramsByIdPeriodClosePost(id, authorization)

Close current period

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsByIdPeriodClosePost(id, authorization).then(() => {
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

<a name="v10ManagersProgramsByIdRequestsBySkipByTakeGet"></a>
# **v10ManagersProgramsByIdRequestsBySkipByTakeGet**
> ProgramRequests v10ManagersProgramsByIdRequestsBySkipByTakeGet(id, skip, take, authorization)

Get requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsByIdRequestsBySkipByTakeGet(id, skip, take, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ProgramRequests**](ProgramRequests.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsByIdUpdatePost"></a>
# **v10ManagersProgramsByIdUpdatePost**
> v10ManagersProgramsByIdUpdatePost(id, authorization, opts)

Update investment program details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.InvestmentProgramUpdate() // InvestmentProgramUpdate | 
};
apiInstance.v10ManagersProgramsByIdUpdatePost(id, authorization, opts).then(() => {
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
 **model** | [**InvestmentProgramUpdate**](InvestmentProgramUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsCreatePost"></a>
# **v10ManagersProgramsCreatePost**
> v10ManagersProgramsCreatePost(authorization, opts)

Create an investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewProgramRequest() // NewProgramRequest | 
};
apiInstance.v10ManagersProgramsCreatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewProgramRequest**](NewProgramRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsRequestsByIdCancelPost"></a>
# **v10ManagersProgramsRequestsByIdCancelPost**
> v10ManagersProgramsRequestsByIdCancelPost(id, authorization)

Cancel request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsRequestsByIdCancelPost(id, authorization).then(() => {
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

