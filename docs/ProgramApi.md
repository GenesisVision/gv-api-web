# CoreApiV2.ProgramApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProgramAuthDetailsPost**](ProgramApi.md#apiProgramAuthDetailsPost) | **POST** /api/program/auth/details | Program details (authorized)
[**apiProgramAuthListPost**](ProgramApi.md#apiProgramAuthListPost) | **POST** /api/program/auth/list | Programs list (authorized)
[**apiProgramDetailsChartGet**](ProgramApi.md#apiProgramDetailsChartGet) | **GET** /api/program/details/chart | Get manager trade history
[**apiProgramDetailsPost**](ProgramApi.md#apiProgramDetailsPost) | **POST** /api/program/details | Program details
[**apiProgramDetailsTradesGet**](ProgramApi.md#apiProgramDetailsTradesGet) | **GET** /api/program/details/trades | Get manager trade history
[**apiProgramListPost**](ProgramApi.md#apiProgramListPost) | **POST** /api/program/list | Programs list


<a name="apiProgramAuthDetailsPost"></a>
# **apiProgramAuthDetailsPost**
> ProgramDetailsFull apiProgramAuthDetailsPost(authorization, opts)

Program details (authorized)

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'id': "id_example" // String | 
};
apiInstance.apiProgramAuthDetailsPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **id** | [**String**](.md)|  | [optional] 

### Return type

[**ProgramDetailsFull**](ProgramDetailsFull.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiProgramAuthListPost"></a>
# **apiProgramAuthListPost**
> ProgramsList apiProgramAuthListPost(authorization, opts)

Programs list (authorized)

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'filter': new CoreApiV2.ProgramsFilter() // ProgramsFilter | 
};
apiInstance.apiProgramAuthListPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **filter** | [**ProgramsFilter**](ProgramsFilter.md)|  | [optional] 

### Return type

[**ProgramsList**](ProgramsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiProgramDetailsChartGet"></a>
# **apiProgramDetailsChartGet**
> ProgramChart apiProgramDetailsChartGet(opts)

Get manager trade history

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let opts = { 
  'timeFrame': "timeFrame_example" // String | 
};
apiInstance.apiProgramDetailsChartGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeFrame** | **String**|  | [optional] 

### Return type

[**ProgramChart**](ProgramChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiProgramDetailsPost"></a>
# **apiProgramDetailsPost**
> ProgramDetailsFull apiProgramDetailsPost(opts)

Program details

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let opts = { 
  'id': "id_example" // String | 
};
apiInstance.apiProgramDetailsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | [optional] 

### Return type

[**ProgramDetailsFull**](ProgramDetailsFull.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiProgramDetailsTradesGet"></a>
# **apiProgramDetailsTradesGet**
> TradesViewModel apiProgramDetailsTradesGet(opts)

Get manager trade history

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'symbol': "symbol_example", // String | 
  'sorting': "sorting_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.apiProgramDetailsTradesGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **symbol** | **String**|  | [optional] 
 **sorting** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**TradesViewModel**](TradesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiProgramListPost"></a>
# **apiProgramListPost**
> ProgramsList apiProgramListPost(opts)

Programs list

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let opts = { 
  'filter': new CoreApiV2.ProgramsFilter() // ProgramsFilter | 
};
apiInstance.apiProgramListPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**ProgramsFilter**](ProgramsFilter.md)|  | [optional] 

### Return type

[**ProgramsList**](ProgramsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

