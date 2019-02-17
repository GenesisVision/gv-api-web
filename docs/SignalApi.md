# CoreApiV10.SignalApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10SignalAccountsGet**](SignalApi.md#v10SignalAccountsGet) | **GET** /v1.0/signal/accounts | Get copytrading accounts
[**v10SignalAttachByIdPost**](SignalApi.md#v10SignalAttachByIdPost) | **POST** /v1.0/signal/attach/{id} | Subscribe to programs signals
[**v10SignalDetachByIdPost**](SignalApi.md#v10SignalDetachByIdPost) | **POST** /v1.0/signal/detach/{id} | Unsubscribe from program signals
[**v10SignalOpensignaltradesGet**](SignalApi.md#v10SignalOpensignaltradesGet) | **GET** /v1.0/signal/opensignaltrades | Get investors signals open trades
[**v10SignalUpdatePost**](SignalApi.md#v10SignalUpdatePost) | **POST** /v1.0/signal/update | Update signal subscription settings


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
  'mode': "mode_example", // String | 
  'percent': 1.2, // Number | 
  'openTolerancePercent': 1.2, // Number | 
  'fixedVolume': 1.2, // Number | 
  'fixedCurrency': "fixedCurrency_example", // String | 
  'initialDepositCurrency': "initialDepositCurrency_example", // String | 
  'initialDepositAmount': 1.2 // Number | 
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
 **mode** | **String**|  | [optional] 
 **percent** | **Number**|  | [optional] 
 **openTolerancePercent** | **Number**|  | [optional] 
 **fixedVolume** | **Number**|  | [optional] 
 **fixedCurrency** | **String**|  | [optional] 
 **initialDepositCurrency** | **String**|  | [optional] 
 **initialDepositAmount** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalDetachByIdPost"></a>
# **v10SignalDetachByIdPost**
> v10SignalDetachByIdPost(id, authorization)

Unsubscribe from program signals

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let id = "id_example"; // String | Program id

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10SignalDetachByIdPost(id, authorization).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalOpensignaltradesGet"></a>
# **v10SignalOpensignaltradesGet**
> OpenSignalTradesList v10SignalOpensignaltradesGet(authorization)

Get investors signals open trades

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10SignalOpensignaltradesGet(authorization).then((data) => {
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

[**OpenSignalTradesList**](OpenSignalTradesList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10SignalUpdatePost"></a>
# **v10SignalUpdatePost**
> v10SignalUpdatePost(authorization, opts)

Update signal subscription settings

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.SignalApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'id': "id_example", // String | Program id
  'mode': "mode_example", // String | 
  'percent': 1.2, // Number | 
  'openTolerancePercent': 1.2, // Number | 
  'fixedVolume': 1.2, // Number | 
  'fixedCurrency': "fixedCurrency_example", // String | 
  'initialDepositCurrency': "initialDepositCurrency_example", // String | 
  'initialDepositAmount': 1.2 // Number | 
};
apiInstance.v10SignalUpdatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **id** | [**String**](.md)| Program id | [optional] 
 **mode** | **String**|  | [optional] 
 **percent** | **Number**|  | [optional] 
 **openTolerancePercent** | **Number**|  | [optional] 
 **fixedVolume** | **Number**|  | [optional] 
 **fixedCurrency** | **String**|  | [optional] 
 **initialDepositCurrency** | **String**|  | [optional] 
 **initialDepositAmount** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

