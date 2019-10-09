# CoreApiV10.WalletApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelWithdrawalRequest**](WalletApi.md#cancelWithdrawalRequest) | **POST** /v1.0/wallet/withdraw/request/cancel/{txId} | 
[**confirmWithdrawalRequestByCode**](WalletApi.md#confirmWithdrawalRequestByCode) | **POST** /v1.0/wallet/withdraw/request/confirm | 
[**createWithdrawalRequest**](WalletApi.md#createWithdrawalRequest) | **POST** /v1.0/wallet/withdraw/request/new | 
[**disablePayFeesWithGvt**](WalletApi.md#disablePayFeesWithGvt) | **POST** /v1.0/wallet/paygvtfee/off | Disable paying platform fees with GVT
[**enablePayFeesWithGvt**](WalletApi.md#enablePayFeesWithGvt) | **POST** /v1.0/wallet/paygvtfee/on | Enable paying platform fees with GVT
[**getGMCommissionData**](WalletApi.md#getGMCommissionData) | **GET** /v1.0/wallet/fee/gvtholding | GenesisMarkets commission data
[**getMultiWalletTransactions**](WalletApi.md#getMultiWalletTransactions) | **GET** /v1.0/wallet/multi/transactions | Multi wallet transactions
[**getTransactionDetails**](WalletApi.md#getTransactionDetails) | **GET** /v1.0/wallet/transaction/{id} | Get transaction details
[**getUserWithdrawalSummary**](WalletApi.md#getUserWithdrawalSummary) | **GET** /v1.0/wallet/withdraw/info | 
[**getWalletExternalTransactions**](WalletApi.md#getWalletExternalTransactions) | **GET** /v1.0/wallet/multi/transactions/external | Wallet pending transactions
[**getWalletMultiAvailable**](WalletApi.md#getWalletMultiAvailable) | **GET** /v1.0/wallet/multi/{currency}/available | Multi wallet available
[**getWalletMultiSummary**](WalletApi.md#getWalletMultiSummary) | **GET** /v1.0/wallet/multi/{currency} | Multi wallet summary
[**internalTransfer**](WalletApi.md#internalTransfer) | **POST** /v1.0/wallet/transfer | Transfer money
[**resendWithdrawalRequestEmail**](WalletApi.md#resendWithdrawalRequestEmail) | **POST** /v1.0/wallet/withdraw/request/resend/{txId} | 
[**updateDepositWallets**](WalletApi.md#updateDepositWallets) | **POST** /v1.0/wallet/deposit/update | Update deposit wallets


<a name="cancelWithdrawalRequest"></a>
# **cancelWithdrawalRequest**
> cancelWithdrawalRequest(txId, authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let txId = "txId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.cancelWithdrawalRequest(txId, authorization).then(() => {
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

<a name="confirmWithdrawalRequestByCode"></a>
# **confirmWithdrawalRequestByCode**
> confirmWithdrawalRequestByCode(opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let opts = { 
  'requestId': "requestId_example", // String | 
  'code': "code_example" // String | 
};
apiInstance.confirmWithdrawalRequestByCode(opts).then(() => {
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

<a name="createWithdrawalRequest"></a>
# **createWithdrawalRequest**
> createWithdrawalRequest(authorization, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.CreateWithdrawalRequestModel() // CreateWithdrawalRequestModel | 
};
apiInstance.createWithdrawalRequest(authorization, opts).then(() => {
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

<a name="disablePayFeesWithGvt"></a>
# **disablePayFeesWithGvt**
> disablePayFeesWithGvt(authorization)

Disable paying platform fees with GVT

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.disablePayFeesWithGvt(authorization).then(() => {
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

<a name="enablePayFeesWithGvt"></a>
# **enablePayFeesWithGvt**
> enablePayFeesWithGvt(authorization)

Enable paying platform fees with GVT

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.enablePayFeesWithGvt(authorization).then(() => {
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

<a name="getGMCommissionData"></a>
# **getGMCommissionData**
> UserCommissionData getGMCommissionData(authorization)

GenesisMarkets commission data

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getGMCommissionData(authorization).then((data) => {
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

[**UserCommissionData**](UserCommissionData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getMultiWalletTransactions"></a>
# **getMultiWalletTransactions**
> MultiWalletTransactionsViewModel getMultiWalletTransactions(authorization, opts)

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
apiInstance.getMultiWalletTransactions(authorization, opts).then((data) => {
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

<a name="getTransactionDetails"></a>
# **getTransactionDetails**
> TransactionDetails getTransactionDetails(id, authorization)

Get transaction details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getTransactionDetails(id, authorization).then((data) => {
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

<a name="getUserWithdrawalSummary"></a>
# **getUserWithdrawalSummary**
> WithdrawalSummary getUserWithdrawalSummary(authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getUserWithdrawalSummary(authorization).then((data) => {
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

<a name="getWalletExternalTransactions"></a>
# **getWalletExternalTransactions**
> MultiWalletExternalTransactionsViewModel getWalletExternalTransactions(authorization, opts)

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
apiInstance.getWalletExternalTransactions(authorization, opts).then((data) => {
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

<a name="getWalletMultiAvailable"></a>
# **getWalletMultiAvailable**
> WalletMultiAvailable getWalletMultiAvailable(currency, authorization)

Multi wallet available

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getWalletMultiAvailable(currency, authorization).then((data) => {
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

[**WalletMultiAvailable**](WalletMultiAvailable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getWalletMultiSummary"></a>
# **getWalletMultiSummary**
> WalletMultiSummary getWalletMultiSummary(currency, authorization)

Multi wallet summary

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getWalletMultiSummary(currency, authorization).then((data) => {
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

<a name="internalTransfer"></a>
# **internalTransfer**
> internalTransfer(authorization, opts)

Transfer money

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.InternalTransferRequest() // InternalTransferRequest | 
};
apiInstance.internalTransfer(authorization, opts).then(() => {
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

<a name="resendWithdrawalRequestEmail"></a>
# **resendWithdrawalRequestEmail**
> resendWithdrawalRequestEmail(txId, authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let txId = "txId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.resendWithdrawalRequestEmail(txId, authorization).then(() => {
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

<a name="updateDepositWallets"></a>
# **updateDepositWallets**
> WalletDepositSummary updateDepositWallets(authorization)

Update deposit wallets

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.updateDepositWallets(authorization).then((data) => {
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

[**WalletDepositSummary**](WalletDepositSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

