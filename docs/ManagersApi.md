# CoreApiV10.ManagersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ManagersByIdDetailsGet**](ManagersApi.md#v10ManagersByIdDetailsGet) | **GET** /v1.0/managers/{id}/details | Manager details
[**v10ManagersByIdGet**](ManagersApi.md#v10ManagersByIdGet) | **GET** /v1.0/managers/{id} | Manager profile
[**v10ManagersFundsByIdClosePost**](ManagersApi.md#v10ManagersFundsByIdClosePost) | **POST** /v1.0/managers/funds/{id}/close | Close existing investment program/fund
[**v10ManagersFundsByIdInvestByAmountPost**](ManagersApi.md#v10ManagersFundsByIdInvestByAmountPost) | **POST** /v1.0/managers/funds/{id}/invest/{amount} | Deposit
[**v10ManagersFundsByIdRequestsBySkipByTakeGet**](ManagersApi.md#v10ManagersFundsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/managers/funds/{id}/requests/{skip}/{take} | Get investment program/fund requests
[**v10ManagersFundsByIdUpdatePost**](ManagersApi.md#v10ManagersFundsByIdUpdatePost) | **POST** /v1.0/managers/funds/{id}/update | Update investment program/fund details
[**v10ManagersFundsCreatePost**](ManagersApi.md#v10ManagersFundsCreatePost) | **POST** /v1.0/managers/funds/create | Create fund
[**v10ManagersFundsInvestmentAmountGet**](ManagersApi.md#v10ManagersFundsInvestmentAmountGet) | **GET** /v1.0/managers/funds/investment/amount | Get GVT investment to create fund
[**v10ManagersFundsRequestsByIdCancelPost**](ManagersApi.md#v10ManagersFundsRequestsByIdCancelPost) | **POST** /v1.0/managers/funds/requests/{id}/cancel | Cancel investment program/fund request
[**v10ManagersProgramsByIdClosePost**](ManagersApi.md#v10ManagersProgramsByIdClosePost) | **POST** /v1.0/managers/programs/{id}/close | Close existing investment program/fund
[**v10ManagersProgramsByIdInvestByAmountPost**](ManagersApi.md#v10ManagersProgramsByIdInvestByAmountPost) | **POST** /v1.0/managers/programs/{id}/invest/{amount} | Deposit
[**v10ManagersProgramsByIdPeriodClosePost**](ManagersApi.md#v10ManagersProgramsByIdPeriodClosePost) | **POST** /v1.0/managers/programs/{id}/period/close | Close current period
[**v10ManagersProgramsByIdRequestsBySkipByTakeGet**](ManagersApi.md#v10ManagersProgramsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/managers/programs/{id}/requests/{skip}/{take} | Get investment program/fund requests
[**v10ManagersProgramsByIdUpdatePost**](ManagersApi.md#v10ManagersProgramsByIdUpdatePost) | **POST** /v1.0/managers/programs/{id}/update | Update investment program/fund details
[**v10ManagersProgramsByIdWithdrawByAmountPost**](ManagersApi.md#v10ManagersProgramsByIdWithdrawByAmountPost) | **POST** /v1.0/managers/programs/{id}/withdraw/{amount} | Withdraw
[**v10ManagersProgramsCreatePost**](ManagersApi.md#v10ManagersProgramsCreatePost) | **POST** /v1.0/managers/programs/create | Create an investment program
[**v10ManagersProgramsInvestmentAmountGet**](ManagersApi.md#v10ManagersProgramsInvestmentAmountGet) | **GET** /v1.0/managers/programs/investment/amount | Get GVT investment to create program
[**v10ManagersProgramsRequestsByIdCancelPost**](ManagersApi.md#v10ManagersProgramsRequestsByIdCancelPost) | **POST** /v1.0/managers/programs/requests/{id}/cancel | Cancel investment program/fund request


<a name="v10ManagersByIdDetailsGet"></a>
# **v10ManagersByIdDetailsGet**
> ManagerProfileDetails v10ManagersByIdDetailsGet(id)

Manager details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

apiInstance.v10ManagersByIdDetailsGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ManagerProfileDetails**](ManagerProfileDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersByIdGet"></a>
# **v10ManagersByIdGet**
> ManagerProfile v10ManagersByIdGet(id)

Manager profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

apiInstance.v10ManagersByIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ManagerProfile**](ManagerProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersFundsByIdClosePost"></a>
# **v10ManagersFundsByIdClosePost**
> v10ManagersFundsByIdClosePost(id, authorization, opts)

Close existing investment program/fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'twoFactorCode': "twoFactorCode_example" // String | 
};
apiInstance.v10ManagersFundsByIdClosePost(id, authorization, opts).then(() => {
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
 **twoFactorCode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersFundsByIdInvestByAmountPost"></a>
# **v10ManagersFundsByIdInvestByAmountPost**
> v10ManagersFundsByIdInvestByAmountPost(id, amount, authorization)

Deposit

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersFundsByIdInvestByAmountPost(id, amount, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **amount** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersFundsByIdRequestsBySkipByTakeGet"></a>
# **v10ManagersFundsByIdRequestsBySkipByTakeGet**
> ProgramRequests v10ManagersFundsByIdRequestsBySkipByTakeGet(id, skip, take, authorization)

Get investment program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersFundsByIdRequestsBySkipByTakeGet(id, skip, take, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ProgramRequests**](ProgramRequests.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersFundsByIdUpdatePost"></a>
# **v10ManagersFundsByIdUpdatePost**
> v10ManagersFundsByIdUpdatePost(id, authorization, opts)

Update investment program/fund details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.ProgramUpdate() // ProgramUpdate | 
};
apiInstance.v10ManagersFundsByIdUpdatePost(id, authorization, opts).then(() => {
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
 **model** | [**ProgramUpdate**](ProgramUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersFundsCreatePost"></a>
# **v10ManagersFundsCreatePost**
> v10ManagersFundsCreatePost(authorization, opts)

Create fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewFundRequest() // NewFundRequest | 
};
apiInstance.v10ManagersFundsCreatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewFundRequest**](NewFundRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersFundsInvestmentAmountGet"></a>
# **v10ManagersFundsInvestmentAmountGet**
> &#39;Number&#39; v10ManagersFundsInvestmentAmountGet(authorization)

Get GVT investment to create fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersFundsInvestmentAmountGet(authorization).then((data) => {
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

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersFundsRequestsByIdCancelPost"></a>
# **v10ManagersFundsRequestsByIdCancelPost**
> v10ManagersFundsRequestsByIdCancelPost(id, authorization)

Cancel investment program/fund request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersFundsRequestsByIdCancelPost(id, authorization).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsByIdClosePost"></a>
# **v10ManagersProgramsByIdClosePost**
> v10ManagersProgramsByIdClosePost(id, authorization, opts)

Close existing investment program/fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'twoFactorCode': "twoFactorCode_example" // String | 
};
apiInstance.v10ManagersProgramsByIdClosePost(id, authorization, opts).then(() => {
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
 **twoFactorCode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsByIdInvestByAmountPost"></a>
# **v10ManagersProgramsByIdInvestByAmountPost**
> v10ManagersProgramsByIdInvestByAmountPost(id, amount, authorization)

Deposit

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsByIdInvestByAmountPost(id, amount, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **amount** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsByIdPeriodClosePost"></a>
# **v10ManagersProgramsByIdPeriodClosePost**
> v10ManagersProgramsByIdPeriodClosePost(id, authorization)

Close current period

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsByIdPeriodClosePost(id, authorization).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsByIdRequestsBySkipByTakeGet"></a>
# **v10ManagersProgramsByIdRequestsBySkipByTakeGet**
> ProgramRequests v10ManagersProgramsByIdRequestsBySkipByTakeGet(id, skip, take, authorization)

Get investment program/fund requests

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let skip = 56; // Number | 

let take = 56; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsByIdRequestsBySkipByTakeGet(id, skip, take, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **skip** | **Number**|  | 
 **take** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ProgramRequests**](ProgramRequests.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsByIdUpdatePost"></a>
# **v10ManagersProgramsByIdUpdatePost**
> v10ManagersProgramsByIdUpdatePost(id, authorization, opts)

Update investment program/fund details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.ProgramUpdate() // ProgramUpdate | 
};
apiInstance.v10ManagersProgramsByIdUpdatePost(id, authorization, opts).then(() => {
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
 **model** | [**ProgramUpdate**](ProgramUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsByIdWithdrawByAmountPost"></a>
# **v10ManagersProgramsByIdWithdrawByAmountPost**
> v10ManagersProgramsByIdWithdrawByAmountPost(id, amount, authorization)

Withdraw

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let amount = 1.2; // Number | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsByIdWithdrawByAmountPost(id, amount, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **amount** | **Number**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsCreatePost"></a>
# **v10ManagersProgramsCreatePost**
> v10ManagersProgramsCreatePost(authorization, opts)

Create an investment program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApiV10.NewProgramRequest() // NewProgramRequest | 
};
apiInstance.v10ManagersProgramsCreatePost(authorization, opts).then(() => {
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

<a name="v10ManagersProgramsInvestmentAmountGet"></a>
# **v10ManagersProgramsInvestmentAmountGet**
> &#39;Number&#39; v10ManagersProgramsInvestmentAmountGet(authorization)

Get GVT investment to create program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsInvestmentAmountGet(authorization).then((data) => {
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

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ManagersProgramsRequestsByIdCancelPost"></a>
# **v10ManagersProgramsRequestsByIdCancelPost**
> v10ManagersProgramsRequestsByIdCancelPost(id, authorization)

Cancel investment program/fund request

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagersApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ManagersProgramsRequestsByIdCancelPost(id, authorization).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

