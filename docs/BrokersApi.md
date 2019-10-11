# CoreApiV10.BrokersApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBrokers**](BrokersApi.md#getBrokers) | **GET** /v1.0/brokers | Get all trade servers
[**getBrokersForProgram**](BrokersApi.md#getBrokersForProgram) | **GET** /v1.0/brokers/{programId} | Get trade servers for program


<a name="getBrokers"></a>
# **getBrokers**
> BrokersInfoOld getBrokers()

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

[**BrokersInfoOld**](BrokersInfoOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getBrokersForProgram"></a>
# **getBrokersForProgram**
> BrokersProgramInfoOld getBrokersForProgram(programId)

Get trade servers for program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokersApi();

let programId = "programId_example"; // String | 

apiInstance.getBrokersForProgram(programId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | [**String**](.md)|  | 

### Return type

[**BrokersProgramInfoOld**](BrokersProgramInfoOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

