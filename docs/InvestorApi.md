# CoreApiV10.InvestorApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelRequest**](InvestorApi.md#cancelRequest) | **POST** /v1.0/investor/programs/requests/{id}/cancel | Cancel investment program request
[**fundInvest**](InvestorApi.md#fundInvest) | **POST** /v1.0/investor/funds/{id}/invest/{amount} | Investing into the fund.  Invest in GVT if currency is empty
[**fundInvestInfo**](InvestorApi.md#fundInvestInfo) | **GET** /v1.0/investor/funds/{id}/invest/info/{currency} | Data for investing into the fund
[**fundWithdraw**](InvestorApi.md#fundWithdraw) | **POST** /v1.0/investor/funds/{id}/withdraw/{percent} | Withdraw from fund. Percent is % of investor total money.  Withdraw in GVT if currency is empty
[**fundWithdrawInfo**](InvestorApi.md#fundWithdrawInfo) | **GET** /v1.0/investor/funds/{id}/withdraw/info/{currency} | Data for withdrawal from fund
[**getDashboard**](InvestorApi.md#getDashboard) | **GET** /v1.0/investor | Summary dashboard info
[**getEvents**](InvestorApi.md#getEvents) | **GET** /v1.0/investor/investments/events | Events
[**getFunds**](InvestorApi.md#getFunds) | **GET** /v1.0/investor/funds | Dashboard funds list
[**getPortfolioChart**](InvestorApi.md#getPortfolioChart) | **GET** /v1.0/investor/portfolio/chart | Portfolio charts
[**getProgramRequests**](InvestorApi.md#getProgramRequests) | **GET** /v1.0/investor/programs/{id}/requests/{skip}/{take} | Get program/fund requests
[**getProgramRequests_0**](InvestorApi.md#getProgramRequests_0) | **GET** /v1.0/investor/funds/{id}/requests/{skip}/{take} | Get program/fund requests
[**getPrograms**](InvestorApi.md#getPrograms) | **GET** /v1.0/investor/programs | Dashboard program list
[**getRequests**](InvestorApi.md#getRequests) | **GET** /v1.0/investor/requests/{skip}/{take} | Get all requests
[**getSignalPrograms**](InvestorApi.md#getSignalPrograms) | **GET** /v1.0/investor/signals | Dashboard signal providers list
[**investInfo**](InvestorApi.md#investInfo) | **GET** /v1.0/investor/programs/{id}/invest/info/{currency} | Data for investing into the program
[**programInvest**](InvestorApi.md#programInvest) | **POST** /v1.0/investor/programs/{id}/invest/{amount} | Investing into the program.  Invest in GVT if currency is empty
[**programWithdraw**](InvestorApi.md#programWithdraw) | **POST** /v1.0/investor/programs/{id}/withdraw/multi | Withdraw from investment program in program currency
[**programWithdrawInfo**](InvestorApi.md#programWithdrawInfo) | **GET** /v1.0/investor/programs/{id}/withdraw/info/{currency} | Data for withdrawal from investment program
[**programWithdraw_0**](InvestorApi.md#programWithdraw_0) | **POST** /v1.0/investor/programs/{id}/withdraw/multi/{amount} | Withdraw from investment program in program currency
[**reinvestOff**](InvestorApi.md#reinvestOff) | **POST** /v1.0/investor/programs/{id}/reinvest/off | Disable reinvesting
[**reinvestOn**](InvestorApi.md#reinvestOn) | **POST** /v1.0/investor/programs/{id}/reinvest/on | Enable reinvesting


<a name="cancelRequest"></a>
# **cancelRequest**
> cancelRequest(id, authorization)

Cancel investment program request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.cancelRequest(id, authorization).then(() => {
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

<a name="fundInvest"></a>
# **fundInvest**
> fundInvest(id, amount, authorization, opts)

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
apiInstance.fundInvest(id, amount, authorization, opts).then(() => {
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

<a name="fundInvestInfo"></a>
# **fundInvestInfo**
> FundInvestInfo fundInvestInfo(id, currency, authorization)

Data for investing into the fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.fundInvestInfo(id, currency, authorization).then((data) => {
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

<a name="fundWithdraw"></a>
# **fundWithdraw**
> fundWithdraw(id, percent, authorization, opts)

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
apiInstance.fundWithdraw(id, percent, authorization, opts).then(() => {
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

<a name="fundWithdrawInfo"></a>
# **fundWithdrawInfo**
> FundWithdrawInfo fundWithdrawInfo(id, currency, authorization)

Data for withdrawal from fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.fundWithdrawInfo(id, currency, authorization).then((data) => {
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

<a name="getDashboard"></a>
# **getDashboard**
> DashboardSummary getDashboard(authorization, opts)

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
apiInstance.getDashboard(authorization, opts).then((data) => {
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

<a name="getEvents"></a>
# **getEvents**
> InvestmentEventViewModels getEvents(authorization, opts)

Events

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'eventLocation': "eventLocation_example", // String | 
  'assetId': "assetId_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'eventType': "eventType_example", // String | 
  'assetType': "assetType_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getEvents(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **eventLocation** | **String**|  | [optional] 
 **assetId** | [**String**](.md)|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **eventType** | **String**|  | [optional] 
 **assetType** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**InvestmentEventViewModels**](InvestmentEventViewModels.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getFunds"></a>
# **getFunds**
> FundsListOld getFunds(authorization, opts)

Dashboard funds list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'currency': "currency_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'currencySecondary': "currencySecondary_example", // String | 
  'actionStatus': "actionStatus_example", // String | 
  'dashboardActionStatus': "dashboardActionStatus_example", // String | 
  'isHideInList': true, // Boolean | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getFunds(authorization, opts).then((data) => {
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
 **currency** | **String**|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **chartPointsCount** | **Number**|  | [optional] 
 **currencySecondary** | **String**|  | [optional] 
 **actionStatus** | **String**|  | [optional] 
 **dashboardActionStatus** | **String**|  | [optional] 
 **isHideInList** | **Boolean**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**FundsListOld**](FundsListOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPortfolioChart"></a>
# **getPortfolioChart**
> DashboardChartValue getPortfolioChart(authorization, opts)

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
apiInstance.getPortfolioChart(authorization, opts).then((data) => {
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

<a name="getProgramRequests"></a>
# **getProgramRequests**
> ProgramRequestsOld getProgramRequests(id, skip, take, authorization)

Get program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getProgramRequests(id, skip, take, authorization).then((data) => {
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

[**ProgramRequestsOld**](ProgramRequestsOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramRequests_0"></a>
# **getProgramRequests_0**
> ProgramRequestsOld getProgramRequests_0(id, skip, take, authorization)

Get program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getProgramRequests_0(id, skip, take, authorization).then((data) => {
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

[**ProgramRequestsOld**](ProgramRequestsOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getPrograms"></a>
# **getPrograms**
> ProgramsListOld getPrograms(authorization, opts)

Dashboard program list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'currency': "currency_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'currencySecondary': "currencySecondary_example", // String | 
  'actionStatus': "actionStatus_example", // String | 
  'dashboardActionStatus': "dashboardActionStatus_example", // String | 
  'isHideInList': true, // Boolean | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getPrograms(authorization, opts).then((data) => {
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
 **currency** | **String**|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **chartPointsCount** | **Number**|  | [optional] 
 **currencySecondary** | **String**|  | [optional] 
 **actionStatus** | **String**|  | [optional] 
 **dashboardActionStatus** | **String**|  | [optional] 
 **isHideInList** | **Boolean**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**ProgramsListOld**](ProgramsListOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getRequests"></a>
# **getRequests**
> ProgramRequestsOld getRequests(skip, take, authorization)

Get all requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getRequests(skip, take, authorization).then((data) => {
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

[**ProgramRequestsOld**](ProgramRequestsOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getSignalPrograms"></a>
# **getSignalPrograms**
> SignalsList getSignalPrograms(authorization, opts)

Dashboard signal providers list

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
  'isHideInList': true, // Boolean | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getSignalPrograms(authorization, opts).then((data) => {
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
 **isHideInList** | **Boolean**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**SignalsList**](SignalsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="investInfo"></a>
# **investInfo**
> ProgramInvestInfoOld investInfo(id, currency, authorization)

Data for investing into the program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.investInfo(id, currency, authorization).then((data) => {
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

[**ProgramInvestInfoOld**](ProgramInvestInfoOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="programInvest"></a>
# **programInvest**
> programInvest(id, amount, authorization, opts)

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
apiInstance.programInvest(id, amount, authorization, opts).then(() => {
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

<a name="programWithdraw"></a>
# **programWithdraw**
> programWithdraw(id, authorization, opts)

Withdraw from investment program in program currency

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'amount': 1.2, // Number | 
  'withdrawAll': false // Boolean | 
};
apiInstance.programWithdraw(id, authorization, opts).then(() => {
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
 **amount** | **Number**|  | [optional] 
 **withdrawAll** | **Boolean**|  | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="programWithdrawInfo"></a>
# **programWithdrawInfo**
> ProgramWithdrawInfo programWithdrawInfo(id, currency, authorization)

Data for withdrawal from investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.programWithdrawInfo(id, currency, authorization).then((data) => {
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

<a name="programWithdraw_0"></a>
# **programWithdraw_0**
> programWithdraw_0(id, amount, authorization, opts)

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
apiInstance.programWithdraw_0(id, amount, authorization, opts).then(() => {
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

<a name="reinvestOff"></a>
# **reinvestOff**
> reinvestOff(id, authorization)

Disable reinvesting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.reinvestOff(id, authorization).then(() => {
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

<a name="reinvestOn"></a>
# **reinvestOn**
> reinvestOn(id, authorization)

Enable reinvesting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.InvestorApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.reinvestOn(id, authorization).then(() => {
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

