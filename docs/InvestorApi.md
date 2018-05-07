# CoreApi.InvestorApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiInvestorAuth2faConfirmPost**](InvestorApi.md#apiInvestorAuth2faConfirmPost) | **POST** /api/investor/auth/2fa/confirm | 2FA confirm
[**apiInvestorAuth2faCreatePost**](InvestorApi.md#apiInvestorAuth2faCreatePost) | **POST** /api/investor/auth/2fa/create | 2FA create
[**apiInvestorAuth2faDisablePost**](InvestorApi.md#apiInvestorAuth2faDisablePost) | **POST** /api/investor/auth/2fa/disable | 2FA disable
[**apiInvestorAuth2faGet**](InvestorApi.md#apiInvestorAuth2faGet) | **GET** /api/investor/auth/2fa | 2FA status
[**apiInvestorAuth2faRecoveryCodesNewPost**](InvestorApi.md#apiInvestorAuth2faRecoveryCodesNewPost) | **POST** /api/investor/auth/2fa/recoveryCodes/new | 2FA generate new recovery codes
[**apiInvestorAuth2faRecoveryCodesPost**](InvestorApi.md#apiInvestorAuth2faRecoveryCodesPost) | **POST** /api/investor/auth/2fa/recoveryCodes | 2FA recovery codes
[**apiInvestorAuthChangePasswordPost**](InvestorApi.md#apiInvestorAuthChangePasswordPost) | **POST** /api/investor/auth/changePassword | Change password
[**apiInvestorAuthConfirmEmailPost**](InvestorApi.md#apiInvestorAuthConfirmEmailPost) | **POST** /api/investor/auth/confirmEmail | Confirm email after registration
[**apiInvestorAuthForgotPasswordPost**](InvestorApi.md#apiInvestorAuthForgotPasswordPost) | **POST** /api/investor/auth/forgotPassword | Forgot password investor
[**apiInvestorAuthResetPasswordPost**](InvestorApi.md#apiInvestorAuthResetPasswordPost) | **POST** /api/investor/auth/resetPassword | Reset password
[**apiInvestorAuthSignInPost**](InvestorApi.md#apiInvestorAuthSignInPost) | **POST** /api/investor/auth/signIn | Authorize
[**apiInvestorAuthSignUpPost**](InvestorApi.md#apiInvestorAuthSignUpPost) | **POST** /api/investor/auth/signUp | Register new investor
[**apiInvestorAuthUpdateTokenGet**](InvestorApi.md#apiInvestorAuthUpdateTokenGet) | **GET** /api/investor/auth/updateToken | Update auth token
[**apiInvestorDashboardGet**](InvestorApi.md#apiInvestorDashboardGet) | **GET** /api/investor/dashboard | Get investor dashboard
[**apiInvestorInvestmentProgramBuyTokensGet**](InvestorApi.md#apiInvestorInvestmentProgramBuyTokensGet) | **GET** /api/investor/investmentProgram/buyTokens | Get investment program buy token model
[**apiInvestorInvestmentProgramEquityChartGet**](InvestorApi.md#apiInvestorInvestmentProgramEquityChartGet) | **GET** /api/investor/investmentProgram/equity/chart | Get manager equity chart
[**apiInvestorInvestmentProgramGet**](InvestorApi.md#apiInvestorInvestmentProgramGet) | **GET** /api/investor/investmentProgram | Get investment program details by id
[**apiInvestorInvestmentProgramOpenTradesPost**](InvestorApi.md#apiInvestorInvestmentProgramOpenTradesPost) | **POST** /api/investor/investmentProgram/openTrades | Get manager open trades
[**apiInvestorInvestmentProgramRequestsPost**](InvestorApi.md#apiInvestorInvestmentProgramRequestsPost) | **POST** /api/investor/investmentProgram/requests | Get investment program&#39;s requests
[**apiInvestorInvestmentProgramTradesChartGet**](InvestorApi.md#apiInvestorInvestmentProgramTradesChartGet) | **GET** /api/investor/investmentProgram/trades/chart | Get manager trades chart
[**apiInvestorInvestmentProgramTradesPost**](InvestorApi.md#apiInvestorInvestmentProgramTradesPost) | **POST** /api/investor/investmentProgram/trades | Get manager trade history
[**apiInvestorInvestmentProgramsCancelInvestmentRequestPost**](InvestorApi.md#apiInvestorInvestmentProgramsCancelInvestmentRequestPost) | **POST** /api/investor/investmentPrograms/cancelInvestmentRequest | Cancel investment request
[**apiInvestorInvestmentProgramsFavoritesAddPost**](InvestorApi.md#apiInvestorInvestmentProgramsFavoritesAddPost) | **POST** /api/investor/investmentPrograms/favorites/add | Add to favorites
[**apiInvestorInvestmentProgramsFavoritesRemovePost**](InvestorApi.md#apiInvestorInvestmentProgramsFavoritesRemovePost) | **POST** /api/investor/investmentPrograms/favorites/remove | Remove from favorites
[**apiInvestorInvestmentProgramsInvestPost**](InvestorApi.md#apiInvestorInvestmentProgramsInvestPost) | **POST** /api/investor/investmentPrograms/invest | Invest in manager
[**apiInvestorInvestmentProgramsPost**](InvestorApi.md#apiInvestorInvestmentProgramsPost) | **POST** /api/investor/investmentPrograms | Get public investment program&#39;s list
[**apiInvestorInvestmentProgramsWithdrawPost**](InvestorApi.md#apiInvestorInvestmentProgramsWithdrawPost) | **POST** /api/investor/investmentPrograms/withdraw | Withdraw from investment program
[**apiInvestorPlatformStatusGet**](InvestorApi.md#apiInvestorPlatformStatusGet) | **GET** /api/investor/platformStatus | Platform status
[**apiInvestorProfileFullGet**](InvestorApi.md#apiInvestorProfileFullGet) | **GET** /api/investor/profile/full | Get full profile
[**apiInvestorProfilePublicGet**](InvestorApi.md#apiInvestorProfilePublicGet) | **GET** /api/investor/profile/public | Get public profile
[**apiInvestorProfileUpdatePost**](InvestorApi.md#apiInvestorProfileUpdatePost) | **POST** /api/investor/profile/update | Update profile
[**apiInvestorWalletAddressGet**](InvestorApi.md#apiInvestorWalletAddressGet) | **GET** /api/investor/wallet/address | Get eth address for GVT depositing
[**apiInvestorWalletGet**](InvestorApi.md#apiInvestorWalletGet) | **GET** /api/investor/wallet | Get user wallets
[**apiInvestorWalletStatisticPost**](InvestorApi.md#apiInvestorWalletStatisticPost) | **POST** /api/investor/wallet/statistic | Get user wallet statistic
[**apiInvestorWalletTransactionsInvestmentProgramsListGet**](InvestorApi.md#apiInvestorWalletTransactionsInvestmentProgramsListGet) | **GET** /api/investor/wallet/transactions/investmentProgramsList | Get user investment programs with tx
[**apiInvestorWalletTransactionsPost**](InvestorApi.md#apiInvestorWalletTransactionsPost) | **POST** /api/investor/wallet/transactions | Get user wallet transactions
[**apiInvestorWalletWithdrawRequestPost**](InvestorApi.md#apiInvestorWalletWithdrawRequestPost) | **POST** /api/investor/wallet/withdrawRequest | Withdraw request


<a name="apiInvestorAuth2faConfirmPost"></a>
# **apiInvestorAuth2faConfirmPost**
> RecoveryCodesViewModel apiInvestorAuth2faConfirmPost(authorization, opts)

2FA confirm

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.TwoFactorAuthenticatorConfirm() // TwoFactorAuthenticatorConfirm | 
};
apiInstance.apiInvestorAuth2faConfirmPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**TwoFactorAuthenticatorConfirm**](TwoFactorAuthenticatorConfirm.md)|  | [optional] 

### Return type

[**RecoveryCodesViewModel**](RecoveryCodesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuth2faCreatePost"></a>
# **apiInvestorAuth2faCreatePost**
> TwoFactorAuthenticator apiInvestorAuth2faCreatePost(authorization, opts)

2FA create

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.PasswordModel() // PasswordModel | 
};
apiInstance.apiInvestorAuth2faCreatePost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**PasswordModel**](PasswordModel.md)|  | [optional] 

### Return type

[**TwoFactorAuthenticator**](TwoFactorAuthenticator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuth2faDisablePost"></a>
# **apiInvestorAuth2faDisablePost**
> apiInvestorAuth2faDisablePost(authorization, opts)

2FA disable

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.PasswordModel() // PasswordModel | 
};
apiInstance.apiInvestorAuth2faDisablePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**PasswordModel**](PasswordModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuth2faGet"></a>
# **apiInvestorAuth2faGet**
> TwoFactorStatus apiInvestorAuth2faGet(authorization)

2FA status

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorAuth2faGet(authorization).then((data) => {
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

[**TwoFactorStatus**](TwoFactorStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuth2faRecoveryCodesNewPost"></a>
# **apiInvestorAuth2faRecoveryCodesNewPost**
> RecoveryCodesViewModel apiInvestorAuth2faRecoveryCodesNewPost(authorization, opts)

2FA generate new recovery codes

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.PasswordModel() // PasswordModel | 
};
apiInstance.apiInvestorAuth2faRecoveryCodesNewPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**PasswordModel**](PasswordModel.md)|  | [optional] 

### Return type

[**RecoveryCodesViewModel**](RecoveryCodesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuth2faRecoveryCodesPost"></a>
# **apiInvestorAuth2faRecoveryCodesPost**
> RecoveryCodesViewModel apiInvestorAuth2faRecoveryCodesPost(authorization, opts)

2FA recovery codes

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.PasswordModel() // PasswordModel | 
};
apiInstance.apiInvestorAuth2faRecoveryCodesPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**PasswordModel**](PasswordModel.md)|  | [optional] 

### Return type

[**RecoveryCodesViewModel**](RecoveryCodesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuthChangePasswordPost"></a>
# **apiInvestorAuthChangePasswordPost**
> apiInvestorAuthChangePasswordPost(authorization, opts)

Change password

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.ChangePasswordViewModel() // ChangePasswordViewModel | 
};
apiInstance.apiInvestorAuthChangePasswordPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**ChangePasswordViewModel**](ChangePasswordViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuthConfirmEmailPost"></a>
# **apiInvestorAuthConfirmEmailPost**
> &#39;String&#39; apiInvestorAuthConfirmEmailPost(opts)

Confirm email after registration

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let opts = { 
  'userId': "userId_example", // String | 
  'code': "code_example" // String | 
};
apiInstance.apiInvestorAuthConfirmEmailPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuthForgotPasswordPost"></a>
# **apiInvestorAuthForgotPasswordPost**
> apiInvestorAuthForgotPasswordPost(opts)

Forgot password investor

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let opts = { 
  'model': new CoreApi.ForgotPasswordViewModel() // ForgotPasswordViewModel | 
};
apiInstance.apiInvestorAuthForgotPasswordPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**ForgotPasswordViewModel**](ForgotPasswordViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuthResetPasswordPost"></a>
# **apiInvestorAuthResetPasswordPost**
> &#39;String&#39; apiInvestorAuthResetPasswordPost(opts)

Reset password

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let opts = { 
  'model': new CoreApi.ResetPasswordViewModel() // ResetPasswordViewModel | 
};
apiInstance.apiInvestorAuthResetPasswordPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**ResetPasswordViewModel**](ResetPasswordViewModel.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuthSignInPost"></a>
# **apiInvestorAuthSignInPost**
> &#39;String&#39; apiInvestorAuthSignInPost(opts)

Authorize

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let opts = { 
  'model': new CoreApi.LoginViewModel() // LoginViewModel | 
};
apiInstance.apiInvestorAuthSignInPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**LoginViewModel**](LoginViewModel.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuthSignUpPost"></a>
# **apiInvestorAuthSignUpPost**
> apiInvestorAuthSignUpPost(opts)

Register new investor

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let opts = { 
  'model': new CoreApi.RegisterInvestorViewModel() // RegisterInvestorViewModel | 
};
apiInstance.apiInvestorAuthSignUpPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**RegisterInvestorViewModel**](RegisterInvestorViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuthUpdateTokenGet"></a>
# **apiInvestorAuthUpdateTokenGet**
> &#39;String&#39; apiInvestorAuthUpdateTokenGet(authorization)

Update auth token

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorAuthUpdateTokenGet(authorization).then((data) => {
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

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorDashboardGet"></a>
# **apiInvestorDashboardGet**
> InvestorDashboard apiInvestorDashboardGet(authorization, opts)

Get investor dashboard

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'sorting': "sorting_example", // String | 
  'equityChartLength': 56 // Number | 
};
apiInstance.apiInvestorDashboardGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **sorting** | **String**|  | [optional] 
 **equityChartLength** | **Number**|  | [optional] 

### Return type

[**InvestorDashboard**](InvestorDashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramBuyTokensGet"></a>
# **apiInvestorInvestmentProgramBuyTokensGet**
> InvestmentProgramBuyToken apiInvestorInvestmentProgramBuyTokensGet(investmentProgramId, authorization)

Get investment program buy token model

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorInvestmentProgramBuyTokensGet(investmentProgramId, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**InvestmentProgramBuyToken**](InvestmentProgramBuyToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramEquityChartGet"></a>
# **apiInvestorInvestmentProgramEquityChartGet**
> TradesChartViewModel apiInvestorInvestmentProgramEquityChartGet(investmentProgramId, timeFrame)

Get manager equity chart

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let timeFrame = "timeFrame_example"; // String | 

apiInstance.apiInvestorInvestmentProgramEquityChartGet(investmentProgramId, timeFrame).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **timeFrame** | **String**|  | 

### Return type

[**TradesChartViewModel**](TradesChartViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramGet"></a>
# **apiInvestorInvestmentProgramGet**
> InvestmentProgramViewModel apiInvestorInvestmentProgramGet(investmentProgramId, opts)

Get investment program details by id

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let opts = { 
  'authorization': "authorization_example" // String | 
};
apiInstance.apiInvestorInvestmentProgramGet(investmentProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**InvestmentProgramViewModel**](InvestmentProgramViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramOpenTradesPost"></a>
# **apiInvestorInvestmentProgramOpenTradesPost**
> OpenTradesViewModel apiInvestorInvestmentProgramOpenTradesPost(authorization, opts)

Get manager open trades

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'filter': new CoreApi.TradesFilter() // TradesFilter | 
};
apiInstance.apiInvestorInvestmentProgramOpenTradesPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **filter** | [**TradesFilter**](TradesFilter.md)|  | [optional] 

### Return type

[**OpenTradesViewModel**](OpenTradesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramRequestsPost"></a>
# **apiInvestorInvestmentProgramRequestsPost**
> InvestmentProgramRequests apiInvestorInvestmentProgramRequestsPost(authorization, opts)

Get investment program&#39;s requests

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'filter': new CoreApi.InvestmentProgramRequestsFilter() // InvestmentProgramRequestsFilter | 
};
apiInstance.apiInvestorInvestmentProgramRequestsPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **filter** | [**InvestmentProgramRequestsFilter**](InvestmentProgramRequestsFilter.md)|  | [optional] 

### Return type

[**InvestmentProgramRequests**](InvestmentProgramRequests.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramTradesChartGet"></a>
# **apiInvestorInvestmentProgramTradesChartGet**
> TradesChartViewModel apiInvestorInvestmentProgramTradesChartGet(investmentProgramId)

Get manager trades chart

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

apiInstance.apiInvestorInvestmentProgramTradesChartGet(investmentProgramId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 

### Return type

[**TradesChartViewModel**](TradesChartViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramTradesPost"></a>
# **apiInvestorInvestmentProgramTradesPost**
> TradesViewModel apiInvestorInvestmentProgramTradesPost(opts)

Get manager trade history

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let opts = { 
  'filter': new CoreApi.TradesFilter() // TradesFilter | 
};
apiInstance.apiInvestorInvestmentProgramTradesPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**TradesFilter**](TradesFilter.md)|  | [optional] 

### Return type

[**TradesViewModel**](TradesViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramsCancelInvestmentRequestPost"></a>
# **apiInvestorInvestmentProgramsCancelInvestmentRequestPost**
> apiInvestorInvestmentProgramsCancelInvestmentRequestPost(requestId, authorization)

Cancel investment request

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let requestId = "requestId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorInvestmentProgramsCancelInvestmentRequestPost(requestId, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramsFavoritesAddPost"></a>
# **apiInvestorInvestmentProgramsFavoritesAddPost**
> apiInvestorInvestmentProgramsFavoritesAddPost(investmentProgramId, authorization)

Add to favorites

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorInvestmentProgramsFavoritesAddPost(investmentProgramId, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramsFavoritesRemovePost"></a>
# **apiInvestorInvestmentProgramsFavoritesRemovePost**
> apiInvestorInvestmentProgramsFavoritesRemovePost(investmentProgramId, authorization)

Remove from favorites

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorInvestmentProgramsFavoritesRemovePost(investmentProgramId, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investmentProgramId** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramsInvestPost"></a>
# **apiInvestorInvestmentProgramsInvestPost**
> WalletsViewModel apiInvestorInvestmentProgramsInvestPost(authorization, opts)

Invest in manager

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.Invest() // Invest | 
};
apiInstance.apiInvestorInvestmentProgramsInvestPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**Invest**](Invest.md)|  | [optional] 

### Return type

[**WalletsViewModel**](WalletsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramsPost"></a>
# **apiInvestorInvestmentProgramsPost**
> InvestmentProgramsViewModel apiInvestorInvestmentProgramsPost(opts)

Get public investment program&#39;s list

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let opts = { 
  'authorization': "authorization_example", // String | 
  'filter': new CoreApi.InvestmentProgramsFilter() // InvestmentProgramsFilter | 
};
apiInstance.apiInvestorInvestmentProgramsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **filter** | [**InvestmentProgramsFilter**](InvestmentProgramsFilter.md)|  | [optional] 

### Return type

[**InvestmentProgramsViewModel**](InvestmentProgramsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorInvestmentProgramsWithdrawPost"></a>
# **apiInvestorInvestmentProgramsWithdrawPost**
> apiInvestorInvestmentProgramsWithdrawPost(authorization, opts)

Withdraw from investment program

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.Invest() // Invest | 
};
apiInstance.apiInvestorInvestmentProgramsWithdrawPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**Invest**](Invest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorPlatformStatusGet"></a>
# **apiInvestorPlatformStatusGet**
> PlatformStatus apiInvestorPlatformStatusGet()

Platform status

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();
apiInstance.apiInvestorPlatformStatusGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PlatformStatus**](PlatformStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorProfileFullGet"></a>
# **apiInvestorProfileFullGet**
> ProfileFullViewModel apiInvestorProfileFullGet(authorization)

Get full profile

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorProfileFullGet(authorization).then((data) => {
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

[**ProfileFullViewModel**](ProfileFullViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorProfilePublicGet"></a>
# **apiInvestorProfilePublicGet**
> ProfilePublicViewModel apiInvestorProfilePublicGet(userId)

Get public profile

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let userId = "userId_example"; // String | 

apiInstance.apiInvestorProfilePublicGet(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**String**](.md)|  | 

### Return type

[**ProfilePublicViewModel**](ProfilePublicViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorProfileUpdatePost"></a>
# **apiInvestorProfileUpdatePost**
> apiInvestorProfileUpdatePost(authorization, opts)

Update profile

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.UpdateProfileViewModel() // UpdateProfileViewModel | 
};
apiInstance.apiInvestorProfileUpdatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**UpdateProfileViewModel**](UpdateProfileViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorWalletAddressGet"></a>
# **apiInvestorWalletAddressGet**
> WalletAddressViewModel apiInvestorWalletAddressGet(authorization)

Get eth address for GVT depositing

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorWalletAddressGet(authorization).then((data) => {
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

[**WalletAddressViewModel**](WalletAddressViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorWalletGet"></a>
# **apiInvestorWalletGet**
> WalletsViewModel apiInvestorWalletGet(authorization)

Get user wallets

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorWalletGet(authorization).then((data) => {
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

[**WalletsViewModel**](WalletsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorWalletStatisticPost"></a>
# **apiInvestorWalletStatisticPost**
> WalletStatistic apiInvestorWalletStatisticPost(authorization, opts)

Get user wallet statistic

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'filter': new CoreApi.WalletStatisticFilter() // WalletStatisticFilter | 
};
apiInstance.apiInvestorWalletStatisticPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **filter** | [**WalletStatisticFilter**](WalletStatisticFilter.md)|  | [optional] 

### Return type

[**WalletStatistic**](WalletStatistic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorWalletTransactionsInvestmentProgramsListGet"></a>
# **apiInvestorWalletTransactionsInvestmentProgramsListGet**
> WalletInvestmentPrograms apiInvestorWalletTransactionsInvestmentProgramsListGet(authorization, opts)

Get user investment programs with tx

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'mask': "mask_example" // String | 
};
apiInstance.apiInvestorWalletTransactionsInvestmentProgramsListGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **mask** | **String**|  | [optional] 

### Return type

[**WalletInvestmentPrograms**](WalletInvestmentPrograms.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorWalletTransactionsPost"></a>
# **apiInvestorWalletTransactionsPost**
> WalletTransactionsViewModel apiInvestorWalletTransactionsPost(authorization, opts)

Get user wallet transactions

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'filter': new CoreApi.TransactionsFilter() // TransactionsFilter | 
};
apiInstance.apiInvestorWalletTransactionsPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **filter** | [**TransactionsFilter**](TransactionsFilter.md)|  | [optional] 

### Return type

[**WalletTransactionsViewModel**](WalletTransactionsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorWalletWithdrawRequestPost"></a>
# **apiInvestorWalletWithdrawRequestPost**
> apiInvestorWalletWithdrawRequestPost(authorization, opts)

Withdraw request

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApi.WalletWithdrawRequestModel() // WalletWithdrawRequestModel | 
};
apiInstance.apiInvestorWalletWithdrawRequestPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**WalletWithdrawRequestModel**](WalletWithdrawRequestModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

