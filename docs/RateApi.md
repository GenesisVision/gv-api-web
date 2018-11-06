# CoreApiV10.RateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRate**](RateApi.md#getRate) | **GET** /v1.0/rate/{from}/{to} | Get rate
[**getRateExchange**](RateApi.md#getRateExchange) | **GET** /v1.0/rate/{exchange}/{from}/{to} | Get rate
[**getRates**](RateApi.md#getRates) | **GET** /v1.0/rate | Get rates


<a name="getRate"></a>
# **getRate**
> &#39;Number&#39; getRate(from, to)

Get rate

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.RateApi();

let from = "from_example"; // String | 

let to = "to_example"; // String | 

apiInstance.getRate(from, to).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**|  | 
 **to** | **String**|  | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getRateExchange"></a>
# **getRateExchange**
> &#39;Number&#39; getRateExchange(exchange, from, to)

Get rate

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.RateApi();

let exchange = "exchange_example"; // String | 

let from = "from_example"; // String | 

let to = "to_example"; // String | 

apiInstance.getRateExchange(exchange, from, to).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**|  | 
 **from** | **String**|  | 
 **to** | **String**|  | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getRates"></a>
# **getRates**
> RatesModel getRates(opts)

Get rates

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.RateApi();

let opts = { 
  'from': ["from_example"], // [String] | 
  'to': ["to_example"] // [String] | 
};
apiInstance.getRates(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | [**[String]**](String.md)|  | [optional] 
 **to** | [**[String]**](String.md)|  | [optional] 

### Return type

[**RatesModel**](RatesModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

