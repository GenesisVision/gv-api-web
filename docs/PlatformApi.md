# CoreApiV10.PlatformApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCaptchaModel**](PlatformApi.md#getCaptchaModel) | **GET** /v1.0/platform/riskcontrol | Platform captcha details
[**getLevelsParams**](PlatformApi.md#getLevelsParams) | **GET** /v1.0/platform/levels/parameters | Investment programs levels parameters
[**getPlatformStatistic**](PlatformApi.md#getPlatformStatistic) | **GET** /v1.0/platform/statistic | Platform statistic
[**getPlatformStatus**](PlatformApi.md#getPlatformStatus) | **GET** /v1.0/platform/info | Platform info
[**getProgramsLevels**](PlatformApi.md#getProgramsLevels) | **GET** /v1.0/platform/levels | Investment programs levels
[**platformDate**](PlatformApi.md#platformDate) | **POST** /v1.0/platform/date | Server date


<a name="getCaptchaModel"></a>
# **getCaptchaModel**
> CaptchaDetails getCaptchaModel(route, opts)

Platform captcha details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();

let route = "route_example"; // String | 

let opts = { 
  'client': "client_example", // String | 
  'version': "version_example" // String | 
};
apiInstance.getCaptchaModel(route, opts).then((data) => {
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

<a name="getLevelsParams"></a>
# **getLevelsParams**
> LevelsParamsInfo getLevelsParams(opts)

Investment programs levels parameters

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();

let opts = { 
  'currency': "104" // String | 
};
apiInstance.getLevelsParams(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**|  | [optional] [default to 104]

### Return type

[**LevelsParamsInfo**](LevelsParamsInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPlatformStatistic"></a>
# **getPlatformStatistic**
> PlatformStatistic getPlatformStatistic()

Platform statistic

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();
apiInstance.getPlatformStatistic().then((data) => {
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

<a name="getPlatformStatus"></a>
# **getPlatformStatus**
> PlatformInfo getPlatformStatus()

Platform info

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();
apiInstance.getPlatformStatus().then((data) => {
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

<a name="getProgramsLevels"></a>
# **getProgramsLevels**
> ProgramsLevelsInfo getProgramsLevels(opts)

Investment programs levels

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();

let opts = { 
  'currency': "100" // String | 
};
apiInstance.getProgramsLevels(opts).then((data) => {
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

<a name="platformDate"></a>
# **platformDate**
> &#39;String&#39; platformDate()

Server date

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PlatformApi();
apiInstance.platformDate().then((data) => {
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

