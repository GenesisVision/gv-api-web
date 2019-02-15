# CoreApiV10.ManagerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ManagerAssetsGet**](ManagerApi.md#v10ManagerAssetsGet) | **GET** /v1.0/manager/assets | Manager assets list
[**v10ManagerByIdDetailsGet**](ManagerApi.md#v10ManagerByIdDetailsGet) | **GET** /v1.0/manager/{id}/details | Manager details
[**v10ManagerByIdGet**](ManagerApi.md#v10ManagerByIdGet) | **GET** /v1.0/manager/{id} | Manager profile
[**v10ManagerEventsGet**](ManagerApi.md#v10ManagerEventsGet) | **GET** /v1.0/manager/events | Manager events
[**v10ManagerFundsByIdAssetsUpdatePost**](ManagerApi.md#v10ManagerFundsByIdAssetsUpdatePost) | **POST** /v1.0/manager/funds/{id}/assets/update | Update fund assets parts
[**v10ManagerFundsByIdClosePost**](ManagerApi.md#v10ManagerFundsByIdClosePost) | **POST** /v1.0/manager/funds/{id}/close | Close existing fund
[**v10ManagerFundsByIdInvestByAmountPost**](ManagerApi.md#v10ManagerFundsByIdInvestByAmountPost) | **POST** /v1.0/manager/funds/{id}/invest/{amount} | Deposit  Invest in GVT if currency is empty
[**v10ManagerFundsByIdInvestInfoByCurrencyGet**](ManagerApi.md#v10ManagerFundsByIdInvestInfoByCurrencyGet) | **GET** /v1.0/manager/funds/{id}/invest/info/{currency} | Data for investing into the fund
[**v10ManagerFundsByIdRequestsBySkipByTakeGet**](ManagerApi.md#v10ManagerFundsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/manager/funds/{id}/requests/{skip}/{take} | Get investment program/fund requests
[**v10ManagerFundsByIdUpdatePost**](ManagerApi.md#v10ManagerFundsByIdUpdatePost) | **POST** /v1.0/manager/funds/{id}/update | Update investment program/fund details
[**v10ManagerFundsByIdWithdrawByPercentPost**](ManagerApi.md#v10ManagerFundsByIdWithdrawByPercentPost) | **POST** /v1.0/manager/funds/{id}/withdraw/{percent} | Withdraw from fund. Percent is % of manager total money.  Withdraw in GVT if currency is empty
[**v10ManagerFundsByIdWithdrawInfoByCurrencyGet**](ManagerApi.md#v10ManagerFundsByIdWithdrawInfoByCurrencyGet) | **GET** /v1.0/manager/funds/{id}/withdraw/info/{currency} | Data for withdrawal from fund
[**v10ManagerFundsCreatePost**](ManagerApi.md#v10ManagerFundsCreatePost) | **POST** /v1.0/manager/funds/create | Create fund
[**v10ManagerFundsGet**](ManagerApi.md#v10ManagerFundsGet) | **GET** /v1.0/manager/funds | Manager funds
[**v10ManagerFundsInvestmentAmountGet**](ManagerApi.md#v10ManagerFundsInvestmentAmountGet) | **GET** /v1.0/manager/funds/investment/amount | Get GVT investment to create fund
[**v10ManagerFundsRequestsByIdCancelPost**](ManagerApi.md#v10ManagerFundsRequestsByIdCancelPost) | **POST** /v1.0/manager/funds/requests/{id}/cancel | Cancel investment program/fund request
[**v10ManagerGet**](ManagerApi.md#v10ManagerGet) | **GET** /v1.0/manager | Manager dashboard
[**v10ManagerProgramsByIdClosePost**](ManagerApi.md#v10ManagerProgramsByIdClosePost) | **POST** /v1.0/manager/programs/{id}/close | Close existing investment program
[**v10ManagerProgramsByIdInvestByAmountPost**](ManagerApi.md#v10ManagerProgramsByIdInvestByAmountPost) | **POST** /v1.0/manager/programs/{id}/invest/{amount} | Deposit  Invest in GVT if currency is empty
[**v10ManagerProgramsByIdInvestInfoByCurrencyGet**](ManagerApi.md#v10ManagerProgramsByIdInvestInfoByCurrencyGet) | **GET** /v1.0/manager/programs/{id}/invest/info/{currency} | Data for investing into the program
[**v10ManagerProgramsByIdPeriodClosePost**](ManagerApi.md#v10ManagerProgramsByIdPeriodClosePost) | **POST** /v1.0/manager/programs/{id}/period/close | Close current period
[**v10ManagerProgramsByIdRequestsBySkipByTakeGet**](ManagerApi.md#v10ManagerProgramsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/manager/programs/{id}/requests/{skip}/{take} | Get investment program/fund requests
[**v10ManagerProgramsByIdUpdatePost**](ManagerApi.md#v10ManagerProgramsByIdUpdatePost) | **POST** /v1.0/manager/programs/{id}/update | Update investment program/fund details
[**v10ManagerProgramsByIdWithdrawByAmountPost**](ManagerApi.md#v10ManagerProgramsByIdWithdrawByAmountPost) | **POST** /v1.0/manager/programs/{id}/withdraw/{amount} | [Obsolete] Withdraw from investment program in GVT
[**v10ManagerProgramsByIdWithdrawInfoByCurrencyGet**](ManagerApi.md#v10ManagerProgramsByIdWithdrawInfoByCurrencyGet) | **GET** /v1.0/manager/programs/{id}/withdraw/info/{currency} | Data for withdrawal from investment program
[**v10ManagerProgramsByIdWithdrawMultiByAmountPost**](ManagerApi.md#v10ManagerProgramsByIdWithdrawMultiByAmountPost) | **POST** /v1.0/manager/programs/{id}/withdraw/multi/{amount} | Withdraw from investment program in program currency
[**v10ManagerProgramsCreatePost**](ManagerApi.md#v10ManagerProgramsCreatePost) | **POST** /v1.0/manager/programs/create | Create an investment program
[**v10ManagerProgramsGet**](ManagerApi.md#v10ManagerProgramsGet) | **GET** /v1.0/manager/programs | Manager programs
[**v10ManagerProgramsInvestmentAmountGet**](ManagerApi.md#v10ManagerProgramsInvestmentAmountGet) | **GET** /v1.0/manager/programs/investment/amount | Get GVT investment to create program
[**v10ManagerProgramsRequestsByIdCancelPost**](ManagerApi.md#v10ManagerProgramsRequestsByIdCancelPost) | **POST** /v1.0/manager/programs/requests/{id}/cancel | Cancel investment program/fund request
[**v10ManagerRequestsBySkipByTakeGet**](ManagerApi.md#v10ManagerRequestsBySkipByTakeGet) | **GET** /v1.0/manager/requests/{skip}/{take} | Get all requests
[**v10ManagerSignalCreatePost**](ManagerApi.md#v10ManagerSignalCreatePost) | **POST** /v1.0/manager/signal/create | Make manager&#39;s program signal provider


<a name="v10ManagerAssetsGet"></a>
# **v10ManagerAssetsGet**
> ManagerAssets v10ManagerAssetsGet(authorization)

Manager assets list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerAssetsGet(authorization).then((data) => {
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

<a name="v10ManagerByIdDetailsGet"></a>
# **v10ManagerByIdDetailsGet**
> ManagerProfileDetails v10ManagerByIdDetailsGet(id)

Manager details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

apiInstance.v10ManagerByIdDetailsGet(id).then((data) => {
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

<a name="v10ManagerByIdGet"></a>
# **v10ManagerByIdGet**
> ManagerProfile v10ManagerByIdGet(id)

Manager profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

apiInstance.v10ManagerByIdGet(id).then((data) => {
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

<a name="v10ManagerEventsGet"></a>
# **v10ManagerEventsGet**
> ManagerPortfolioEvents v10ManagerEventsGet(authorization, opts)

Manager events

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

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
apiInstance.v10ManagerEventsGet(authorization, opts).then((data) => {
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

[**ManagerPortfolioEvents**](ManagerPortfolioEvents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagerFundsByIdAssetsUpdatePost"></a>
# **v10ManagerFundsByIdAssetsUpdatePost**
> v10ManagerFundsByIdAssetsUpdatePost(id, authorization, opts)

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
apiInstance.v10ManagerFundsByIdAssetsUpdatePost(id, authorization, opts).then(() => {
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

<a name="v10ManagerFundsByIdClosePost"></a>
# **v10ManagerFundsByIdClosePost**
> v10ManagerFundsByIdClosePost(id, authorization, opts)

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
apiInstance.v10ManagerFundsByIdClosePost(id, authorization, opts).then(() => {
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

<a name="v10ManagerFundsByIdInvestByAmountPost"></a>
# **v10ManagerFundsByIdInvestByAmountPost**
> v10ManagerFundsByIdInvestByAmountPost(id, amount, authorization, opts)

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
apiInstance.v10ManagerFundsByIdInvestByAmountPost(id, amount, authorization, opts).then(() => {
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

<a name="v10ManagerFundsByIdInvestInfoByCurrencyGet"></a>
# **v10ManagerFundsByIdInvestInfoByCurrencyGet**
> FundInvestInfo v10ManagerFundsByIdInvestInfoByCurrencyGet(id, currency, authorization)

Data for investing into the fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerFundsByIdInvestInfoByCurrencyGet(id, currency, authorization).then((data) => {
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

<a name="v10ManagerFundsByIdRequestsBySkipByTakeGet"></a>
# **v10ManagerFundsByIdRequestsBySkipByTakeGet**
> ProgramRequests v10ManagerFundsByIdRequestsBySkipByTakeGet(id, skip, take, authorization)

Get investment program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerFundsByIdRequestsBySkipByTakeGet(id, skip, take, authorization).then((data) => {
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

<a name="v10ManagerFundsByIdUpdatePost"></a>
# **v10ManagerFundsByIdUpdatePost**
> v10ManagerFundsByIdUpdatePost(id, authorization, opts)

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
apiInstance.v10ManagerFundsByIdUpdatePost(id, authorization, opts).then(() => {
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

<a name="v10ManagerFundsByIdWithdrawByPercentPost"></a>
# **v10ManagerFundsByIdWithdrawByPercentPost**
> v10ManagerFundsByIdWithdrawByPercentPost(id, percent, authorization, opts)

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
apiInstance.v10ManagerFundsByIdWithdrawByPercentPost(id, percent, authorization, opts).then(() => {
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

<a name="v10ManagerFundsByIdWithdrawInfoByCurrencyGet"></a>
# **v10ManagerFundsByIdWithdrawInfoByCurrencyGet**
> ManagerFundWithdrawInfo v10ManagerFundsByIdWithdrawInfoByCurrencyGet(id, currency, authorization)

Data for withdrawal from fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerFundsByIdWithdrawInfoByCurrencyGet(id, currency, authorization).then((data) => {
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

<a name="v10ManagerFundsCreatePost"></a>
# **v10ManagerFundsCreatePost**
> v10ManagerFundsCreatePost(authorization, opts)

Create fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewFundRequest() // NewFundRequest | 
};
apiInstance.v10ManagerFundsCreatePost(authorization, opts).then(() => {
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

<a name="v10ManagerFundsGet"></a>
# **v10ManagerFundsGet**
> FundsList v10ManagerFundsGet(authorization, opts)

Manager funds

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'currencySecondary': "currencySecondary_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10ManagerFundsGet(authorization, opts).then((data) => {
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
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**FundsList**](FundsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagerFundsInvestmentAmountGet"></a>
# **v10ManagerFundsInvestmentAmountGet**
> &#39;Number&#39; v10ManagerFundsInvestmentAmountGet(authorization)

Get GVT investment to create fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerFundsInvestmentAmountGet(authorization).then((data) => {
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

<a name="v10ManagerFundsRequestsByIdCancelPost"></a>
# **v10ManagerFundsRequestsByIdCancelPost**
> v10ManagerFundsRequestsByIdCancelPost(id, authorization)

Cancel investment program/fund request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerFundsRequestsByIdCancelPost(id, authorization).then(() => {
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

<a name="v10ManagerGet"></a>
# **v10ManagerGet**
> ManagerDashboard v10ManagerGet(authorization, opts)

Manager dashboard

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

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
apiInstance.v10ManagerGet(authorization, opts).then((data) => {
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

[**ManagerDashboard**](ManagerDashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagerProgramsByIdClosePost"></a>
# **v10ManagerProgramsByIdClosePost**
> v10ManagerProgramsByIdClosePost(id, authorization, opts)

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
apiInstance.v10ManagerProgramsByIdClosePost(id, authorization, opts).then(() => {
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

<a name="v10ManagerProgramsByIdInvestByAmountPost"></a>
# **v10ManagerProgramsByIdInvestByAmountPost**
> v10ManagerProgramsByIdInvestByAmountPost(id, amount, authorization, opts)

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
apiInstance.v10ManagerProgramsByIdInvestByAmountPost(id, amount, authorization, opts).then(() => {
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

<a name="v10ManagerProgramsByIdInvestInfoByCurrencyGet"></a>
# **v10ManagerProgramsByIdInvestInfoByCurrencyGet**
> ProgramInvestInfo v10ManagerProgramsByIdInvestInfoByCurrencyGet(id, currency, authorization)

Data for investing into the program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerProgramsByIdInvestInfoByCurrencyGet(id, currency, authorization).then((data) => {
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

<a name="v10ManagerProgramsByIdPeriodClosePost"></a>
# **v10ManagerProgramsByIdPeriodClosePost**
> v10ManagerProgramsByIdPeriodClosePost(id, authorization)

Close current period

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerProgramsByIdPeriodClosePost(id, authorization).then(() => {
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

<a name="v10ManagerProgramsByIdRequestsBySkipByTakeGet"></a>
# **v10ManagerProgramsByIdRequestsBySkipByTakeGet**
> ProgramRequests v10ManagerProgramsByIdRequestsBySkipByTakeGet(id, skip, take, authorization)

Get investment program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerProgramsByIdRequestsBySkipByTakeGet(id, skip, take, authorization).then((data) => {
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

<a name="v10ManagerProgramsByIdUpdatePost"></a>
# **v10ManagerProgramsByIdUpdatePost**
> v10ManagerProgramsByIdUpdatePost(id, authorization, opts)

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
apiInstance.v10ManagerProgramsByIdUpdatePost(id, authorization, opts).then(() => {
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

<a name="v10ManagerProgramsByIdWithdrawByAmountPost"></a>
# **v10ManagerProgramsByIdWithdrawByAmountPost**
> v10ManagerProgramsByIdWithdrawByAmountPost(id, amount, authorization)

[Obsolete] Withdraw from investment program in GVT

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerProgramsByIdWithdrawByAmountPost(id, amount, authorization).then(() => {
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

<a name="v10ManagerProgramsByIdWithdrawInfoByCurrencyGet"></a>
# **v10ManagerProgramsByIdWithdrawInfoByCurrencyGet**
> ManagerProgramWithdrawInfo v10ManagerProgramsByIdWithdrawInfoByCurrencyGet(id, currency, authorization)

Data for withdrawal from investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerProgramsByIdWithdrawInfoByCurrencyGet(id, currency, authorization).then((data) => {
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

<a name="v10ManagerProgramsByIdWithdrawMultiByAmountPost"></a>
# **v10ManagerProgramsByIdWithdrawMultiByAmountPost**
> v10ManagerProgramsByIdWithdrawMultiByAmountPost(id, amount, authorization)

Withdraw from investment program in program currency

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerProgramsByIdWithdrawMultiByAmountPost(id, amount, authorization).then(() => {
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

<a name="v10ManagerProgramsCreatePost"></a>
# **v10ManagerProgramsCreatePost**
> v10ManagerProgramsCreatePost(authorization, opts)

Create an investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewProgramRequest() // NewProgramRequest | 
};
apiInstance.v10ManagerProgramsCreatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagerProgramsGet"></a>
# **v10ManagerProgramsGet**
> ProgramsList v10ManagerProgramsGet(authorization, opts)

Manager programs

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'currencySecondary': "currencySecondary_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10ManagerProgramsGet(authorization, opts).then((data) => {
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
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**ProgramsList**](ProgramsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagerProgramsInvestmentAmountGet"></a>
# **v10ManagerProgramsInvestmentAmountGet**
> &#39;Number&#39; v10ManagerProgramsInvestmentAmountGet(authorization)

Get GVT investment to create program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerProgramsInvestmentAmountGet(authorization).then((data) => {
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

<a name="v10ManagerProgramsRequestsByIdCancelPost"></a>
# **v10ManagerProgramsRequestsByIdCancelPost**
> v10ManagerProgramsRequestsByIdCancelPost(id, authorization)

Cancel investment program/fund request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerProgramsRequestsByIdCancelPost(id, authorization).then(() => {
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

<a name="v10ManagerRequestsBySkipByTakeGet"></a>
# **v10ManagerRequestsBySkipByTakeGet**
> ProgramRequests v10ManagerRequestsBySkipByTakeGet(skip, take, authorization)

Get all requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagerRequestsBySkipByTakeGet(skip, take, authorization).then((data) => {
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

<a name="v10ManagerSignalCreatePost"></a>
# **v10ManagerSignalCreatePost**
> v10ManagerSignalCreatePost(authorization, opts)

Make manager&#39;s program signal provider

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'programId': "programId_example", // String | 
  'subscriptionFee': 1.2, // Number | 
  'successFee': 1.2 // Number | 
};
apiInstance.v10ManagerSignalCreatePost(authorization, opts).then(() => {
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
 **subscriptionFee** | **Number**|  | [optional] 
 **successFee** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

