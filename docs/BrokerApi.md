# CoreApiV2.BrokerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiBrokerAccountCreatePost**](BrokerApi.md#apiBrokerAccountCreatePost) | **POST** /api/broker/account/create | Create manager
[**apiBrokerAccountOefCreatePost**](BrokerApi.md#apiBrokerAccountOefCreatePost) | **POST** /api/broker/account/oef/create | Create OEF manager
[**apiBrokerAuthChangePasswordPost**](BrokerApi.md#apiBrokerAuthChangePasswordPost) | **POST** /api/broker/auth/changePassword | Change password
[**apiBrokerAuthConfirmEmailPost**](BrokerApi.md#apiBrokerAuthConfirmEmailPost) | **POST** /api/broker/auth/confirmEmail | Confirm email after registration
[**apiBrokerAuthSignInPost**](BrokerApi.md#apiBrokerAuthSignInPost) | **POST** /api/broker/auth/signIn | Authorize
[**apiBrokerAuthUpdateTokenGet**](BrokerApi.md#apiBrokerAuthUpdateTokenGet) | **GET** /api/broker/auth/updateToken | Update auth token
[**apiBrokerFreeaddressesGet**](BrokerApi.md#apiBrokerFreeaddressesGet) | **GET** /api/broker/freeaddresses | 
[**apiBrokerInitDataGet**](BrokerApi.md#apiBrokerInitDataGet) | **GET** /api/broker/initData | Get broker initial data
[**apiBrokerManagersAccountsOnlineInfoUpdatePost**](BrokerApi.md#apiBrokerManagersAccountsOnlineInfoUpdatePost) | **POST** /api/broker/managersAccounts/onlineInfo/update | Upload accounts online info
[**apiBrokerOefGetRealAssetsGet**](BrokerApi.md#apiBrokerOefGetRealAssetsGet) | **GET** /api/broker/oef/getRealAssets | Get real assets distribution for broker&#39;s clients
[**apiBrokerOefInitDataGet**](BrokerApi.md#apiBrokerOefInitDataGet) | **GET** /api/broker/oef/initData | Get broker OEF initial data
[**apiBrokerOefSetRealAssetsPost**](BrokerApi.md#apiBrokerOefSetRealAssetsPost) | **POST** /api/broker/oef/setRealAssets | Update real assets distribution
[**apiBrokerPeriodAccrueProfitsPost**](BrokerApi.md#apiBrokerPeriodAccrueProfitsPost) | **POST** /api/broker/period/accrueProfits | Accrue investors&#39; profits
[**apiBrokerPeriodClosePost**](BrokerApi.md#apiBrokerPeriodClosePost) | **POST** /api/broker/period/close | Close investment period
[**apiBrokerPeriodOefApplyAssetPartsPost**](BrokerApi.md#apiBrokerPeriodOefApplyAssetPartsPost) | **POST** /api/broker/period/oef/applyAssetParts | Apply new requested assets parts
[**apiBrokerPeriodOefProcessClosingProgramPost**](BrokerApi.md#apiBrokerPeriodOefProcessClosingProgramPost) | **POST** /api/broker/period/oef/processClosingProgram | Close OEF investment program
[**apiBrokerPeriodOefProcessForceClosingProgramPost**](BrokerApi.md#apiBrokerPeriodOefProcessForceClosingProgramPost) | **POST** /api/broker/period/oef/processForceClosingProgram | Force close OEF investment program
[**apiBrokerPeriodProcessClosingProgramPost**](BrokerApi.md#apiBrokerPeriodProcessClosingProgramPost) | **POST** /api/broker/period/processClosingProgram | Close investment program
[**apiBrokerPeriodProcessInvestmentRequestsPost**](BrokerApi.md#apiBrokerPeriodProcessInvestmentRequestsPost) | **POST** /api/broker/period/processInvestmentRequests | Process investment requests
[**apiBrokerPeriodReevaluateManagerTokenPost**](BrokerApi.md#apiBrokerPeriodReevaluateManagerTokenPost) | **POST** /api/broker/period/reevaluateManagerToken | Update manager token initial price/total supply after loss
[**apiBrokerPeriodSetStartValuesPost**](BrokerApi.md#apiBrokerPeriodSetStartValuesPost) | **POST** /api/broker/period/setStartValues | Set investment period start balance, manager share, manager balance
[**apiBrokerPeriodTerminatePost**](BrokerApi.md#apiBrokerPeriodTerminatePost) | **POST** /api/broker/period/terminate | Terminate program
[**apiBrokerPeriodlosingDataGet**](BrokerApi.md#apiBrokerPeriodlosingDataGet) | **GET** /api/broker/period/сlosingData | Get data for closing investment period
[**apiBrokerTradehistoryGet**](BrokerApi.md#apiBrokerTradehistoryGet) | **GET** /api/broker/tradehistory | 
[**apiBrokerTradesIpfsHashUpdatePost**](BrokerApi.md#apiBrokerTradesIpfsHashUpdatePost) | **POST** /api/broker/trades/ipfsHash/update | Update manager history ipfs hash
[**apiBrokerTradesNewPost**](BrokerApi.md#apiBrokerTradesNewPost) | **POST** /api/broker/trades/new | New trade event


<a name="apiBrokerAccountCreatePost"></a>
# **apiBrokerAccountCreatePost**
> &#39;String&#39; apiBrokerAccountCreatePost(authorization, opts)

Create manager

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV2.NewManager(), // NewManager | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerAccountCreatePost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewManager**](NewManager.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerAccountOefCreatePost"></a>
# **apiBrokerAccountOefCreatePost**
> &#39;String&#39; apiBrokerAccountOefCreatePost(authorization, opts)

Create OEF manager

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'requestId': "requestId_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerAccountOefCreatePost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **requestId** | [**String**](.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerAuthChangePasswordPost"></a>
# **apiBrokerAuthChangePasswordPost**
> apiBrokerAuthChangePasswordPost(authorization, opts)

Change password

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.ChangePasswordViewModel(), // ChangePasswordViewModel | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerAuthChangePasswordPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**ChangePasswordViewModel**](ChangePasswordViewModel.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let opts = { 
  'userId': "userId_example", // String | 
  'code': "code_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerAuthConfirmEmailPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let opts = { 
  'model': new CoreApiV2.LoginViewModel(), // LoginViewModel | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerAuthSignInPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**LoginViewModel**](LoginViewModel.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerAuthUpdateTokenGet"></a>
# **apiBrokerAuthUpdateTokenGet**
> &#39;String&#39; apiBrokerAuthUpdateTokenGet(authorization, opts)

Update auth token

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerAuthUpdateTokenGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **apiVersion** | **String**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerFreeaddressesGet"></a>
# **apiBrokerFreeaddressesGet**
> [&#39;String&#39;] apiBrokerFreeaddressesGet(authorization, opts)



### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerFreeaddressesGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **apiVersion** | **String**|  | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerInitDataGet"></a>
# **apiBrokerInitDataGet**
> BrokerInitData apiBrokerInitDataGet(authorization, opts)

Get broker initial data

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'brokerTradeServerId': "brokerTradeServerId_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerInitDataGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **brokerTradeServerId** | [**String**](.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'accounts': [new CoreApiV2.ManagerAccountOnlineInfo()], // [ManagerAccountOnlineInfo] | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerManagersAccountsOnlineInfoUpdatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **accounts** | [**[ManagerAccountOnlineInfo]**](ManagerAccountOnlineInfo.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerOefGetRealAssetsGet"></a>
# **apiBrokerOefGetRealAssetsGet**
> UsersRealAssets apiBrokerOefGetRealAssetsGet(authorization, opts)

Get real assets distribution for broker&#39;s clients

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'brokerTradeServerId': "brokerTradeServerId_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerOefGetRealAssetsGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **brokerTradeServerId** | [**String**](.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**UsersRealAssets**](UsersRealAssets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerOefInitDataGet"></a>
# **apiBrokerOefInitDataGet**
> BrokerOefInitData apiBrokerOefInitDataGet(authorization, opts)

Get broker OEF initial data

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'brokerTradeServerId': "brokerTradeServerId_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerOefInitDataGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **brokerTradeServerId** | [**String**](.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**BrokerOefInitData**](BrokerOefInitData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerOefSetRealAssetsPost"></a>
# **apiBrokerOefSetRealAssetsPost**
> apiBrokerOefSetRealAssetsPost(authorization, opts)

Update real assets distribution

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'brokerTradeServerId': "brokerTradeServerId_example", // String | 
  'assets': new CoreApiV2.UsersRealAssets(), // UsersRealAssets | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerOefSetRealAssetsPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **brokerTradeServerId** | [**String**](.md)|  | [optional] 
 **assets** | [**UsersRealAssets**](UsersRealAssets.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'accrual': new CoreApiV2.InvestmentProgramAccrual(), // InvestmentProgramAccrual | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodAccrueProfitsPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **accrual** | [**InvestmentProgramAccrual**](InvestmentProgramAccrual.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodClosePost"></a>
# **apiBrokerPeriodClosePost**
> apiBrokerPeriodClosePost(authorization, opts)

Close investment period

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'currentBalance': 1.2, // Number | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodClosePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **currentBalance** | **Number**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodOefApplyAssetPartsPost"></a>
# **apiBrokerPeriodOefApplyAssetPartsPost**
> apiBrokerPeriodOefApplyAssetPartsPost(authorization, opts)

Apply new requested assets parts

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'assetsRequestId': "assetsRequestId_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodOefApplyAssetPartsPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **assetsRequestId** | [**String**](.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodOefProcessClosingProgramPost"></a>
# **apiBrokerPeriodOefProcessClosingProgramPost**
> apiBrokerPeriodOefProcessClosingProgramPost(authorization, opts)

Close OEF investment program

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'managerBalance': 1.2, // Number | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodOefProcessClosingProgramPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **managerBalance** | **Number**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodOefProcessForceClosingProgramPost"></a>
# **apiBrokerPeriodOefProcessForceClosingProgramPost**
> apiBrokerPeriodOefProcessForceClosingProgramPost(authorization, opts)

Force close OEF investment program

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'managerBalance': 1.2, // Number | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodOefProcessForceClosingProgramPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **managerBalance** | **Number**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodProcessClosingProgramPost"></a>
# **apiBrokerPeriodProcessClosingProgramPost**
> apiBrokerPeriodProcessClosingProgramPost(authorization, opts)

Close investment program

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'managerBalance': 1.2, // Number | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodProcessClosingProgramPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **managerBalance** | **Number**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodProcessInvestmentRequestsPost"></a>
# **apiBrokerPeriodProcessInvestmentRequestsPost**
> &#39;String&#39; apiBrokerPeriodProcessInvestmentRequestsPost(authorization, opts)

Process investment requests

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodProcessInvestmentRequestsPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodReevaluateManagerTokenPost"></a>
# **apiBrokerPeriodReevaluateManagerTokenPost**
> apiBrokerPeriodReevaluateManagerTokenPost(authorization, opts)

Update manager token initial price/total supply after loss

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'investorLossShare': 1.2, // Number | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodReevaluateManagerTokenPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **investorLossShare** | **Number**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.StartValues(), // StartValues | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodSetStartValuesPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**StartValues**](StartValues.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodTerminatePost"></a>
# **apiBrokerPeriodTerminatePost**
> apiBrokerPeriodTerminatePost(authorization, opts)

Terminate program

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodTerminatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerPeriodlosingDataGet"></a>
# **apiBrokerPeriodlosingDataGet**
> ClosePeriodData apiBrokerPeriodlosingDataGet(authorization, opts)

Get data for closing investment period

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerPeriodlosingDataGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**ClosePeriodData**](ClosePeriodData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBrokerTradehistoryGet"></a>
# **apiBrokerTradehistoryGet**
> [&#39;String&#39;] apiBrokerTradehistoryGet(authorization, opts)



### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerTradehistoryGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **investmentProgramId** | [**String**](.md)|  | [optional] 
 **start** | **Date**|  | [optional] 
 **end** | **Date**|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

**[&#39;String&#39;]**

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'data': new CoreApiV2.ManagerHistoryIpfsHash(), // ManagerHistoryIpfsHash | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerTradesIpfsHashUpdatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **data** | [**ManagerHistoryIpfsHash**](ManagerHistoryIpfsHash.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'tradeEvent': new CoreApiV2.NewTradeEvent(), // NewTradeEvent | 
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiBrokerTradesNewPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **tradeEvent** | [**NewTradeEvent**](NewTradeEvent.md)|  | [optional] 
 **apiVersion** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

