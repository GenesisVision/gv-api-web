# CoreApiV2.InvestorApi

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
[**apiInvestorProfileFullGet**](InvestorApi.md#apiInvestorProfileFullGet) | **GET** /api/investor/profile/full | Get full profile
[**apiInvestorProfilePublicGet**](InvestorApi.md#apiInvestorProfilePublicGet) | **GET** /api/investor/profile/public | Get public profile
[**apiInvestorProfileUpdatePost**](InvestorApi.md#apiInvestorProfileUpdatePost) | **POST** /api/investor/profile/update | Update profile


<a name="apiInvestorAuth2faConfirmPost"></a>
# **apiInvestorAuth2faConfirmPost**
> RecoveryCodesViewModel apiInvestorAuth2faConfirmPost(authorization, opts)

2FA confirm

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.TwoFactorAuthenticatorConfirm() // TwoFactorAuthenticatorConfirm | 
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
> TwoFactorAuthenticator apiInvestorAuth2faCreatePost(authorization)

2FA create

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiInvestorAuth2faCreatePost(authorization).then((data) => {
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

[**TwoFactorAuthenticator**](TwoFactorAuthenticator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiInvestorAuth2faDisablePost"></a>
# **apiInvestorAuth2faDisablePost**
> apiInvestorAuth2faDisablePost(authorization, opts)

2FA disable

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.TwoFactorCodeModel() // TwoFactorCodeModel | 
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
 **model** | [**TwoFactorCodeModel**](TwoFactorCodeModel.md)|  | [optional] 

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.PasswordModel() // PasswordModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.PasswordModel() // PasswordModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.ChangePasswordViewModel() // ChangePasswordViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let opts = { 
  'model': new CoreApiV2.ForgotPasswordViewModel() // ForgotPasswordViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let opts = { 
  'model': new CoreApiV2.ResetPasswordViewModel() // ResetPasswordViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let opts = { 
  'model': new CoreApiV2.LoginViewModel() // LoginViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let opts = { 
  'model': new CoreApiV2.RegisterInvestorViewModel() // RegisterInvestorViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

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

<a name="apiInvestorProfileFullGet"></a>
# **apiInvestorProfileFullGet**
> ProfileFullViewModel apiInvestorProfileFullGet(authorization)

Get full profile

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

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
> ProfilePublicViewModel apiInvestorProfilePublicGet(opts)

Get public profile

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let opts = { 
  'userId': "userId_example" // String | 
};
apiInstance.apiInvestorProfilePublicGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**String**](.md)|  | [optional] 

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.InvestorApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.UpdateProfileViewModel() // UpdateProfileViewModel | 
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

