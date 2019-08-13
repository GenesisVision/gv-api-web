# CoreApiV10.FundsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10FundsAssetsGet**](FundsApi.md#v10FundsAssetsGet) | **GET** /v1.0/funds/assets | Get all supported assets for funds
[**v10FundsByIdAssetsGet**](FundsApi.md#v10FundsByIdAssetsGet) | **GET** /v1.0/funds/{id}/assets | Fund assets info
[**v10FundsByIdChartsBalanceGet**](FundsApi.md#v10FundsByIdChartsBalanceGet) | **GET** /v1.0/funds/{id}/charts/balance | Fund balance chart
[**v10FundsByIdChartsProfitGet**](FundsApi.md#v10FundsByIdChartsProfitGet) | **GET** /v1.0/funds/{id}/charts/profit | Fund profit chart
[**v10FundsByIdFavoriteAddPost**](FundsApi.md#v10FundsByIdFavoriteAddPost) | **POST** /v1.0/funds/{id}/favorite/add | Add to favorites
[**v10FundsByIdFavoriteRemovePost**](FundsApi.md#v10FundsByIdFavoriteRemovePost) | **POST** /v1.0/funds/{id}/favorite/remove | Remove from favorites
[**v10FundsByIdGet**](FundsApi.md#v10FundsByIdGet) | **GET** /v1.0/funds/{id} | Funds details
[**v10FundsByIdReallocationsGet**](FundsApi.md#v10FundsByIdReallocationsGet) | **GET** /v1.0/funds/{id}/reallocations | Get history of asset part update requests.
[**v10FundsGet**](FundsApi.md#v10FundsGet) | **GET** /v1.0/funds | Funds list
[**v10FundsSetsGet**](FundsApi.md#v10FundsSetsGet) | **GET** /v1.0/funds/sets | Fund sets


<a name="v10FundsAssetsGet"></a>
# **v10FundsAssetsGet**
> PlatformAssets v10FundsAssetsGet()

Get all supported assets for funds

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();
apiInstance.v10FundsAssetsGet().then((data) => {
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

<a name="v10FundsByIdAssetsGet"></a>
# **v10FundsByIdAssetsGet**
> FundAssetsListInfo v10FundsByIdAssetsGet(id)

Fund assets info

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let id = "id_example"; // String | 

apiInstance.v10FundsByIdAssetsGet(id).then((data) => {
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

<a name="v10FundsByIdChartsBalanceGet"></a>
# **v10FundsByIdChartsBalanceGet**
> FundBalanceChart v10FundsByIdChartsBalanceGet(id, opts)

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
apiInstance.v10FundsByIdChartsBalanceGet(id, opts).then((data) => {
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

[**FundBalanceChart**](FundBalanceChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10FundsByIdChartsProfitGet"></a>
# **v10FundsByIdChartsProfitGet**
> FundProfitChart v10FundsByIdChartsProfitGet(id, opts)

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
  'currency': "currency_example" // String | 
};
apiInstance.v10FundsByIdChartsProfitGet(id, opts).then((data) => {
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

[**FundProfitChart**](FundProfitChart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10FundsByIdFavoriteAddPost"></a>
# **v10FundsByIdFavoriteAddPost**
> v10FundsByIdFavoriteAddPost(id, authorization)

Add to favorites

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10FundsByIdFavoriteAddPost(id, authorization).then(() => {
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

<a name="v10FundsByIdFavoriteRemovePost"></a>
# **v10FundsByIdFavoriteRemovePost**
> v10FundsByIdFavoriteRemovePost(id, authorization)

Remove from favorites

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10FundsByIdFavoriteRemovePost(id, authorization).then(() => {
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

<a name="v10FundsByIdGet"></a>
# **v10FundsByIdGet**
> FundDetailsFull v10FundsByIdGet(id, opts)

Funds details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let id = "id_example"; // String | 

let opts = { 
  'authorization': "authorization_example", // String | 
  'currencySecondary': "currencySecondary_example" // String | 
};
apiInstance.v10FundsByIdGet(id, opts).then((data) => {
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

[**FundDetailsFull**](FundDetailsFull.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10FundsByIdReallocationsGet"></a>
# **v10FundsByIdReallocationsGet**
> ReallocationsViewModel v10FundsByIdReallocationsGet(id, opts)

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
apiInstance.v10FundsByIdReallocationsGet(id, opts).then((data) => {
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

<a name="v10FundsGet"></a>
# **v10FundsGet**
> FundsList v10FundsGet(opts)

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
apiInstance.v10FundsGet(opts).then((data) => {
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

[**FundsList**](FundsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10FundsSetsGet"></a>
# **v10FundsSetsGet**
> FundSets v10FundsSetsGet(authorization)

Fund sets

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FundsApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10FundsSetsGet(authorization).then((data) => {
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

