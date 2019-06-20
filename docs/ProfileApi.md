# CoreApiV10.ProfileApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ProfileAvatarRemovePost**](ProfileApi.md#v10ProfileAvatarRemovePost) | **POST** /v1.0/profile/avatar/remove | Remove avatar
[**v10ProfileAvatarUpdateByFileIdPost**](ProfileApi.md#v10ProfileAvatarUpdateByFileIdPost) | **POST** /v1.0/profile/avatar/update/{fileId} | Update avatar
[**v10ProfileGet**](ProfileApi.md#v10ProfileGet) | **GET** /v1.0/profile | Get full profile
[**v10ProfileHeaderGet**](ProfileApi.md#v10ProfileHeaderGet) | **GET** /v1.0/profile/header | Get header profile
[**v10ProfilePersonalUpdatePost**](ProfileApi.md#v10ProfilePersonalUpdatePost) | **POST** /v1.0/profile/personal/update | Update user personal details
[**v10ProfilePushTokenPost**](ProfileApi.md#v10ProfilePushTokenPost) | **POST** /v1.0/profile/push/token | 
[**v10ProfileSociallinksGet**](ProfileApi.md#v10ProfileSociallinksGet) | **GET** /v1.0/profile/sociallinks | Get social links
[**v10ProfileSociallinksUpdatePost**](ProfileApi.md#v10ProfileSociallinksUpdatePost) | **POST** /v1.0/profile/sociallinks/update | Add or update social links
[**v10ProfileUpdatePost**](ProfileApi.md#v10ProfileUpdatePost) | **POST** /v1.0/profile/update | Update profile
[**v10ProfileVerificationTokenPost**](ProfileApi.md#v10ProfileVerificationTokenPost) | **POST** /v1.0/profile/verification/token | 


<a name="v10ProfileAvatarRemovePost"></a>
# **v10ProfileAvatarRemovePost**
> v10ProfileAvatarRemovePost(authorization)

Remove avatar

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProfileAvatarRemovePost(authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfileAvatarUpdateByFileIdPost"></a>
# **v10ProfileAvatarUpdateByFileIdPost**
> v10ProfileAvatarUpdateByFileIdPost(fileId, authorization)

Update avatar

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let fileId = "fileId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProfileAvatarUpdateByFileIdPost(fileId, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfileGet"></a>
# **v10ProfileGet**
> ProfileFullViewModel v10ProfileGet(authorization)

Get full profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProfileGet(authorization).then((data) => {
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

<a name="v10ProfileHeaderGet"></a>
# **v10ProfileHeaderGet**
> ProfileHeaderViewModel v10ProfileHeaderGet(authorization)

Get header profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProfileHeaderGet(authorization).then((data) => {
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

[**ProfileHeaderViewModel**](ProfileHeaderViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfilePersonalUpdatePost"></a>
# **v10ProfilePersonalUpdatePost**
> v10ProfilePersonalUpdatePost(authorization, opts)

Update user personal details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.UpdatePersonalDetailViewModel() // UpdatePersonalDetailViewModel | 
};
apiInstance.v10ProfilePersonalUpdatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**UpdatePersonalDetailViewModel**](UpdatePersonalDetailViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfilePushTokenPost"></a>
# **v10ProfilePushTokenPost**
> v10ProfilePushTokenPost(authorization, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'token': new CoreApiV10.FcmTokenViewModel() // FcmTokenViewModel | 
};
apiInstance.v10ProfilePushTokenPost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **token** | [**FcmTokenViewModel**](FcmTokenViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfileSociallinksGet"></a>
# **v10ProfileSociallinksGet**
> SocialLinksViewModel v10ProfileSociallinksGet(authorization)

Get social links

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProfileSociallinksGet(authorization).then((data) => {
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

[**SocialLinksViewModel**](SocialLinksViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfileSociallinksUpdatePost"></a>
# **v10ProfileSociallinksUpdatePost**
> v10ProfileSociallinksUpdatePost(authorization, opts)

Add or update social links

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.UpdateSocialLinkViewModel() // UpdateSocialLinkViewModel | 
};
apiInstance.v10ProfileSociallinksUpdatePost(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**UpdateSocialLinkViewModel**](UpdateSocialLinkViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="v10ProfileUpdatePost"></a>
# **v10ProfileUpdatePost**
> v10ProfileUpdatePost(authorization, opts)

Update profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.UpdateProfileViewModel() // UpdateProfileViewModel | 
};
apiInstance.v10ProfileUpdatePost(authorization, opts).then(() => {
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

<a name="v10ProfileVerificationTokenPost"></a>
# **v10ProfileVerificationTokenPost**
> &#39;String&#39; v10ProfileVerificationTokenPost(authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10ProfileVerificationTokenPost(authorization).then((data) => {
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

