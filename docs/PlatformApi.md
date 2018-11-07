# CoreApiV10.PlatformApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10PlatformInfoGet**](PlatformApi.md#v10PlatformInfoGet) | **GET** /v1.0/platform/info | Platform info
[**v10PlatformStatisticGet**](PlatformApi.md#v10PlatformStatisticGet) | **GET** /v1.0/platform/statistic | Platform statistic


<a name="v10PlatformInfoGet"></a>
# **v10PlatformInfoGet**
> PlatformInfo v10PlatformInfoGet()

Platform info

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();
apiInstance.v10PlatformInfoGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PlatformInfo**](PlatformInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10PlatformStatisticGet"></a>
# **v10PlatformStatisticGet**
> PlatformStatistic v10PlatformStatisticGet()

Platform statistic

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();
apiInstance.v10PlatformStatisticGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PlatformStatistic**](PlatformStatistic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

