# CoreApiV10.ProgramsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToFavorites**](ProgramsApi.md#addToFavorites) | **POST** /v1.0/programs/{id}/favorite/add | Add to favorites
[**exportProgramPeriods**](ProgramsApi.md#exportProgramPeriods) | **GET** /v1.0/programs/{id}/periods/export | Export periods
[**exportProgramPeriodsFinStatistic**](ProgramsApi.md#exportProgramPeriodsFinStatistic) | **GET** /v1.0/programs/{id}/periods/export/statistic | Export period financial statistic
[**exportTrades**](ProgramsApi.md#exportTrades) | **GET** /v1.0/programs/{id}/trades/export | Export trades
[**getProgramBalanceChart**](ProgramsApi.md#getProgramBalanceChart) | **GET** /v1.0/programs/{id}/charts/balance | Program balance chart
[**getProgramDetails**](ProgramsApi.md#getProgramDetails) | **GET** /v1.0/programs/{id} | Program details
[**getProgramOpenTrades**](ProgramsApi.md#getProgramOpenTrades) | **GET** /v1.0/programs/{id}/trades/open | Open positions
[**getProgramPeriods**](ProgramsApi.md#getProgramPeriods) | **GET** /v1.0/programs/{id}/periods | Program periods
[**getProgramProfitChart**](ProgramsApi.md#getProgramProfitChart) | **GET** /v1.0/programs/{id}/charts/profit | Program profit chart
[**getProgramSets**](ProgramsApi.md#getProgramSets) | **GET** /v1.0/programs/sets | Programs sets
[**getProgramSubscribers**](ProgramsApi.md#getProgramSubscribers) | **GET** /v1.0/programs/{id}/subscribers | Signal subscribers
[**getProgramTrades**](ProgramsApi.md#getProgramTrades) | **GET** /v1.0/programs/{id}/trades | Trade history
[**getPrograms**](ProgramsApi.md#getPrograms) | **GET** /v1.0/programs | Programs list
[**removeFromFavorites**](ProgramsApi.md#removeFromFavorites) | **POST** /v1.0/programs/{id}/favorite/remove | Remove from favorites


<a name="addToFavorites"></a>
# **addToFavorites**
> addToFavorites(id, authorization)

Add to favorites

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.addToFavorites(id, authorization).then(() => {
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

<a name="exportProgramPeriods"></a>
# **exportProgramPeriods**
> &#39;Blob&#39; exportProgramPeriods(id, opts)

Export periods

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'numberMin': 56, // Number | 
  'numberMax': 56, // Number | 
  'status': "status_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.exportProgramPeriods(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **numberMin** | **Number**|  | [optional] 
 **numberMax** | **Number**|  | [optional] 
 **status** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="exportProgramPeriodsFinStatistic"></a>
# **exportProgramPeriodsFinStatistic**
> &#39;Blob&#39; exportProgramPeriodsFinStatistic(id, authorization, opts)

Export period financial statistic

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'numberMin': 56, // Number | 
  'numberMax': 56, // Number | 
  'status': "status_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.exportProgramPeriodsFinStatistic(id, authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **authorization** | **String**| JWT access token | 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **numberMin** | **Number**|  | [optional] 
 **numberMax** | **Number**|  | [optional] 
 **status** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="exportTrades"></a>
# **exportTrades**
> &#39;Blob&#39; exportTrades(id, opts)

Export trades

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
  'accountId': "accountId_example", // String | 
  'accountCurrency': "accountCurrency_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.exportTrades(id, opts).then((data) => {
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
 **accountId** | [**String**](.md)|  | [optional] 
 **accountCurrency** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramBalanceChart"></a>
# **getProgramBalanceChart**
> ProgramBalanceChart getProgramBalanceChart(id, opts)

Program balance chart

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'maxPointCount': 56, // Number | 
  'currency': "currency_example" // String | 
};
apiInstance.getProgramBalanceChart(id, opts).then((data) => {
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
 **currency** | **String**|  | [optional] 

### Return type

[**ProgramBalanceChart**](ProgramBalanceChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramDetails"></a>
# **getProgramDetails**
> ProgramDetailsFullOld getProgramDetails(id, opts)

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
apiInstance.getProgramDetails(id, opts).then((data) => {
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

[**ProgramDetailsFullOld**](ProgramDetailsFullOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramOpenTrades"></a>
# **getProgramOpenTrades**
> TradesViewModel getProgramOpenTrades(id, opts)

Open positions

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let opts = { 
  'sorting': "sorting_example", // String | 
  'symbol': "symbol_example", // String | 
  'accountId': "accountId_example", // String | 
  'accountCurrency': "accountCurrency_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getProgramOpenTrades(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **sorting** | **String**|  | [optional] 
 **symbol** | **String**|  | [optional] 
 **accountId** | [**String**](.md)|  | [optional] 
 **accountCurrency** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**TradesViewModel**](TradesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramPeriods"></a>
# **getProgramPeriods**
> ProgramPeriodsViewModel getProgramPeriods(id, opts)

Program periods

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let opts = { 
  'authorization': "authorization_example", // String | 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'numberMin': 56, // Number | 
  'numberMax': 56, // Number | 
  'status': "status_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getProgramPeriods(id, opts).then((data) => {
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
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **numberMin** | **Number**|  | [optional] 
 **numberMax** | **Number**|  | [optional] 
 **status** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**ProgramPeriodsViewModel**](ProgramPeriodsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramProfitChart"></a>
# **getProgramProfitChart**
> ProgramProfitChart getProgramProfitChart(id, opts)

Program profit chart

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'maxPointCount': 56, // Number | 
  'currency': "currency_example" // String | 
};
apiInstance.getProgramProfitChart(id, opts).then((data) => {
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
 **currency** | **String**|  | [optional] 

### Return type

[**ProgramProfitChart**](ProgramProfitChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramSets"></a>
# **getProgramSets**
> ProgramSets getProgramSets(authorization)

Programs sets

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getProgramSets(authorization).then((data) => {
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

<a name="getProgramSubscribers"></a>
# **getProgramSubscribers**
> SignalProviderSubscribers getProgramSubscribers(id, authorization, opts)

Signal subscribers

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'status': "status_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getProgramSubscribers(id, authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 
 **status** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**SignalProviderSubscribers**](SignalProviderSubscribers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramTrades"></a>
# **getProgramTrades**
> TradesViewModel getProgramTrades(id, opts)

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
  'accountId': "accountId_example", // String | 
  'accountCurrency': "accountCurrency_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getProgramTrades(id, opts).then((data) => {
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
 **accountId** | [**String**](.md)|  | [optional] 
 **accountCurrency** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**TradesViewModel**](TradesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPrograms"></a>
# **getPrograms**
> ProgramsListOld getPrograms(opts)

Programs list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let opts = { 
  'authorization': "authorization_example", // String | 
  'levelMin': 56, // Number | 
  'levelMax': 56, // Number | 
  'levelsSet': [3.4], // [Number] | 
  'profitAvgMin': 1.2, // Number | 
  'profitAvgMax': 1.2, // Number | 
  'sorting': "sorting_example", // String | 
  'programCurrency': "programCurrency_example", // String | 
  'currencySecondary': "currencySecondary_example", // String | 
  'currency': "currency_example", // String | 
  'levelUpFrom': 56, // Number | 
  'tags': ["tags_example"], // [String] | 
  'isSignal': true, // Boolean | 
  'statisticDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'statisticDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'mask': "mask_example", // String | 
  'facetId': "facetId_example", // String | 
  'isFavorite': true, // Boolean | 
  'isEnabled': true, // Boolean | 
  'hasInvestorsForAll': true, // Boolean | 
  'hasInvestorsForClosed': true, // Boolean | 
  'ids': ["ids_example"], // [String] | 
  'forceUseIdsList': true, // Boolean | 
  'managerId': "managerId_example", // String | 
  'programManagerId': "programManagerId_example", // String | 
  'status': ["status_example"], // [String] | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getPrograms(opts).then((data) => {
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
 **levelsSet** | [**[Number]**](Number.md)|  | [optional] 
 **profitAvgMin** | **Number**|  | [optional] 
 **profitAvgMax** | **Number**|  | [optional] 
 **sorting** | **String**|  | [optional] 
 **programCurrency** | **String**|  | [optional] 
 **currencySecondary** | **String**|  | [optional] 
 **currency** | **String**|  | [optional] 
 **levelUpFrom** | **Number**|  | [optional] 
 **tags** | [**[String]**](String.md)|  | [optional] 
 **isSignal** | **Boolean**|  | [optional] 
 **statisticDateFrom** | **Date**|  | [optional] 
 **statisticDateTo** | **Date**|  | [optional] 
 **chartPointsCount** | **Number**|  | [optional] 
 **mask** | **String**|  | [optional] 
 **facetId** | **String**|  | [optional] 
 **isFavorite** | **Boolean**|  | [optional] 
 **isEnabled** | **Boolean**|  | [optional] 
 **hasInvestorsForAll** | **Boolean**|  | [optional] 
 **hasInvestorsForClosed** | **Boolean**|  | [optional] 
 **ids** | [**[String]**](String.md)|  | [optional] 
 **forceUseIdsList** | **Boolean**|  | [optional] 
 **managerId** | **String**|  | [optional] 
 **programManagerId** | [**String**](.md)|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**ProgramsListOld**](ProgramsListOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="removeFromFavorites"></a>
# **removeFromFavorites**
> removeFromFavorites(id, authorization)

Remove from favorites

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.removeFromFavorites(id, authorization).then(() => {
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

