# CoreApiV10.InvestorApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10InvestorFundsByIdInvestByAmountPost**](InvestorApi.md#v10InvestorFundsByIdInvestByAmountPost) | **POST** /v1.0/investor/funds/{id}/invest/{amount} | Investing into the fund.  Invest in GVT if currency is empty
[**v10InvestorFundsByIdInvestInfoByCurrencyGet**](InvestorApi.md#v10InvestorFundsByIdInvestInfoByCurrencyGet) | **GET** /v1.0/investor/funds/{id}/invest/info/{currency} | Data for investing into the fund
[**v10InvestorFundsByIdRequestsBySkipByTakeGet**](InvestorApi.md#v10InvestorFundsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/investor/funds/{id}/requests/{skip}/{take} | Get program/fund requests
[**v10InvestorFundsByIdWithdrawByPercentPost**](InvestorApi.md#v10InvestorFundsByIdWithdrawByPercentPost) | **POST** /v1.0/investor/funds/{id}/withdraw/{percent} | Withdraw from fund. Percent is % of investor total money.  Withdraw in GVT if currency is empty
[**v10InvestorFundsByIdWithdrawInfoByCurrencyGet**](InvestorApi.md#v10InvestorFundsByIdWithdrawInfoByCurrencyGet) | **GET** /v1.0/investor/funds/{id}/withdraw/info/{currency} | Data for withdrawal from fund
[**v10InvestorFundsGet**](InvestorApi.md#v10InvestorFundsGet) | **GET** /v1.0/investor/funds | Dashboard funds list
[**v10InvestorGet**](InvestorApi.md#v10InvestorGet) | **GET** /v1.0/investor | Summary dashboard info
[**v10InvestorPortfolioChartGet**](InvestorApi.md#v10InvestorPortfolioChartGet) | **GET** /v1.0/investor/portfolio/chart | Portfolio charts
[**v10InvestorPortfolioEventsGet**](InvestorApi.md#v10InvestorPortfolioEventsGet) | **GET** /v1.0/investor/portfolio/events | Portfolio events
[**v10InvestorProgramsByIdInvestByAmountPost**](InvestorApi.md#v10InvestorProgramsByIdInvestByAmountPost) | **POST** /v1.0/investor/programs/{id}/invest/{amount} | Investing into the program.  Invest in GVT if currency is empty
[**v10InvestorProgramsByIdInvestInfoByCurrencyGet**](InvestorApi.md#v10InvestorProgramsByIdInvestInfoByCurrencyGet) | **GET** /v1.0/investor/programs/{id}/invest/info/{currency} | Data for investing into the program
[**v10InvestorProgramsByIdReinvestOffPost**](InvestorApi.md#v10InvestorProgramsByIdReinvestOffPost) | **POST** /v1.0/investor/programs/{id}/reinvest/off | Disable reinvesting
[**v10InvestorProgramsByIdReinvestOnPost**](InvestorApi.md#v10InvestorProgramsByIdReinvestOnPost) | **POST** /v1.0/investor/programs/{id}/reinvest/on | Enable reinvesting
[**v10InvestorProgramsByIdRequestsBySkipByTakeGet**](InvestorApi.md#v10InvestorProgramsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/investor/programs/{id}/requests/{skip}/{take} | Get program/fund requests
[**v10InvestorProgramsByIdWithdrawByAmountPost**](InvestorApi.md#v10InvestorProgramsByIdWithdrawByAmountPost) | **POST** /v1.0/investor/programs/{id}/withdraw/{amount} | Withdraw from investment program in GVT
[**v10InvestorProgramsByIdWithdrawInfoByCurrencyGet**](InvestorApi.md#v10InvestorProgramsByIdWithdrawInfoByCurrencyGet) | **GET** /v1.0/investor/programs/{id}/withdraw/info/{currency} | Data for withdrawal from investment program
[**v10InvestorProgramsByIdWithdrawMultiByAmountPost**](InvestorApi.md#v10InvestorProgramsByIdWithdrawMultiByAmountPost) | **POST** /v1.0/investor/programs/{id}/withdraw/multi/{amount} | Withdraw from investment program in program currency
[**v10InvestorProgramsGet**](InvestorApi.md#v10InvestorProgramsGet) | **GET** /v1.0/investor/programs | Dashboard program list
[**v10InvestorProgramsRequestsByIdCancelPost**](InvestorApi.md#v10InvestorProgramsRequestsByIdCancelPost) | **POST** /v1.0/investor/programs/requests/{id}/cancel | Cancel investment program request
[**v10InvestorRequestsBySkipByTakeGet**](InvestorApi.md#v10InvestorRequestsBySkipByTakeGet) | **GET** /v1.0/investor/requests/{skip}/{take} | Get all requests
[**v10InvestorSignalsGet**](InvestorApi.md#v10InvestorSignalsGet) | **GET** /v1.0/investor/signals | Dashboard signal providers list


<a name="v10InvestorFundsByIdInvestByAmountPost"></a>
# **v10InvestorFundsByIdInvestByAmountPost**
> v10InvestorFundsByIdInvestByAmountPost(id, amount, authorization, opts)

Investing into the fund.  Invest in GVT if currency is empty

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'currency': "100" // String | 
};
apiInstance.v10InvestorFundsByIdInvestByAmountPost(id, amount, authorization, opts).then(() => {
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
 **currency** | **String**|  | [optional] [default to 100]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorFundsByIdInvestInfoByCurrencyGet"></a>
# **v10InvestorFundsByIdInvestInfoByCurrencyGet**
> FundInvestInfo v10InvestorFundsByIdInvestInfoByCurrencyGet(id, currency, authorization)

Data for investing into the fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorFundsByIdInvestInfoByCurrencyGet(id, currency, authorization).then((data) => {
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

[**FundInvestInfo**](FundInvestInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorFundsByIdRequestsBySkipByTakeGet"></a>
# **v10InvestorFundsByIdRequestsBySkipByTakeGet**
> ProgramRequests v10InvestorFundsByIdRequestsBySkipByTakeGet(id, skip, take, authorization)

Get program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorFundsByIdRequestsBySkipByTakeGet(id, skip, take, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ProgramRequests**](ProgramRequests.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorFundsByIdWithdrawByPercentPost"></a>
# **v10InvestorFundsByIdWithdrawByPercentPost**
> v10InvestorFundsByIdWithdrawByPercentPost(id, percent, authorization, opts)

Withdraw from fund. Percent is % of investor total money.  Withdraw in GVT if currency is empty

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let percent = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'currency': "100" // String | 
};
apiInstance.v10InvestorFundsByIdWithdrawByPercentPost(id, percent, authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **percent** | **Number**|  | 
 **authorization** | **String**| JWT access token | 
 **currency** | **String**|  | [optional] [default to 100]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorFundsByIdWithdrawInfoByCurrencyGet"></a>
# **v10InvestorFundsByIdWithdrawInfoByCurrencyGet**
> FundWithdrawInfo v10InvestorFundsByIdWithdrawInfoByCurrencyGet(id, currency, authorization)

Data for withdrawal from fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorFundsByIdWithdrawInfoByCurrencyGet(id, currency, authorization).then((data) => {
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

[**FundWithdrawInfo**](FundWithdrawInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorFundsGet"></a>
# **v10InvestorFundsGet**
> FundsList v10InvestorFundsGet(authorization, opts)

Dashboard funds list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'currencySecondary': "currencySecondary_example", // String | 
  'actionStatus': "actionStatus_example", // String | 
  'dashboardActionStatus': "dashboardActionStatus_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10InvestorFundsGet(authorization, opts).then((data) => {
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
 **chartPointsCount** | **Number**|  | [optional] 
 **currencySecondary** | **String**|  | [optional] 
 **actionStatus** | **String**|  | [optional] 
 **dashboardActionStatus** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**FundsList**](FundsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorGet"></a>
# **v10InvestorGet**
> DashboardSummary v10InvestorGet(authorization, opts)

Summary dashboard info

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'chartCurrency': "chartCurrency_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'balancePoints': 56, // Number | 
  'programsPoints': 56, // Number | 
  'eventsTake': 56, // Number | 
  'requestsSkip': 56, // Number | 
  'requestsTake': 56 // Number | 
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
 **chartCurrency** | **String**|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **balancePoints** | **Number**|  | [optional] 
 **programsPoints** | **Number**|  | [optional] 
 **eventsTake** | **Number**|  | [optional] 
 **requestsSkip** | **Number**|  | [optional] 
 **requestsTake** | **Number**|  | [optional] 

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
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'balancePoints': 56, // Number | 
  'programsPoints': 56 // Number | 
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
 **balancePoints** | **Number**|  | [optional] 
 **programsPoints** | **Number**|  | [optional] 

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
> v10InvestorProgramsByIdInvestByAmountPost(id, amount, authorization, opts)

Investing into the program.  Invest in GVT if currency is empty

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'currency': "100" // String | 
};
apiInstance.v10InvestorProgramsByIdInvestByAmountPost(id, amount, authorization, opts).then(() => {
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
 **currency** | **String**|  | [optional] [default to 100]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsByIdInvestInfoByCurrencyGet"></a>
# **v10InvestorProgramsByIdInvestInfoByCurrencyGet**
> ProgramInvestInfo v10InvestorProgramsByIdInvestInfoByCurrencyGet(id, currency, authorization)

Data for investing into the program

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

[**ProgramInvestInfo**](ProgramInvestInfo.md)

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

<a name="v10InvestorProgramsByIdRequestsBySkipByTakeGet"></a>
# **v10InvestorProgramsByIdRequestsBySkipByTakeGet**
> ProgramRequests v10InvestorProgramsByIdRequestsBySkipByTakeGet(id, skip, take, authorization)

Get program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorProgramsByIdRequestsBySkipByTakeGet(id, skip, take, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
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

Withdraw from investment program in GVT

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
> ProgramWithdrawInfo v10InvestorProgramsByIdWithdrawInfoByCurrencyGet(id, currency, authorization)

Data for withdrawal from investment program

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

[**ProgramWithdrawInfo**](ProgramWithdrawInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsByIdWithdrawMultiByAmountPost"></a>
# **v10InvestorProgramsByIdWithdrawMultiByAmountPost**
> v10InvestorProgramsByIdWithdrawMultiByAmountPost(id, amount, authorization, opts)

Withdraw from investment program in program currency

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'withdrawAll': false // Boolean | 
};
apiInstance.v10InvestorProgramsByIdWithdrawMultiByAmountPost(id, amount, authorization, opts).then(() => {
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
 **withdrawAll** | **Boolean**|  | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorProgramsGet"></a>
# **v10InvestorProgramsGet**
> ProgramsList v10InvestorProgramsGet(authorization, opts)

Dashboard program list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'currencySecondary': "currencySecondary_example", // String | 
  'actionStatus': "actionStatus_example", // String | 
  'dashboardActionStatus': "dashboardActionStatus_example", // String | 
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
 **chartPointsCount** | **Number**|  | [optional] 
 **currencySecondary** | **String**|  | [optional] 
 **actionStatus** | **String**|  | [optional] 
 **dashboardActionStatus** | **String**|  | [optional] 
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

Cancel investment program request

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

<a name="v10InvestorRequestsBySkipByTakeGet"></a>
# **v10InvestorRequestsBySkipByTakeGet**
> ProgramRequests v10InvestorRequestsBySkipByTakeGet(skip, take, authorization)

Get all requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10InvestorRequestsBySkipByTakeGet(skip, take, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ProgramRequests**](ProgramRequests.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10InvestorSignalsGet"></a>
# **v10InvestorSignalsGet**
> SignalsList v10InvestorSignalsGet(authorization, opts)

Dashboard signal providers list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'status': "status_example", // String | 
  'sorting': "sorting_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'currencySecondary': "currencySecondary_example", // String | 
  'actionStatus': "actionStatus_example", // String | 
  'dashboardActionStatus': "dashboardActionStatus_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10InvestorSignalsGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **status** | **String**|  | [optional] 
 **sorting** | **String**|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **chartPointsCount** | **Number**|  | [optional] 
 **currencySecondary** | **String**|  | [optional] 
 **actionStatus** | **String**|  | [optional] 
 **dashboardActionStatus** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**SignalsList**](SignalsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

