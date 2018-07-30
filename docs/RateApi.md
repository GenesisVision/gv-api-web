# CoreApiV2.RateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRatePost**](RateApi.md#apiRatePost) | **POST** /api/rate | Get rate


<a name="apiRatePost"></a>
# **apiRatePost**
> RateViewModel apiRatePost(opts)

Get rate

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.RateApi();

let opts = { 
  'model': new CoreApiV2.RequestRate(), // RequestRate | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiRatePost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**RequestRate**](RequestRate.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**RateViewModel**](RateViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

