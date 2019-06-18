# CoreApiV10.BrokersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10BrokersGet**](BrokersApi.md#v10BrokersGet) | **GET** /v1.0/brokers | Get all trade servers


<a name="v10BrokersGet"></a>
# **v10BrokersGet**
> BrokersInfo v10BrokersGet()

Get all trade servers

### Example
```javascript
var CoreApiV10 = require('core_api_v10');

var apiInstance = new CoreApiV10.BrokersApi();
apiInstance.v10BrokersGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BrokersInfo**](BrokersInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

