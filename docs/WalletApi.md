# CoreApiV10.WalletApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10WalletAddressByCurrencyGet**](WalletApi.md#v10WalletAddressByCurrencyGet) | **GET** /v1.0/wallet/address/{currency} | 
[**v10WalletByCurrencyGet**](WalletApi.md#v10WalletByCurrencyGet) | **GET** /v1.0/wallet/{currency} | Wallet summary
[**v10WalletTransactionsGet**](WalletApi.md#v10WalletTransactionsGet) | **GET** /v1.0/wallet/transactions | Wallet transactions
[**v10WalletWithdrawRequestCancelByTxIdPost**](WalletApi.md#v10WalletWithdrawRequestCancelByTxIdPost) | **POST** /v1.0/wallet/withdraw/request/cancel/{txId} | 
[**v10WalletWithdrawRequestConfirmPost**](WalletApi.md#v10WalletWithdrawRequestConfirmPost) | **POST** /v1.0/wallet/withdraw/request/confirm | 
[**v10WalletWithdrawRequestNewPost**](WalletApi.md#v10WalletWithdrawRequestNewPost) | **POST** /v1.0/wallet/withdraw/request/new | 
[**v10WalletWithdrawRequestResendByTxIdPost**](WalletApi.md#v10WalletWithdrawRequestResendByTxIdPost) | **POST** /v1.0/wallet/withdraw/request/resend/{txId} | 


<a name="v10WalletAddressByCurrencyGet"></a>
# **v10WalletAddressByCurrencyGet**
> WalletInfo v10WalletAddressByCurrencyGet(currency, authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletAddressByCurrencyGet(currency, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**WalletInfo**](WalletInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletByCurrencyGet"></a>
# **v10WalletByCurrencyGet**
> WalletSummary v10WalletByCurrencyGet(currency, authorization)

Wallet summary

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletByCurrencyGet(currency, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**WalletSummary**](WalletSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletTransactionsGet"></a>
# **v10WalletTransactionsGet**
> WalletTransactionsViewModel v10WalletTransactionsGet(authorization, opts)

Wallet transactions

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'assetId': "assetId_example", // String | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'assetType': "assetType_example", // String | 
  'txAction': "txAction_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10WalletTransactionsGet(authorization, opts).then((data) => {
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
 **assetType** | **String**|  | [optional] 
 **txAction** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**WalletTransactionsViewModel**](WalletTransactionsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletWithdrawRequestCancelByTxIdPost"></a>
# **v10WalletWithdrawRequestCancelByTxIdPost**
> v10WalletWithdrawRequestCancelByTxIdPost(txId, authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let txId = "txId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletWithdrawRequestCancelByTxIdPost(txId, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletWithdrawRequestConfirmPost"></a>
# **v10WalletWithdrawRequestConfirmPost**
> v10WalletWithdrawRequestConfirmPost(opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let opts = { 
  'requestId': "requestId_example", // String | 
  'code': "code_example" // String | 
};
apiInstance.v10WalletWithdrawRequestConfirmPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | [**String**](.md)|  | [optional] 
 **code** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletWithdrawRequestNewPost"></a>
# **v10WalletWithdrawRequestNewPost**
> v10WalletWithdrawRequestNewPost(authorization, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.CreateWithdrawalRequestModel() // CreateWithdrawalRequestModel | 
};
apiInstance.v10WalletWithdrawRequestNewPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**CreateWithdrawalRequestModel**](CreateWithdrawalRequestModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletWithdrawRequestResendByTxIdPost"></a>
# **v10WalletWithdrawRequestResendByTxIdPost**
> v10WalletWithdrawRequestResendByTxIdPost(txId, authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let txId = "txId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletWithdrawRequestResendByTxIdPost(txId, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

