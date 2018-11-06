# CoreApiV10.SearchApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrograms**](SearchApi.md#getPrograms) | **GET** /v1.0/search | Program / fund / manager search


<a name="getPrograms"></a>
# **getPrograms**
> SearchViewModel getPrograms(opts)

Program / fund / manager search

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SearchApi();

let opts = { 
  'mask': "mask_example", // String | 
  'take': 56 // Number | 
};
apiInstance.getPrograms(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mask** | **String**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**SearchViewModel**](SearchViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

