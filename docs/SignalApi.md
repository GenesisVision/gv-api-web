# CoreApiV10.SignalApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10SignalAccountsGet**](SignalApi.md#v10SignalAccountsGet) | **GET** /v1.0/signal/accounts | Get copytrading accounts
[**v10SignalAttachByIdInfoGet**](SignalApi.md#v10SignalAttachByIdInfoGet) | **GET** /v1.0/signal/attach/{id}/info | Get subscribe to programs signals info
[**v10SignalAttachByIdPost**](SignalApi.md#v10SignalAttachByIdPost) | **POST** /v1.0/signal/attach/{id} | Subscribe to programs signals
[**v10SignalByIdUpdatePost**](SignalApi.md#v10SignalByIdUpdatePost) | **POST** /v1.0/signal/{id}/update | Update signal subscription settings
[**v10SignalDetachByIdPost**](SignalApi.md#v10SignalDetachByIdPost) | **POST** /v1.0/signal/detach/{id} | Unsubscribe from program signals
[**v10SignalExternalAttachByIdExternalPost**](SignalApi.md#v10SignalExternalAttachByIdExternalPost) | **POST** /v1.0/signal/external/attach/{id}/external | Subscribe to external signal account
[**v10SignalExternalCreatePost**](SignalApi.md#v10SignalExternalCreatePost) | **POST** /v1.0/signal/external/create | Create external signal account
[**v10SignalExternalGet**](SignalApi.md#v10SignalExternalGet) | **GET** /v1.0/signal/external | Accounts list
[**v10SignalTradesByIdClosePost**](SignalApi.md#v10SignalTradesByIdClosePost) | **POST** /v1.0/signal/trades/{id}/close | Close signal trade
[**v10SignalTradesGet**](SignalApi.md#v10SignalTradesGet) | **GET** /v1.0/signal/trades | Get investors signals trades history
[**v10SignalTradesLogGet**](SignalApi.md#v10SignalTradesLogGet) | **GET** /v1.0/signal/trades/log | Get investors signals trading log
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

<a name="v10SignalExternalAttachByIdExternalPost"></a>
# **v10SignalExternalAttachByIdExternalPost**
> v10SignalExternalAttachByIdExternalPost(id, authorization, opts)

Subscribe to external signal account

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.AttachToExternalSignalProviderExt() // AttachToExternalSignalProviderExt | 
};
apiInstance.v10SignalExternalAttachByIdExternalPost(id, authorization, opts).then(() => {
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
 **model** | [**AttachToExternalSignalProviderExt**](AttachToExternalSignalProviderExt.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalExternalCreatePost"></a>
# **v10SignalExternalCreatePost**
> ManagerProgramCreateResult v10SignalExternalCreatePost(authorization, opts)

Create external signal account

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewExternalSignalAccountRequest() // NewExternalSignalAccountRequest | 
};
apiInstance.v10SignalExternalCreatePost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewExternalSignalAccountRequest**](NewExternalSignalAccountRequest.md)|  | [optional] 

### Return type

[**ManagerProgramCreateResult**](ManagerProgramCreateResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalExternalGet"></a>
# **v10SignalExternalGet**
> SignalAccountsList v10SignalExternalGet(opts)

Accounts list

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let opts = { 
  'authorization': "authorization_example", // String | 
  'tags': ["tags_example"], // [String] | 
  'sorting': "sorting_example", // String | 
  'statisticDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'statisticDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartPointsCount': 56, // Number | 
  'mask': "mask_example", // String | 
  'facetId': "facetId_example", // String | 
  'isFavorite': true, // Boolean | 
  'isEnabled': true, // Boolean | 
  'hasInvestorsForAll': true, // Boolean | 
  'hasInvestorsForClosed': true, // Boolean | 
  'ids': ["ids_example"], // [String] | 
  'managerId': "managerId_example", // String | 
  'programManagerId': "programManagerId_example", // String | 
  'status': ["status_example"], // [String] | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10SignalExternalGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **tags** | [**[String]**](String.md)|  | [optional] 
 **sorting** | **String**|  | [optional] 
 **statisticDateFrom** | **Date**|  | [optional] 
 **statisticDateTo** | **Date**|  | [optional] 
 **chartPointsCount** | **Number**|  | [optional] 
 **mask** | **String**|  | [optional] 
 **facetId** | **String**|  | [optional] 
 **isFavorite** | **Boolean**|  | [optional] 
 **isEnabled** | **Boolean**|  | [optional] 
 **hasInvestorsForAll** | **Boolean**|  | [optional] 
 **hasInvestorsForClosed** | **Boolean**|  | [optional] 
 **ids** | [**[String]**](String.md)|  | [optional] 
 **managerId** | **String**|  | [optional] 
 **programManagerId** | [**String**](.md)|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**SignalAccountsList**](SignalAccountsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalTradesByIdClosePost"></a>
# **v10SignalTradesByIdClosePost**
> v10SignalTradesByIdClosePost(id, authorization, opts)

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
apiInstance.v10SignalTradesByIdClosePost(id, authorization, opts).then(() => {
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
  'accountCurrency': "accountCurrency_example", // String | 
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

<a name="v10SignalTradesLogGet"></a>
# **v10SignalTradesLogGet**
> SignalTradingEvents v10SignalTradesLogGet(authorization, opts)

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
apiInstance.v10SignalTradesLogGet(authorization, opts).then((data) => {
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
  'accountCurrency': "accountCurrency_example", // String | 
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

