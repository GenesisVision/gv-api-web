# CoreApiV10.FileApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFile**](FileApi.md#getFile) | **GET** /v1.0/file/{id} | Download file
[**uploadFile**](FileApi.md#uploadFile) | **POST** /v1.0/file/upload | Upload file


<a name="getFile"></a>
# **getFile**
> getFile(id)

Download file

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FileApi();

let id = "id_example"; // String | 

apiInstance.getFile(id).then(() => {
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

<a name="uploadFile"></a>
# **uploadFile**
> UploadResult uploadFile(uploadedFile, opts)

Upload file

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FileApi();

let uploadedFile = "/path/to/file.txt"; // File | Upload File

let opts = { 
  'authorization': "authorization_example" // String | 
};
apiInstance.uploadFile(uploadedFile, opts).then((data) => {
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

