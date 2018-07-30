# CoreApiV2.ProgramApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProgramByIdChartGet**](ProgramApi.md#apiProgramByIdChartGet) | **GET** /api/program/{id}/chart | Get manager chart
[**apiProgramByIdGet**](ProgramApi.md#apiProgramByIdGet) | **GET** /api/program/{id} | Program details
[**apiProgramByIdTradesGet**](ProgramApi.md#apiProgramByIdTradesGet) | **GET** /api/program/{id}/trades | Get manager trade history
[**apiProgramListGet**](ProgramApi.md#apiProgramListGet) | **GET** /api/program/list | Programs list


<a name="apiProgramByIdChartGet"></a>
# **apiProgramByIdChartGet**
> ProgramChart apiProgramByIdChartGet(id, opts)

Get manager chart

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let id = "id_example"; // String | 

let opts = { 
  'timeFrame': "timeFrame_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiProgramByIdChartGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **timeFrame** | **String**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**ProgramChart**](ProgramChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiProgramByIdGet"></a>
# **apiProgramByIdGet**
> ProgramDetailsFull apiProgramByIdGet(id, opts)

Program details

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let id = "id_example"; // String | 

let opts = { 
  'authorization': "authorization_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiProgramByIdGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **authorization** | **String**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**ProgramDetailsFull**](ProgramDetailsFull.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiProgramByIdTradesGet"></a>
# **apiProgramByIdTradesGet**
> TradesViewModel apiProgramByIdTradesGet(id, opts)

Get manager trade history

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'symbol': "symbol_example", // String | 
  'sorting': "sorting_example", // String | 
  'skip': 56, // Number | 
  'take': 56, // Number | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiProgramByIdTradesGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **symbol** | **String**|  | [optional] 
 **sorting** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**TradesViewModel**](TradesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiProgramListGet"></a>
# **apiProgramListGet**
> ProgramsList apiProgramListGet(opts)

Programs list

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ProgramApi();

let opts = { 
  'authorization': "authorization_example", // String | 
  'levelMin': 56, // Number | 
  'levelMax': 56, // Number | 
  'profitAvgMin': 1.2, // Number | 
  'profitAvgMax': 1.2, // Number | 
  'timeFrame': "timeFrame_example", // String | 
  'mask': "mask_example", // String | 
  'facetId': "facetId_example", // String | 
  'isFavorite': true, // Boolean | 
  'currency': "currency_example", // String | 
  'skip': 56, // Number | 
  'take': 56, // Number | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiProgramListGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **levelMin** | **Number**|  | [optional] 
 **levelMax** | **Number**|  | [optional] 
 **profitAvgMin** | **Number**|  | [optional] 
 **profitAvgMax** | **Number**|  | [optional] 
 **timeFrame** | **String**|  | [optional] 
 **mask** | **String**|  | [optional] 
 **facetId** | [**String**](.md)|  | [optional] 
 **isFavorite** | **Boolean**|  | [optional] 
 **currency** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**ProgramsList**](ProgramsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

