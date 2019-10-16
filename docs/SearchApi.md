# CoreApiV10.SearchApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **GET** /v1.0/search | Program / fund / manager search


<a name="search"></a>
# **search**
> SearchViewModelOld search(opts)

Program / fund / manager search

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SearchApi();

let opts = { 
  'authorization': "authorization_example", // String | 
  'mask': "mask_example", // String | 
  'take': 56 // Number | 
};
apiInstance.search(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **mask** | **String**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**SearchViewModelOld**](SearchViewModelOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

