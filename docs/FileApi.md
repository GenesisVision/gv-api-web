# CoreApiV10.FileApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](FileApi.md#get) | **GET** /v1.0/file/{id} | Download file
[**uploadDocument**](FileApi.md#uploadDocument) | **POST** /v1.0/file/document/upload | Upload document
[**uploadFile**](FileApi.md#uploadFile) | **POST** /v1.0/file/upload | Upload file


<a name="get"></a>
# **get**
> get(id)

Download file

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FileApi();

let id = "id_example"; // String | 

apiInstance.get(id).then(() => {
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

<a name="uploadDocument"></a>
# **uploadDocument**
> UploadResult uploadDocument(authorization, opts)

Upload document

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FileApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'contentType': "contentType_example", // String | 
  'contentDisposition': "contentDisposition_example", // String | 
  'headers': {key: "headers_example"}, // {String: String} | 
  'length': 789, // Number | 
  'name': "name_example", // String | 
  'fileName': "fileName_example" // String | 
};
apiInstance.uploadDocument(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **contentType** | **String**|  | [optional] 
 **contentDisposition** | **String**|  | [optional] 
 **headers** | [**{String: String}**](String.md)|  | [optional] 
 **length** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **fileName** | **String**|  | [optional] 

### Return type

[**UploadResult**](UploadResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="uploadFile"></a>
# **uploadFile**
> UploadResult uploadFile(opts)

Upload file

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.FileApi();

let opts = { 
  'authorization': "authorization_example", // String | 
  'contentType': "contentType_example", // String | 
  'contentDisposition': "contentDisposition_example", // String | 
  'headers': {key: "headers_example"}, // {String: String} | 
  'length': 789, // Number | 
  'name': "name_example", // String | 
  'fileName': "fileName_example" // String | 
};
apiInstance.uploadFile(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **contentDisposition** | **String**|  | [optional] 
 **headers** | [**{String: String}**](String.md)|  | [optional] 
 **length** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **fileName** | **String**|  | [optional] 

### Return type

[**UploadResult**](UploadResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

