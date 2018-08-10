# CoreApiV10.InvestorApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10InvestorDashboardChartValueGet**](InvestorApi.md#v10InvestorDashboardChartValueGet) | **GET** /v1.0/investor/dashboard/chart/value | Value chart
[**v10InvestorDashboardEventsGet**](InvestorApi.md#v10InvestorDashboardEventsGet) | **GET** /v1.0/investor/dashboard/events | Portfolio events
[**v10InvestorDashboardProgramListGet**](InvestorApi.md#v10InvestorDashboardProgramListGet) | **GET** /v1.0/investor/dashboard/program/list | Programs list


<a name="v10InvestorDashboardChartValueGet"></a>
# **v10InvestorDashboardChartValueGet**
> DashboardChartValue v10InvestorDashboardChartValueGet(authorization, opts)

Value chart

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'currency': "currency_example" // String | 
};
apiInstance.v10InvestorDashboardChartValueGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **currency** | **String**|  | [optional] 

### Return type

[**DashboardChartValue**](DashboardChartValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorDashboardEventsGet"></a>
# **v10InvestorDashboardEventsGet**
> DashboardPortfolioEvents v10InvestorDashboardEventsGet(authorization)

Portfolio events

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorDashboardEventsGet(authorization).then((data) => {
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

[**DashboardPortfolioEvents**](DashboardPortfolioEvents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorDashboardProgramListGet"></a>
# **v10InvestorDashboardProgramListGet**
> DashboardProgramsList v10InvestorDashboardProgramListGet(authorization, opts)

Programs list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'statisticDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'statisticDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10InvestorDashboardProgramListGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **sorting** | **String**|  | [optional] 
 **statisticDateFrom** | **Date**|  | [optional] 
 **statisticDateTo** | **Date**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**DashboardProgramsList**](DashboardProgramsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

