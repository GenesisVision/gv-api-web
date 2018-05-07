# CoreApi.ManagerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiManagerAccountNewInvestmentRequestPost**](ManagerApi.md#apiManagerAccountNewInvestmentRequestPost) | **POST** /api/manager/account/newInvestmentRequest | Create new investment program request
[**apiManagerAccountTournamentNewInvestmentRequestPost**](ManagerApi.md#apiManagerAccountTournamentNewInvestmentRequestPost) | **POST** /api/manager/account/tournament/newInvestmentRequest | Create new tournament investment program request
[**apiManagerAuth2faConfirmPost**](ManagerApi.md#apiManagerAuth2faConfirmPost) | **POST** /api/manager/auth/2fa/confirm | 2FA confirm
[**apiManagerAuth2faCreatePost**](ManagerApi.md#apiManagerAuth2faCreatePost) | **POST** /api/manager/auth/2fa/create | 2FA create
[**apiManagerAuth2faDisablePost**](ManagerApi.md#apiManagerAuth2faDisablePost) | **POST** /api/manager/auth/2fa/disable | 2FA disable
[**apiManagerAuth2faGet**](ManagerApi.md#apiManagerAuth2faGet) | **GET** /api/manager/auth/2fa | 2FA status
[**apiManagerAuth2faRecoveryCodesNewPost**](ManagerApi.md#apiManagerAuth2faRecoveryCodesNewPost) | **POST** /api/manager/auth/2fa/recoveryCodes/new | 2FA generate new recovery codes
[**apiManagerAuth2faRecoveryCodesPost**](ManagerApi.md#apiManagerAuth2faRecoveryCodesPost) | **POST** /api/manager/auth/2fa/recoveryCodes | 2FA recovery codes
[**apiManagerAuthChangePasswordPost**](ManagerApi.md#apiManagerAuthChangePasswordPost) | **POST** /api/manager/auth/changePassword | Change password
[**apiManagerAuthConfirmEmailPost**](ManagerApi.md#apiManagerAuthConfirmEmailPost) | **POST** /api/manager/auth/confirmEmail | Confirm email after registration
[**apiManagerAuthForgotPasswordPost**](ManagerApi.md#apiManagerAuthForgotPasswordPost) | **POST** /api/manager/auth/forgotPassword | Forgot password manager
[**apiManagerAuthResetPasswordPost**](ManagerApi.md#apiManagerAuthResetPasswordPost) | **POST** /api/manager/auth/resetPassword | Reset password
[**apiManagerAuthSignInPost**](ManagerApi.md#apiManagerAuthSignInPost) | **POST** /api/manager/auth/signIn | Authorize
[**apiManagerAuthSignUpPost**](ManagerApi.md#apiManagerAuthSignUpPost) | **POST** /api/manager/auth/signUp | Register new manager
[**apiManagerAuthUpdateTokenGet**](ManagerApi.md#apiManagerAuthUpdateTokenGet) | **GET** /api/manager/auth/updateToken | Update auth token
[**apiManagerBrokersPost**](ManagerApi.md#apiManagerBrokersPost) | **POST** /api/manager/brokers | Get all enabled trade servers
[**apiManagerDashboardProgramsPost**](ManagerApi.md#apiManagerDashboardProgramsPost) | **POST** /api/manager/dashboard/programs | Dashboard programs
[**apiManagerDashboardStatisticGet**](ManagerApi.md#apiManagerDashboardStatisticGet) | **GET** /api/manager/dashboard/statistic | Dashboard statistic
[**apiManagerInvestmentCancelInvestmentRequestPost**](ManagerApi.md#apiManagerInvestmentCancelInvestmentRequestPost) | **POST** /api/manager/investment/cancelInvestmentRequest | Cancel investment request
[**apiManagerInvestmentClosePost**](ManagerApi.md#apiManagerInvestmentClosePost) | **POST** /api/manager/investment/close | Close existing investment program
[**apiManagerInvestmentInvestPost**](ManagerApi.md#apiManagerInvestmentInvestPost) | **POST** /api/manager/investment/invest | Manager deposit in his own investment program
[**apiManagerInvestmentProgramBuyTokensGet**](ManagerApi.md#apiManagerInvestmentProgramBuyTokensGet) | **GET** /api/manager/investmentProgram/buyTokens | Get investment program buy token model
[**apiManagerInvestmentProgramEquityChartGet**](ManagerApi.md#apiManagerInvestmentProgramEquityChartGet) | **GET** /api/manager/investmentProgram/equity/chart | Get manager equity chart
[**apiManagerInvestmentProgramGet**](ManagerApi.md#apiManagerInvestmentProgramGet) | **GET** /api/manager/investmentProgram | Get investment program details by id
[**apiManagerInvestmentProgramGetlevelstatisticGet**](ManagerApi.md#apiManagerInvestmentProgramGetlevelstatisticGet) | **GET** /api/manager/investmentProgram/getlevelstatistic | Level statistic
[**apiManagerInvestmentProgramPeriodClosePost**](ManagerApi.md#apiManagerInvestmentProgramPeriodClosePost) | **POST** /api/manager/investmentProgram/period/close | Close current period
[**apiManagerInvestmentProgramRequestsPost**](ManagerApi.md#apiManagerInvestmentProgramRequestsPost) | **POST** /api/manager/investmentProgram/requests | Get investment program&#39;s requests
[**apiManagerInvestmentProgramTradesChartGet**](ManagerApi.md#apiManagerInvestmentProgramTradesChartGet) | **GET** /api/manager/investmentProgram/trades/chart | Get manager trades chart
[**apiManagerInvestmentProgramTradesPost**](ManagerApi.md#apiManagerInvestmentProgramTradesPost) | **POST** /api/manager/investmentProgram/trades | Get manager trade history
[**apiManagerInvestmentProgramUpdatePost**](ManagerApi.md#apiManagerInvestmentProgramUpdatePost) | **POST** /api/manager/investmentProgram/update | Update investment program details
[**apiManagerInvestmentProgramsFavoritesAddPost**](ManagerApi.md#apiManagerInvestmentProgramsFavoritesAddPost) | **POST** /api/manager/investmentPrograms/favorites/add | Add to favorites
[**apiManagerInvestmentProgramsFavoritesRemovePost**](ManagerApi.md#apiManagerInvestmentProgramsFavoritesRemovePost) | **POST** /api/manager/investmentPrograms/favorites/remove | Remove from favorites
[**apiManagerInvestmentProgramsPost**](ManagerApi.md#apiManagerInvestmentProgramsPost) | **POST** /api/manager/investmentPrograms | Get public investment program&#39;s list
[**apiManagerInvestmentWithdrawPost**](ManagerApi.md#apiManagerInvestmentWithdrawPost) | **POST** /api/manager/investment/withdraw | Manager withdrawal from his own investment program
[**apiManagerPlatformStatusGet**](ManagerApi.md#apiManagerPlatformStatusGet) | **GET** /api/manager/platformStatus | Platform status
[**apiManagerProfileFullGet**](ManagerApi.md#apiManagerProfileFullGet) | **GET** /api/manager/profile/full | Get full profile
[**apiManagerProfilePublicGet**](ManagerApi.md#apiManagerProfilePublicGet) | **GET** /api/manager/profile/public | Get public profile
[**apiManagerProfileUpdatePost**](ManagerApi.md#apiManagerProfileUpdatePost) | **POST** /api/manager/profile/update | Update profile
[**apiManagerWalletAddressGet**](ManagerApi.md#apiManagerWalletAddressGet) | **GET** /api/manager/wallet/address | Get eth address for GVT depositing
[**apiManagerWalletGet**](ManagerApi.md#apiManagerWalletGet) | **GET** /api/manager/wallet | Get user wallets
[**apiManagerWalletStatisticPost**](ManagerApi.md#apiManagerWalletStatisticPost) | **POST** /api/manager/wallet/statistic | Get user wallet statistic
[**apiManagerWalletTransactionsInvestmentProgramsListGet**](ManagerApi.md#apiManagerWalletTransactionsInvestmentProgramsListGet) | **GET** /api/manager/wallet/transactions/investmentProgramsList | Get user investment programs with tx
[**apiManagerWalletTransactionsPost**](ManagerApi.md#apiManagerWalletTransactionsPost) | **POST** /api/manager/wallet/transactions | Get user wallet transactions
[**apiManagerWalletWithdrawRequestPost**](ManagerApi.md#apiManagerWalletWithdrawRequestPost) | **POST** /api/manager/wallet/withdrawRequest | Withdraw request


<a name="apiManagerAccountNewInvestmentRequestPost"></a>
# **apiManagerAccountNewInvestmentRequestPost**
> &#39;String&#39; apiManagerAccountNewInvestmentRequestPost(authorization, opts)

Create new investment program request

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApi.NewInvestmentRequest() // NewInvestmentRequest | 
};
apiInstance.apiManagerAccountNewInvestmentRequestPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewInvestmentRequest**](NewInvestmentRequest.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiManagerAccountTournamentNewInvestmentRequestPost"></a>
# **apiManagerAccountTournamentNewInvestmentRequestPost**
> &#39;String&#39; apiManagerAccountTournamentNewInvestmentRequestPost(authorization, opts)

Create new tournament investment program request

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApi.NewTournamentAccountRequest() // NewTournamentAccountRequest | 
};
apiInstance.apiManagerAccountTournamentNewInvestmentRequestPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **request** | [**NewTournamentAccountRequest**](NewTournamentAccountRequest.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiManagerAuth2faConfirmPost"></a>
# **apiManagerAuth2faConfirmPost**
> RecoveryCodesViewModel apiManagerAuth2faConfirmPost(authorization, opts)

2FA confirm

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.TwoFactorAuthenticatorConfirm() // TwoFactorAuthenticatorConfirm | 
};
apiInstance.apiManagerAuth2faConfirmPost(authorization, opts).then((data) => {
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

<a name="apiManagerAuth2faCreatePost"></a>
# **apiManagerAuth2faCreatePost**
> TwoFactorAuthenticator apiManagerAuth2faCreatePost(authorization, opts)

2FA create

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.PasswordModel() // PasswordModel | 
};
apiInstance.apiManagerAuth2faCreatePost(authorization, opts).then((data) => {
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

<a name="apiManagerAuth2faDisablePost"></a>
# **apiManagerAuth2faDisablePost**
> apiManagerAuth2faDisablePost(authorization, opts)

2FA disable

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.PasswordModel() // PasswordModel | 
};
apiInstance.apiManagerAuth2faDisablePost(authorization, opts).then(() => {
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

<a name="apiManagerAuth2faGet"></a>
# **apiManagerAuth2faGet**
> TwoFactorStatus apiManagerAuth2faGet(authorization)

2FA status

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerAuth2faGet(authorization).then((data) => {
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

<a name="apiManagerAuth2faRecoveryCodesNewPost"></a>
# **apiManagerAuth2faRecoveryCodesNewPost**
> RecoveryCodesViewModel apiManagerAuth2faRecoveryCodesNewPost(authorization, opts)

2FA generate new recovery codes

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.PasswordModel() // PasswordModel | 
};
apiInstance.apiManagerAuth2faRecoveryCodesNewPost(authorization, opts).then((data) => {
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

<a name="apiManagerAuth2faRecoveryCodesPost"></a>
# **apiManagerAuth2faRecoveryCodesPost**
> RecoveryCodesViewModel apiManagerAuth2faRecoveryCodesPost(authorization, opts)

2FA recovery codes

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.PasswordModel() // PasswordModel | 
};
apiInstance.apiManagerAuth2faRecoveryCodesPost(authorization, opts).then((data) => {
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

<a name="apiManagerAuthChangePasswordPost"></a>
# **apiManagerAuthChangePasswordPost**
> apiManagerAuthChangePasswordPost(authorization, opts)

Change password

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.ChangePasswordViewModel() // ChangePasswordViewModel | 
};
apiInstance.apiManagerAuthChangePasswordPost(authorization, opts).then(() => {
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

<a name="apiManagerAuthConfirmEmailPost"></a>
# **apiManagerAuthConfirmEmailPost**
> &#39;String&#39; apiManagerAuthConfirmEmailPost(opts)

Confirm email after registration

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let opts = { 
  'userId': "userId_example", // String | 
  'code': "code_example" // String | 
};
apiInstance.apiManagerAuthConfirmEmailPost(opts).then((data) => {
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

<a name="apiManagerAuthForgotPasswordPost"></a>
# **apiManagerAuthForgotPasswordPost**
> apiManagerAuthForgotPasswordPost(opts)

Forgot password manager

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let opts = { 
  'model': new CoreApi.ForgotPasswordViewModel() // ForgotPasswordViewModel | 
};
apiInstance.apiManagerAuthForgotPasswordPost(opts).then(() => {
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

<a name="apiManagerAuthResetPasswordPost"></a>
# **apiManagerAuthResetPasswordPost**
> &#39;String&#39; apiManagerAuthResetPasswordPost(opts)

Reset password

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let opts = { 
  'model': new CoreApi.ResetPasswordViewModel() // ResetPasswordViewModel | 
};
apiInstance.apiManagerAuthResetPasswordPost(opts).then((data) => {
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

<a name="apiManagerAuthSignInPost"></a>
# **apiManagerAuthSignInPost**
> &#39;String&#39; apiManagerAuthSignInPost(opts)

Authorize

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let opts = { 
  'model': new CoreApi.LoginViewModel() // LoginViewModel | 
};
apiInstance.apiManagerAuthSignInPost(opts).then((data) => {
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

<a name="apiManagerAuthSignUpPost"></a>
# **apiManagerAuthSignUpPost**
> apiManagerAuthSignUpPost(opts)

Register new manager

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let opts = { 
  'model': new CoreApi.RegisterManagerViewModel() // RegisterManagerViewModel | 
};
apiInstance.apiManagerAuthSignUpPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**RegisterManagerViewModel**](RegisterManagerViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiManagerAuthUpdateTokenGet"></a>
# **apiManagerAuthUpdateTokenGet**
> &#39;String&#39; apiManagerAuthUpdateTokenGet(authorization)

Update auth token

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerAuthUpdateTokenGet(authorization).then((data) => {
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

<a name="apiManagerBrokersPost"></a>
# **apiManagerBrokersPost**
> BrokersViewModel apiManagerBrokersPost(opts)

Get all enabled trade servers

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let opts = { 
  'filter': new CoreApi.BrokersFilter() // BrokersFilter | 
};
apiInstance.apiManagerBrokersPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**BrokersFilter**](BrokersFilter.md)|  | [optional] 

### Return type

[**BrokersViewModel**](BrokersViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiManagerDashboardProgramsPost"></a>
# **apiManagerDashboardProgramsPost**
> ManagerInvestmentPrograms apiManagerDashboardProgramsPost(authorization, opts)

Dashboard programs

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'filter': new CoreApi.ManagerDashboardProgramsFilter() // ManagerDashboardProgramsFilter | 
};
apiInstance.apiManagerDashboardProgramsPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **filter** | [**ManagerDashboardProgramsFilter**](ManagerDashboardProgramsFilter.md)|  | [optional] 

### Return type

[**ManagerInvestmentPrograms**](ManagerInvestmentPrograms.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiManagerDashboardStatisticGet"></a>
# **apiManagerDashboardStatisticGet**
> ManagerDashboardStatistic apiManagerDashboardStatisticGet(authorization)

Dashboard statistic

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerDashboardStatisticGet(authorization).then((data) => {
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

[**ManagerDashboardStatistic**](ManagerDashboardStatistic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiManagerInvestmentCancelInvestmentRequestPost"></a>
# **apiManagerInvestmentCancelInvestmentRequestPost**
> apiManagerInvestmentCancelInvestmentRequestPost(requestId, authorization)

Cancel investment request

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let requestId = "requestId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerInvestmentCancelInvestmentRequestPost(requestId, authorization).then(() => {
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

<a name="apiManagerInvestmentClosePost"></a>
# **apiManagerInvestmentClosePost**
> apiManagerInvestmentClosePost(investmentProgramId, authorization)

Close existing investment program

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerInvestmentClosePost(investmentProgramId, authorization).then(() => {
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

<a name="apiManagerInvestmentInvestPost"></a>
# **apiManagerInvestmentInvestPost**
> apiManagerInvestmentInvestPost(authorization, opts)

Manager deposit in his own investment program

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.Invest() // Invest | 
};
apiInstance.apiManagerInvestmentInvestPost(authorization, opts).then(() => {
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

<a name="apiManagerInvestmentProgramBuyTokensGet"></a>
# **apiManagerInvestmentProgramBuyTokensGet**
> InvestmentProgramBuyToken apiManagerInvestmentProgramBuyTokensGet(investmentProgramId, authorization)

Get investment program buy token model

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerInvestmentProgramBuyTokensGet(investmentProgramId, authorization).then((data) => {
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

<a name="apiManagerInvestmentProgramEquityChartGet"></a>
# **apiManagerInvestmentProgramEquityChartGet**
> TradesChartViewModel apiManagerInvestmentProgramEquityChartGet(investmentProgramId, timeFrame)

Get manager equity chart

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let timeFrame = "timeFrame_example"; // String | 

apiInstance.apiManagerInvestmentProgramEquityChartGet(investmentProgramId, timeFrame).then((data) => {
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

<a name="apiManagerInvestmentProgramGet"></a>
# **apiManagerInvestmentProgramGet**
> InvestmentProgramViewModel apiManagerInvestmentProgramGet(investmentProgramId, opts)

Get investment program details by id

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let opts = { 
  'authorization': "authorization_example" // String | 
};
apiInstance.apiManagerInvestmentProgramGet(investmentProgramId, opts).then((data) => {
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

<a name="apiManagerInvestmentProgramGetlevelstatisticGet"></a>
# **apiManagerInvestmentProgramGetlevelstatisticGet**
> ManagerLevelStatistic apiManagerInvestmentProgramGetlevelstatisticGet(investmentProgramId, authorization)

Level statistic

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerInvestmentProgramGetlevelstatisticGet(investmentProgramId, authorization).then((data) => {
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

[**ManagerLevelStatistic**](ManagerLevelStatistic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiManagerInvestmentProgramPeriodClosePost"></a>
# **apiManagerInvestmentProgramPeriodClosePost**
> apiManagerInvestmentProgramPeriodClosePost(investmentProgramId, authorization)

Close current period

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerInvestmentProgramPeriodClosePost(investmentProgramId, authorization).then(() => {
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

<a name="apiManagerInvestmentProgramRequestsPost"></a>
# **apiManagerInvestmentProgramRequestsPost**
> InvestmentProgramRequests apiManagerInvestmentProgramRequestsPost(authorization, opts)

Get investment program&#39;s requests

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'filter': new CoreApi.InvestmentProgramRequestsFilter() // InvestmentProgramRequestsFilter | 
};
apiInstance.apiManagerInvestmentProgramRequestsPost(authorization, opts).then((data) => {
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

<a name="apiManagerInvestmentProgramTradesChartGet"></a>
# **apiManagerInvestmentProgramTradesChartGet**
> TradesChartViewModel apiManagerInvestmentProgramTradesChartGet(investmentProgramId)

Get manager trades chart

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

apiInstance.apiManagerInvestmentProgramTradesChartGet(investmentProgramId).then((data) => {
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

<a name="apiManagerInvestmentProgramTradesPost"></a>
# **apiManagerInvestmentProgramTradesPost**
> TradesViewModel apiManagerInvestmentProgramTradesPost(opts)

Get manager trade history

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let opts = { 
  'filter': new CoreApi.TradesFilter() // TradesFilter | 
};
apiInstance.apiManagerInvestmentProgramTradesPost(opts).then((data) => {
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

<a name="apiManagerInvestmentProgramUpdatePost"></a>
# **apiManagerInvestmentProgramUpdatePost**
> apiManagerInvestmentProgramUpdatePost(authorization, opts)

Update investment program details

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.InvestmentProgramUpdate() // InvestmentProgramUpdate | 
};
apiInstance.apiManagerInvestmentProgramUpdatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**InvestmentProgramUpdate**](InvestmentProgramUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiManagerInvestmentProgramsFavoritesAddPost"></a>
# **apiManagerInvestmentProgramsFavoritesAddPost**
> apiManagerInvestmentProgramsFavoritesAddPost(investmentProgramId, authorization)

Add to favorites

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerInvestmentProgramsFavoritesAddPost(investmentProgramId, authorization).then(() => {
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

<a name="apiManagerInvestmentProgramsFavoritesRemovePost"></a>
# **apiManagerInvestmentProgramsFavoritesRemovePost**
> apiManagerInvestmentProgramsFavoritesRemovePost(investmentProgramId, authorization)

Remove from favorites

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let investmentProgramId = "investmentProgramId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerInvestmentProgramsFavoritesRemovePost(investmentProgramId, authorization).then(() => {
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

<a name="apiManagerInvestmentProgramsPost"></a>
# **apiManagerInvestmentProgramsPost**
> InvestmentProgramsViewModel apiManagerInvestmentProgramsPost(opts)

Get public investment program&#39;s list

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let opts = { 
  'authorization': "authorization_example", // String | 
  'filter': new CoreApi.InvestmentProgramsFilter() // InvestmentProgramsFilter | 
};
apiInstance.apiManagerInvestmentProgramsPost(opts).then((data) => {
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

<a name="apiManagerInvestmentWithdrawPost"></a>
# **apiManagerInvestmentWithdrawPost**
> apiManagerInvestmentWithdrawPost(authorization, opts)

Manager withdrawal from his own investment program

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.Invest() // Invest | 
};
apiInstance.apiManagerInvestmentWithdrawPost(authorization, opts).then(() => {
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

<a name="apiManagerPlatformStatusGet"></a>
# **apiManagerPlatformStatusGet**
> PlatformStatus apiManagerPlatformStatusGet()

Platform status

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();
apiInstance.apiManagerPlatformStatusGet().then((data) => {
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

<a name="apiManagerProfileFullGet"></a>
# **apiManagerProfileFullGet**
> ProfileFullViewModel apiManagerProfileFullGet(authorization)

Get full profile

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerProfileFullGet(authorization).then((data) => {
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

<a name="apiManagerProfilePublicGet"></a>
# **apiManagerProfilePublicGet**
> ProfilePublicViewModel apiManagerProfilePublicGet(userId)

Get public profile

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let userId = "userId_example"; // String | 

apiInstance.apiManagerProfilePublicGet(userId).then((data) => {
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

<a name="apiManagerProfileUpdatePost"></a>
# **apiManagerProfileUpdatePost**
> apiManagerProfileUpdatePost(authorization, opts)

Update profile

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApi.UpdateProfileViewModel() // UpdateProfileViewModel | 
};
apiInstance.apiManagerProfileUpdatePost(authorization, opts).then(() => {
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

<a name="apiManagerWalletAddressGet"></a>
# **apiManagerWalletAddressGet**
> WalletAddressViewModel apiManagerWalletAddressGet(authorization)

Get eth address for GVT depositing

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerWalletAddressGet(authorization).then((data) => {
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

<a name="apiManagerWalletGet"></a>
# **apiManagerWalletGet**
> WalletsViewModel apiManagerWalletGet(authorization)

Get user wallets

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerWalletGet(authorization).then((data) => {
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

<a name="apiManagerWalletStatisticPost"></a>
# **apiManagerWalletStatisticPost**
> WalletStatistic apiManagerWalletStatisticPost(authorization, opts)

Get user wallet statistic

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'filter': new CoreApi.WalletStatisticFilter() // WalletStatisticFilter | 
};
apiInstance.apiManagerWalletStatisticPost(authorization, opts).then((data) => {
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

<a name="apiManagerWalletTransactionsInvestmentProgramsListGet"></a>
# **apiManagerWalletTransactionsInvestmentProgramsListGet**
> WalletInvestmentPrograms apiManagerWalletTransactionsInvestmentProgramsListGet(authorization, opts)

Get user investment programs with tx

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'mask': "mask_example" // String | 
};
apiInstance.apiManagerWalletTransactionsInvestmentProgramsListGet(authorization, opts).then((data) => {
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

<a name="apiManagerWalletTransactionsPost"></a>
# **apiManagerWalletTransactionsPost**
> WalletTransactionsViewModel apiManagerWalletTransactionsPost(authorization, opts)

Get user wallet transactions

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'filter': new CoreApi.TransactionsFilter() // TransactionsFilter | 
};
apiInstance.apiManagerWalletTransactionsPost(authorization, opts).then((data) => {
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

<a name="apiManagerWalletWithdrawRequestPost"></a>
# **apiManagerWalletWithdrawRequestPost**
> apiManagerWalletWithdrawRequestPost(authorization, opts)

Withdraw request

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'request': new CoreApi.WalletWithdrawRequestModel() // WalletWithdrawRequestModel | 
};
apiInstance.apiManagerWalletWithdrawRequestPost(authorization, opts).then(() => {
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

