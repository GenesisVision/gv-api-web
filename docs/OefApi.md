# CoreApiV10.OefApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10OefAssetAllGet**](OefApi.md#v10OefAssetAllGet) | **GET** /v1.0/oef/asset/all | Get all supported assets for OEFs


<a name="v10OefAssetAllGet"></a>
# **v10OefAssetAllGet**
> PlatformAssets v10OefAssetAllGet(authorization)

Get all supported assets for OEFs

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.OefApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10OefAssetAllGet(authorization).then((data) => {
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

[**PlatformAssets**](PlatformAssets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

