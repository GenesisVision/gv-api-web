# CoreApiV10.ManagerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10ManagerGet**](ManagerApi.md#v10ManagerGet) | **GET** /v1.0/manager | Manager dashboard


<a name="v10ManagerGet"></a>
# **v10ManagerGet**
> ManagerDashboard v10ManagerGet(authorization, opts)

Manager dashboard

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.ManagerApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'eventsTake': 56, // Number | 
  'requestsSkip': 56, // Number | 
  'requestsTake': 56, // Number | 
  'chartFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'chartTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'pointsCount': 56 // Number | 
};
apiInstance.v10ManagerGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **eventsTake** | **Number**|  | [optional] 
 **requestsSkip** | **Number**|  | [optional] 
 **requestsTake** | **Number**|  | [optional] 
 **chartFrom** | **Date**|  | [optional] 
 **chartTo** | **Date**|  | [optional] 
 **pointsCount** | **Number**|  | [optional] 

### Return type

[**ManagerDashboard**](ManagerDashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

