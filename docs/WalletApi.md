# CoreApiV10.WalletApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10WalletAddressesByCurrencyGet**](WalletApi.md#v10WalletAddressesByCurrencyGet) | **GET** /v1.0/wallet/addresses/{currency} | 
[**v10WalletAddressesGet**](WalletApi.md#v10WalletAddressesGet) | **GET** /v1.0/wallet/addresses | 
[**v10WalletByCurrencyGet**](WalletApi.md#v10WalletByCurrencyGet) | **GET** /v1.0/wallet/{currency} | Wallet summary
[**v10WalletMultiByCurrencyGet**](WalletApi.md#v10WalletMultiByCurrencyGet) | **GET** /v1.0/wallet/multi/{currency} | Multi wallet summary
[**v10WalletMultiFiltersGet**](WalletApi.md#v10WalletMultiFiltersGet) | **GET** /v1.0/wallet/multi/filters | Get filters
[**v10WalletMultiTransactionsExternalGet**](WalletApi.md#v10WalletMultiTransactionsExternalGet) | **GET** /v1.0/wallet/multi/transactions/external | Wallet pending transactions
[**v10WalletMultiTransactionsGet**](WalletApi.md#v10WalletMultiTransactionsGet) | **GET** /v1.0/wallet/multi/transactions | Multi wallet transactions
[**v10WalletPaygvtfeeOffPost**](WalletApi.md#v10WalletPaygvtfeeOffPost) | **POST** /v1.0/wallet/paygvtfee/off | Disable paying platform fees with GVT
[**v10WalletPaygvtfeeOnPost**](WalletApi.md#v10WalletPaygvtfeeOnPost) | **POST** /v1.0/wallet/paygvtfee/on | Enable paying platform fees with GVT
[**v10WalletTransactionByIdGet**](WalletApi.md#v10WalletTransactionByIdGet) | **GET** /v1.0/wallet/transaction/{id} | Get transaction details
[**v10WalletTransactionsGet**](WalletApi.md#v10WalletTransactionsGet) | **GET** /v1.0/wallet/transactions | Wallet transactions
[**v10WalletTransferPost**](WalletApi.md#v10WalletTransferPost) | **POST** /v1.0/wallet/transfer | Transfer money
[**v10WalletWithdrawInfoGet**](WalletApi.md#v10WalletWithdrawInfoGet) | **GET** /v1.0/wallet/withdraw/info | 
[**v10WalletWithdrawRequestCancelByTxIdPost**](WalletApi.md#v10WalletWithdrawRequestCancelByTxIdPost) | **POST** /v1.0/wallet/withdraw/request/cancel/{txId} | 
[**v10WalletWithdrawRequestConfirmPost**](WalletApi.md#v10WalletWithdrawRequestConfirmPost) | **POST** /v1.0/wallet/withdraw/request/confirm | 
[**v10WalletWithdrawRequestNewPost**](WalletApi.md#v10WalletWithdrawRequestNewPost) | **POST** /v1.0/wallet/withdraw/request/new | 
[**v10WalletWithdrawRequestResendByTxIdPost**](WalletApi.md#v10WalletWithdrawRequestResendByTxIdPost) | **POST** /v1.0/wallet/withdraw/request/resend/{txId} | 


<a name="v10WalletAddressesByCurrencyGet"></a>
# **v10WalletAddressesByCurrencyGet**
> WalletInfo v10WalletAddressesByCurrencyGet(currency, authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletAddressesByCurrencyGet(currency, authorization).then((data) => {
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

<a name="v10WalletAddressesGet"></a>
# **v10WalletAddressesGet**
> WalletsInfo v10WalletAddressesGet(authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletAddressesGet(authorization).then((data) => {
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

[**WalletsInfo**](WalletsInfo.md)

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

<a name="v10WalletMultiByCurrencyGet"></a>
# **v10WalletMultiByCurrencyGet**
> WalletMultiSummary v10WalletMultiByCurrencyGet(currency, authorization)

Multi wallet summary

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletMultiByCurrencyGet(currency, authorization).then((data) => {
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

[**WalletMultiSummary**](WalletMultiSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletMultiFiltersGet"></a>
# **v10WalletMultiFiltersGet**
> MultiWalletFilters v10WalletMultiFiltersGet(authorization)

Get filters

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletMultiFiltersGet(authorization).then((data) => {
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

[**MultiWalletFilters**](MultiWalletFilters.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletMultiTransactionsExternalGet"></a>
# **v10WalletMultiTransactionsExternalGet**
> MultiWalletExternalTransactionsViewModel v10WalletMultiTransactionsExternalGet(authorization, opts)

Wallet pending transactions

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'type': "type_example", // String | 
  'currency': "currency_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10WalletMultiTransactionsExternalGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **type** | **String**|  | [optional] 
 **currency** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**MultiWalletExternalTransactionsViewModel**](MultiWalletExternalTransactionsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletMultiTransactionsGet"></a>
# **v10WalletMultiTransactionsGet**
> MultiWalletTransactionsViewModel v10WalletMultiTransactionsGet(authorization, opts)

Multi wallet transactions

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'type': "type_example", // String | 
  'currency': "currency_example", // String | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10WalletMultiTransactionsGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **type** | **String**|  | [optional] 
 **currency** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**MultiWalletTransactionsViewModel**](MultiWalletTransactionsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletPaygvtfeeOffPost"></a>
# **v10WalletPaygvtfeeOffPost**
> v10WalletPaygvtfeeOffPost(authorization)

Disable paying platform fees with GVT

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletPaygvtfeeOffPost(authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletPaygvtfeeOnPost"></a>
# **v10WalletPaygvtfeeOnPost**
> v10WalletPaygvtfeeOnPost(authorization)

Enable paying platform fees with GVT

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletPaygvtfeeOnPost(authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletTransactionByIdGet"></a>
# **v10WalletTransactionByIdGet**
> TransactionDetails v10WalletTransactionByIdGet(id, authorization)

Get transaction details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletTransactionByIdGet(id, authorization).then((data) => {
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

[**TransactionDetails**](TransactionDetails.md)

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
  'wallet': "wallet_example", // String | 
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
 **wallet** | **String**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**WalletTransactionsViewModel**](WalletTransactionsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletTransferPost"></a>
# **v10WalletTransferPost**
> v10WalletTransferPost(authorization, opts)

Transfer money

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.InternalTransferRequest() // InternalTransferRequest | 
};
apiInstance.v10WalletTransferPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**InternalTransferRequest**](InternalTransferRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10WalletWithdrawInfoGet"></a>
# **v10WalletWithdrawInfoGet**
> WithdrawalSummary v10WalletWithdrawInfoGet(authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10WalletWithdrawInfoGet(authorization).then((data) => {
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

[**WithdrawalSummary**](WithdrawalSummary.md)

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

