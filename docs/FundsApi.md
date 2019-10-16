# CoreApiV10.FundsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToFavorites**](FundsApi.md#addToFavorites) | **POST** /v1.0/funds/{id}/favorite/add | Add to favorites
[**getAllAssets**](FundsApi.md#getAllAssets) | **GET** /v1.0/funds/assets | Get all supported assets for funds
[**getFundAssets**](FundsApi.md#getFundAssets) | **GET** /v1.0/funds/{id}/assets | Fund assets info
[**getFundBalanceChart**](FundsApi.md#getFundBalanceChart) | **GET** /v1.0/funds/{id}/charts/balance | Fund balance chart
[**getFundDetails**](FundsApi.md#getFundDetails) | **GET** /v1.0/funds/{id} | Funds details
[**getFundProfitChart**](FundsApi.md#getFundProfitChart) | **GET** /v1.0/funds/{id}/charts/profit | Fund profit chart
[**getFunds**](FundsApi.md#getFunds) | **GET** /v1.0/funds | Funds list
[**getProgramSets**](FundsApi.md#getProgramSets) | **GET** /v1.0/funds/sets | Fund sets
[**getReallocationsHistory**](FundsApi.md#getReallocationsHistory) | **GET** /v1.0/funds/{id}/reallocations | Get history of asset part update requests.
[**removeFromFavorites**](FundsApi.md#removeFromFavorites) | **POST** /v1.0/funds/{id}/favorite/remove | Remove from favorites


<a name="addToFavorites"></a>
# **addToFavorites**
> addToFavorites(id, authorization)

Add to favorites

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

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

<a name="getAllAssets"></a>
# **getAllAssets**
> PlatformAssets getAllAssets()

Get all supported assets for funds

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();
apiInstance.getAllAssets().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PlatformAssets**](PlatformAssets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getFundAssets"></a>
# **getFundAssets**
> FundAssetsListInfo getFundAssets(id)

Fund assets info

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let id = "id_example"; // String | 

apiInstance.getFundAssets(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**FundAssetsListInfo**](FundAssetsListInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getFundBalanceChart"></a>
# **getFundBalanceChart**
> FundBalanceChartOld getFundBalanceChart(id, opts)

Fund balance chart

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'maxPointCount': 56, // Number | 
  'currency': "currency_example" // String | 
};
apiInstance.getFundBalanceChart(id, opts).then((data) => {
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

[**FundBalanceChartOld**](FundBalanceChartOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getFundDetails"></a>
# **getFundDetails**
> FundDetailsFullOld getFundDetails(id, opts)

Funds details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let id = "id_example"; // String | 

let opts = { 
  'authorization': "authorization_example", // String | 
  'currency': "currency_example" // String | 
};
apiInstance.getFundDetails(id, opts).then((data) => {
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
 **currency** | **String**|  | [optional] 

### Return type

[**FundDetailsFullOld**](FundDetailsFullOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getFundProfitChart"></a>
# **getFundProfitChart**
> FundProfitChartOld getFundProfitChart(id, opts)

Fund profit chart

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'maxPointCount': 56, // Number | 
  'currency': "currency_example", // String | 
  'chartAssetsCount': 3 // Number | 
};
apiInstance.getFundProfitChart(id, opts).then((data) => {
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
 **chartAssetsCount** | **Number**|  | [optional] [default to 3]

### Return type

[**FundProfitChartOld**](FundProfitChartOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getFunds"></a>
# **getFunds**
> FundsListOld getFunds(opts)

Funds list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let opts = { 
  'authorization': "authorization_example", // String | 
  'sorting': "sorting_example", // String | 
  'currencySecondary': "currencySecondary_example", // String | 
  'currency': "currency_example", // String | 
  'assets': ["assets_example"], // [String] | 
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
apiInstance.getFunds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **sorting** | **String**|  | [optional] 
 **currencySecondary** | **String**|  | [optional] 
 **currency** | **String**|  | [optional] 
 **assets** | [**[String]**](String.md)|  | [optional] 
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

[**FundsListOld**](FundsListOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramSets"></a>
# **getProgramSets**
> FundSets getProgramSets(authorization)

Fund sets

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

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

[**FundSets**](FundSets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getReallocationsHistory"></a>
# **getReallocationsHistory**
> ReallocationsViewModel getReallocationsHistory(id, opts)

Get history of asset part update requests.

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let id = "id_example"; // String | 

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getReallocationsHistory(id, opts).then((data) => {
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
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**ReallocationsViewModel**](ReallocationsViewModel.md)

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

let apiInstance = new CoreApiV10.FundsApi();

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

