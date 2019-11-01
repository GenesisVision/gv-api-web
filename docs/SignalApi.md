# CoreApiV10.SignalApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachSlaveToMaster**](SignalApi.md#attachSlaveToMaster) | **POST** /v1.0/signal/attach/{id} | Subscribe to programs signals
[**closeTrade**](SignalApi.md#closeTrade) | **POST** /v1.0/signal/trades/{id}/close | Close signal trade
[**detachSlaveFromMaster**](SignalApi.md#detachSlaveFromMaster) | **POST** /v1.0/signal/detach/{id} | Unsubscribe from program signals
[**getCopytradingAccounts**](SignalApi.md#getCopytradingAccounts) | **GET** /v1.0/signal/accounts | Get copytrading slaves accounts
[**getOpenSignalTrades**](SignalApi.md#getOpenSignalTrades) | **GET** /v1.0/signal/trades/open | Get investors signals open trades
[**getSignalTrades**](SignalApi.md#getSignalTrades) | **GET** /v1.0/signal/trades | Get investors signals trades history
[**getSignalTradingLog**](SignalApi.md#getSignalTradingLog) | **GET** /v1.0/signal/trades/log | Get investors signals trading log
[**getSlaveAttachInfo**](SignalApi.md#getSlaveAttachInfo) | **GET** /v1.0/signal/attach/{id}/info | Get subscribe to programs signals info
[**updateSubscriptionSettings**](SignalApi.md#updateSubscriptionSettings) | **POST** /v1.0/signal/{id}/update | Update signal subscription settings


<a name="attachSlaveToMaster"></a>
# **attachSlaveToMaster**
> attachSlaveToMaster(id, authorization, opts)

Subscribe to programs signals

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | Program Id

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.AttachToSignalProviderSettings() // AttachToSignalProviderSettings | Subscription settings
};
apiInstance.attachSlaveToMaster(id, authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Program Id | 
 **authorization** | **String**| JWT access token | 
 **model** | [**AttachToSignalProviderSettings**](AttachToSignalProviderSettings.md)| Subscription settings | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="closeTrade"></a>
# **closeTrade**
> closeTrade(id, authorization, opts)

Close signal trade

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | Trade id

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'programId': "programId_example" // String | Provider program id
};
apiInstance.closeTrade(id, authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Trade id | 
 **authorization** | **String**| JWT access token | 
 **programId** | [**String**](.md)| Provider program id | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="detachSlaveFromMaster"></a>
# **detachSlaveFromMaster**
> detachSlaveFromMaster(id, authorization, opts)

Unsubscribe from program signals

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.DetachFromSignalProvider() // DetachFromSignalProvider | 
};
apiInstance.detachSlaveFromMaster(id, authorization, opts).then(() => {
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
 **model** | [**DetachFromSignalProvider**](DetachFromSignalProvider.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="getCopytradingAccounts"></a>
# **getCopytradingAccounts**
> CopyTradingAccountsList getCopytradingAccounts(authorization)

Get copytrading slaves accounts

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getCopytradingAccounts(authorization).then((data) => {
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

[**CopyTradingAccountsList**](CopyTradingAccountsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getOpenSignalTrades"></a>
# **getOpenSignalTrades**
> TradesSignalViewModel getOpenSignalTrades(authorization, opts)

Get investors signals open trades

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'symbol': "symbol_example", // String | 
  'accountId': "accountId_example", // String | 
  'accountCurrency': "accountCurrency_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getOpenSignalTrades(authorization, opts).then((data) => {
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
 **symbol** | **String**|  | [optional] 
 **accountId** | [**String**](.md)|  | [optional] 
 **accountCurrency** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**TradesSignalViewModel**](TradesSignalViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getSignalTrades"></a>
# **getSignalTrades**
> TradesSignalViewModel getSignalTrades(authorization, opts)

Get investors signals trades history

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'symbol': "symbol_example", // String | 
  'sorting': "sorting_example", // String | 
  'accountId': "accountId_example", // String | 
  'accountCurrency': "accountCurrency_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getSignalTrades(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **symbol** | **String**|  | [optional] 
 **sorting** | **String**|  | [optional] 
 **accountId** | [**String**](.md)|  | [optional] 
 **accountCurrency** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**TradesSignalViewModel**](TradesSignalViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getSignalTradingLog"></a>
# **getSignalTradingLog**
> SignalTradingEvents getSignalTradingLog(authorization, opts)

Get investors signals trading log

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'accountId': "accountId_example", // String | 
  'accountCurrency': "accountCurrency_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getSignalTradingLog(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **accountId** | [**String**](.md)|  | [optional] 
 **accountCurrency** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**SignalTradingEvents**](SignalTradingEvents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getSlaveAttachInfo"></a>
# **getSlaveAttachInfo**
> getSlaveAttachInfo(id, authorization)

Get subscribe to programs signals info

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getSlaveAttachInfo(id, authorization).then(() => {
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

<a name="updateSubscriptionSettings"></a>
# **updateSubscriptionSettings**
> updateSubscriptionSettings(id, authorization, opts)

Update signal subscription settings

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | Program id

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.AttachToSignalProvider() // AttachToSignalProvider | Subscription settings
};
apiInstance.updateSubscriptionSettings(id, authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Program id | 
 **authorization** | **String**| JWT access token | 
 **model** | [**AttachToSignalProvider**](AttachToSignalProvider.md)| Subscription settings | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

