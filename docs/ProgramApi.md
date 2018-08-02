# CoreApiV10.ProgramApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ProgramByIdChartGet**](ProgramApi.md#v10ProgramByIdChartGet) | **GET** /v1.0/program/{id}/chart | Get manager chart
[**v10ProgramByIdFavoriteAddPost**](ProgramApi.md#v10ProgramByIdFavoriteAddPost) | **POST** /v1.0/program/{id}/favorite/add | Add to favorites
[**v10ProgramByIdFavoriteRemovePost**](ProgramApi.md#v10ProgramByIdFavoriteRemovePost) | **POST** /v1.0/program/{id}/favorite/remove | Remove from favorites
[**v10ProgramByIdGet**](ProgramApi.md#v10ProgramByIdGet) | **GET** /v1.0/program/{id} | Program details
[**v10ProgramByIdTradesGet**](ProgramApi.md#v10ProgramByIdTradesGet) | **GET** /v1.0/program/{id}/trades | Get manager trade history
[**v10ProgramListGet**](ProgramApi.md#v10ProgramListGet) | **GET** /v1.0/program/list | Programs list


<a name="v10ProgramByIdChartGet"></a>
# **v10ProgramByIdChartGet**
> ProgramChart v10ProgramByIdChartGet(id, opts)

Get manager chart

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramApi();

let id = "id_example"; // String | 

let opts = { 
  'timeFrame': "timeFrame_example" // String | 
};
apiInstance.v10ProgramByIdChartGet(id, opts).then((data) => {
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

### Return type

[**ProgramChart**](ProgramChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramByIdFavoriteAddPost"></a>
# **v10ProgramByIdFavoriteAddPost**
> v10ProgramByIdFavoriteAddPost(id, authorization)

Add to favorites

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProgramByIdFavoriteAddPost(id, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramByIdFavoriteRemovePost"></a>
# **v10ProgramByIdFavoriteRemovePost**
> v10ProgramByIdFavoriteRemovePost(id, authorization)

Remove from favorites

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProgramByIdFavoriteRemovePost(id, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramByIdGet"></a>
# **v10ProgramByIdGet**
> ProgramDetailsFull v10ProgramByIdGet(id, opts)

Program details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramApi();

let id = "id_example"; // String | 

let opts = { 
  'authorization': "authorization_example" // String | 
};
apiInstance.v10ProgramByIdGet(id, opts).then((data) => {
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

### Return type

[**ProgramDetailsFull**](ProgramDetailsFull.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramByIdTradesGet"></a>
# **v10ProgramByIdTradesGet**
> TradesViewModel v10ProgramByIdTradesGet(id, opts)

Get manager trade history

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'symbol': "symbol_example", // String | 
  'sorting': "sorting_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10ProgramByIdTradesGet(id, opts).then((data) => {
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

### Return type

[**TradesViewModel**](TradesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramListGet"></a>
# **v10ProgramListGet**
> ProgramsList v10ProgramListGet(opts)

Programs list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramApi();

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
  'take': 56 // Number | 
};
apiInstance.v10ProgramListGet(opts).then((data) => {
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

### Return type

[**ProgramsList**](ProgramsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

