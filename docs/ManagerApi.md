# CoreApiV10.ManagerApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelChangeBroker**](ManagerApi.md#cancelChangeBroker) | **POST** /v1.0/manager/programs/broker/change/cancel | Cancel changing broker in existing program
[**cancelRequest**](ManagerApi.md#cancelRequest) | **POST** /v1.0/manager/programs/requests/{id}/cancel | Cancel investment program/fund request
[**cancelRequest_0**](ManagerApi.md#cancelRequest_0) | **POST** /v1.0/manager/funds/requests/{id}/cancel | Cancel investment program/fund request
[**changeBroker**](ManagerApi.md#changeBroker) | **POST** /v1.0/manager/programs/broker/change | Change broker in existing program
[**changeProgramPassword**](ManagerApi.md#changeProgramPassword) | **POST** /v1.0/manager/programs/{id}/password/change | Change program password
[**closeCurrentPeriod**](ManagerApi.md#closeCurrentPeriod) | **POST** /v1.0/manager/programs/{id}/period/close | Close current period
[**closeFund**](ManagerApi.md#closeFund) | **POST** /v1.0/manager/funds/{id}/close | Close existing fund
[**closeInvestmentProgram**](ManagerApi.md#closeInvestmentProgram) | **POST** /v1.0/manager/programs/{id}/close | Close existing investment program
[**confirmProgram2FA**](ManagerApi.md#confirmProgram2FA) | **POST** /v1.0/manager/programs/2fa/confirm | Confirm 2FA for program if required (for brokers like Huobi)
[**createFund**](ManagerApi.md#createFund) | **POST** /v1.0/manager/funds/create | Create fund
[**createProgram**](ManagerApi.md#createProgram) | **POST** /v1.0/manager/programs/create | Create an investment program
[**getEvents**](ManagerApi.md#getEvents) | **GET** /v1.0/manager/investments/events | Events
[**getFundInvestInfo**](ManagerApi.md#getFundInvestInfo) | **GET** /v1.0/manager/funds/{id}/invest/info/{currency} | Data for investing into the fund
[**getFundInvestment**](ManagerApi.md#getFundInvestment) | **GET** /v1.0/manager/funds/investment/amount | Get GVT investment to create fund
[**getFundWithdrawInfo**](ManagerApi.md#getFundWithdrawInfo) | **GET** /v1.0/manager/funds/{id}/withdraw/info/{currency} | Data for withdrawal from fund
[**getInvestInfo**](ManagerApi.md#getInvestInfo) | **GET** /v1.0/manager/programs/{id}/invest/info/{currency} | Data for investing into the program
[**getLevelsCalculator**](ManagerApi.md#getLevelsCalculator) | **GET** /v1.0/manager/programs/{id}/levels/info | Get program data for levels calculator
[**getManagerAssets**](ManagerApi.md#getManagerAssets) | **GET** /v1.0/manager/assets | Manager assets list
[**getManagerDetails**](ManagerApi.md#getManagerDetails) | **GET** /v1.0/manager/{id}/details | Manager details
[**getManagerFunds**](ManagerApi.md#getManagerFunds) | **GET** /v1.0/manager/funds | Manager funds
[**getManagerProfile**](ManagerApi.md#getManagerProfile) | **GET** /v1.0/manager/{id} | Manager profile
[**getManagerPrograms**](ManagerApi.md#getManagerPrograms) | **GET** /v1.0/manager/programs | Manager programs
[**getProgram2FA**](ManagerApi.md#getProgram2FA) | **GET** /v1.0/manager/programs/2fa/get | Get 2FA for program if needed
[**getProgramInvestment**](ManagerApi.md#getProgramInvestment) | **GET** /v1.0/manager/programs/investment/amount | Get investment amount to create program
[**getProgramRequests**](ManagerApi.md#getProgramRequests) | **GET** /v1.0/manager/programs/{id}/requests/{skip}/{take} | Get investment program/fund requests
[**getProgramRequests_0**](ManagerApi.md#getProgramRequests_0) | **GET** /v1.0/manager/funds/{id}/requests/{skip}/{take} | Get investment program/fund requests
[**getProgramWithdrawInfo**](ManagerApi.md#getProgramWithdrawInfo) | **GET** /v1.0/manager/programs/{id}/withdraw/info/{currency} | Data for withdrawal from investment program
[**getRequests**](ManagerApi.md#getRequests) | **GET** /v1.0/manager/requests/{skip}/{take} | Get all requests
[**investInfoProgram**](ManagerApi.md#investInfoProgram) | **POST** /v1.0/manager/programs/{id}/invest/{amount} | Deposit  Invest in GVT if currency is empty
[**investIntoFund**](ManagerApi.md#investIntoFund) | **POST** /v1.0/manager/funds/{id}/invest/{amount} | Deposit.  Invest in GVT if currency is empty
[**updateFundAssets**](ManagerApi.md#updateFundAssets) | **POST** /v1.0/manager/funds/{id}/assets/update | Update fund assets parts
[**updateInvestmentProgram**](ManagerApi.md#updateInvestmentProgram) | **POST** /v1.0/manager/programs/{id}/update | Update investment program/fund details
[**updateInvestmentProgram_0**](ManagerApi.md#updateInvestmentProgram_0) | **POST** /v1.0/manager/funds/{id}/update | Update investment program/fund details
[**updateProgramSignalSettings**](ManagerApi.md#updateProgramSignalSettings) | **POST** /v1.0/manager/signal/create | Make manager&#39;s program signal provider
[**updateProgramSignalSettings_0**](ManagerApi.md#updateProgramSignalSettings_0) | **POST** /v1.0/manager/signal/edit | Make manager&#39;s program signal provider
[**withdrawFromFund**](ManagerApi.md#withdrawFromFund) | **POST** /v1.0/manager/funds/{id}/withdraw/{percent} | Withdraw from fund. Percent is % of manager total money.  Withdraw in GVT if currency is empty
[**withdrawFromProgram**](ManagerApi.md#withdrawFromProgram) | **POST** /v1.0/manager/programs/{id}/withdraw/multi/{amount} | Withdraw from investment program in program currency


<a name="cancelChangeBroker"></a>
# **cancelChangeBroker**
> cancelChangeBroker(authorization, opts)

Cancel changing broker in existing program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'programId': "programId_example" // String | 
};
apiInstance.cancelChangeBroker(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **programId** | [**String**](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="cancelRequest"></a>
# **cancelRequest**
> cancelRequest(id, authorization)

Cancel investment program/fund request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

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

<a name="cancelRequest_0"></a>
# **cancelRequest_0**
> cancelRequest_0(id, authorization)

Cancel investment program/fund request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.cancelRequest_0(id, authorization).then(() => {
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

<a name="changeBroker"></a>
# **changeBroker**
> changeBroker(authorization, opts)

Change broker in existing program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.ChangeBrokerProgramRequest() // ChangeBrokerProgramRequest | 
};
apiInstance.changeBroker(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**ChangeBrokerProgramRequest**](ChangeBrokerProgramRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="changeProgramPassword"></a>
# **changeProgramPassword**
> changeProgramPassword(id, authorization, opts)

Change program password

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.ProgramPwdUpdate() // ProgramPwdUpdate | 
};
apiInstance.changeProgramPassword(id, authorization, opts).then(() => {
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
 **model** | [**ProgramPwdUpdate**](ProgramPwdUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="closeCurrentPeriod"></a>
# **closeCurrentPeriod**
> closeCurrentPeriod(id, authorization)

Close current period

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.closeCurrentPeriod(id, authorization).then(() => {
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

<a name="closeFund"></a>
# **closeFund**
> closeFund(id, authorization, opts)

Close existing fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'twoFactorCode': "twoFactorCode_example" // String | 
};
apiInstance.closeFund(id, authorization, opts).then(() => {
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
 **twoFactorCode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="closeInvestmentProgram"></a>
# **closeInvestmentProgram**
> closeInvestmentProgram(id, authorization, opts)

Close existing investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'twoFactorCode': "twoFactorCode_example" // String | 
};
apiInstance.closeInvestmentProgram(id, authorization, opts).then(() => {
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
 **twoFactorCode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="confirmProgram2FA"></a>
# **confirmProgram2FA**
> confirmProgram2FA(authorization, opts)

Confirm 2FA for program if required (for brokers like Huobi)

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'programId': "programId_example", // String | 
  'code': "code_example" // String | 
};
apiInstance.confirmProgram2FA(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **programId** | [**String**](.md)|  | [optional] 
 **code** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="createFund"></a>
# **createFund**
> createFund(authorization, opts)

Create fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewFundRequest() // NewFundRequest | 
};
apiInstance.createFund(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewFundRequest**](NewFundRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="createProgram"></a>
# **createProgram**
> ManagerProgramCreateResult createProgram(authorization, opts)

Create an investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewProgramRequest() // NewProgramRequest | 
};
apiInstance.createProgram(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewProgramRequest**](NewProgramRequest.md)|  | [optional] 

### Return type

[**ManagerProgramCreateResult**](ManagerProgramCreateResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="getEvents"></a>
# **getEvents**
> InvestmentEventViewModels getEvents(authorization, opts)

Events

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

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

<a name="getFundInvestInfo"></a>
# **getFundInvestInfo**
> FundInvestInfo getFundInvestInfo(id, currency, authorization)

Data for investing into the fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getFundInvestInfo(id, currency, authorization).then((data) => {
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

<a name="getFundInvestment"></a>
# **getFundInvestment**
> &#39;Number&#39; getFundInvestment(authorization)

Get GVT investment to create fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getFundInvestment(authorization).then((data) => {
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

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getFundWithdrawInfo"></a>
# **getFundWithdrawInfo**
> ManagerFundWithdrawInfo getFundWithdrawInfo(id, currency, authorization)

Data for withdrawal from fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getFundWithdrawInfo(id, currency, authorization).then((data) => {
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

[**ManagerFundWithdrawInfo**](ManagerFundWithdrawInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getInvestInfo"></a>
# **getInvestInfo**
> ProgramInvestInfoOld getInvestInfo(id, currency, authorization)

Data for investing into the program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getInvestInfo(id, currency, authorization).then((data) => {
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

<a name="getLevelsCalculator"></a>
# **getLevelsCalculator**
> ProgramLevelInfo getLevelsCalculator(id, authorization)

Get program data for levels calculator

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getLevelsCalculator(id, authorization).then((data) => {
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

[**ProgramLevelInfo**](ProgramLevelInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getManagerAssets"></a>
# **getManagerAssets**
> ManagerAssets getManagerAssets(authorization)

Manager assets list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getManagerAssets(authorization).then((data) => {
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

[**ManagerAssets**](ManagerAssets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getManagerDetails"></a>
# **getManagerDetails**
> ManagerProfileDetails getManagerDetails(id)

Manager details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

apiInstance.getManagerDetails(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ManagerProfileDetails**](ManagerProfileDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getManagerFunds"></a>
# **getManagerFunds**
> FundsListOld getManagerFunds(authorization, opts)

Manager funds

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

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
apiInstance.getManagerFunds(authorization, opts).then((data) => {
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

<a name="getManagerProfile"></a>
# **getManagerProfile**
> ManagerProfile getManagerProfile(id)

Manager profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

apiInstance.getManagerProfile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ManagerProfile**](ManagerProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getManagerPrograms"></a>
# **getManagerPrograms**
> ProgramsListOld getManagerPrograms(authorization, opts)

Manager programs

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

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
apiInstance.getManagerPrograms(authorization, opts).then((data) => {
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

<a name="getProgram2FA"></a>
# **getProgram2FA**
> TwoFactorAuthenticator getProgram2FA(authorization, opts)

Get 2FA for program if needed

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'programId': "programId_example" // String | 
};
apiInstance.getProgram2FA(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **programId** | [**String**](.md)|  | [optional] 

### Return type

[**TwoFactorAuthenticator**](TwoFactorAuthenticator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramInvestment"></a>
# **getProgramInvestment**
> ProgramMinimumDepositOld getProgramInvestment(authorization, opts)

Get investment amount to create program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'brokerTradingAccount': "brokerTradingAccount_example" // String | 
};
apiInstance.getProgramInvestment(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **brokerTradingAccount** | [**String**](.md)|  | [optional] 

### Return type

[**ProgramMinimumDepositOld**](ProgramMinimumDepositOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getProgramRequests"></a>
# **getProgramRequests**
> ProgramRequestsOld getProgramRequests(id, skip, take, authorization)

Get investment program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

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

Get investment program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

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

<a name="getProgramWithdrawInfo"></a>
# **getProgramWithdrawInfo**
> ManagerProgramWithdrawInfo getProgramWithdrawInfo(id, currency, authorization)

Data for withdrawal from investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getProgramWithdrawInfo(id, currency, authorization).then((data) => {
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

[**ManagerProgramWithdrawInfo**](ManagerProgramWithdrawInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getRequests"></a>
# **getRequests**
> ProgramRequestsOld getRequests(skip, take, authorization, opts)

Get all requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'assetType': "assetType_example" // String | 
};
apiInstance.getRequests(skip, take, authorization, opts).then((data) => {
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
 **assetType** | **String**|  | [optional] 

### Return type

[**ProgramRequestsOld**](ProgramRequestsOld.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="investInfoProgram"></a>
# **investInfoProgram**
> investInfoProgram(id, amount, authorization, opts)

Deposit  Invest in GVT if currency is empty

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'currency': "100" // String | 
};
apiInstance.investInfoProgram(id, amount, authorization, opts).then(() => {
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

<a name="investIntoFund"></a>
# **investIntoFund**
> investIntoFund(id, amount, authorization, opts)

Deposit.  Invest in GVT if currency is empty

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'currency': "100" // String | 
};
apiInstance.investIntoFund(id, amount, authorization, opts).then(() => {
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

<a name="updateFundAssets"></a>
# **updateFundAssets**
> updateFundAssets(id, authorization, opts)

Update fund assets parts

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'assets': [new CoreApiV10.FundAssetPart()] // [FundAssetPart] | 
};
apiInstance.updateFundAssets(id, authorization, opts).then(() => {
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
 **assets** | [**[FundAssetPart]**](FundAssetPart.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="updateInvestmentProgram"></a>
# **updateInvestmentProgram**
> updateInvestmentProgram(id, authorization, opts)

Update investment program/fund details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.ProgramUpdate() // ProgramUpdate | 
};
apiInstance.updateInvestmentProgram(id, authorization, opts).then(() => {
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
 **model** | [**ProgramUpdate**](ProgramUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="updateInvestmentProgram_0"></a>
# **updateInvestmentProgram_0**
> updateInvestmentProgram_0(id, authorization, opts)

Update investment program/fund details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.ProgramUpdate() // ProgramUpdate | 
};
apiInstance.updateInvestmentProgram_0(id, authorization, opts).then(() => {
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
 **model** | [**ProgramUpdate**](ProgramUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="updateProgramSignalSettings"></a>
# **updateProgramSignalSettings**
> updateProgramSignalSettings(authorization, opts)

Make manager&#39;s program signal provider

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'programId': "programId_example", // String | 
  'volumeFee': 1.2, // Number | 
  'successFee': 1.2 // Number | 
};
apiInstance.updateProgramSignalSettings(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **programId** | [**String**](.md)|  | [optional] 
 **volumeFee** | **Number**|  | [optional] 
 **successFee** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="updateProgramSignalSettings_0"></a>
# **updateProgramSignalSettings_0**
> updateProgramSignalSettings_0(authorization, opts)

Make manager&#39;s program signal provider

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'programId': "programId_example", // String | 
  'volumeFee': 1.2, // Number | 
  'successFee': 1.2 // Number | 
};
apiInstance.updateProgramSignalSettings_0(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **programId** | [**String**](.md)|  | [optional] 
 **volumeFee** | **Number**|  | [optional] 
 **successFee** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="withdrawFromFund"></a>
# **withdrawFromFund**
> withdrawFromFund(id, percent, authorization, opts)

Withdraw from fund. Percent is % of manager total money.  Withdraw in GVT if currency is empty

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let percent = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'currency': "100" // String | 
};
apiInstance.withdrawFromFund(id, percent, authorization, opts).then(() => {
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

<a name="withdrawFromProgram"></a>
# **withdrawFromProgram**
> withdrawFromProgram(id, amount, authorization)

Withdraw from investment program in program currency

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.withdrawFromProgram(id, amount, authorization).then(() => {
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

