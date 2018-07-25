# CoreApiV2.ManagerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
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
[**apiManagerProfileFullGet**](ManagerApi.md#apiManagerProfileFullGet) | **GET** /api/manager/profile/full | Get full profile
[**apiManagerProfilePublicGet**](ManagerApi.md#apiManagerProfilePublicGet) | **GET** /api/manager/profile/public | Get public profile
[**apiManagerProfileUpdatePost**](ManagerApi.md#apiManagerProfileUpdatePost) | **POST** /api/manager/profile/update | Update profile


<a name="apiManagerAuth2faConfirmPost"></a>
# **apiManagerAuth2faConfirmPost**
> RecoveryCodesViewModel apiManagerAuth2faConfirmPost(authorization, opts)

2FA confirm

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.TwoFactorAuthenticatorConfirm() // TwoFactorAuthenticatorConfirm | 
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
> TwoFactorAuthenticator apiManagerAuth2faCreatePost(authorization)

2FA create

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.apiManagerAuth2faCreatePost(authorization).then((data) => {
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

<a name="apiManagerAuth2faDisablePost"></a>
# **apiManagerAuth2faDisablePost**
> apiManagerAuth2faDisablePost(authorization, opts)

2FA disable

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.TwoFactorCodeModel() // TwoFactorCodeModel | 
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
 **model** | [**TwoFactorCodeModel**](TwoFactorCodeModel.md)|  | [optional] 

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.PasswordModel() // PasswordModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.PasswordModel() // PasswordModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.ChangePasswordViewModel() // ChangePasswordViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let opts = { 
  'model': new CoreApiV2.ForgotPasswordViewModel() // ForgotPasswordViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let opts = { 
  'model': new CoreApiV2.ResetPasswordViewModel() // ResetPasswordViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let opts = { 
  'model': new CoreApiV2.LoginViewModel() // LoginViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let opts = { 
  'model': new CoreApiV2.RegisterManagerViewModel() // RegisterManagerViewModel | 
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
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

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

<a name="apiManagerProfileFullGet"></a>
# **apiManagerProfileFullGet**
> ProfileFullViewModel apiManagerProfileFullGet(authorization)

Get full profile

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

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
> ProfilePublicViewModel apiManagerProfilePublicGet(opts)

Get public profile

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let opts = { 
  'userId': "userId_example" // String | 
};
apiInstance.apiManagerProfilePublicGet(opts).then((data) => {
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

<a name="apiManagerProfileUpdatePost"></a>
# **apiManagerProfileUpdatePost**
> apiManagerProfileUpdatePost(authorization, opts)

Update profile

### Example
```javascript
import CoreApiV2 from 'core_api_v2';

let apiInstance = new CoreApiV2.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV2.UpdateProfileViewModel() // UpdateProfileViewModel | 
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

