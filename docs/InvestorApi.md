# CoreApiV10.InvestorApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10InvestorGet**](InvestorApi.md#v10InvestorGet) | **GET** /v1.0/investor | Summary dashdoard info
[**v10InvestorPortfolioChartGet**](InvestorApi.md#v10InvestorPortfolioChartGet) | **GET** /v1.0/investor/portfolio/chart | Portfolio charts
[**v10InvestorPortfolioEventsGet**](InvestorApi.md#v10InvestorPortfolioEventsGet) | **GET** /v1.0/investor/portfolio/events | Portfolio events
[**v10InvestorProgramsByIdInvestByAmountPost**](InvestorApi.md#v10InvestorProgramsByIdInvestByAmountPost) | **POST** /v1.0/investor/programs/{id}/invest/{amount} | investing
[**v10InvestorProgramsByIdInvestInfoByCurrencyGet**](InvestorApi.md#v10InvestorProgramsByIdInvestInfoByCurrencyGet) | **GET** /v1.0/investor/programs/{id}/invest/info/{currency} | Data for investing
[**v10InvestorProgramsByIdReinvestOffPost**](InvestorApi.md#v10InvestorProgramsByIdReinvestOffPost) | **POST** /v1.0/investor/programs/{id}/reinvest/off | Disable reinvesting
[**v10InvestorProgramsByIdReinvestOnPost**](InvestorApi.md#v10InvestorProgramsByIdReinvestOnPost) | **POST** /v1.0/investor/programs/{id}/reinvest/on | Enable reinvesting
[**v10InvestorProgramsByIdRequestsGet**](InvestorApi.md#v10InvestorProgramsByIdRequestsGet) | **GET** /v1.0/investor/programs/{id}/requests | Ger requests
[**v10InvestorProgramsByIdWithdrawByAmountPost**](InvestorApi.md#v10InvestorProgramsByIdWithdrawByAmountPost) | **POST** /v1.0/investor/programs/{id}/withdraw/{amount} | Withdrawal
[**v10InvestorProgramsByIdWithdrawInfoByCurrencyGet**](InvestorApi.md#v10InvestorProgramsByIdWithdrawInfoByCurrencyGet) | **GET** /v1.0/investor/programs/{id}/withdraw/info/{currency} | Data for withdrawal
[**v10InvestorProgramsGet**](InvestorApi.md#v10InvestorProgramsGet) | **GET** /v1.0/investor/programs | Programs list
[**v10InvestorProgramsRequestsByIdCancelPost**](InvestorApi.md#v10InvestorProgramsRequestsByIdCancelPost) | **POST** /v1.0/investor/programs/requests/{id}/cancel | Cancel request


<a name="v10InvestorGet"></a>
# **v10InvestorGet**
> DashboardSummary v10InvestorGet(authorization, opts)

Summary dashdoard info

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'assetId': "assetId_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'type': "type_example", // String | 
  'assetType': "assetType_example", // String | 
  'skip': 56, // Number | 
  'take': 56, // Number | 
  'chartCurrency': "chartCurrency_example", // String | 
  'chartFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartTo': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.v10InvestorGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **assetId** | [**String**](.md)|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **type** | **String**|  | [optional] 
 **assetType** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 
 **chartCurrency** | **String**|  | [optional] 
 **chartFrom** | **Date**|  | [optional] 
 **chartTo** | **Date**|  | [optional] 

### Return type

[**DashboardSummary**](DashboardSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorPortfolioChartGet"></a>
# **v10InvestorPortfolioChartGet**
> DashboardChartValue v10InvestorPortfolioChartGet(authorization, opts)

Portfolio charts

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'currency': "currency_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.v10InvestorPortfolioChartGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **currency** | **String**|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 

### Return type

[**DashboardChartValue**](DashboardChartValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorPortfolioEventsGet"></a>
# **v10InvestorPortfolioEventsGet**
> DashboardPortfolioEvents v10InvestorPortfolioEventsGet(authorization, opts)

Portfolio events

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'assetId': "assetId_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'type': "type_example", // String | 
  'assetType': "assetType_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10InvestorPortfolioEventsGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **assetId** | [**String**](.md)|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **type** | **String**|  | [optional] 
 **assetType** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**DashboardPortfolioEvents**](DashboardPortfolioEvents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsByIdInvestByAmountPost"></a>
# **v10InvestorProgramsByIdInvestByAmountPost**
> v10InvestorProgramsByIdInvestByAmountPost(id, amount, authorization)

investing

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorProgramsByIdInvestByAmountPost(id, amount, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **amount** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsByIdInvestInfoByCurrencyGet"></a>
# **v10InvestorProgramsByIdInvestInfoByCurrencyGet**
> InvestInfo v10InvestorProgramsByIdInvestInfoByCurrencyGet(id, currency, authorization)

Data for investing

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorProgramsByIdInvestInfoByCurrencyGet(id, currency, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **currency** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**InvestInfo**](InvestInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsByIdReinvestOffPost"></a>
# **v10InvestorProgramsByIdReinvestOffPost**
> v10InvestorProgramsByIdReinvestOffPost(id, authorization)

Disable reinvesting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorProgramsByIdReinvestOffPost(id, authorization).then(() => {
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

<a name="v10InvestorProgramsByIdReinvestOnPost"></a>
# **v10InvestorProgramsByIdReinvestOnPost**
> v10InvestorProgramsByIdReinvestOnPost(id, authorization)

Enable reinvesting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorProgramsByIdReinvestOnPost(id, authorization).then(() => {
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

<a name="v10InvestorProgramsByIdRequestsGet"></a>
# **v10InvestorProgramsByIdRequestsGet**
> ProgramRequests v10InvestorProgramsByIdRequestsGet(id, authorization)

Ger requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorProgramsByIdRequestsGet(id, authorization).then((data) => {
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

### Return type

[**ProgramRequests**](ProgramRequests.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsByIdWithdrawByAmountPost"></a>
# **v10InvestorProgramsByIdWithdrawByAmountPost**
> v10InvestorProgramsByIdWithdrawByAmountPost(id, amount, authorization)

Withdrawal

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorProgramsByIdWithdrawByAmountPost(id, amount, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **amount** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsByIdWithdrawInfoByCurrencyGet"></a>
# **v10InvestorProgramsByIdWithdrawInfoByCurrencyGet**
> WithdrawInfo v10InvestorProgramsByIdWithdrawInfoByCurrencyGet(id, currency, authorization)

Data for withdrawal

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorProgramsByIdWithdrawInfoByCurrencyGet(id, currency, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **currency** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**WithdrawInfo**](WithdrawInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsGet"></a>
# **v10InvestorProgramsGet**
> ProgramsList v10InvestorProgramsGet(authorization, opts)

Programs list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10InvestorProgramsGet(authorization, opts).then((data) => {
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
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**ProgramsList**](ProgramsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsRequestsByIdCancelPost"></a>
# **v10InvestorProgramsRequestsByIdCancelPost**
> v10InvestorProgramsRequestsByIdCancelPost(id, authorization)

Cancel request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorProgramsRequestsByIdCancelPost(id, authorization).then(() => {
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

