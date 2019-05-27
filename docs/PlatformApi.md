# CoreApiV10.PlatformApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10PlatformDatePost**](PlatformApi.md#v10PlatformDatePost) | **POST** /v1.0/platform/date | Server date
[**v10PlatformInfoGet**](PlatformApi.md#v10PlatformInfoGet) | **GET** /v1.0/platform/info | Platform info
[**v10PlatformLevelsGet**](PlatformApi.md#v10PlatformLevelsGet) | **GET** /v1.0/platform/levels | Investment programs levels
[**v10PlatformRiskcontrolGet**](PlatformApi.md#v10PlatformRiskcontrolGet) | **GET** /v1.0/platform/riskcontrol | Platform captcha details.
[**v10PlatformStatisticGet**](PlatformApi.md#v10PlatformStatisticGet) | **GET** /v1.0/platform/statistic | Platform statistic


<a name="v10PlatformDatePost"></a>
# **v10PlatformDatePost**
> &#39;String&#39; v10PlatformDatePost()

Server date

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();
apiInstance.v10PlatformDatePost().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

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

<a name="v10PlatformLevelsGet"></a>
# **v10PlatformLevelsGet**
> ProgramsLevelsInfo v10PlatformLevelsGet(opts)

Investment programs levels

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();

let opts = { 
  'currency': "100" // String | 
};
apiInstance.v10PlatformLevelsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**|  | [optional] [default to 100]

### Return type

[**ProgramsLevelsInfo**](ProgramsLevelsInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10PlatformRiskcontrolGet"></a>
# **v10PlatformRiskcontrolGet**
> CaptchaDetails v10PlatformRiskcontrolGet(route, opts)

Platform captcha details.

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();

let route = "route_example"; // String | 

let opts = { 
  'client': "client_example", // String | 
  'version': "version_example" // String | 
};
apiInstance.v10PlatformRiskcontrolGet(route, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **route** | **String**|  | 
 **client** | **String**|  | [optional] 
 **version** | **String**|  | [optional] 

### Return type

[**CaptchaDetails**](CaptchaDetails.md)

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

