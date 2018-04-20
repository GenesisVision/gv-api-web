# CoreApi.TradesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTradesIpfsHistoryGet**](TradesApi.md#apiTradesIpfsHistoryGet) | **GET** /api/trades/ipfsHistory | Get trades by IPFS hash id


<a name="apiTradesIpfsHistoryGet"></a>
# **apiTradesIpfsHistoryGet**
> TradesViewModel apiTradesIpfsHistoryGet(type, opts)

Get trades by IPFS hash id

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.TradesApi();

let type = "type_example"; // String | 

let opts = { 
  'ipfsHashId': "ipfsHashId_example" // String | 
};
apiInstance.apiTradesIpfsHistoryGet(type, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | 
 **ipfsHashId** | **String**|  | [optional] 

### Return type

[**TradesViewModel**](TradesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

