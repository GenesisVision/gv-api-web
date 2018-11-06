# CoreApiV10.WalletApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelWithdrawalRequest**](WalletApi.md#cancelWithdrawalRequest) | **POST** /v1.0/wallet/withdraw/request/cancel/{txId} | 
[**confirmWithdrawalRequestByCode**](WalletApi.md#confirmWithdrawalRequestByCode) | **POST** /v1.0/wallet/withdraw/request/confirm | 
[**createWithdrawalRequest**](WalletApi.md#createWithdrawalRequest) | **POST** /v1.0/wallet/withdraw/request/new | 
[**getUserAddress**](WalletApi.md#getUserAddress) | **GET** /v1.0/wallet/addresses | 
[**getUserWithdrawalSummary**](WalletApi.md#getUserWithdrawalSummary) | **GET** /v1.0/wallet/withdraw/info | 
[**getWalletPendingTransactions**](WalletApi.md#getWalletPendingTransactions) | **GET** /v1.0/wallet/transactions/pending | Wallet pending transactions
[**getWalletSummary**](WalletApi.md#getWalletSummary) | **GET** /v1.0/wallet/{currency} | Wallet summary
[**getWalletTransactions**](WalletApi.md#getWalletTransactions) | **GET** /v1.0/wallet/transactions | Wallet transactions
[**resendWithdrawalRequestEmail**](WalletApi.md#resendWithdrawalRequestEmail) | **POST** /v1.0/wallet/withdraw/request/resend/{txId} | 


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

<a name="getUserAddress"></a>
# **getUserAddress**
> WalletsInfo getUserAddress(authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getUserAddress(authorization).then((data) => {
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

<a name="getWalletPendingTransactions"></a>
# **getWalletPendingTransactions**
> WalletPendingTransactionsViewModel getWalletPendingTransactions(authorization)

Wallet pending transactions

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getWalletPendingTransactions(authorization).then((data) => {
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

[**WalletPendingTransactionsViewModel**](WalletPendingTransactionsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getWalletSummary"></a>
# **getWalletSummary**
> WalletSummary getWalletSummary(currency, authorization)

Wallet summary

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.WalletApi();

let currency = "currency_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getWalletSummary(currency, authorization).then((data) => {
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

<a name="getWalletTransactions"></a>
# **getWalletTransactions**
> WalletTransactionsViewModel getWalletTransactions(authorization, opts)

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
apiInstance.getWalletTransactions(authorization, opts).then((data) => {
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

