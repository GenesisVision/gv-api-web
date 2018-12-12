# CoreApiV10.KycApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10KycCallbackPost**](KycApi.md#v10KycCallbackPost) | **POST** /v1.0/kyc/callback | 


<a name="v10KycCallbackPost"></a>
# **v10KycCallbackPost**
> &#39;String&#39; v10KycCallbackPost(opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.KycApi();

let opts = { 
  'model': new CoreApiV10.KycCallback() // KycCallback | 
};
apiInstance.v10KycCallbackPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**KycCallback**](KycCallback.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

