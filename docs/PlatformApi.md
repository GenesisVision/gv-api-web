# CoreApiV2.PlatformApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPlatformInfoGet**](PlatformApi.md#apiPlatformInfoGet) | **GET** /api/platform/info | Platform info


<a name="apiPlatformInfoGet"></a>
# **apiPlatformInfoGet**
> PlatformInfo apiPlatformInfoGet(opts)

Platform info

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.PlatformApi();

let opts = { 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiPlatformInfoGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [optional] 

### Return type

[**PlatformInfo**](PlatformInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

