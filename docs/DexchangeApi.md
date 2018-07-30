# CoreApiV2.DexchangeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDexchangeNodePost**](DexchangeApi.md#apiDexchangeNodePost) | **POST** /api/dexchange/node | 


<a name="apiDexchangeNodePost"></a>
# **apiDexchangeNodePost**
> DExchangeResponse apiDexchangeNodePost(authorization, opts)



### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.DexchangeApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.DExchangeRequest(), // DExchangeRequest | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiDexchangeNodePost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**DExchangeRequest**](DExchangeRequest.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**DExchangeResponse**](DExchangeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

