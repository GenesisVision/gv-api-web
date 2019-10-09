# CoreApiV10.AuthApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](AuthApi.md#authorize) | **POST** /v1.0/auth/signin | Authorize
[**changePassword**](AuthApi.md#changePassword) | **POST** /v1.0/auth/password/change | Change password
[**confirmEmail**](AuthApi.md#confirmEmail) | **POST** /v1.0/auth/signup/confirm | Confirm email after registration
[**forgotPassword**](AuthApi.md#forgotPassword) | **POST** /v1.0/auth/password/forgot | Forgot password for investor
[**logoutFromAnotherDevices**](AuthApi.md#logoutFromAnotherDevices) | **POST** /v1.0/auth/token/devices/logout | Logout from another devices
[**register**](AuthApi.md#register) | **POST** /v1.0/auth/signup | New registration
[**requestPhoneNumberVerificationCode**](AuthApi.md#requestPhoneNumberVerificationCode) | **POST** /v1.0/auth/phone/code | Get phone number verification code
[**resendConfirmationLink**](AuthApi.md#resendConfirmationLink) | **POST** /v1.0/auth/resendconfirmationlink | Resend Confirmation Link
[**resetPassword**](AuthApi.md#resetPassword) | **POST** /v1.0/auth/password/reset | Reset password
[**twoStepAuthConfirm**](AuthApi.md#twoStepAuthConfirm) | **POST** /v1.0/auth/2fa/confirm | 2FA confirm
[**twoStepAuthCreate**](AuthApi.md#twoStepAuthCreate) | **POST** /v1.0/auth/2fa/create | 2FA create
[**twoStepAuthDisable**](AuthApi.md#twoStepAuthDisable) | **POST** /v1.0/auth/2fa/disable | 2FA disable
[**twoStepAuthRecoveryCodes**](AuthApi.md#twoStepAuthRecoveryCodes) | **POST** /v1.0/auth/2fa/recoverycodes | 2FA recovery codes
[**twoStepAuthRecoveryCodesNew**](AuthApi.md#twoStepAuthRecoveryCodesNew) | **POST** /v1.0/auth/2fa/recoverycodes/new | 2FA generate new recovery codes
[**twoStepAuthStatus**](AuthApi.md#twoStepAuthStatus) | **GET** /v1.0/auth/2fa | 2FA status
[**updateAuthToken**](AuthApi.md#updateAuthToken) | **POST** /v1.0/auth/token/update | Update auth token
[**validatePhoneNumber**](AuthApi.md#validatePhoneNumber) | **POST** /v1.0/auth/phone/verify | Verify phone number


<a name="authorize"></a>
# **authorize**
> &#39;String&#39; authorize(password, email, opts)

Authorize

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let password = "password_example"; // String | 

let email = "email_example"; // String | 

let opts = { 
  'rememberMe': true, // Boolean | 
  'twoFactorCode': "twoFactorCode_example", // String | 
  'recoveryCode': "recoveryCode_example", // String | 
  'client': "client_example", // String | 
  'captchaCheckResultId': "captchaCheckResultId_example", // String | 
  'captchaCheckResultPowPrefix': "captchaCheckResultPowPrefix_example", // String | 
  'captchaCheckResultGeeTest': {key: "captchaCheckResultGeeTest_example"} // {String: String} | 
};
apiInstance.authorize(password, email, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | **String**|  | 
 **email** | **String**|  | 
 **rememberMe** | **Boolean**|  | [optional] 
 **twoFactorCode** | **String**|  | [optional] 
 **recoveryCode** | **String**|  | [optional] 
 **client** | **String**|  | [optional] 
 **captchaCheckResultId** | **String**|  | [optional] 
 **captchaCheckResultPowPrefix** | **String**|  | [optional] 
 **captchaCheckResultGeeTest** | [**{String: String}**](String.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="changePassword"></a>
# **changePassword**
> &#39;String&#39; changePassword(authorization, opts)

Change password

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.ChangePasswordViewModel() // ChangePasswordViewModel | 
};
apiInstance.changePassword(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
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

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="confirmEmail"></a>
# **confirmEmail**
> &#39;String&#39; confirmEmail(opts)

Confirm email after registration

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'userId': "userId_example", // String | 
  'code': "code_example" // String | 
};
apiInstance.confirmEmail(opts).then((data) => {
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

<a name="forgotPassword"></a>
# **forgotPassword**
> forgotPassword(opts)

Forgot password for investor

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.ForgotPasswordViewModel() // ForgotPasswordViewModel | 
};
apiInstance.forgotPassword(opts).then(() => {
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

<a name="logoutFromAnotherDevices"></a>
# **logoutFromAnotherDevices**
> &#39;String&#39; logoutFromAnotherDevices(authorization)

Logout from another devices

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.logoutFromAnotherDevices(authorization).then((data) => {
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

<a name="register"></a>
# **register**
> register(opts)

New registration

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.RegisterViewModel() // RegisterViewModel | 
};
apiInstance.register(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**RegisterViewModel**](RegisterViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="requestPhoneNumberVerificationCode"></a>
# **requestPhoneNumberVerificationCode**
> &#39;Number&#39; requestPhoneNumberVerificationCode(authorization)

Get phone number verification code

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.requestPhoneNumberVerificationCode(authorization).then((data) => {
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

<a name="resendConfirmationLink"></a>
# **resendConfirmationLink**
> resendConfirmationLink(opts)

Resend Confirmation Link

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.ResendConfirmationViewModel() // ResendConfirmationViewModel | 
};
apiInstance.resendConfirmationLink(opts).then(() => {
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

<a name="resetPassword"></a>
# **resetPassword**
> &#39;String&#39; resetPassword(opts)

Reset password

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let opts = { 
  'model': new CoreApiV10.ResetPasswordViewModel() // ResetPasswordViewModel | 
};
apiInstance.resetPassword(opts).then((data) => {
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

<a name="twoStepAuthConfirm"></a>
# **twoStepAuthConfirm**
> RecoveryCodesViewModel twoStepAuthConfirm(authorization, opts)

2FA confirm

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.TwoFactorAuthenticatorConfirm() // TwoFactorAuthenticatorConfirm | 
};
apiInstance.twoStepAuthConfirm(authorization, opts).then((data) => {
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

<a name="twoStepAuthCreate"></a>
# **twoStepAuthCreate**
> TwoFactorAuthenticator twoStepAuthCreate(authorization)

2FA create

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.twoStepAuthCreate(authorization).then((data) => {
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

<a name="twoStepAuthDisable"></a>
# **twoStepAuthDisable**
> twoStepAuthDisable(authorization, opts)

2FA disable

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.TwoFactorCodeModel() // TwoFactorCodeModel | 
};
apiInstance.twoStepAuthDisable(authorization, opts).then(() => {
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

<a name="twoStepAuthRecoveryCodes"></a>
# **twoStepAuthRecoveryCodes**
> RecoveryCodesViewModel twoStepAuthRecoveryCodes(authorization, opts)

2FA recovery codes

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.PasswordModel() // PasswordModel | 
};
apiInstance.twoStepAuthRecoveryCodes(authorization, opts).then((data) => {
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

<a name="twoStepAuthRecoveryCodesNew"></a>
# **twoStepAuthRecoveryCodesNew**
> RecoveryCodesViewModel twoStepAuthRecoveryCodesNew(authorization, opts)

2FA generate new recovery codes

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.PasswordModel() // PasswordModel | 
};
apiInstance.twoStepAuthRecoveryCodesNew(authorization, opts).then((data) => {
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

<a name="twoStepAuthStatus"></a>
# **twoStepAuthStatus**
> TwoFactorStatus twoStepAuthStatus(authorization)

2FA status

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.twoStepAuthStatus(authorization).then((data) => {
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

<a name="updateAuthToken"></a>
# **updateAuthToken**
> &#39;String&#39; updateAuthToken(authorization)

Update auth token

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.updateAuthToken(authorization).then((data) => {
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

<a name="validatePhoneNumber"></a>
# **validatePhoneNumber**
> validatePhoneNumber(authorization, opts)

Verify phone number

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.AuthApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'code': "code_example" // String | 
};
apiInstance.validatePhoneNumber(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **code** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

