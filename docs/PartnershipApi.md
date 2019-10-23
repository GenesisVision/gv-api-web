# CoreApiV10.PartnershipApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportHistory**](PartnershipApi.md#exportHistory) | **GET** /v1.0/partnership/rewards/history/export | Export rewards history.
[**getDetails**](PartnershipApi.md#getDetails) | **GET** /v1.0/partnership/details | Get partnership details.
[**getReferrals**](PartnershipApi.md#getReferrals) | **GET** /v1.0/partnership/referrals | Get agent friends (referrals and second level referrals).
[**getRewardsHistory**](PartnershipApi.md#getRewardsHistory) | **GET** /v1.0/partnership/rewards/history | Get history of agent rewards.


<a name="exportHistory"></a>
# **exportHistory**
> &#39;Blob&#39; exportHistory(authorization, opts)

Export rewards history.

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PartnershipApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.exportHistory(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getDetails"></a>
# **getDetails**
> PartnershipDetails getDetails(authorization, opts)

Get partnership details.

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PartnershipApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'currency': "currency_example" // String | 
};
apiInstance.getDetails(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **currency** | **String**|  | [optional] 

### Return type

[**PartnershipDetails**](PartnershipDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getReferrals"></a>
# **getReferrals**
> ItemsViewModelReferralFriend getReferrals(authorization, opts)

Get agent friends (referrals and second level referrals).

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PartnershipApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getReferrals(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**ItemsViewModelReferralFriend**](ItemsViewModelReferralFriend.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getRewardsHistory"></a>
# **getRewardsHistory**
> ItemsViewModelRewardDetails getRewardsHistory(authorization, opts)

Get history of agent rewards.

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.PartnershipApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.getRewardsHistory(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**ItemsViewModelRewardDetails**](ItemsViewModelRewardDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

