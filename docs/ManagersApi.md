# CoreApiV10.ManagersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ManagersByIdGet**](ManagersApi.md#v10ManagersByIdGet) | **GET** /v1.0/managers/{id} | Manager profile
[**v10ManagersProgramsCreatePost**](ManagersApi.md#v10ManagersProgramsCreatePost) | **POST** /v1.0/managers/programs/create | Create an investment program


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

