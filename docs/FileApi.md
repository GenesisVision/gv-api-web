# CoreApiV10.FileApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10FileByIdGet**](FileApi.md#v10FileByIdGet) | **GET** /v1.0/file/{id} | Download file
[**v10FileDocumentUploadPost**](FileApi.md#v10FileDocumentUploadPost) | **POST** /v1.0/file/document/upload | Upload document
[**v10FileUploadPost**](FileApi.md#v10FileUploadPost) | **POST** /v1.0/file/upload | Upload file


<a name="v10FileByIdGet"></a>
# **v10FileByIdGet**
> v10FileByIdGet(id)

Download file

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FileApi();

let id = "id_example"; // String | 

apiInstance.v10FileByIdGet(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v10FileDocumentUploadPost"></a>
# **v10FileDocumentUploadPost**
> UploadResult v10FileDocumentUploadPost(authorization, uploadedFile)

Upload document

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FileApi();

let authorization = "authorization_example"; // String | JWT access token

let uploadedFile = "/path/to/file.txt"; // File | Upload File

apiInstance.v10FileDocumentUploadPost(authorization, uploadedFile).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **uploadedFile** | **File**| Upload File | 

### Return type

[**UploadResult**](UploadResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="v10FileUploadPost"></a>
# **v10FileUploadPost**
> UploadResult v10FileUploadPost(uploadedFile, opts)

Upload file

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FileApi();

let uploadedFile = "/path/to/file.txt"; // File | Upload File

let opts = { 
  'authorization': "authorization_example" // String | 
};
apiInstance.v10FileUploadPost(uploadedFile, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadedFile** | **File**| Upload File | 
 **authorization** | **String**|  | [optional] 

### Return type

[**UploadResult**](UploadResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

