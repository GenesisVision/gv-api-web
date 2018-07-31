# CoreApiV10.DexchangeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10DexchangeNodePost**](DexchangeApi.md#v10DexchangeNodePost) | **POST** /v1.0/dexchange/node | 


<a name="v10DexchangeNodePost"></a>
# **v10DexchangeNodePost**
> DExchangeResponse v10DexchangeNodePost(authorization, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.DexchangeApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.DExchangeRequest() // DExchangeRequest | 
};
apiInstance.v10DexchangeNodePost(authorization, opts).then((data) => {
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

### Return type

[**DExchangeResponse**](DExchangeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

