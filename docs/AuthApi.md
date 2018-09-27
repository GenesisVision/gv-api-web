# CoreApiV10.AuthApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10Auth2faConfirmPost**](AuthApi.md#v10Auth2faConfirmPost) | **POST** /v1.0/auth/2fa/confirm | 2FA confirm
[**v10Auth2faCreatePost**](AuthApi.md#v10Auth2faCreatePost) | **POST** /v1.0/auth/2fa/create | 2FA create
[**v10Auth2faDisablePost**](AuthApi.md#v10Auth2faDisablePost) | **POST** /v1.0/auth/2fa/disable | 2FA disable
[**v10Auth2faGet**](AuthApi.md#v10Auth2faGet) | **GET** /v1.0/auth/2fa | 2FA status
[**v10Auth2faRecoverycodesNewPost**](AuthApi.md#v10Auth2faRecoverycodesNewPost) | **POST** /v1.0/auth/2fa/recoverycodes/new | 2FA generate new recovery codes
[**v10Auth2faRecoverycodesPost**](AuthApi.md#v10Auth2faRecoverycodesPost) | **POST** /v1.0/auth/2fa/recoverycodes | 2FA recovery codes
[**v10AuthPasswordChangePost**](AuthApi.md#v10AuthPasswordChangePost) | **POST** /v1.0/auth/password/change | Change password
[**v10AuthPasswordForgotInvestorPost**](AuthApi.md#v10AuthPasswordForgotInvestorPost) | **POST** /v1.0/auth/password/forgot/investor | Forgot password for investor
[**v10AuthPasswordForgotManagerPost**](AuthApi.md#v10AuthPasswordForgotManagerPost) | **POST** /v1.0/auth/password/forgot/manager | Forgot password for manager
[**v10AuthPasswordResetPost**](AuthApi.md#v10AuthPasswordResetPost) | **POST** /v1.0/auth/password/reset | Reset password
[**v10AuthPhoneCodePost**](AuthApi.md#v10AuthPhoneCodePost) | **POST** /v1.0/auth/phone/code | Request phone number verification code
[**v10AuthPhoneVerifyPost**](AuthApi.md#v10AuthPhoneVerifyPost) | **POST** /v1.0/auth/phone/verify | Verify phone number
[**v10AuthResendconfirmationlinkPost**](AuthApi.md#v10AuthResendconfirmationlinkPost) | **POST** /v1.0/auth/resendconfirmationlink | Resend Confirmation Link
[**v10AuthSigninInvestorPost**](AuthApi.md#v10AuthSigninInvestorPost) | **POST** /v1.0/auth/signin/investor | Authorize
[**v10AuthSigninManagerPost**](AuthApi.md#v10AuthSigninManagerPost) | **POST** /v1.0/auth/signin/manager | Authorize
[**v10AuthSignupConfirmPost**](AuthApi.md#v10AuthSignupConfirmPost) | **POST** /v1.0/auth/signup/confirm | Confirm email after registration
[**v10AuthSignupInvestorPost**](AuthApi.md#v10AuthSignupInvestorPost) | **POST** /v1.0/auth/signup/investor | New investor registration
[**v10AuthSignupManagerPost**](AuthApi.md#v10AuthSignupManagerPost) | **POST** /v1.0/auth/signup/manager | New manager registration
[**v10AuthTokenUpdatePost**](AuthApi.md#v10AuthTokenUpdatePost) | **POST** /v1.0/auth/token/update | Update auth token


<a name="v10Auth2faConfirmPost"></a>
# **v10Auth2faConfirmPost**
> RecoveryCodesViewModel v10Auth2faConfirmPost(authorization, opts)

2FA confirm

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.TwoFactorAuthenticatorConfirm() // TwoFactorAuthenticatorConfirm | 
};
apiInstance.v10Auth2faConfirmPost(authorization, opts).then((data) => {
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

<a name="v10Auth2faCreatePost"></a>
# **v10Auth2faCreatePost**
> TwoFactorAuthenticator v10Auth2faCreatePost(authorization)

2FA create

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10Auth2faCreatePost(authorization).then((data) => {
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

<a name="v10Auth2faDisablePost"></a>
# **v10Auth2faDisablePost**
> v10Auth2faDisablePost(authorization, opts)

2FA disable

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.TwoFactorCodeModel() // TwoFactorCodeModel | 
};
apiInstance.v10Auth2faDisablePost(authorization, opts).then(() => {
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

<a name="v10Auth2faGet"></a>
# **v10Auth2faGet**
> TwoFactorStatus v10Auth2faGet(authorization)

2FA status

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10Auth2faGet(authorization).then((data) => {
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

<a name="v10Auth2faRecoverycodesNewPost"></a>
# **v10Auth2faRecoverycodesNewPost**
> RecoveryCodesViewModel v10Auth2faRecoverycodesNewPost(authorization, opts)

2FA generate new recovery codes

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.PasswordModel() // PasswordModel | 
};
apiInstance.v10Auth2faRecoverycodesNewPost(authorization, opts).then((data) => {
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

<a name="v10Auth2faRecoverycodesPost"></a>
# **v10Auth2faRecoverycodesPost**
> RecoveryCodesViewModel v10Auth2faRecoverycodesPost(authorization, opts)

2FA recovery codes

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.PasswordModel() // PasswordModel | 
};
apiInstance.v10Auth2faRecoverycodesPost(authorization, opts).then((data) => {
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

<a name="v10AuthPasswordChangePost"></a>
# **v10AuthPasswordChangePost**
> v10AuthPasswordChangePost(authorization, opts)

Change password

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.ChangePasswordViewModel() // ChangePasswordViewModel | 
};
apiInstance.v10AuthPasswordChangePost(authorization, opts).then(() => {
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

<a name="v10AuthPasswordForgotInvestorPost"></a>
# **v10AuthPasswordForgotInvestorPost**
> v10AuthPasswordForgotInvestorPost(opts)

Forgot password for investor

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.ForgotPasswordViewModel() // ForgotPasswordViewModel | 
};
apiInstance.v10AuthPasswordForgotInvestorPost(opts).then(() => {
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

<a name="v10AuthPasswordForgotManagerPost"></a>
# **v10AuthPasswordForgotManagerPost**
> v10AuthPasswordForgotManagerPost(opts)

Forgot password for manager

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.ForgotPasswordViewModel() // ForgotPasswordViewModel | 
};
apiInstance.v10AuthPasswordForgotManagerPost(opts).then(() => {
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

<a name="v10AuthPasswordResetPost"></a>
# **v10AuthPasswordResetPost**
> &#39;String&#39; v10AuthPasswordResetPost(opts)

Reset password

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.ResetPasswordViewModel() // ResetPasswordViewModel | 
};
apiInstance.v10AuthPasswordResetPost(opts).then((data) => {
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

<a name="v10AuthPhoneCodePost"></a>
# **v10AuthPhoneCodePost**
> &#39;Number&#39; v10AuthPhoneCodePost(authorization)

Request phone number verification code

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10AuthPhoneCodePost(authorization).then((data) => {
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

<a name="v10AuthPhoneVerifyPost"></a>
# **v10AuthPhoneVerifyPost**
> v10AuthPhoneVerifyPost(authorization, opts)

Verify phone number

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'token': "token_example" // String | 
};
apiInstance.v10AuthPhoneVerifyPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **token** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10AuthResendconfirmationlinkPost"></a>
# **v10AuthResendconfirmationlinkPost**
> v10AuthResendconfirmationlinkPost(opts)

Resend Confirmation Link

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.ResendConfirmationViewModel() // ResendConfirmationViewModel | 
};
apiInstance.v10AuthResendconfirmationlinkPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**ResendConfirmationViewModel**](ResendConfirmationViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10AuthSigninInvestorPost"></a>
# **v10AuthSigninInvestorPost**
> &#39;String&#39; v10AuthSigninInvestorPost(opts)

Authorize

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.LoginViewModel() // LoginViewModel | 
};
apiInstance.v10AuthSigninInvestorPost(opts).then((data) => {
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

<a name="v10AuthSigninManagerPost"></a>
# **v10AuthSigninManagerPost**
> &#39;String&#39; v10AuthSigninManagerPost(opts)

Authorize

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.LoginViewModel() // LoginViewModel | 
};
apiInstance.v10AuthSigninManagerPost(opts).then((data) => {
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

<a name="v10AuthSignupConfirmPost"></a>
# **v10AuthSignupConfirmPost**
> &#39;String&#39; v10AuthSignupConfirmPost(opts)

Confirm email after registration

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'userId': "userId_example", // String | 
  'code': "code_example" // String | 
};
apiInstance.v10AuthSignupConfirmPost(opts).then((data) => {
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

<a name="v10AuthSignupInvestorPost"></a>
# **v10AuthSignupInvestorPost**
> v10AuthSignupInvestorPost(opts)

New investor registration

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.RegisterInvestorViewModel() // RegisterInvestorViewModel | 
};
apiInstance.v10AuthSignupInvestorPost(opts).then(() => {
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

<a name="v10AuthSignupManagerPost"></a>
# **v10AuthSignupManagerPost**
> v10AuthSignupManagerPost(opts)

New manager registration

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.RegisterManagerViewModel() // RegisterManagerViewModel | 
};
apiInstance.v10AuthSignupManagerPost(opts).then(() => {
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

<a name="v10AuthTokenUpdatePost"></a>
# **v10AuthTokenUpdatePost**
> &#39;String&#39; v10AuthTokenUpdatePost(authorization)

Update auth token

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10AuthTokenUpdatePost(authorization).then((data) => {
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

