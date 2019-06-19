# CoreApiV10.SearchApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10SearchGet**](SearchApi.md#v10SearchGet) | **GET** /v1.0/search | Program / fund / manager search


<a name="v10SearchGet"></a>
# **v10SearchGet**
> SearchViewModel v10SearchGet(opts)

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
apiInstance.v10SearchGet(opts).then((data) => {
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

[**SearchViewModel**](SearchViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

