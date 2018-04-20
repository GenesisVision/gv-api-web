# CoreApi.BrokerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiBrokerAccountCreatePost**](BrokerApi.md#apiBrokerAccountCreatePost) | **POST** /api/broker/account/create | Create manager
[**apiBrokerAuthChangePasswordPost**](BrokerApi.md#apiBrokerAuthChangePasswordPost) | **POST** /api/broker/auth/changePassword | Change password
[**apiBrokerAuthConfirmEmailPost**](BrokerApi.md#apiBrokerAuthConfirmEmailPost) | **POST** /api/broker/auth/confirmEmail | Confirm email after registration
[**apiBrokerAuthSignInPost**](BrokerApi.md#apiBrokerAuthSignInPost) | **POST** /api/broker/auth/signIn | Authorize
[**apiBrokerAuthUpdateTokenGet**](BrokerApi.md#apiBrokerAuthUpdateTokenGet) | **GET** /api/broker/auth/updateToken | Update auth token
[**apiBrokerInitDataGet**](BrokerApi.md#apiBrokerInitDataGet) | **GET** /api/broker/initData | Get broker initial data
[**apiBrokerManagersAccountsOnlineInfoUpdatePost**](BrokerApi.md#apiBrokerManagersAccountsOnlineInfoUpdatePost) | **POST** /api/broker/managersAccounts/onlineInfo/update | Upload accounts online info
[**apiBrokerPeriodAccrueProfitsPost**](BrokerApi.md#apiBrokerPeriodAccrueProfitsPost) | **POST** /api/broker/period/accrueProfits | Accrue investors&#39; profits
[**apiBrokerPeriodClosePost**](BrokerApi.md#apiBrokerPeriodClosePost) | **POST** /api/broker/period/close | Close investment period
[**apiBrokerPeriodProcessClosingProgramPost**](BrokerApi.md#apiBrokerPeriodProcessClosingProgramPost) | **POST** /api/broker/period/processClosingProgram | Close investment program
[**apiBrokerPeriodProcessInvestmentRequestsPost**](BrokerApi.md#apiBrokerPeriodProcessInvestmentRequestsPost) | **POST** /api/broker/period/processInvestmentRequests | Process investment requests
[**apiBrokerPeriodReevaluateManagerTokenPost**](BrokerApi.md#apiBrokerPeriodReevaluateManagerTokenPost) | **POST** /api/broker/period/reevaluateManagerToken | Update manager token initial price/total supply after loss
[**apiBrokerPeriodSetStartValuesPost**](BrokerApi.md#apiBrokerPeriodSetStartValuesPost) | **POST** /api/broker/period/setStartValues | Set investment period start balance, manager share, manager balance
[**apiBrokerPeriodTerminatePost**](BrokerApi.md#apiBrokerPeriodTerminatePost) | **POST** /api/broker/period/terminate | Terminate program
[**apiBrokerPeriodlosingDataGet**](BrokerApi.md#apiBrokerPeriodlosingDataGet) | **GET** /api/broker/period/сlosingData | Get data for closing investment period
[**apiBrokerTradesIpfsHashUpdatePost**](BrokerApi.md#apiBrokerTradesIpfsHashUpdatePost) | **POST** /api/broker/trades/ipfsHash/update | Update manager history ipfs hash
[**apiBrokerTradesNewPost**](BrokerApi.md#apiBrokerTradesNewPost) | **POST** /api/broker/trades/new | New trade event
[**apiBrokerTradesOpenTradesNewPost**](BrokerApi.md#apiBrokerTradesOpenTradesNewPost) | **POST** /api/broker/trades/openTrades/new | New open trades event


<a name="apiBrokerAccountCreatePost"></a>
# **apiBrokerAccountCreatePost**
> &#39;String&#39; apiBrokerAccountCreatePost(authorization, opts)

Create manager

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApi.NewManager() // NewManager | 
};

apiInstance.apiBrokerAccountCreatePost(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewManager**](NewManager.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerAuthChangePasswordPost"></a>
# **apiBrokerAuthChangePasswordPost**
> apiBrokerAuthChangePasswordPost(authorization, opts)

Change password

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.ChangePasswordViewModel() // ChangePasswordViewModel | 
};

apiInstance.apiBrokerAuthChangePasswordPost(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**ChangePasswordViewModel**](ChangePasswordViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerAuthConfirmEmailPost"></a>
# **apiBrokerAuthConfirmEmailPost**
> &#39;String&#39; apiBrokerAuthConfirmEmailPost(opts)

Confirm email after registration

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let opts = { 
  'userId': "userId_example", // String | 
  'code': "code_example" // String | 
};

apiInstance.apiBrokerAuthConfirmEmailPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerAuthSignInPost"></a>
# **apiBrokerAuthSignInPost**
> &#39;String&#39; apiBrokerAuthSignInPost(opts)

Authorize

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let opts = { 
  'model': new CoreApi.LoginViewModel() // LoginViewModel | 
};

apiInstance.apiBrokerAuthSignInPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**LoginViewModel**](LoginViewModel.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerAuthUpdateTokenGet"></a>
# **apiBrokerAuthUpdateTokenGet**
> &#39;String&#39; apiBrokerAuthUpdateTokenGet(authorization)

Update auth token

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token


apiInstance.apiBrokerAuthUpdateTokenGet(authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerInitDataGet"></a>
# **apiBrokerInitDataGet**
> BrokerInitData apiBrokerInitDataGet(brokerTradeServerId, authorization)

Get broker initial data

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let brokerTradeServerId = "brokerTradeServerId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token


apiInstance.apiBrokerInitDataGet(brokerTradeServerId, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brokerTradeServerId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**BrokerInitData**](BrokerInitData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerManagersAccountsOnlineInfoUpdatePost"></a>
# **apiBrokerManagersAccountsOnlineInfoUpdatePost**
> apiBrokerManagersAccountsOnlineInfoUpdatePost(authorization, opts)

Upload accounts online info

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'accounts': [new CoreApi.ManagerAccountOnlineInfo()] // [ManagerAccountOnlineInfo] | 
};

apiInstance.apiBrokerManagersAccountsOnlineInfoUpdatePost(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **accounts** | [**[ManagerAccountOnlineInfo]**](ManagerAccountOnlineInfo.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodAccrueProfitsPost"></a>
# **apiBrokerPeriodAccrueProfitsPost**
> apiBrokerPeriodAccrueProfitsPost(authorization, opts)

Accrue investors&#39; profits

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'accrual': new CoreApi.InvestmentProgramAccrual() // InvestmentProgramAccrual | 
};

apiInstance.apiBrokerPeriodAccrueProfitsPost(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **accrual** | [**InvestmentProgramAccrual**](InvestmentProgramAccrual.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodClosePost"></a>
# **apiBrokerPeriodClosePost**
> apiBrokerPeriodClosePost(investmentProgramId, currentBalance, authorization)

Close investment period

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let currentBalance = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token


apiInstance.apiBrokerPeriodClosePost(investmentProgramId, currentBalance, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **currentBalance** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodProcessClosingProgramPost"></a>
# **apiBrokerPeriodProcessClosingProgramPost**
> apiBrokerPeriodProcessClosingProgramPost(investmentProgramId, managerBalance, authorization)

Close investment program

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let managerBalance = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token


apiInstance.apiBrokerPeriodProcessClosingProgramPost(investmentProgramId, managerBalance, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **managerBalance** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodProcessInvestmentRequestsPost"></a>
# **apiBrokerPeriodProcessInvestmentRequestsPost**
> &#39;String&#39; apiBrokerPeriodProcessInvestmentRequestsPost(investmentProgramId, authorization)

Process investment requests

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token


apiInstance.apiBrokerPeriodProcessInvestmentRequestsPost(investmentProgramId, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodReevaluateManagerTokenPost"></a>
# **apiBrokerPeriodReevaluateManagerTokenPost**
> apiBrokerPeriodReevaluateManagerTokenPost(investmentProgramId, investorLossShare, authorization)

Update manager token initial price/total supply after loss

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let investorLossShare = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token


apiInstance.apiBrokerPeriodReevaluateManagerTokenPost(investmentProgramId, investorLossShare, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **investorLossShare** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodSetStartValuesPost"></a>
# **apiBrokerPeriodSetStartValuesPost**
> apiBrokerPeriodSetStartValuesPost(authorization, opts)

Set investment period start balance, manager share, manager balance

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.StartValues() // StartValues | 
};

apiInstance.apiBrokerPeriodSetStartValuesPost(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**StartValues**](StartValues.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodTerminatePost"></a>
# **apiBrokerPeriodTerminatePost**
> apiBrokerPeriodTerminatePost(investmentProgramId, authorization)

Terminate program

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token


apiInstance.apiBrokerPeriodTerminatePost(investmentProgramId, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodlosingDataGet"></a>
# **apiBrokerPeriodlosingDataGet**
> ClosePeriodData apiBrokerPeriodlosingDataGet(investmentProgramId, authorization)

Get data for closing investment period

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token


apiInstance.apiBrokerPeriodlosingDataGet(investmentProgramId, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ClosePeriodData**](ClosePeriodData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerTradesIpfsHashUpdatePost"></a>
# **apiBrokerTradesIpfsHashUpdatePost**
> apiBrokerTradesIpfsHashUpdatePost(authorization, opts)

Update manager history ipfs hash

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'data': new CoreApi.ManagerHistoryIpfsHash() // ManagerHistoryIpfsHash | 
};

apiInstance.apiBrokerTradesIpfsHashUpdatePost(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **data** | [**ManagerHistoryIpfsHash**](ManagerHistoryIpfsHash.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerTradesNewPost"></a>
# **apiBrokerTradesNewPost**
> apiBrokerTradesNewPost(authorization, opts)

New trade event

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'tradeEvent': new CoreApi.NewTradeEvent() // NewTradeEvent | 
};

apiInstance.apiBrokerTradesNewPost(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **tradeEvent** | [**NewTradeEvent**](NewTradeEvent.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerTradesOpenTradesNewPost"></a>
# **apiBrokerTradesOpenTradesNewPost**
> apiBrokerTradesOpenTradesNewPost(authorization, opts)

New open trades event

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'trades': new CoreApi.NewOpenTradesEvent() // NewOpenTradesEvent | 
};

apiInstance.apiBrokerTradesOpenTradesNewPost(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **trades** | [**NewOpenTradesEvent**](NewOpenTradesEvent.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

