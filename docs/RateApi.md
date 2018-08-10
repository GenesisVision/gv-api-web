# CoreApiV10.RateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10RateByFromByToGet**](RateApi.md#v10RateByFromByToGet) | **GET** /v1.0/rate/{from}/{to} | Get rate


<a name="v10RateByFromByToGet"></a>
# **v10RateByFromByToGet**
> RateViewModel v10RateByFromByToGet(from, to)

Get rate

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.RateApi();

let from = "from_example"; // String | 

let to = "to_example"; // String | 

apiInstance.v10RateByFromByToGet(from, to).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**|  | 
 **to** | **String**|  | 

### Return type

[**RateViewModel**](RateViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

