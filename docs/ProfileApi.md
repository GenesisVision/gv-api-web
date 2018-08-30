# CoreApiV10.ProfileApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ProfileByIdPublicGet**](ProfileApi.md#v10ProfileByIdPublicGet) | **GET** /v1.0/profile/{id}/public | Get public profile
[**v10ProfileGet**](ProfileApi.md#v10ProfileGet) | **GET** /v1.0/profile | Get full profile
[**v10ProfileHeaderGet**](ProfileApi.md#v10ProfileHeaderGet) | **GET** /v1.0/profile/header | Get header profile
[**v10ProfileUpdatePost**](ProfileApi.md#v10ProfileUpdatePost) | **POST** /v1.0/profile/update | Update profile


<a name="v10ProfileByIdPublicGet"></a>
# **v10ProfileByIdPublicGet**
> ProfilePublic v10ProfileByIdPublicGet(id)

Get public profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let id = "id_example"; // String | 

apiInstance.v10ProfileByIdPublicGet(id).then((data) => {
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

[**ProfilePublic**](ProfilePublic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfileGet"></a>
# **v10ProfileGet**
> ProfileFullViewModel v10ProfileGet(authorization)

Get full profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProfileGet(authorization).then((data) => {
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

[**ProfileFullViewModel**](ProfileFullViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfileHeaderGet"></a>
# **v10ProfileHeaderGet**
> ProfileHeaderViewModel v10ProfileHeaderGet(authorization)

Get header profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProfileHeaderGet(authorization).then((data) => {
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

[**ProfileHeaderViewModel**](ProfileHeaderViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfileUpdatePost"></a>
# **v10ProfileUpdatePost**
> v10ProfileUpdatePost(authorization, opts)

Update profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.UpdateProfileViewModel() // UpdateProfileViewModel | 
};
apiInstance.v10ProfileUpdatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**UpdateProfileViewModel**](UpdateProfileViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

