# CoreApiV10.ProfileApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExternalKey**](ProfileApi.md#addExternalKey) | **POST** /v1.0/profile/keys/add | Add external exchange key
[**deleteExternalKey**](ProfileApi.md#deleteExternalKey) | **POST** /v1.0/profile/keys/delete | Delete external exchange key
[**getExternalKey**](ProfileApi.md#getExternalKey) | **GET** /v1.0/profile/keys | Get external exchange keys
[**getSocialLinks**](ProfileApi.md#getSocialLinks) | **GET** /v1.0/profile/sociallinks | Get social links
[**profileFull**](ProfileApi.md#profileFull) | **GET** /v1.0/profile | Get full profile
[**profileHeader**](ProfileApi.md#profileHeader) | **GET** /v1.0/profile/header | Get header profile
[**removeAvatar**](ProfileApi.md#removeAvatar) | **POST** /v1.0/profile/avatar/remove | Remove avatar
[**updateAvatar**](ProfileApi.md#updateAvatar) | **POST** /v1.0/profile/avatar/update/{fileId} | Update avatar
[**updateFcmToken**](ProfileApi.md#updateFcmToken) | **POST** /v1.0/profile/push/token | 
[**updatePersonalDetails**](ProfileApi.md#updatePersonalDetails) | **POST** /v1.0/profile/personal/update | Update user personal details
[**updateProfile**](ProfileApi.md#updateProfile) | **POST** /v1.0/profile/update | Update profile
[**updateSocialLinks**](ProfileApi.md#updateSocialLinks) | **POST** /v1.0/profile/sociallinks/update | Add or update social links
[**verificationToken**](ProfileApi.md#verificationToken) | **POST** /v1.0/profile/verification/token | 


<a name="addExternalKey"></a>
# **addExternalKey**
> addExternalKey(authorization, opts)

Add external exchange key

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.ExternalKeyAddViewModel() // ExternalKeyAddViewModel | 
};
apiInstance.addExternalKey(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**ExternalKeyAddViewModel**](ExternalKeyAddViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="deleteExternalKey"></a>
# **deleteExternalKey**
> deleteExternalKey(authorization, opts)

Delete external exchange key

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.IdModel() // IdModel | 
};
apiInstance.deleteExternalKey(authorization, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **model** | [**IdModel**](IdModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="getExternalKey"></a>
# **getExternalKey**
> ExternalKeysViewModel getExternalKey(authorization)

Get external exchange keys

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getExternalKey(authorization).then((data) => {
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

[**ExternalKeysViewModel**](ExternalKeysViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getSocialLinks"></a>
# **getSocialLinks**
> SocialLinksViewModel getSocialLinks(authorization)

Get social links

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.getSocialLinks(authorization).then((data) => {
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

<a name="profileFull"></a>
# **profileFull**
> ProfileFullViewModel profileFull(authorization)

Get full profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.profileFull(authorization).then((data) => {
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

<a name="profileHeader"></a>
# **profileHeader**
> ProfileHeaderViewModel profileHeader(authorization)

Get header profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.profileHeader(authorization).then((data) => {
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

<a name="removeAvatar"></a>
# **removeAvatar**
> removeAvatar(authorization)

Remove avatar

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.removeAvatar(authorization).then(() => {
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

<a name="updateAvatar"></a>
# **updateAvatar**
> updateAvatar(fileId, authorization)

Update avatar

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let fileId = "fileId_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.updateAvatar(fileId, authorization).then(() => {
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

<a name="updateFcmToken"></a>
# **updateFcmToken**
> updateFcmToken(authorization, opts)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'token': new CoreApiV10.FcmTokenViewModel() // FcmTokenViewModel | 
};
apiInstance.updateFcmToken(authorization, opts).then(() => {
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

<a name="updatePersonalDetails"></a>
# **updatePersonalDetails**
> updatePersonalDetails(authorization, opts)

Update user personal details

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.UpdatePersonalDetailViewModel() // UpdatePersonalDetailViewModel | 
};
apiInstance.updatePersonalDetails(authorization, opts).then(() => {
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

<a name="updateProfile"></a>
# **updateProfile**
> updateProfile(authorization, opts)

Update profile

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.UpdateProfileViewModel() // UpdateProfileViewModel | 
};
apiInstance.updateProfile(authorization, opts).then(() => {
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

<a name="updateSocialLinks"></a>
# **updateSocialLinks**
> updateSocialLinks(authorization, opts)

Add or update social links

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'model': new CoreApiV10.UpdateSocialLinkViewModel() // UpdateSocialLinkViewModel | 
};
apiInstance.updateSocialLinks(authorization, opts).then(() => {
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

<a name="verificationToken"></a>
# **verificationToken**
> &#39;String&#39; verificationToken(authorization)



### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ProfileApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.verificationToken(authorization).then((data) => {
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

