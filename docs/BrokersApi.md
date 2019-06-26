# CoreApiV10.BrokersApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10BrokersByProgramIdGet**](BrokersApi.md#v10BrokersByProgramIdGet) | **GET** /v1.0/brokers/{programId} | Get trade servers for program
[**v10BrokersGet**](BrokersApi.md#v10BrokersGet) | **GET** /v1.0/brokers | Get all trade servers


<a name="v10BrokersByProgramIdGet"></a>
# **v10BrokersByProgramIdGet**
> BrokersProgramInfo v10BrokersByProgramIdGet(programId)

Get trade servers for program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokersApi();

let programId = "programId_example"; // String | 

apiInstance.v10BrokersByProgramIdGet(programId).then((data) => {
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

[**BrokersProgramInfo**](BrokersProgramInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokersGet"></a>
# **v10BrokersGet**
> BrokersInfo v10BrokersGet()

Get all trade servers

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokersApi();
apiInstance.v10BrokersGet().then((data) => {
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

