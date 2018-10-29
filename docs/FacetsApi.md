# CoreApiV10.FacetsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10FacetsFundsByIdGet**](FacetsApi.md#v10FacetsFundsByIdGet) | **GET** /v1.0/facets/funds/{id} | 
[**v10FacetsProgramsByIdGet**](FacetsApi.md#v10FacetsProgramsByIdGet) | **GET** /v1.0/facets/programs/{id} | 


<a name="v10FacetsFundsByIdGet"></a>
# **v10FacetsFundsByIdGet**
> ProgramsList v10FacetsFundsByIdGet(id, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FacetsApi();

let id = "id_example"; // String | 

let opts = { 
  'sorting': "sorting_example", // String | 
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
apiInstance.v10FacetsFundsByIdGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **sorting** | **String**|  | [optional] 
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

<a name="v10FacetsProgramsByIdGet"></a>
# **v10FacetsProgramsByIdGet**
> ProgramsList v10FacetsProgramsByIdGet(id, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FacetsApi();

let id = "id_example"; // String | 

let opts = { 
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
apiInstance.v10FacetsProgramsByIdGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
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

