# CoreApiV10.ProgramsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ProgramsByIdChartsBalanceGet**](ProgramsApi.md#v10ProgramsByIdChartsBalanceGet) | **GET** /v1.0/programs/{id}/charts/balance | Program balance chart
[**v10ProgramsByIdChartsProfitGet**](ProgramsApi.md#v10ProgramsByIdChartsProfitGet) | **GET** /v1.0/programs/{id}/charts/profit | Program profit chart
[**v10ProgramsByIdFavoriteAddPost**](ProgramsApi.md#v10ProgramsByIdFavoriteAddPost) | **POST** /v1.0/programs/{id}/favorite/add | Add to favorites
[**v10ProgramsByIdFavoriteRemovePost**](ProgramsApi.md#v10ProgramsByIdFavoriteRemovePost) | **POST** /v1.0/programs/{id}/favorite/remove | Remove from favorites
[**v10ProgramsByIdGet**](ProgramsApi.md#v10ProgramsByIdGet) | **GET** /v1.0/programs/{id} | Program details
[**v10ProgramsByIdTradesGet**](ProgramsApi.md#v10ProgramsByIdTradesGet) | **GET** /v1.0/programs/{id}/trades | Trade history
[**v10ProgramsGet**](ProgramsApi.md#v10ProgramsGet) | **GET** /v1.0/programs | Programs list
[**v10ProgramsSetsGet**](ProgramsApi.md#v10ProgramsSetsGet) | **GET** /v1.0/programs/sets | Programs sets


<a name="v10ProgramsByIdChartsBalanceGet"></a>
# **v10ProgramsByIdChartsBalanceGet**
> ProgramBalanceChart v10ProgramsByIdChartsBalanceGet(id, opts)

Program balance chart

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'maxPointCount': 56 // Number | 
};
apiInstance.v10ProgramsByIdChartsBalanceGet(id, opts).then((data) => {
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
 **maxPointCount** | **Number**|  | [optional] 

### Return type

[**ProgramBalanceChart**](ProgramBalanceChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramsByIdChartsProfitGet"></a>
# **v10ProgramsByIdChartsProfitGet**
> ProgramProfitChart v10ProgramsByIdChartsProfitGet(id, opts)

Program profit chart

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'maxPointCount': 56 // Number | 
};
apiInstance.v10ProgramsByIdChartsProfitGet(id, opts).then((data) => {
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
 **maxPointCount** | **Number**|  | [optional] 

### Return type

[**ProgramProfitChart**](ProgramProfitChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramsByIdFavoriteAddPost"></a>
# **v10ProgramsByIdFavoriteAddPost**
> v10ProgramsByIdFavoriteAddPost(id, authorization)

Add to favorites

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProgramsByIdFavoriteAddPost(id, authorization).then(() => {
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

<a name="v10ProgramsByIdFavoriteRemovePost"></a>
# **v10ProgramsByIdFavoriteRemovePost**
> v10ProgramsByIdFavoriteRemovePost(id, authorization)

Remove from favorites

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProgramsByIdFavoriteRemovePost(id, authorization).then(() => {
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

<a name="v10ProgramsByIdGet"></a>
# **v10ProgramsByIdGet**
> ProgramDetailsFull v10ProgramsByIdGet(id, opts)

Program details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let opts = { 
  'authorization': "authorization_example", // String | 
  'currencySecondary': "currencySecondary_example" // String | 
};
apiInstance.v10ProgramsByIdGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **authorization** | **String**|  | [optional] 
 **currencySecondary** | **String**|  | [optional] 

### Return type

[**ProgramDetailsFull**](ProgramDetailsFull.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramsByIdTradesGet"></a>
# **v10ProgramsByIdTradesGet**
> TradesViewModel v10ProgramsByIdTradesGet(id, opts)

Trade history

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'symbol': "symbol_example", // String | 
  'sorting': "sorting_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10ProgramsByIdTradesGet(id, opts).then((data) => {
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

<a name="v10ProgramsGet"></a>
# **v10ProgramsGet**
> ProgramsList v10ProgramsGet(opts)

Programs list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let opts = { 
  'authorization': "authorization_example", // String | 
  'levelMin': 56, // Number | 
  'levelMax': 56, // Number | 
  'profitAvgMin': 1.2, // Number | 
  'profitAvgMax': 1.2, // Number | 
  'sorting': "sorting_example", // String | 
  'programCurrency': "programCurrency_example", // String | 
  'currencySecondary': "currencySecondary_example", // String | 
  'statisticDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'statisticDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'mask': "mask_example", // String | 
  'facetId': "facetId_example", // String | 
  'isFavorite': true, // Boolean | 
  'ids': ["ids_example"], // [String] | 
  'managerId': "managerId_example", // String | 
  'programManagerId': "programManagerId_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10ProgramsGet(opts).then((data) => {
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
 **sorting** | **String**|  | [optional] 
 **programCurrency** | **String**|  | [optional] 
 **currencySecondary** | **String**|  | [optional] 
 **statisticDateFrom** | **Date**|  | [optional] 
 **statisticDateTo** | **Date**|  | [optional] 
 **chartPointsCount** | **Number**|  | [optional] 
 **mask** | **String**|  | [optional] 
 **facetId** | **String**|  | [optional] 
 **isFavorite** | **Boolean**|  | [optional] 
 **ids** | [**[String]**](String.md)|  | [optional] 
 **managerId** | **String**|  | [optional] 
 **programManagerId** | [**String**](.md)|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**ProgramsList**](ProgramsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramsSetsGet"></a>
# **v10ProgramsSetsGet**
> ProgramSets v10ProgramsSetsGet(authorization)

Programs sets

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProgramsSetsGet(authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 

### Return type

[**ProgramSets**](ProgramSets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

