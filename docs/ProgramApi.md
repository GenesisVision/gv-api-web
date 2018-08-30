# CoreApiV10.ProgramApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ProgramCancelInvestmentRequestPost**](ProgramApi.md#v10ProgramCancelInvestmentRequestPost) | **POST** /v1.0/program/cancelInvestmentRequest | Cancel investment request
[**v10ProgramCreatePost**](ProgramApi.md#v10ProgramCreatePost) | **POST** /v1.0/program/create | Create a investment program
[**v10ProgramInvestPost**](ProgramApi.md#v10ProgramInvestPost) | **POST** /v1.0/program/invest | Invest to program


<a name="v10ProgramCancelInvestmentRequestPost"></a>
# **v10ProgramCancelInvestmentRequestPost**
> v10ProgramCancelInvestmentRequestPost(authorization, opts)

Cancel investment request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'requestId': "requestId_example" // String | 
};
apiInstance.v10ProgramCancelInvestmentRequestPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **requestId** | [**String**](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramCreatePost"></a>
# **v10ProgramCreatePost**
> v10ProgramCreatePost(authorization, opts)

Create a investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewProgramRequest() // NewProgramRequest | 
};
apiInstance.v10ProgramCreatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewProgramRequest**](NewProgramRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProgramInvestPost"></a>
# **v10ProgramInvestPost**
> WalletsViewModel v10ProgramInvestPost(authorization, opts)

Invest to program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProgramApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.InvestToProgram() // InvestToProgram | 
};
apiInstance.v10ProgramInvestPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**InvestToProgram**](InvestToProgram.md)|  | [optional] 

### Return type

[**WalletsViewModel**](WalletsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

