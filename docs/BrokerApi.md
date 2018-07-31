# CoreApiV10.BrokerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10BrokerAccountCreatePost**](BrokerApi.md#v10BrokerAccountCreatePost) | **POST** /v1.0/broker/account/create | Create manager
[**v10BrokerAccountOefCreatePost**](BrokerApi.md#v10BrokerAccountOefCreatePost) | **POST** /v1.0/broker/account/oef/create | Create OEF manager
[**v10BrokerFreeaddressesGet**](BrokerApi.md#v10BrokerFreeaddressesGet) | **GET** /v1.0/broker/freeaddresses | 
[**v10BrokerInitDataGet**](BrokerApi.md#v10BrokerInitDataGet) | **GET** /v1.0/broker/initData | Get broker initial data
[**v10BrokerManagersAccountsOnlineInfoUpdatePost**](BrokerApi.md#v10BrokerManagersAccountsOnlineInfoUpdatePost) | **POST** /v1.0/broker/managersAccounts/onlineInfo/update | Upload accounts online info
[**v10BrokerOefAssetAllGet**](BrokerApi.md#v10BrokerOefAssetAllGet) | **GET** /v1.0/broker/oef/asset/all | Get all supported assets for OEFs
[**v10BrokerOefGetRealAssetsGet**](BrokerApi.md#v10BrokerOefGetRealAssetsGet) | **GET** /v1.0/broker/oef/getRealAssets | Get real assets distribution for broker&#39;s clients
[**v10BrokerOefInitDataGet**](BrokerApi.md#v10BrokerOefInitDataGet) | **GET** /v1.0/broker/oef/initData | Get broker OEF initial data
[**v10BrokerOefSetRealAssetsPost**](BrokerApi.md#v10BrokerOefSetRealAssetsPost) | **POST** /v1.0/broker/oef/setRealAssets | Update real assets distribution
[**v10BrokerPeriodAccrueProfitsPost**](BrokerApi.md#v10BrokerPeriodAccrueProfitsPost) | **POST** /v1.0/broker/period/accrueProfits | Accrue investors&#39; profits
[**v10BrokerPeriodClosePost**](BrokerApi.md#v10BrokerPeriodClosePost) | **POST** /v1.0/broker/period/close | Close investment period
[**v10BrokerPeriodOefApplyAssetPartsPost**](BrokerApi.md#v10BrokerPeriodOefApplyAssetPartsPost) | **POST** /v1.0/broker/period/oef/applyAssetParts | Apply new requested assets parts
[**v10BrokerPeriodOefProcessClosingProgramPost**](BrokerApi.md#v10BrokerPeriodOefProcessClosingProgramPost) | **POST** /v1.0/broker/period/oef/processClosingProgram | Close OEF investment program
[**v10BrokerPeriodOefProcessForceClosingProgramPost**](BrokerApi.md#v10BrokerPeriodOefProcessForceClosingProgramPost) | **POST** /v1.0/broker/period/oef/processForceClosingProgram | Force close OEF investment program
[**v10BrokerPeriodProcessClosingProgramPost**](BrokerApi.md#v10BrokerPeriodProcessClosingProgramPost) | **POST** /v1.0/broker/period/processClosingProgram | Close investment program
[**v10BrokerPeriodProcessInvestmentRequestsPost**](BrokerApi.md#v10BrokerPeriodProcessInvestmentRequestsPost) | **POST** /v1.0/broker/period/processInvestmentRequests | Process investment requests
[**v10BrokerPeriodReevaluateManagerTokenPost**](BrokerApi.md#v10BrokerPeriodReevaluateManagerTokenPost) | **POST** /v1.0/broker/period/reevaluateManagerToken | Update manager token initial price/total supply after loss
[**v10BrokerPeriodSetStartValuesPost**](BrokerApi.md#v10BrokerPeriodSetStartValuesPost) | **POST** /v1.0/broker/period/setStartValues | Set investment period start balance, manager share, manager balance
[**v10BrokerPeriodTerminatePost**](BrokerApi.md#v10BrokerPeriodTerminatePost) | **POST** /v1.0/broker/period/terminate | Terminate program
[**v10BrokerPeriodlosingDataGet**](BrokerApi.md#v10BrokerPeriodlosingDataGet) | **GET** /v1.0/broker/period/сlosingData | Get data for closing investment period
[**v10BrokerTradehistoryGet**](BrokerApi.md#v10BrokerTradehistoryGet) | **GET** /v1.0/broker/tradehistory | 
[**v10BrokerTradesIpfsHashUpdatePost**](BrokerApi.md#v10BrokerTradesIpfsHashUpdatePost) | **POST** /v1.0/broker/trades/ipfsHash/update | Update manager history ipfs hash
[**v10BrokerTradesNewPost**](BrokerApi.md#v10BrokerTradesNewPost) | **POST** /v1.0/broker/trades/new | New trade event


<a name="v10BrokerAccountCreatePost"></a>
# **v10BrokerAccountCreatePost**
> &#39;String&#39; v10BrokerAccountCreatePost(authorization, opts)

Create manager

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewManager() // NewManager | 
};
apiInstance.v10BrokerAccountCreatePost(authorization, opts).then((data) => {
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

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerAccountOefCreatePost"></a>
# **v10BrokerAccountOefCreatePost**
> &#39;String&#39; v10BrokerAccountOefCreatePost(authorization, opts)

Create OEF manager

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'requestId': "requestId_example" // String | 
};
apiInstance.v10BrokerAccountOefCreatePost(authorization, opts).then((data) => {
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

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerFreeaddressesGet"></a>
# **v10BrokerFreeaddressesGet**
> [&#39;String&#39;] v10BrokerFreeaddressesGet(authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10BrokerFreeaddressesGet(authorization).then((data) => {
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

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerInitDataGet"></a>
# **v10BrokerInitDataGet**
> BrokerInitData v10BrokerInitDataGet(authorization, opts)

Get broker initial data

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'brokerTradeServerId': "brokerTradeServerId_example" // String | 
};
apiInstance.v10BrokerInitDataGet(authorization, opts).then((data) => {
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

### Return type

[**BrokerInitData**](BrokerInitData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerManagersAccountsOnlineInfoUpdatePost"></a>
# **v10BrokerManagersAccountsOnlineInfoUpdatePost**
> v10BrokerManagersAccountsOnlineInfoUpdatePost(authorization, opts)

Upload accounts online info

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'accounts': [new CoreApiV10.ManagerAccountOnlineInfo()] // [ManagerAccountOnlineInfo] | 
};
apiInstance.v10BrokerManagersAccountsOnlineInfoUpdatePost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerOefAssetAllGet"></a>
# **v10BrokerOefAssetAllGet**
> PlatformAssets v10BrokerOefAssetAllGet(authorization)

Get all supported assets for OEFs

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10BrokerOefAssetAllGet(authorization).then((data) => {
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

[**PlatformAssets**](PlatformAssets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerOefGetRealAssetsGet"></a>
# **v10BrokerOefGetRealAssetsGet**
> UsersRealAssets v10BrokerOefGetRealAssetsGet(authorization, opts)

Get real assets distribution for broker&#39;s clients

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'brokerTradeServerId': "brokerTradeServerId_example" // String | 
};
apiInstance.v10BrokerOefGetRealAssetsGet(authorization, opts).then((data) => {
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

### Return type

[**UsersRealAssets**](UsersRealAssets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerOefInitDataGet"></a>
# **v10BrokerOefInitDataGet**
> BrokerOefInitData v10BrokerOefInitDataGet(authorization, opts)

Get broker OEF initial data

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'brokerTradeServerId': "brokerTradeServerId_example" // String | 
};
apiInstance.v10BrokerOefInitDataGet(authorization, opts).then((data) => {
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

### Return type

[**BrokerOefInitData**](BrokerOefInitData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerOefSetRealAssetsPost"></a>
# **v10BrokerOefSetRealAssetsPost**
> v10BrokerOefSetRealAssetsPost(authorization, opts)

Update real assets distribution

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'brokerTradeServerId': "brokerTradeServerId_example", // String | 
  'assets': new CoreApiV10.UsersRealAssets() // UsersRealAssets | 
};
apiInstance.v10BrokerOefSetRealAssetsPost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodAccrueProfitsPost"></a>
# **v10BrokerPeriodAccrueProfitsPost**
> v10BrokerPeriodAccrueProfitsPost(authorization, opts)

Accrue investors&#39; profits

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'accrual': new CoreApiV10.InvestmentProgramAccrual() // InvestmentProgramAccrual | 
};
apiInstance.v10BrokerPeriodAccrueProfitsPost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodClosePost"></a>
# **v10BrokerPeriodClosePost**
> v10BrokerPeriodClosePost(authorization, opts)

Close investment period

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'currentBalance': 1.2 // Number | 
};
apiInstance.v10BrokerPeriodClosePost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodOefApplyAssetPartsPost"></a>
# **v10BrokerPeriodOefApplyAssetPartsPost**
> v10BrokerPeriodOefApplyAssetPartsPost(authorization, opts)

Apply new requested assets parts

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'assetsRequestId': "assetsRequestId_example" // String | 
};
apiInstance.v10BrokerPeriodOefApplyAssetPartsPost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodOefProcessClosingProgramPost"></a>
# **v10BrokerPeriodOefProcessClosingProgramPost**
> v10BrokerPeriodOefProcessClosingProgramPost(authorization, opts)

Close OEF investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'managerBalance': 1.2 // Number | 
};
apiInstance.v10BrokerPeriodOefProcessClosingProgramPost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodOefProcessForceClosingProgramPost"></a>
# **v10BrokerPeriodOefProcessForceClosingProgramPost**
> v10BrokerPeriodOefProcessForceClosingProgramPost(authorization, opts)

Force close OEF investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'managerBalance': 1.2 // Number | 
};
apiInstance.v10BrokerPeriodOefProcessForceClosingProgramPost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodProcessClosingProgramPost"></a>
# **v10BrokerPeriodProcessClosingProgramPost**
> v10BrokerPeriodProcessClosingProgramPost(authorization, opts)

Close investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'managerBalance': 1.2 // Number | 
};
apiInstance.v10BrokerPeriodProcessClosingProgramPost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodProcessInvestmentRequestsPost"></a>
# **v10BrokerPeriodProcessInvestmentRequestsPost**
> &#39;String&#39; v10BrokerPeriodProcessInvestmentRequestsPost(authorization, opts)

Process investment requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example" // String | 
};
apiInstance.v10BrokerPeriodProcessInvestmentRequestsPost(authorization, opts).then((data) => {
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

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodReevaluateManagerTokenPost"></a>
# **v10BrokerPeriodReevaluateManagerTokenPost**
> v10BrokerPeriodReevaluateManagerTokenPost(authorization, opts)

Update manager token initial price/total supply after loss

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'investorLossShare': 1.2 // Number | 
};
apiInstance.v10BrokerPeriodReevaluateManagerTokenPost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodSetStartValuesPost"></a>
# **v10BrokerPeriodSetStartValuesPost**
> v10BrokerPeriodSetStartValuesPost(authorization, opts)

Set investment period start balance, manager share, manager balance

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.StartValues() // StartValues | 
};
apiInstance.v10BrokerPeriodSetStartValuesPost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodTerminatePost"></a>
# **v10BrokerPeriodTerminatePost**
> v10BrokerPeriodTerminatePost(authorization, opts)

Terminate program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example" // String | 
};
apiInstance.v10BrokerPeriodTerminatePost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerPeriodlosingDataGet"></a>
# **v10BrokerPeriodlosingDataGet**
> ClosePeriodData v10BrokerPeriodlosingDataGet(authorization, opts)

Get data for closing investment period

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example" // String | 
};
apiInstance.v10BrokerPeriodlosingDataGet(authorization, opts).then((data) => {
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

### Return type

[**ClosePeriodData**](ClosePeriodData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerTradehistoryGet"></a>
# **v10BrokerTradehistoryGet**
> [&#39;String&#39;] v10BrokerTradehistoryGet(authorization, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'investmentProgramId': "investmentProgramId_example", // String | 
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'end': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.v10BrokerTradehistoryGet(authorization, opts).then((data) => {
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

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerTradesIpfsHashUpdatePost"></a>
# **v10BrokerTradesIpfsHashUpdatePost**
> v10BrokerTradesIpfsHashUpdatePost(authorization, opts)

Update manager history ipfs hash

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'data': new CoreApiV10.ManagerHistoryIpfsHash() // ManagerHistoryIpfsHash | 
};
apiInstance.v10BrokerTradesIpfsHashUpdatePost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10BrokerTradesNewPost"></a>
# **v10BrokerTradesNewPost**
> v10BrokerTradesNewPost(authorization, opts)

New trade event

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.BrokerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'tradeEvent': new CoreApiV10.NewTradeEvent() // NewTradeEvent | 
};
apiInstance.v10BrokerTradesNewPost(authorization, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

