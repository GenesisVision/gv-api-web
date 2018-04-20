# CoreApi.FilesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiFilesByIdGet**](FilesApi.md#apiFilesByIdGet) | **GET** /api/files/{id} | Download file
[**apiFilesGet**](FilesApi.md#apiFilesGet) | **GET** /api/files | Download file
[**apiFilesUploadPost**](FilesApi.md#apiFilesUploadPost) | **POST** /api/files/upload | Upload file


<a name="apiFilesByIdGet"></a>
# **apiFilesByIdGet**
> apiFilesByIdGet(id)

Download file

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.FilesApi();

let id = "id_example"; // String | 


apiInstance.apiFilesByIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

<a name="apiFilesGet"></a>
# **apiFilesGet**
> apiFilesGet(id)

Download file

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.FilesApi();

let id = "id_example"; // String | 


apiInstance.apiFilesGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

<a name="apiFilesUploadPost"></a>
# **apiFilesUploadPost**
> UploadResult apiFilesUploadPost(uploadedFile)

Upload file

### Example
```javascript
import CoreApi from 'core_api';

let apiInstance = new CoreApi.FilesApi();

let uploadedFile = "/path/to/file.txt"; // File | Upload File


apiInstance.apiFilesUploadPost(uploadedFile, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadedFile** | **File**| Upload File | 

### Return type

[**UploadResult**](UploadResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

