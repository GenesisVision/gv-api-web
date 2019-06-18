# CoreApiV10.RateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10RateByExchangeByFromByToGet**](RateApi.md#v10RateByExchangeByFromByToGet) | **GET** /v1.0/rate/{exchange}/{from}/{to} | Get rate
[**v10RateByFromByToGet**](RateApi.md#v10RateByFromByToGet) | **GET** /v1.0/rate/{from}/{to} | Get rate
[**v10RateGet**](RateApi.md#v10RateGet) | **GET** /v1.0/rate | Get rates


<a name="v10RateByExchangeByFromByToGet"></a>
# **v10RateByExchangeByFromByToGet**
> &#39;Number&#39; v10RateByExchangeByFromByToGet(exchange, from, to)

Get rate

### Example
```javascript
var CoreApiV10 = require('core_api_v10');

var apiInstance = new CoreApiV10.RateApi();

var exchange = "exchange_example"; // String | 

var from = "from_example"; // String | 

var to = "to_example"; // String | 

apiInstance.v10RateByExchangeByFromByToGet(exchange, from, to).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="v10RateByFromByToGet"></a>
# **v10RateByFromByToGet**
> &#39;Number&#39; v10RateByFromByToGet(from, to)

Get rate

### Example
```javascript
var CoreApiV10 = require('core_api_v10');

var apiInstance = new CoreApiV10.RateApi();

var from = "from_example"; // String | 

var to = "to_example"; // String | 

apiInstance.v10RateByFromByToGet(from, to).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="v10RateGet"></a>
# **v10RateGet**
> RatesModel v10RateGet(opts)

Get rates

### Example
```javascript
var CoreApiV10 = require('core_api_v10');

var apiInstance = new CoreApiV10.RateApi();

var opts = { 
  'from': ["from_example"], // [String] | 
  'to': ["to_example"] // [String] | 
};
apiInstance.v10RateGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

