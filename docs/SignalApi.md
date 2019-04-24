# CoreApiV10.SignalApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10SignalAccountsGet**](SignalApi.md#v10SignalAccountsGet) | **GET** /v1.0/signal/accounts | Get copytrading accounts
[**v10SignalAttachByIdInfoGet**](SignalApi.md#v10SignalAttachByIdInfoGet) | **GET** /v1.0/signal/attach/{id}/info | Get subscribe to programs signals info
[**v10SignalAttachByIdPost**](SignalApi.md#v10SignalAttachByIdPost) | **POST** /v1.0/signal/attach/{id} | Subscribe to programs signals
[**v10SignalByIdUpdatePost**](SignalApi.md#v10SignalByIdUpdatePost) | **POST** /v1.0/signal/{id}/update | Update signal subscription settings
[**v10SignalDetachByIdPost**](SignalApi.md#v10SignalDetachByIdPost) | **POST** /v1.0/signal/detach/{id} | Unsubscribe from program signals
[**v10SignalTradesByIdClosePost**](SignalApi.md#v10SignalTradesByIdClosePost) | **POST** /v1.0/signal/trades/{id}/close | Close signal trade
[**v10SignalTradesGet**](SignalApi.md#v10SignalTradesGet) | **GET** /v1.0/signal/trades | Get investors signals trades history
[**v10SignalTradesOpenGet**](SignalApi.md#v10SignalTradesOpenGet) | **GET** /v1.0/signal/trades/open | Get investors signals open trades


<a name="v10SignalAccountsGet"></a>
# **v10SignalAccountsGet**
> CopyTradingAccountsList v10SignalAccountsGet(authorization)

Get copytrading accounts

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10SignalAccountsGet(authorization).then((data) => {
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

<a name="v10SignalAttachByIdInfoGet"></a>
# **v10SignalAttachByIdInfoGet**
> AttachToSignalProviderInfo v10SignalAttachByIdInfoGet(id, authorization)

Get subscribe to programs signals info

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10SignalAttachByIdInfoGet(id, authorization).then((data) => {
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

[**AttachToSignalProviderInfo**](AttachToSignalProviderInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalAttachByIdPost"></a>
# **v10SignalAttachByIdPost**
> v10SignalAttachByIdPost(id, authorization, opts)

Subscribe to programs signals

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | Program Id

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.AttachToSignalProvider() // AttachToSignalProvider | Subscription settings
};
apiInstance.v10SignalAttachByIdPost(id, authorization, opts).then(() => {
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
 **model** | [**AttachToSignalProvider**](AttachToSignalProvider.md)| Subscription settings | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalByIdUpdatePost"></a>
# **v10SignalByIdUpdatePost**
> v10SignalByIdUpdatePost(id, authorization, opts)

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
apiInstance.v10SignalByIdUpdatePost(id, authorization, opts).then(() => {
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

<a name="v10SignalDetachByIdPost"></a>
# **v10SignalDetachByIdPost**
> v10SignalDetachByIdPost(id, authorization, opts)

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
apiInstance.v10SignalDetachByIdPost(id, authorization, opts).then(() => {
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

<a name="v10SignalTradesByIdClosePost"></a>
# **v10SignalTradesByIdClosePost**
> v10SignalTradesByIdClosePost(id, authorization)

Close signal trade

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | Trade id

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10SignalTradesByIdClosePost(id, authorization).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalTradesGet"></a>
# **v10SignalTradesGet**
> TradesSignalViewModel v10SignalTradesGet(authorization, opts)

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
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10SignalTradesGet(authorization, opts).then((data) => {
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
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**TradesSignalViewModel**](TradesSignalViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalTradesOpenGet"></a>
# **v10SignalTradesOpenGet**
> TradesSignalViewModel v10SignalTradesOpenGet(authorization, opts)

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
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10SignalTradesOpenGet(authorization, opts).then((data) => {
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
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**TradesSignalViewModel**](TradesSignalViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

