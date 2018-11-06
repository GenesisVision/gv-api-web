# CoreApiV10.BrokersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBrokers**](BrokersApi.md#getBrokers) | **GET** /v1.0/brokers | Get all trade servers


<a name="getBrokers"></a>
# **getBrokers**
> BrokersInfo getBrokers()

Get all trade servers

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokersApi();
apiInstance.getBrokers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

