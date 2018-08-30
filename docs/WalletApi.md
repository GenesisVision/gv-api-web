# CoreApiV10.WalletApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10WalletByCurrencyGet**](WalletApi.md#v10WalletByCurrencyGet) | **GET** /v1.0/wallet/{currency} | Wallet summary
[**v10WalletTransactionsGet**](WalletApi.md#v10WalletTransactionsGet) | **GET** /v1.0/wallet/transactions | Wallet transactions


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
> WalletSummary v10WalletTransactionsGet(authorization, opts)

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

[**WalletSummary**](WalletSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

