# CoreApiV10.RateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10RatePost**](RateApi.md#v10RatePost) | **POST** /v1.0/rate | Get rate


<a name="v10RatePost"></a>
# **v10RatePost**
> RateViewModel v10RatePost(opts)

Get rate

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.RateApi();

let opts = { 
  'model': new CoreApiV10.RequestRate() // RequestRate | 
};
apiInstance.v10RatePost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**RequestRate**](RequestRate.md)|  | [optional] 

### Return type

[**RateViewModel**](RateViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

